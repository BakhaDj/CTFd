import{$ as e,J as m,V as p,C as r,A as s,B as l}from"./main.17a48075.js";import{C as u}from"../htmlmixed.7d6e4601.js";import{C as f}from"../CommentBox.f3f14f3d.js";import"../echarts.e8baadb1.js";function w(){window.editor.save();var o=e("#page-edit").serializeJSON(),i="/api/v1/pages",n="POST";let d=window.location.pathname.split("/").pop();d!=="new"&&(i+="/"+d,n="PATCH"),r.fetch(i,{method:n,credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then(function(t){return t.json()}).then(function(t){if(t.success===!1){let a="";for(const c in t.errors)a+=t.errors[c].join(`
`),a+=`
`;s({title:"Error",body:a,button:"OK"});return}n==="PATCH"&&t.success?l({title:"Saved",body:"Your changes have been saved"}):window.location=r.config.urlRoot+"/admin/pages/"+t.data.id})}function g(){window.editor.save(),e("#page-edit").attr("action",r.config.urlRoot+"/admin/pages/preview"),e("#page-edit").attr("target","_blank"),e("#page-edit").submit()}e(()=>{if(window.editor=u.fromTextArea(document.getElementById("admin-pages-editor"),{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",htmlMode:!0}),e("#media-button").click(function(o){m(window.editor)}),e("#save-page").click(function(o){o.preventDefault(),w()}),e(".preview-page").click(function(){g()}),window.PAGE_ID){const o=p.extend(f);let i=document.createElement("div");document.querySelector("#comment-box").appendChild(i),new o({propsData:{type:"page",id:window.PAGE_ID}}).$mount(i)}});
