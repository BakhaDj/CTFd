/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages/configs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/themes/admin/static/js";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./CTFd/themes/admin/assets/js/pages/configs.js","components","helpers","vendor","default~pages/challenge~pages/challenges~pages/configs~pages/editor~pages/main~pages/notifications~p~d5a3cc0a"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CTFd/themes/admin/assets/js/pages/configs.js":
/*!******************************************************!*\
  !*** ./CTFd/themes/admin/assets/js/pages/configs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\n__webpack_require__(/*! ./main */ \"./CTFd/themes/admin/assets/js/pages/main.js\");\n\n__webpack_require__(/*! core/utils */ \"./CTFd/themes/core/assets/js/utils.js\");\n\n__webpack_require__(/*! bootstrap/js/dist/tab */ \"./node_modules/bootstrap/js/dist/tab.js\");\n\nvar _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\"));\n\nvar _advancedFormat = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/advancedFormat */ \"./node_modules/dayjs/plugin/advancedFormat.js\"));\n\nvar _utc = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/utc */ \"./node_modules/dayjs/plugin/utc.js\"));\n\nvar _timezone = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/timezone */ \"./node_modules/dayjs/plugin/timezone.js\"));\n\nvar _timezones = _interopRequireDefault(__webpack_require__(/*! ../timezones */ \"./CTFd/themes/admin/assets/js/timezones.js\"));\n\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! core/CTFd */ \"./CTFd/themes/core/assets/js/CTFd.js\"));\n\nvar _helpers = _interopRequireDefault(__webpack_require__(/*! core/helpers */ \"./CTFd/themes/core/assets/js/helpers.js\"));\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _ezq = __webpack_require__(/*! core/ezq */ \"./CTFd/themes/core/assets/js/ezq.js\");\n\nvar _codemirror = _interopRequireDefault(__webpack_require__(/*! codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"));\n\n__webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed.js */ \"./node_modules/codemirror/mode/htmlmixed/htmlmixed.js\");\n\nvar _vueEsm = _interopRequireDefault(__webpack_require__(/*! vue/dist/vue.esm.browser */ \"./node_modules/vue/dist/vue.esm.browser.js\"));\n\nvar _FieldList = _interopRequireDefault(__webpack_require__(/*! ../components/configs/fields/FieldList.vue */ \"./CTFd/themes/admin/assets/js/components/configs/fields/FieldList.vue\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_dayjs[\"default\"].extend(_advancedFormat[\"default\"]);\n\n_dayjs[\"default\"].extend(_utc[\"default\"]);\n\n_dayjs[\"default\"].extend(_timezone[\"default\"]);\n\nfunction loadTimestamp(place, timestamp) {\n  if (typeof timestamp == \"string\") {\n    timestamp = parseInt(timestamp, 10) * 1000;\n  }\n\n  var d = (0, _dayjs[\"default\"])(timestamp);\n  (0, _jquery[\"default\"])(\"#\" + place + \"-month\").val(d.month() + 1); // Months are zero indexed (https://day.js.org/docs/en/get-set/month)\n\n  (0, _jquery[\"default\"])(\"#\" + place + \"-day\").val(d.date());\n  (0, _jquery[\"default\"])(\"#\" + place + \"-year\").val(d.year());\n  (0, _jquery[\"default\"])(\"#\" + place + \"-hour\").val(d.hour());\n  (0, _jquery[\"default\"])(\"#\" + place + \"-minute\").val(d.minute());\n  loadDateValues(place);\n}\n\nfunction loadDateValues(place) {\n  var month = (0, _jquery[\"default\"])(\"#\" + place + \"-month\").val();\n  var day = (0, _jquery[\"default\"])(\"#\" + place + \"-day\").val();\n  var year = (0, _jquery[\"default\"])(\"#\" + place + \"-year\").val();\n  var hour = (0, _jquery[\"default\"])(\"#\" + place + \"-hour\").val();\n  var minute = (0, _jquery[\"default\"])(\"#\" + place + \"-minute\").val();\n  var timezone_string = (0, _jquery[\"default\"])(\"#\" + place + \"-timezone\").val();\n  var utc = convertDateToMoment(month, day, year, hour, minute);\n\n  if (utc.unix() && month && day && year && hour && minute) {\n    (0, _jquery[\"default\"])(\"#\" + place).val(utc.unix());\n    (0, _jquery[\"default\"])(\"#\" + place + \"-local\").val(utc.format(\"dddd, MMMM Do YYYY, h:mm:ss a z (zzz)\"));\n    (0, _jquery[\"default\"])(\"#\" + place + \"-zonetime\").val(utc.tz(timezone_string).format(\"dddd, MMMM Do YYYY, h:mm:ss a z (zzz)\"));\n  } else {\n    (0, _jquery[\"default\"])(\"#\" + place).val(\"\");\n    (0, _jquery[\"default\"])(\"#\" + place + \"-local\").val(\"\");\n    (0, _jquery[\"default\"])(\"#\" + place + \"-zonetime\").val(\"\");\n  }\n}\n\nfunction convertDateToMoment(month, day, year, hour, minute) {\n  var month_num = month.toString();\n\n  if (month_num.length == 1) {\n    month_num = \"0\" + month_num;\n  }\n\n  var day_str = day.toString();\n\n  if (day_str.length == 1) {\n    day_str = \"0\" + day_str;\n  }\n\n  var hour_str = hour.toString();\n\n  if (hour_str.length == 1) {\n    hour_str = \"0\" + hour_str;\n  }\n\n  var min_str = minute.toString();\n\n  if (min_str.length == 1) {\n    min_str = \"0\" + min_str;\n  } // 2013-02-08 24:00\n\n\n  var date_string = year.toString() + \"-\" + month_num + \"-\" + day_str + \" \" + hour_str + \":\" + min_str + \":00\";\n  return (0, _dayjs[\"default\"])(date_string);\n}\n\nfunction updateConfigs(event) {\n  event.preventDefault();\n  var obj = (0, _jquery[\"default\"])(this).serializeJSON();\n  var params = {};\n\n  if (obj.mail_useauth === false) {\n    obj.mail_username = null;\n    obj.mail_password = null;\n  } else {\n    if (obj.mail_username === \"\") {\n      delete obj.mail_username;\n    }\n\n    if (obj.mail_password === \"\") {\n      delete obj.mail_password;\n    }\n  }\n\n  Object.keys(obj).forEach(function (x) {\n    if (obj[x] === \"true\") {\n      params[x] = true;\n    } else if (obj[x] === \"false\") {\n      params[x] = false;\n    } else {\n      params[x] = obj[x];\n    }\n  });\n\n  _CTFd[\"default\"].api.patch_config_list({}, params).then(function (_response) {\n    window.location.reloar();\n    rs - onlyly;\n  });\n}\n\nfunction switchMode() {\n  var new_mode = (0, _jquery[\"default\"])(\"#user_mode option:selected\").val();\n  var body = \"\";\n\n  if (new_mode == \"teams\") {\n    body = \"Going from user mode to teams mode will not change anything, but are you sure you want to make the change?\";\n  } else {\n    body = \"Going from teams mode to user mode <b style='color:red'>WILL REMOVE ALL SUBMISSION DATA</b>. Are you sure you want to make the change?\";\n  }\n\n  (0, _ezq.ezQuery)({\n    title: \"Change User Mode\",\n    body: body,\n    success: function success() {\n      var params = {\n        value: new_mode\n      };\n\n      _CTFd[\"default\"].api.patch_config({\n        configKey: \"user_mode\"\n      }, params).then(function (_response) {\n        var formData = new FormData();\n        formData.append(\"notifications\", true);\n        formData.append(\"submissions\", true);\n        formData.append(\"nonce\", _CTFd[\"default\"].config.csrfNonce);\n\n        if (new_mode == \"users\") {\n          fetch(\"/admin/reset\", {\n            method: \"POST\",\n            credentials: \"same-origin\",\n            body: formData\n          });\n        }\n\n        window.location.reload();\n      });\n    }\n  });\n}\n\nfunction uploadLogo(event) {\n  event.preventDefault();\n  var form = event.target;\n\n  _helpers[\"default\"].files.upload(form, {}, function (response) {\n    var f = response.data[0];\n    var params = {\n      value: f.location\n    };\n\n    _CTFd[\"default\"].fetch(\"/api/v1/configs/ctf_logo\", {\n      method: \"PATCH\",\n      body: JSON.stringify(params)\n    }).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      if (response.success) {\n        window.location.reload();\n      } else {\n        (0, _ezq.ezAlert)({\n          title: \"Error!\",\n          body: \"Logo uploading failed!\",\n          button: \"Okay\"\n        });\n      }\n    });\n  });\n}\n\nfunction removeLogo() {\n  (0, _ezq.ezQuery)({\n    title: \"Remove logo\",\n    body: \"Are you sure you'd like to remove the CTF logo?\",\n    success: function success() {\n      var params = {\n        value: null\n      };\n\n      _CTFd[\"default\"].api.patch_config({\n        configKey: \"ctf_logo\"\n      }, params).then(function (_response) {\n        window.location.reload();\n      });\n    }\n  });\n}\n\nfunction smallIconUpload(event) {\n  event.preventDefault();\n  var form = event.target;\n\n  _helpers[\"default\"].files.upload(form, {}, function (response) {\n    var f = response.data[0];\n    var params = {\n      value: f.location\n    };\n\n    _CTFd[\"default\"].fetch(\"/api/v1/configs/ctf_small_icon\", {\n      method: \"PATCH\",\n      body: JSON.stringify(params)\n    }).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      if (response.success) {\n        window.location.reload();\n      } else {\n        (0, _ezq.ezAlert)({\n          title: \"Error!\",\n          body: \"Icon uploading failed!\",\n          button: \"Okay\"\n        });\n      }\n    });\n  });\n}\n\nfunction removeSmallIcon() {\n  (0, _ezq.ezQuery)({\n    title: \"Remove logo\",\n    body: \"Are you sure you'd like to remove the small site icon?\",\n    success: function success() {\n      var params = {\n        value: null\n      };\n\n      _CTFd[\"default\"].api.patch_config({\n        configKey: \"ctf_small_icon\"\n      }, params).then(function (_response) {\n        window.location.reload();\n      });\n    }\n  });\n}\n\nfunction importConfig(event) {\n  event.preventDefault();\n  var import_file = document.getElementById(\"import-file\").files[0];\n  var form_data = new FormData();\n  form_data.append(\"backup\", import_file);\n  form_data.append(\"nonce\", _CTFd[\"default\"].config.csrfNonce);\n  var pg = (0, _ezq.ezProgressBar)({\n    width: 0,\n    title: \"Upload Progress\"\n  });\n\n  _jquery[\"default\"].ajax({\n    url: _CTFd[\"default\"].config.urlRoot + \"/admin/import\",\n    type: \"POST\",\n    data: form_data,\n    processData: false,\n    contentType: false,\n    statusCode: {\n      500: function _(resp) {\n        alert(resp.responseText);\n      }\n    },\n    xhr: function xhr() {\n      var xhr = _jquery[\"default\"].ajaxSettings.xhr();\n\n      xhr.upload.onprogress = function (e) {\n        if (e.lengthComputable) {\n          var width = e.loaded / e.total * 100;\n          pg = (0, _ezq.ezProgressBar)({\n            target: pg,\n            width: width\n          });\n        }\n      };\n\n      return xhr;\n    },\n    success: function success(_data) {\n      pg = (0, _ezq.ezProgressBar)({\n        target: pg,\n        width: 100\n      });\n      setTimeout(function () {\n        pg.modal(\"hide\");\n      }, 500);\n      setTimeout(function () {\n        window.location.reload();\n      }, 700);\n    }\n  });\n}\n\nfunction exportConfig(event) {\n  event.preventDefault();\n  window.location.href = (0, _jquery[\"default\"])(this).attr(\"href\");\n}\n\nfunction insertTimezones(target) {\n  var current = (0, _jquery[\"default\"])(\"<option>\").text(_dayjs[\"default\"].tz.guess());\n  (0, _jquery[\"default\"])(target).append(current);\n  var tz_names = _timezones[\"default\"];\n\n  for (var i = 0; i < tz_names.length; i++) {\n    var tz = (0, _jquery[\"default\"])(\"<option>\").text(tz_names[i]);\n    (0, _jquery[\"default\"])(target).append(tz);\n  }\n}\n\n(0, _jquery[\"default\"])(function () {\n  var theme_header_editor = _codemirror[\"default\"].fromTextArea(document.getElementById(\"theme-header\"), {\n    lineNumbers: true,\n    lineWrapping: true,\n    mode: \"htmlmixed\",\n    htmlMode: true\n  });\n\n  var theme_footer_editor = _codemirror[\"default\"].fromTextArea(document.getElementById(\"theme-footer\"), {\n    lineNumbers: true,\n    lineWrapping: true,\n    mode: \"htmlmixed\",\n    htmlMode: true\n  });\n\n  var theme_settings_editor = _codemirror[\"default\"].fromTextArea(document.getElementById(\"theme-settings\"), {\n    lineNumbers: true,\n    lineWrapping: true,\n    mode: {\n      name: \"javascript\",\n      json: true\n    }\n  }); // Handle refreshing codemirror when switching tabs.\n  // Better than the autorefresh approach b/c there's no flicker\n\n\n  (0, _jquery[\"default\"])(\"a[href='#theme']\").on(\"shown.bs.tab\", function (_e) {\n    theme_header_editor.refresh();\n    theme_footer_editor.refresh();\n    theme_settings_editor.refresh();\n  });\n  (0, _jquery[\"default\"])(\"a[href='#legal'], a[href='#tos-config'], a[href='#privacy-policy-config']\").on(\"shown.bs.tab\", function (_e) {\n    (0, _jquery[\"default\"])(\"#tos-config .CodeMirror\").each(function (i, el) {\n      el.CodeMirror.refresh();\n    });\n    (0, _jquery[\"default\"])(\"#privacy-policy-config .CodeMirror\").each(function (i, el) {\n      el.CodeMirror.refresh();\n    });\n  });\n  (0, _jquery[\"default\"])(\"#theme-settings-modal form\").submit(function (e) {\n    e.preventDefault();\n    theme_settings_editor.getDoc().setValue(JSON.stringify((0, _jquery[\"default\"])(this).serializeJSON(), null, 2));\n    (0, _jquery[\"default\"])(\"#theme-settings-modal\").modal(\"hide\");\n  });\n  (0, _jquery[\"default\"])(\"#theme-settings-button\").click(function () {\n    var form = (0, _jquery[\"default\"])(\"#theme-settings-modal form\");\n    var data; // Ignore invalid JSON data\n\n    try {\n      data = JSON.parse(theme_settings_editor.getValue());\n    } catch (e) {\n      data = {};\n    }\n\n    _jquery[\"default\"].each(data, function (key, value) {\n      var ctrl = form.find(\"[name='\".concat(key, \"']\"));\n\n      switch (ctrl.prop(\"type\")) {\n        case \"radio\":\n        case \"checkbox\":\n          ctrl.each(function () {\n            if ((0, _jquery[\"default\"])(this).attr(\"value\") == value) {\n              (0, _jquery[\"default\"])(this).attr(\"checked\", value);\n            }\n          });\n          break;\n\n        default:\n          ctrl.val(value);\n      }\n    });\n\n    (0, _jquery[\"default\"])(\"#theme-settings-modal\").modal();\n  });\n  insertTimezones((0, _jquery[\"default\"])(\"#start-timezone\"));\n  insertTimezones((0, _jquery[\"default\"])(\"#end-timezone\"));\n  insertTimezones((0, _jquery[\"default\"])(\"#freeze-timezone\"));\n  (0, _jquery[\"default\"])(\".config-section > form:not(.form-upload)\").submit(updateConfigs);\n  (0, _jquery[\"default\"])(\"#user-mode\").change(switchMode);\n  (0, _jquery[\"default\"])(\"#logo-upload\").submit(uploadLogo);\n  (0, _jquery[\"default\"])(\"#remove-logo\").click(removeLogo);\n  (0, _jquery[\"default\"])(\"#ctf-small-icon-upload\").submit(smallIconUpload);\n  (0, _jquery[\"default\"])(\"#remove-small-icon\").click(removeSmallIcon);\n  (0, _jquery[\"default\"])(\"#export-button\").click(exportConfig);\n  (0, _jquery[\"default\"])(\"#import-button\").click(importConfig);\n  (0, _jquery[\"default\"])(\"#config-color-update\").click(function () {\n    var hex_code = (0, _jquery[\"default\"])(\"#config-color-picker\").val();\n    var user_css = theme_header_editor.getValue();\n    var new_css;\n\n    if (user_css.length) {\n      var css_vars = \"theme-color: \".concat(hex_code, \";\");\n      new_css = user_css.replace(/theme-color: (.*);/, css_vars);\n    } else {\n      new_css = \"<style id=\\\"theme-color\\\">\\n\" + \":root {--theme-color: \".concat(hex_code, \";}\\n\") + \".navbar{background-color: var(--theme-color) !important;}\\n\" + \".jumbotron{background-color: var(--theme-color) !important;}\\n\" + \"</style>\\n\";\n    }\n\n    theme_header_editor.getDoc().setValue(new_css);\n  });\n  (0, _jquery[\"default\"])(\".start-date\").change(function () {\n    loadDateValues(\"start\");\n  });\n  (0, _jquery[\"default\"])(\".end-date\").change(function () {\n    loadDateValues(\"end\");\n  });\n  (0, _jquery[\"default\"])(\".freeze-date\").change(function () {\n    loadDateValues(\"freeze\");\n  });\n  var start = (0, _jquery[\"default\"])(\"#start\").val();\n  var end = (0, _jquery[\"default\"])(\"#end\").val();\n  var freeze = (0, _jquery[\"default\"])(\"#freeze\").val();\n\n  if (start) {\n    loadTimestamp(\"start\", start);\n  }\n\n  if (end) {\n    loadTimestamp(\"end\", end);\n  }\n\n  if (freeze) {\n    loadTimestamp(\"freeze\", freeze);\n  } // Toggle username and password based on stored value\n\n\n  (0, _jquery[\"default\"])(\"#mail_useauth\").change(function () {\n    (0, _jquery[\"default\"])(\"#mail_username_password\").toggle(this.checked);\n  }).change(); // Insert FieldList element for users\n\n  var fieldList = _vueEsm[\"default\"].extend(_FieldList[\"default\"]);\n\n  var userVueContainer = document.createElement(\"div\");\n  document.querySelector(\"#user-field-list\").appendChild(userVueContainer);\n  new fieldList({\n    propsData: {\n      type: \"user\"\n    }\n  }).$mount(userVueContainer); // Insert FieldList element for teams\n\n  var teamVueContainer = document.createElement(\"div\");\n  document.querySelector(\"#team-field-list\").appendChild(teamVueContainer);\n  new fieldList({\n    propsData: {\n      type: \"team\"\n    }\n  }).$mount(teamVueContainer);\n});\n\n//# sourceURL=webpack:///./CTFd/themes/admin/assets/js/pages/configs.js?");

/***/ }),

/***/ "./CTFd/themes/admin/assets/js/timezones.js":
/*!**************************************************!*\
  !*** ./CTFd/themes/admin/assets/js/timezones.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n// This array was extracted from moment-timezone via Moment.tz.names().\n// This is because the Intl spec doesn't provide a way to list timezones yet.\n// https://github.com/moment/moment-timezone/blob/develop/LICENSE\n// I also assume this data comes from IANA in some form as well.\n// https://www.iana.org/time-zones\nvar timezones = [\"Africa/Abidjan\", \"Africa/Accra\", \"Africa/Addis_Ababa\", \"Africa/Algiers\", \"Africa/Asmara\", \"Africa/Asmera\", \"Africa/Bamako\", \"Africa/Bangui\", \"Africa/Banjul\", \"Africa/Bissau\", \"Africa/Blantyre\", \"Africa/Brazzaville\", \"Africa/Bujumbura\", \"Africa/Cairo\", \"Africa/Casablanca\", \"Africa/Ceuta\", \"Africa/Conakry\", \"Africa/Dakar\", \"Africa/Dar_es_Salaam\", \"Africa/Djibouti\", \"Africa/Douala\", \"Africa/El_Aaiun\", \"Africa/Freetown\", \"Africa/Gaborone\", \"Africa/Harare\", \"Africa/Johannesburg\", \"Africa/Juba\", \"Africa/Kampala\", \"Africa/Khartoum\", \"Africa/Kigali\", \"Africa/Kinshasa\", \"Africa/Lagos\", \"Africa/Libreville\", \"Africa/Lome\", \"Africa/Luanda\", \"Africa/Lubumbashi\", \"Africa/Lusaka\", \"Africa/Malabo\", \"Africa/Maputo\", \"Africa/Maseru\", \"Africa/Mbabane\", \"Africa/Mogadishu\", \"Africa/Monrovia\", \"Africa/Nairobi\", \"Africa/Ndjamena\", \"Africa/Niamey\", \"Africa/Nouakchott\", \"Africa/Ouagadougou\", \"Africa/Porto-Novo\", \"Africa/Sao_Tome\", \"Africa/Timbuktu\", \"Africa/Tripoli\", \"Africa/Tunis\", \"Africa/Windhoek\", \"America/Adak\", \"America/Anchorage\", \"America/Anguilla\", \"America/Antigua\", \"America/Araguaina\", \"America/Argentina/Buenos_Aires\", \"America/Argentina/Catamarca\", \"America/Argentina/ComodRivadavia\", \"America/Argentina/Cordoba\", \"America/Argentina/Jujuy\", \"America/Argentina/La_Rioja\", \"America/Argentina/Mendoza\", \"America/Argentina/Rio_Gallegos\", \"America/Argentina/Salta\", \"America/Argentina/San_Juan\", \"America/Argentina/San_Luis\", \"America/Argentina/Tucuman\", \"America/Argentina/Ushuaia\", \"America/Aruba\", \"America/Asuncion\", \"America/Atikokan\", \"America/Atka\", \"America/Bahia\", \"America/Bahia_Banderas\", \"America/Barbados\", \"America/Belem\", \"America/Belize\", \"America/Blanc-Sablon\", \"America/Boa_Vista\", \"America/Bogota\", \"America/Boise\", \"America/Buenos_Aires\", \"America/Cambridge_Bay\", \"America/Campo_Grande\", \"America/Cancun\", \"America/Caracas\", \"America/Catamarca\", \"America/Cayenne\", \"America/Cayman\", \"America/Chicago\", \"America/Chihuahua\", \"America/Coral_Harbour\", \"America/Cordoba\", \"America/Costa_Rica\", \"America/Creston\", \"America/Cuiaba\", \"America/Curacao\", \"America/Danmarkshavn\", \"America/Dawson\", \"America/Dawson_Creek\", \"America/Denver\", \"America/Detroit\", \"America/Dominica\", \"America/Edmonton\", \"America/Eirunepe\", \"America/El_Salvador\", \"America/Ensenada\", \"America/Fort_Nelson\", \"America/Fort_Wayne\", \"America/Fortaleza\", \"America/Glace_Bay\", \"America/Godthab\", \"America/Goose_Bay\", \"America/Grand_Turk\", \"America/Grenada\", \"America/Guadeloupe\", \"America/Guatemala\", \"America/Guayaquil\", \"America/Guyana\", \"America/Halifax\", \"America/Havana\", \"America/Hermosillo\", \"America/Indiana/Indianapolis\", \"America/Indiana/Knox\", \"America/Indiana/Marengo\", \"America/Indiana/Petersburg\", \"America/Indiana/Tell_City\", \"America/Indiana/Vevay\", \"America/Indiana/Vincennes\", \"America/Indiana/Winamac\", \"America/Indianapolis\", \"America/Inuvik\", \"America/Iqaluit\", \"America/Jamaica\", \"America/Jujuy\", \"America/Juneau\", \"America/Kentucky/Louisville\", \"America/Kentucky/Monticello\", \"America/Knox_IN\", \"America/Kralendijk\", \"America/La_Paz\", \"America/Lima\", \"America/Los_Angeles\", \"America/Louisville\", \"America/Lower_Princes\", \"America/Maceio\", \"America/Managua\", \"America/Manaus\", \"America/Marigot\", \"America/Martinique\", \"America/Matamoros\", \"America/Mazatlan\", \"America/Mendoza\", \"America/Menominee\", \"America/Merida\", \"America/Metlakatla\", \"America/Mexico_City\", \"America/Miquelon\", \"America/Moncton\", \"America/Monterrey\", \"America/Montevideo\", \"America/Montreal\", \"America/Montserrat\", \"America/Nassau\", \"America/New_York\", \"America/Nipigon\", \"America/Nome\", \"America/Noronha\", \"America/North_Dakota/Beulah\", \"America/North_Dakota/Center\", \"America/North_Dakota/New_Salem\", \"America/Nuuk\", \"America/Ojinaga\", \"America/Panama\", \"America/Pangnirtung\", \"America/Paramaribo\", \"America/Phoenix\", \"America/Port-au-Prince\", \"America/Port_of_Spain\", \"America/Porto_Acre\", \"America/Porto_Velho\", \"America/Puerto_Rico\", \"America/Punta_Arenas\", \"America/Rainy_River\", \"America/Rankin_Inlet\", \"America/Recife\", \"America/Regina\", \"America/Resolute\", \"America/Rio_Branco\", \"America/Rosario\", \"America/Santa_Isabel\", \"America/Santarem\", \"America/Santiago\", \"America/Santo_Domingo\", \"America/Sao_Paulo\", \"America/Scoresbysund\", \"America/Shiprock\", \"America/Sitka\", \"America/St_Barthelemy\", \"America/St_Johns\", \"America/St_Kitts\", \"America/St_Lucia\", \"America/St_Thomas\", \"America/St_Vincent\", \"America/Swift_Current\", \"America/Tegucigalpa\", \"America/Thule\", \"America/Thunder_Bay\", \"America/Tijuana\", \"America/Toronto\", \"America/Tortola\", \"America/Vancouver\", \"America/Virgin\", \"America/Whitehorse\", \"America/Winnipeg\", \"America/Yakutat\", \"America/Yellowknife\", \"Antarctica/Casey\", \"Antarctica/Davis\", \"Antarctica/DumontDUrville\", \"Antarctica/Macquarie\", \"Antarctica/Mawson\", \"Antarctica/McMurdo\", \"Antarctica/Palmer\", \"Antarctica/Rothera\", \"Antarctica/South_Pole\", \"Antarctica/Syowa\", \"Antarctica/Troll\", \"Antarctica/Vostok\", \"Arctic/Longyearbyen\", \"Asia/Aden\", \"Asia/Almaty\", \"Asia/Amman\", \"Asia/Anadyr\", \"Asia/Aqtau\", \"Asia/Aqtobe\", \"Asia/Ashgabat\", \"Asia/Ashkhabad\", \"Asia/Atyrau\", \"Asia/Baghdad\", \"Asia/Bahrain\", \"Asia/Baku\", \"Asia/Bangkok\", \"Asia/Barnaul\", \"Asia/Beirut\", \"Asia/Bishkek\", \"Asia/Brunei\", \"Asia/Calcutta\", \"Asia/Chita\", \"Asia/Choibalsan\", \"Asia/Chongqing\", \"Asia/Chungking\", \"Asia/Colombo\", \"Asia/Dacca\", \"Asia/Damascus\", \"Asia/Dhaka\", \"Asia/Dili\", \"Asia/Dubai\", \"Asia/Dushanbe\", \"Asia/Famagusta\", \"Asia/Gaza\", \"Asia/Harbin\", \"Asia/Hebron\", \"Asia/Ho_Chi_Minh\", \"Asia/Hong_Kong\", \"Asia/Hovd\", \"Asia/Irkutsk\", \"Asia/Istanbul\", \"Asia/Jakarta\", \"Asia/Jayapura\", \"Asia/Jerusalem\", \"Asia/Kabul\", \"Asia/Kamchatka\", \"Asia/Karachi\", \"Asia/Kashgar\", \"Asia/Kathmandu\", \"Asia/Katmandu\", \"Asia/Khandyga\", \"Asia/Kolkata\", \"Asia/Krasnoyarsk\", \"Asia/Kuala_Lumpur\", \"Asia/Kuching\", \"Asia/Kuwait\", \"Asia/Macao\", \"Asia/Macau\", \"Asia/Magadan\", \"Asia/Makassar\", \"Asia/Manila\", \"Asia/Muscat\", \"Asia/Nicosia\", \"Asia/Novokuznetsk\", \"Asia/Novosibirsk\", \"Asia/Omsk\", \"Asia/Oral\", \"Asia/Phnom_Penh\", \"Asia/Pontianak\", \"Asia/Pyongyang\", \"Asia/Qatar\", \"Asia/Qostanay\", \"Asia/Qyzylorda\", \"Asia/Rangoon\", \"Asia/Riyadh\", \"Asia/Saigon\", \"Asia/Sakhalin\", \"Asia/Samarkand\", \"Asia/Seoul\", \"Asia/Shanghai\", \"Asia/Singapore\", \"Asia/Srednekolymsk\", \"Asia/Taipei\", \"Asia/Tashkent\", \"Asia/Tbilisi\", \"Asia/Tehran\", \"Asia/Tel_Aviv\", \"Asia/Thimbu\", \"Asia/Thimphu\", \"Asia/Tokyo\", \"Asia/Tomsk\", \"Asia/Ujung_Pandang\", \"Asia/Ulaanbaatar\", \"Asia/Ulan_Bator\", \"Asia/Urumqi\", \"Asia/Ust-Nera\", \"Asia/Vientiane\", \"Asia/Vladivostok\", \"Asia/Yakutsk\", \"Asia/Yangon\", \"Asia/Yekaterinburg\", \"Asia/Yerevan\", \"Atlantic/Azores\", \"Atlantic/Bermuda\", \"Atlantic/Canary\", \"Atlantic/Cape_Verde\", \"Atlantic/Faeroe\", \"Atlantic/Faroe\", \"Atlantic/Jan_Mayen\", \"Atlantic/Madeira\", \"Atlantic/Reykjavik\", \"Atlantic/South_Georgia\", \"Atlantic/St_Helena\", \"Atlantic/Stanley\", \"Australia/ACT\", \"Australia/Adelaide\", \"Australia/Brisbane\", \"Australia/Broken_Hill\", \"Australia/Canberra\", \"Australia/Currie\", \"Australia/Darwin\", \"Australia/Eucla\", \"Australia/Hobart\", \"Australia/LHI\", \"Australia/Lindeman\", \"Australia/Lord_Howe\", \"Australia/Melbourne\", \"Australia/NSW\", \"Australia/North\", \"Australia/Perth\", \"Australia/Queensland\", \"Australia/South\", \"Australia/Sydney\", \"Australia/Tasmania\", \"Australia/Victoria\", \"Australia/West\", \"Australia/Yancowinna\", \"Brazil/Acre\", \"Brazil/DeNoronha\", \"Brazil/East\", \"Brazil/West\", \"CET\", \"CST6CDT\", \"Canada/Atlantic\", \"Canada/Central\", \"Canada/Eastern\", \"Canada/Mountain\", \"Canada/Newfoundland\", \"Canada/Pacific\", \"Canada/Saskatchewan\", \"Canada/Yukon\", \"Chile/Continental\", \"Chile/EasterIsland\", \"Cuba\", \"EET\", \"EST\", \"EST5EDT\", \"Egypt\", \"Eire\", \"Etc/GMT\", \"Etc/GMT+0\", \"Etc/GMT+1\", \"Etc/GMT+10\", \"Etc/GMT+11\", \"Etc/GMT+12\", \"Etc/GMT+2\", \"Etc/GMT+3\", \"Etc/GMT+4\", \"Etc/GMT+5\", \"Etc/GMT+6\", \"Etc/GMT+7\", \"Etc/GMT+8\", \"Etc/GMT+9\", \"Etc/GMT-0\", \"Etc/GMT-1\", \"Etc/GMT-10\", \"Etc/GMT-11\", \"Etc/GMT-12\", \"Etc/GMT-13\", \"Etc/GMT-14\", \"Etc/GMT-2\", \"Etc/GMT-3\", \"Etc/GMT-4\", \"Etc/GMT-5\", \"Etc/GMT-6\", \"Etc/GMT-7\", \"Etc/GMT-8\", \"Etc/GMT-9\", \"Etc/GMT0\", \"Etc/Greenwich\", \"Etc/UCT\", \"Etc/UTC\", \"Etc/Universal\", \"Etc/Zulu\", \"Europe/Amsterdam\", \"Europe/Andorra\", \"Europe/Astrakhan\", \"Europe/Athens\", \"Europe/Belfast\", \"Europe/Belgrade\", \"Europe/Berlin\", \"Europe/Bratislava\", \"Europe/Brussels\", \"Europe/Bucharest\", \"Europe/Budapest\", \"Europe/Busingen\", \"Europe/Chisinau\", \"Europe/Copenhagen\", \"Europe/Dublin\", \"Europe/Gibraltar\", \"Europe/Guernsey\", \"Europe/Helsinki\", \"Europe/Isle_of_Man\", \"Europe/Istanbul\", \"Europe/Jersey\", \"Europe/Kaliningrad\", \"Europe/Kiev\", \"Europe/Kirov\", \"Europe/Lisbon\", \"Europe/Ljubljana\", \"Europe/London\", \"Europe/Luxembourg\", \"Europe/Madrid\", \"Europe/Malta\", \"Europe/Mariehamn\", \"Europe/Minsk\", \"Europe/Monaco\", \"Europe/Moscow\", \"Europe/Nicosia\", \"Europe/Oslo\", \"Europe/Paris\", \"Europe/Podgorica\", \"Europe/Prague\", \"Europe/Riga\", \"Europe/Rome\", \"Europe/Samara\", \"Europe/San_Marino\", \"Europe/Sarajevo\", \"Europe/Saratov\", \"Europe/Simferopol\", \"Europe/Skopje\", \"Europe/Sofia\", \"Europe/Stockholm\", \"Europe/Tallinn\", \"Europe/Tirane\", \"Europe/Tiraspol\", \"Europe/Ulyanovsk\", \"Europe/Uzhgorod\", \"Europe/Vaduz\", \"Europe/Vatican\", \"Europe/Vienna\", \"Europe/Vilnius\", \"Europe/Volgograd\", \"Europe/Warsaw\", \"Europe/Zagreb\", \"Europe/Zaporozhye\", \"Europe/Zurich\", \"GB\", \"GB-Eire\", \"GMT\", \"GMT+0\", \"GMT-0\", \"GMT0\", \"Greenwich\", \"HST\", \"Hongkong\", \"Iceland\", \"Indian/Antananarivo\", \"Indian/Chagos\", \"Indian/Christmas\", \"Indian/Cocos\", \"Indian/Comoro\", \"Indian/Kerguelen\", \"Indian/Mahe\", \"Indian/Maldives\", \"Indian/Mauritius\", \"Indian/Mayotte\", \"Indian/Reunion\", \"Iran\", \"Israel\", \"Jamaica\", \"Japan\", \"Kwajalein\", \"Libya\", \"MET\", \"MST\", \"MST7MDT\", \"Mexico/BajaNorte\", \"Mexico/BajaSur\", \"Mexico/General\", \"NZ\", \"NZ-CHAT\", \"Navajo\", \"PRC\", \"PST8PDT\", \"Pacific/Apia\", \"Pacific/Auckland\", \"Pacific/Bougainville\", \"Pacific/Chatham\", \"Pacific/Chuuk\", \"Pacific/Easter\", \"Pacific/Efate\", \"Pacific/Enderbury\", \"Pacific/Fakaofo\", \"Pacific/Fiji\", \"Pacific/Funafuti\", \"Pacific/Galapagos\", \"Pacific/Gambier\", \"Pacific/Guadalcanal\", \"Pacific/Guam\", \"Pacific/Honolulu\", \"Pacific/Johnston\", \"Pacific/Kiritimati\", \"Pacific/Kosrae\", \"Pacific/Kwajalein\", \"Pacific/Majuro\", \"Pacific/Marquesas\", \"Pacific/Midway\", \"Pacific/Nauru\", \"Pacific/Niue\", \"Pacific/Norfolk\", \"Pacific/Noumea\", \"Pacific/Pago_Pago\", \"Pacific/Palau\", \"Pacific/Pitcairn\", \"Pacific/Pohnpei\", \"Pacific/Ponape\", \"Pacific/Port_Moresby\", \"Pacific/Rarotonga\", \"Pacific/Saipan\", \"Pacific/Samoa\", \"Pacific/Tahiti\", \"Pacific/Tarawa\", \"Pacific/Tongatapu\", \"Pacific/Truk\", \"Pacific/Wake\", \"Pacific/Wallis\", \"Pacific/Yap\", \"Poland\", \"Portugal\", \"ROC\", \"ROK\", \"Singapore\", \"Turkey\", \"UCT\", \"US/Alaska\", \"US/Aleutian\", \"US/Arizona\", \"US/Central\", \"US/East-Indiana\", \"US/Eastern\", \"US/Hawaii\", \"US/Indiana-Starke\", \"US/Michigan\", \"US/Mountain\", \"US/Pacific\", \"US/Pacific-New\", \"US/Samoa\", \"UTC\", \"Universal\", \"W-SU\", \"WET\", \"Zulu\"];\nvar _default = timezones;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./CTFd/themes/admin/assets/js/timezones.js?");

/***/ })

/******/ });