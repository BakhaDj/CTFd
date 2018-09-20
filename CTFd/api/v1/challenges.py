from flask import session, request
from flask_restplus import Namespace, Resource
from CTFd.models import db, Challenges, Unlocks, Hints, Solves, Teams
from CTFd.plugins.challenges import get_chal_class, CHALLENGE_CLASSES
from CTFd.utils.dates import ctf_ended
from CTFd.utils.decorators import (
    during_ctf_time_only,
    require_verified_emails,
    viewable_without_authentication,
    admins_only
)
from sqlalchemy.sql import or_

challenges_namespace = Namespace('challenges', description="Endpoint to retrieve Challenges")


'''
/challenges
/challenges/1
/challenges/1/solves
/solves/count
'''


@challenges_namespace.route('')
class ChallengeList(Resource):
    @during_ctf_time_only
    @require_verified_emails
    @viewable_without_authentication(status_code=403)
    def get(self):
        challenges = Challenges.query.filter(
            or_(Challenges.hidden != True, Challenges.hidden == None)
        ).order_by(Challenges.value).all()

        response = []
        for challenge in challenges:
            tags = challenge.tags
            chal_type = get_chal_class(challenge.type)
            response.append({
                'id': challenge.id,
                'type': chal_type.name,
                'name': challenge.name,
                'value': challenge.value,
                'category': challenge.category,
                'tags': tags,
                'template': chal_type.templates['modal'],
                'script': chal_type.scripts['modal'],
            })

        db.session.close()
        return response

    @admins_only
    def post(self):
        challenge_type = request.form['type']
        challenge_class = get_chal_class(challenge_type)
        challenge = challenge_class.create(request)
        response = challenge.read()
        return response


@challenges_namespace.route('/types')
class ChallengeTypes(Resource):
    @admins_only
    def get(self):
        response = {}

        for class_id in CHALLENGE_CLASSES:
            challenge_class = CHALLENGE_CLASSES.get(class_id)
            response[challenge_class.id] = {
                'id': challenge_class.id,
                'name': challenge_class.name,
                'templates': challenge_class.templates,
                'scripts': challenge_class.scripts,
            }
        return response


@challenges_namespace.route('/<challenge_id>')
@challenges_namespace.param('challenge_id', 'A Challenge ID')
class Challenge(Resource):
    @during_ctf_time_only
    @require_verified_emails
    @viewable_without_authentication(status_code=403)
    def get(self, challenge_id):
        team_id = session.get('id')

        chal = Challenges.query.filter_by(id=challenge_id).first_or_404()
        chal_class = get_chal_class(chal.type)

        tags = chal.tags
        files = [f.location for f in chal.files]
        unlocked_hints = set([u.item_id for u in Unlocks.query.filter_by(type='hints', team_id=team_id)])
        hints = []

        for hint in Hints.query.filter_by(challenge_id=chal.id).all():
            if hint.id in unlocked_hints or ctf_ended():
                hints.append({'id': hint.id, 'cost': hint.cost, 'hint': hint.hint})
            else:
                hints.append({'id': hint.id, 'cost': hint.cost})

        challenge, response = chal_class.read(challenge=chal)

        response['files'] = files
        response['tags'] = tags
        response['hints'] = hints

        db.session.close()
        return response

    @admins_only
    def put(self, challenge_id):
        challenge = Challenges.query.filter_by(id=challenge_id).first_or_404()
        challenge_class = get_chal_class(challenge.type)
        challenge = challenge_class.update(challenge, request)

        return challenge.read()

    @admins_only
    def delete(self, challenge_id):
        challenge = Challenges.query.filter_by(id=challenge_id).first_or_404()
        chal_class = get_chal_class(challenge.type)
        chal_class.delete(challenge)

        response = {
            'success': True,
        }
        return response


@challenges_namespace.route('/<challenge_id>/solves')
@challenges_namespace.param('id', 'A Challenge ID')
class ChallengeSolves(Resource):
    @during_ctf_time_only
    @require_verified_emails
    @viewable_without_authentication(status_code=403)
    def get(self, challenge_id):
        response = []
        # if config.hide_scores():
        #     return jsonify(response)

        solves = Solves.query.join(Teams, Solves.team_id == Teams.id)\
            .filter(Solves.challenge_id == challenge_id, Teams.banned == False)\
            .order_by(Solves.date.asc())

        for solve in solves:
            response.append({
                'id': solve.team.id,
                'name': solve.team.name,
                'date': solve.date.isoformat()
            })

        return response
