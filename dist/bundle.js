(()=>{"use strict";var n={791:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(537),A=t.n(o),a=t(645),r=t.n(a)()(A());r.push([n.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%}.hamburger-menu{background:none;border:none;font-size:2em;cursor:pointer;color:#333;margin-right:20px;padding:0;display:inline;outline:none;transition:none;min-width:0}.hamburger-menu:hover,.hamburger-menu:focus{color:blue;border:none;outline:none;background:none}aside.hidden{display:none}#title{max-width:1200px;margin:40px auto}#app-title{font-family:"Courier New",Courier,monospace;font-size:2em;font-weight:bold}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}#app aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}#app aside ul,#app aside li,#app aside .sub-menu li{list-style-type:none;margin-top:10px;margin-bottom:10px;font-size:1em;line-height:1.5em;cursor:pointer}#app aside #togglePriorities{cursor:pointer;display:block}#app aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}#app aside li.sub-menu-opened #togglePriorities:before{content:"v"}#app .sub-menu{margin-left:20px;display:none}#app main{flex:1;background-color:#ecf0f1;padding:20px}.custom-container{background-color:blue;padding:5px 10px;border-radius:5px;height:30px;display:flex;align-items:center;justify-content:center}.custom-container label,.custom-container span{color:#ecf0f1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-container span{font-size:.8em}.buttons-container{display:flex}button{height:30px;background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:5px;min-width:100px;font-size:14px;text-align:center}button.add-button{margin-right:10px}button:hover{background-color:#d62c1a}#addTaskButton{display:flex;align-items:center;justify-content:center}.task .custom-container,.new-task .custom-container{align-items:center;display:flex;margin-right:10px}.task .custom-container label,.new-task .custom-container label{margin-right:5px}.task .custom-container span,.new-task .custom-container span{font-size:14px}.task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:20px}.task .task-text{font-size:16px;font-weight:bold;margin-bottom:10px}.task .task-details{align-items:center;display:flex;justify-content:space-between}.task .task-details>*{flex:1}.task .priority-container{order:1}.task .date-container{order:2}.task .complete-button{background-color:#e74c3c;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:5px 10px;transition:background-color .3s ease;order:3}.task .complete-button:hover{background-color:#d62c1a}.tasks-modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);display:flex;justify-content:center;align-items:center;z-index:1000}.tasks-modal .close-button{display:flex;justify-content:center;align-items:center}.tasks-modal>div{background-color:#fff;padding:20px;border-radius:5px;width:70%;max-width:500px;overflow-y:auto;margin-bottom:20px}.tasks-modal-container{display:flex;flex-direction:column}.new-task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:10px}.new-task .input-group{margin-bottom:10px}.new-task .task-input{font-size:14px;height:40px;width:100%}.new-task .action-container{align-items:center;display:flex;justify-content:space-between;width:100%}.new-task .custom-container{flex:1}.new-task button{padding:0px 10px}.new-task .priority-container,.new-task .date-container{flex:1}#calendarContainer{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%}.calendar-header{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;font-weight:bold}.calendar-header button{background-color:rgba(0,0,0,0);color:#000;border:none;transition:none;align-items:center;padding:0;margin:0;cursor:pointer}.calendar-header button:hover,.calendar-header button:focus{background-color:rgba(0,0,0,0);color:#666}.weekdays-header{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.weekdays-header>div{display:flex;align-items:center;justify-content:center;margin:0;padding:0}.calendar-dates-container{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.calendar-day{width:100%;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;margin:0;padding:0}.calendar-day.has-tasks{background-color:#e74c3c;color:#fff;cursor:pointer}.calendar-day.out-of-month{color:gray}.close-modal-button{display:flex;align-items:center;justify-content:center;height:30px}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"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",sourcesContent:["// Variables\n$bg-color-main: #f4f4f4\n$bg-color-aside: #2c3e50\n$bg-color-button: #e74c3c\n$color-main: #333\n$color-inverse: #ecf0f1\n$font-main: 'Arial', sans-serif\n$common-height: 30px\n\n// Basic reset and global settings\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: $font-main\n\nbody\n  background-color: $bg-color-main\n  color: $color-main\n  padding: 10%\n\n// Hamburger Menu Styles\n.hamburger-menu\n  background: none\n  border: none\n  font-size: 2em\n  cursor: pointer\n  color: $color-main\n  margin-right: 20px\n  padding: 0\n  display: inline\n  outline: none\n  transition: none\n  min-width: 0\n\n  &:hover, &:focus\n    color: blue\n    border: none\n    outline: none\n    background: none\n\n\n// Style for hidden sidebar\naside.hidden\n  display: none\n\n#title\n  max-width: 1200px\n  margin: 40px auto\n\n// Header styles\n#app-title\n  font-family: 'Courier New', Courier, monospace\n  font-size: 2em\n  font-weight: bold\n\n// Main structure\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\n  // Sidebar\n  aside\n    width: 250px\n    background-color: $bg-color-aside\n    color: $color-inverse\n    padding: 20px\n\n    ul, li, .sub-menu li\n      list-style-type: none\n      margin-top: 10px\n      margin-bottom: 10px\n      font-size: 1em\n      line-height: 1.5em\n      cursor: pointer\n\n    // Projects Menu\n    #togglePriorities\n      cursor: pointer\n      display: block\n\n      &:before\n        content: \">\"\n        display: inline-block\n        margin-right: 5px\n        font-weight: bold\n\n    li.sub-menu-opened\n      #togglePriorities:before\n        content: \"v\"\n\n  .sub-menu\n    margin-left: 20px\n    display: none\n\n  // Main content\n  main\n    flex: 1\n    background-color: $color-inverse\n    padding: 20px\n\n// Common style\n.custom-container\n  background-color: blue\n  padding: 5px 10px\n  border-radius: 5px\n  height: $common-height\n  display: flex\n  align-items: center\n  justify-content: center\n  \n  label, span\n    color: $color-inverse\n    line-height: 20px\n    white-space: nowrap\n    overflow: hidden\n    text-overflow: ellipsis\n\n  span\n    font-size: 0.8em\n\n.buttons-container\n  display: flex\n\nbutton\n  height: $common-height\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  margin: 5px\n  min-width: 100px\n  font-size: 14px\n  text-align: center\n\n  &.add-button\n    margin-right: 10px\n\n  &:hover\n    background-color: darken($bg-color-button, 10%)\n\n#addTaskButton\n  display: flex\n  align-items: center\n  justify-content: center\n\n// Saved Tasks Styles\n.task, .new-task\n  .custom-container\n    align-items: center\n    display: flex\n    margin-right: 10px\n\n    label\n      margin-right: 5px\n\n    span\n      font-size: 14px\n\n\n.task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 20px\n\n  .task-text\n    font-size: 16px\n    font-weight: bold\n    margin-bottom: 10px\n\n  .task-details\n    align-items: center\n    display: flex\n    justify-content: space-between\n\n    > *\n      flex: 1\n\n  .priority-container\n    order: 1\n  \n  .date-container\n    order: 2\n\n  .complete-button\n    background-color: #e74c3c\n    border: none\n    border-radius: 5px\n    color: #fff\n    cursor: pointer\n    padding: 5px 10px\n    transition: background-color 0.3s ease\n    order: 3\n\n    &:hover\n      background-color: darken(#e74c3c, 10%)\n\n.tasks-modal\n    position: fixed\n    top: 0\n    left: 0\n    width: 100%\n    height: 100%\n    background-color: rgba(0, 0, 0, 0.7)\n    display: flex\n    justify-content: center\n    align-items: center\n    z-index: 1000 // para asegurarse de que se muestre por encima de otros elementos\n\n    .close-button\n      display: flex\n      justify-content: center\n      align-items: center\n\n.tasks-modal > div\n  background-color: white\n  padding: 20px\n  border-radius: 5px\n  width: 70%\n  max-width: 500px\n  overflow-y: auto // para que se pueda desplazar si hay muchas tareas\n  margin-bottom: 20px\n\n  \n\n.tasks-modal-container  // Añade el nuevo estilo aquí\n    display: flex\n    flex-direction: column      \n\n\n// New Task Styles\n.new-task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 10px\n\n  .input-group\n    margin-bottom: 10px\n\n  .task-input\n    font-size: 14px\n    height: 40px\n    width: 100%\n\n  .action-container\n    align-items: center\n    display: flex\n    justify-content: space-between\n    width: 100%\n\n  .custom-container\n    flex: 1\n\n  button\n    padding: 0px 10px\n\n  .priority-container, .date-container\n    flex: 1\n\n// Calendar styles\n#calendarContainer\n  display: flex\n  flex-direction: column\n  align-items: center\n  gap: 10px\n  width: 100%\n\n.calendar-header\n  display: flex\n  justify-content: space-between\n  align-items: center\n  padding: 5px 10px\n  font-weight: bold\n\n  button\n    background-color: transparent\n    color: #000\n    border: none\n    transition: none\n    align-items: center\n    padding: 0\n    margin: 0\n    cursor: pointer\n\n    &:hover, &:focus\n      background-color: transparent\n      color: #666\n\n.weekdays-header\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n  > div\n    display: flex\n    align-items: center\n    justify-content: center\n    margin: 0\n    padding: 0\n\n.calendar-dates-container\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n.calendar-day\n  width: 100%\n  height: 40px\n  display: flex\n  align-items: center\n  justify-content: center\n  border: 1px solid #ccc\n  margin: 0\n  padding: 0\n\n  &.has-tasks\n    background-color: #e74c3c\n    color: #fff\n    cursor: pointer\n\n  &.out-of-month\n    color: gray\n\n\n.close-modal-button\n  display: flex\n  align-items: center\n  justify-content: center\n  height: 30px\n"],sourceRoot:""}]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&r[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),A&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=A):s[4]="".concat(A)),e.push(s))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(A," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],i=0;i<n.length;i++){var c=n[i],d=o.base?c[0]+o.base:c[0],s=a[d]||0,l="".concat(d," ").concat(s);a[d]=s+1;var p=t(l),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(C);else{var u=A(C,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:u,references:1})}r.push(l)}return r}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var a=o(n=n||[],A=A||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var i=t(a[r]);e[i].references--}for(var c=o(n,A),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),A=t.n(o),a=t(569),r=t.n(a),i=t(565),c=t.n(i),d=t(216),s=t.n(d),l=t(589),p=t.n(l),C=t(791),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=r().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=s(),e()(C.Z,u),C.Z&&C.Z.locals&&C.Z.locals;const m="tasks";function g(n){localStorage.setItem(m,JSON.stringify(n))}function f(){const n=localStorage.getItem(m);return n?JSON.parse(n).filter((n=>n.timestamp)):[]}function h(n){const e=document.createElement("div");e.classList.add("task"),e.dataset.timestamp=n.timestamp;const t=document.createElement("div");t.classList.add("task-text"),t.textContent=n.text,e.appendChild(t);const o=document.createElement("div");o.classList.add("task-details");const A=document.createElement("div");A.classList.add("custom-container","priority-container");const a=document.createElement("span");if(a.textContent=n.priority,A.appendChild(a),n.date&&""!==n.date.trim()){const e=document.createElement("div");e.classList.add("custom-container","date-container");const t=document.createElement("span");t.textContent=n.date,e.appendChild(t),o.appendChild(e)}const r=document.createElement("button");return r.classList.add("complete-button"),r.textContent="Complete",r.addEventListener("click",(function(){x(this)})),o.appendChild(A),o.appendChild(r),e.appendChild(o),e}function x(n){const e=n.parentElement.parentElement,t=e.dataset.timestamp;e.remove(),g(f().filter((n=>n.timestamp&&n.timestamp.toString()!==t)))}function b(n,e,t,o=new Date){n.innerHTML="",e.innerHTML="";const A=o.getMonth(),a=o.getFullYear();e.appendChild(function(n,e,t,o){const A=document.createElement("div");A.classList.add("calendar-header");const a=document.createElement("button");a.innerHTML="&lt;",a.addEventListener("click",(()=>{n.setMonth(n.getMonth()-1),b(t,e,o,n)}));const r=document.createElement("button");r.innerHTML="&gt;",r.addEventListener("click",(()=>{n.setMonth(n.getMonth()+1),b(t,e,o,n)}));const i=document.createElement("span");return i.textContent=`${n.toLocaleString("en-US",{month:"long"})} ${n.getFullYear()}`,A.appendChild(a),A.appendChild(i),A.appendChild(r),A}(o,e,n,t)),e.appendChild(function(){const n=document.createElement("div");return n.classList.add("weekdays-header"),["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach((e=>{const t=document.createElement("div");t.textContent=e,n.appendChild(t)})),n}());const r=function(n,e){const t=function(n,e){let t=new Date(n,e,1).getDay();return 0===t?6:t-1}(n,e),o=new Date(n,e+1,0).getDate(),A=[];for(let o=0;o<t;o++){const a=new Date(n,e,o-t+1).getDate();A.push({day:a,outOfCurrentMonth:!0})}for(let n=1;n<=o;n++)A.push({day:n});const a=function(n,e){let t=new Date(n,e+1,0).getDay();return 0===t?6:t-1}(n,e);for(let t=a+1;t<7;t++){const o=new Date(n,e+1,t-a).getDate();A.push({day:o,outOfCurrentMonth:!0})}return A}(a,A),i=document.createElement("div");i.classList.add("calendar-dates-container"),r.forEach((({day:n,outOfCurrentMonth:e})=>{const o=document.createElement("div");if(o.classList.add("calendar-day"),e&&o.classList.add("out-of-month"),o.textContent=n,!e){const e=t.filter((e=>{const t=new Date(e.date);return t.getDate()===n&&t.getMonth()===A&&t.getFullYear()===a}));e.length>0&&(o.classList.add("has-tasks"),o.addEventListener("click",(()=>{!function(n){const e=document.createElement("div");e.classList.add("tasks-modal","tasks-modal-container");const t=document.createElement("div");e.appendChild(t),n.forEach((n=>{const e=h(n);t.appendChild(e)}));const o=document.createElement("button");o.classList.add("close-modal-button"),o.textContent="Close",o.addEventListener("click",(()=>{e.remove()})),e.appendChild(o),document.body.appendChild(e)}(e)})))}i.appendChild(o)})),e.appendChild(i),document.getElementById("addTaskButton").style.display="none"}const y=["High","Medium","Low"];document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("addTaskButton"),e=document.getElementById("tasks");e.addEventListener("click",(n=>{n.target.classList.contains("complete-button")&&x(n.target)}));const t=f();for(const n of t)e.appendChild(h(n));n.addEventListener("click",(()=>{n.disabled=!0;const t=document.createElement("div");t.classList.add("new-task");const o=document.createElement("input");o.type="text",o.placeholder="Write your task here",o.classList.add("task-input");const A=document.createElement("div");A.classList.add("action-container");const a=document.createElement("div");a.classList.add("custom-container","priority-container");const r=document.createElement("label");r.textContent="Priority";const i=document.createElement("select");y.forEach((n=>{const e=document.createElement("option");e.value=n,e.textContent=n,i.appendChild(e)})),a.appendChild(r),a.appendChild(i);const c=document.createElement("div");c.classList.add("custom-container","date-container");const d=document.createElement("label");d.textContent="Date";const s=document.createElement("input");s.type="date",c.appendChild(d),c.appendChild(s);const l=document.createElement("div");l.classList.add("buttons-container");const p=document.createElement("button");p.textContent="Add",l.appendChild(p);const C=document.createElement("button");C.textContent="Cancel",l.appendChild(C);const u=document.createElement("div");u.classList.add("input-group"),u.appendChild(o),t.appendChild(u),A.appendChild(a),A.appendChild(c),A.appendChild(l),t.appendChild(A),p.addEventListener("click",(()=>{if(o.value){const A={timestamp:Date.now(),text:o.value,priority:i.value,date:s.value};e.appendChild(h(A));const a=f();a.push(A),g(a),t.remove(),n.disabled=!1}})),C.addEventListener("click",(()=>{t.remove(),n.disabled=!1})),e.appendChild(t)}));const o=document.getElementById("togglePriorities"),A=document.querySelector(".sub-menu"),a=o.parentElement;document.querySelector("aside ul li:first-child").addEventListener("click",(function(){n.style.display="flex";const e=f(),t=document.getElementById("tasks");t.innerHTML="";for(const n of e)t.appendChild(h(n))})),o.addEventListener("click",(()=>{const n="block"===A.style.display;A.style.display=n?"none":"block",a.classList.toggle("sub-menu-opened",!n)})),A.addEventListener("click",(n=>{"LI"===n.target.tagName&&function(n){const e=f().filter((e=>e.priority===n)),t=document.getElementById("tasks");t.innerHTML="";for(const n of e)t.appendChild(h(n));document.getElementById("addTaskButton").style.display="none"}(n.target.textContent)}));const r=document.querySelector("aside ul li:nth-child(4)");r.addEventListener("click",b),r.addEventListener("click",(()=>{const n=f();b(document.getElementById("tasks"),document.getElementById("calendarContainer"),n)})),document.querySelectorAll("aside ul li").forEach((n=>{n.addEventListener("click",(n=>{"Dates"!==n.target.textContent&&(document.getElementById("calendarContainer").innerHTML="")}))}));const i=document.getElementById("toggleSidebar"),c=document.querySelector("aside");i.addEventListener("click",(()=>{c.classList.toggle("hidden")}))}))})()})();