(()=>{"use strict";var n={791:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(537),o=t.n(i),A=t(645),a=t.n(A)()(o());a.push([n.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}#app aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}#app aside ul,#app aside li,#app aside .sub-menu li{list-style-type:none;margin-bottom:10px;font-size:1em;line-height:1.5em}#app aside #togglePriorities{cursor:pointer;display:block}#app aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}#app aside li.sub-menu-opened #togglePriorities:before{content:"v"}#app .sub-menu{margin-left:20px;display:none}#app main{flex:1;background-color:#ecf0f1;padding:20px}.custom-container{background-color:blue;padding:5px 10px;border-radius:5px;height:30px}.custom-container label,.custom-container span{color:#ecf0f1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-container span{font-size:.8em}.buttons-container{display:flex}button{height:30px;background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:5px;min-width:100px;font-size:14px;text-align:center}button.add-button{margin-right:10px}button:hover{background-color:#d62c1a}#addTaskButton{display:flex;align-items:center;justify-content:center}#tasks>div{display:flex;flex-direction:column;background-color:#ecf0f1;padding:10px;padding-top:20px;margin:10px 0;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1)}#tasks>div .task-details{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:15px;margin-bottom:20px}#tasks>div .task-details .custom-container,#tasks>div .task-details button{flex:1;min-width:100px;overflow:hidden}#tasks>div>div{display:flex;align-items:center;justify-content:space-between;width:100%;gap:10px;padding-left:10px}#tasks>div>div .custom-container,#tasks>div>div button,#tasks>div>div input[type=text],#tasks>div>div select,#tasks>div>div input[type=date]{flex:1}#tasks>div>div input[type=text]{padding:5px 10px;margin:0 0 10px 0;border:1px solid #ccc;border-radius:3px}#tasks>div>div select,#tasks>div>div input[type=date],#tasks>div>div button{box-sizing:border-box;margin-right:5px;margin-left:10px}#tasks>div>div div{display:flex;align-items:center;gap:5px}#tasks>div>div div label{margin-right:5px}#tasks>div>div div button{margin-right:10px}#tasks>div>div div button:last-child{margin-right:0}.task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:20px}.task .task-text{font-size:16px;font-weight:bold}.task .task-details{align-items:center;display:flex;justify-content:space-between}.task .custom-container{align-items:center;display:flex;margin-right:10px}.task .custom-container label{margin-right:5px}.task .custom-container span{font-size:14px}.task .complete-button{background-color:#e74c3c;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:5px 10px;transition:background-color .3s ease}.task .complete-button:hover{background-color:#d62c1a}.new-task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:10px}.new-task .input-group{margin-bottom:10px}.new-task .task-input{font-size:14px;height:40px;width:100%}.new-task .action-container{align-items:center;display:flex;justify-content:space-between;width:100%}.new-task .custom-container{align-items:center;display:flex;margin-right:10px}.new-task .custom-container label{margin-right:5px}.new-task .custom-container span{font-size:14px}.new-task .buttons-container{flex:1}.new-task button{padding:0px 10px}.new-task .priority-container,.new-task .date-container{flex:1}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"AAUA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,8BARU,CAUZ,KACE,wBAhBc,CAiBd,UAdW,CAeX,WAAA,CAGF,KACE,YAAA,CACA,gBAAA,CACA,gBAAA,CACA,kCAAA,CAEA,WACE,WAAA,CACA,wBA5Ba,CA6Bb,aA1BY,CA2BZ,YAAA,CAEA,oDACE,oBAAA,CACA,kBAAA,CACA,aAAA,CACA,iBAAA,CAEF,6BACE,cAAA,CACA,aAAA,CAEA,oCACE,WAAA,CACA,oBAAA,CACA,gBAAA,CACA,gBAAA,CAGF,uDACE,WAAA,CAEN,eACE,gBAAA,CACA,YAAA,CAEF,UACE,MAAA,CACA,wBAvDY,CAwDZ,YAAA,CAGJ,kBACE,qBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WA7Dc,CA8Dd,+CACE,aAjEY,CAkEZ,gBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAEF,uBACE,cAAA,CAEJ,mBACE,YAAA,CAEF,OACE,WA5Ec,CA6Ed,wBAjFgB,CAkFhB,aAhFc,CAiFd,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CACA,UAAA,CACA,eAAA,CAEA,cAAA,CACA,iBAAA,CAEA,kBACE,iBAAA,CAEF,aACE,wBAAA,CAEJ,eACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAKA,WACE,YAAA,CACA,qBAAA,CACA,wBA7GY,CA8GZ,YAAA,CACA,gBAAA,CACA,aAAA,CACA,iBAAA,CACA,iCAAA,CAEA,yBACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,QAAA,CACA,eAAA,CACA,kBAAA,CAEA,2EACE,MAAA,CACA,eAAA,CACA,eAAA,CAEJ,eACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CAEA,QAAA,CACA,iBAAA,CAEA,6IACE,MAAA,CAEF,gCACE,gBAAA,CACA,iBAAA,CACA,qBAAA,CACA,iBAAA,CAEF,4EACE,qBAAA,CACA,gBAAA,CACA,gBAAA,CAEF,mBACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEA,yBACE,gBAAA,CAEF,0BACE,iBAAA,CAEA,qCACE,cAAA,CAEZ,MACE,qBAAA,CACA,iBAAA,CACA,iCAAA,CACA,aAAA,CACA,YAAA,CACA,iBACE,cAAA,CACA,gBAAA,CAGF,oBACE,kBAAA,CACA,YAAA,CACA,6BAAA,CAEF,wBACE,kBAAA,CACA,YAAA,CACA,iBAAA,CAEA,8BACE,gBAAA,CAEF,6BACE,cAAA,CAEJ,uBACE,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,oCAAA,CAEA,6BACE,wBAAA,CAEN,UACE,qBAAA,CACA,iBAAA,CACA,iCAAA,CACA,aAAA,CACA,YAAA,CAEA,uBACE,kBAAA,CAEF,sBACE,cAAA,CACA,WAAA,CACA,UAAA,CAEF,4BACE,kBAAA,CACA,YAAA,CACA,6BAAA,CACA,UAAA,CAEF,4BACE,kBAAA,CACA,YAAA,CACA,iBAAA,CAEA,kCACE,gBAAA,CAEF,iCACE,cAAA,CAEJ,6BACE,MAAA,CAEF,iBACE,gBAAA,CAEF,wDACE,MAAA",sourcesContent:['// Variables\n$bg-color-main: #f4f4f4\n$bg-color-aside: #2c3e50\n$bg-color-button: #e74c3c\n$color-main: #333\n$color-inverse: #ecf0f1\n$font-main: \'Arial\', sans-serif\n$common-height: 30px\n\n// Reset básico y estilos globales\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: $font-main\n\nbody\n  background-color: $bg-color-main\n  color: $color-main\n  padding: 10%\n\n// Estructura principal\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\n  aside\n    width: 250px\n    background-color: $bg-color-aside\n    color: $color-inverse\n    padding: 20px\n\n    ul, li, .sub-menu li\n      list-style-type: none\n      margin-bottom: 10px\n      font-size: 1em\n      line-height: 1.5em\n\n    #togglePriorities\n      cursor: pointer\n      display: block\n\n      &:before\n        content: ">"\n        display: inline-block\n        margin-right: 5px\n        font-weight: bold\n\n    li.sub-menu-opened\n      #togglePriorities:before\n        content: "v"\n\n  .sub-menu\n    margin-left: 20px\n    display: none\n\n  main\n    flex: 1\n    background-color: $color-inverse\n    padding: 20px\n\n// Estilos comunes\n.custom-container\n  background-color: blue\n  padding: 5px 10px\n  border-radius: 5px\n  height: $common-height\n  label, span\n    color: $color-inverse\n    line-height: 20px\n    white-space: nowrap\n    overflow: hidden\n    text-overflow: ellipsis\n\n  span\n    font-size: 0.8em\n\n.buttons-container\n  display: flex\n\nbutton\n  height: $common-height\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  margin: 5px\n  min-width: 100px\n  // make text size bigger\n  font-size: 14px\n  text-align: center\n\n  &.add-button\n    margin-right: 10px\n\n  &:hover\n    background-color: darken($bg-color-button, 10%)\n\n#addTaskButton\n  display: flex\n  align-items: center\n  justify-content: center\n\n\n// Estilos específicos para tareas\n#tasks\n  > div\n    display: flex\n    flex-direction: column\n    background-color: $color-inverse\n    padding: 10px\n    padding-top: 20px\n    margin: 10px 0\n    border-radius: 5px\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n\n    .task-details\n      display: flex\n      justify-content: space-between\n      align-items: center\n      gap: 10px\n      margin-top: 15px\n      margin-bottom: 20px\n\n      .custom-container, button\n        flex: 1\n        min-width: 100px\n        overflow: hidden\n\n    > div\n      display: flex\n      align-items: center\n      justify-content: space-between\n      width: 100%\n      // margin-bottom: 10px\n      gap: 10px\n      padding-left: 10px\n\n      .custom-container, button, input[type="text"], select, input[type="date"]\n        flex: 1\n\n      input[type="text"]\n        padding: 5px 10px\n        margin: 0 0 10px 0\n        border: 1px solid #ccc\n        border-radius: 3px\n\n      select, input[type="date"], button\n        box-sizing: border-box\n        margin-right: 5px\n        margin-left: 10px\n\n      div\n        display: flex\n        align-items: center\n        gap: 5px\n\n        label\n          margin-right: 5px\n\n        button\n          margin-right: 10px\n\n          &:last-child\n            margin-right: 0\n\n.task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 20px\n  .task-text\n    font-size: 16px\n    font-weight: bold\n    // margin-bottom: 10px\n\n  .task-details\n    align-items: center\n    display: flex\n    justify-content: space-between\n\n  .custom-container\n    align-items: center\n    display: flex\n    margin-right: 10px\n\n    label\n      margin-right: 5px\n\n    span\n      font-size: 14px\n\n  .complete-button\n    background-color: #e74c3c\n    border: none\n    border-radius: 5px\n    color: #fff\n    cursor: pointer\n    padding: 5px 10px\n    transition: background-color 0.3s ease\n\n    &:hover\n      background-color: darken(#e74c3c, 10%)\n\n.new-task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 10px\n\n  .input-group\n    margin-bottom: 10px\n\n  .task-input\n    font-size: 14px\n    height: 40px\n    width: 100%\n\n  .action-container\n    align-items: center\n    display: flex\n    justify-content: space-between\n    width: 100%\n\n  .custom-container\n    align-items: center\n    display: flex\n    margin-right: 10px\n\n    label\n      margin-right: 5px\n\n    span\n      font-size: 14px\n\n  .buttons-container\n    flex: 1\n\n  button\n    padding: 0px 10px\n\n  .priority-container, .date-container\n    flex: 1\n'],sourceRoot:""}]);const r=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(o," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var A={},a=[],r=0;r<n.length;r++){var s=n[r],c=i.base?s[0]+i.base:s[0],d=A[c]||0,p="".concat(c," ").concat(d);A[c]=d+1;var l=t(p),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(C);else{var u=o(C,i);i.byIndex=r,e.splice(r,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var A=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var r=t(A[a]);e[r].references--}for(var s=i(n,o),c=0;c<A.length;c++){var d=t(A[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=s}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var A=e[i]={id:i,exports:{}};return n[i](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),A=t(569),a=t.n(A),r=t(565),s=t.n(r),c=t(216),d=t.n(c),p=t(589),l=t.n(p),C=t(791),u={};function g(n){localStorage.setItem("tasks",JSON.stringify(n))}function m(){const n=localStorage.getItem("tasks");return n?JSON.parse(n).filter((n=>n.timestamp)):[]}function x(n){const e=n.parentElement.parentElement,t=e.dataset.timestamp;e.remove(),g(m().filter((n=>n.timestamp&&n.timestamp.toString()!==t)))}function f(n){const e=document.createElement("div");return e.classList.add("task"),e.dataset.timestamp=n.timestamp,e.innerHTML=`\n    <div class="task-text">${n.text}</div>\n    <div class="task-details">\n        <div class="custom-container priority-container">\n          <label>Priority:</label>\n          <span>${n.priority}</span>\n        </div>\n        <div class="custom-container date-container">\n          <label>Date:</label>\n          <span>${n.date}</span>\n        </div>\n      <button class="complete-button">Complete</button>\n    </div>\n  `,e.querySelector(".complete-button").addEventListener("click",(function(){x(this)})),e}u.styleTagTransform=l(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=d(),e()(C.Z,u),C.Z&&C.Z.locals&&C.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("addTaskButton"),e=document.getElementById("tasks");e.addEventListener("click",(n=>{n.target.classList.contains("complete-button")&&x(n.target)}));const t=m();for(const n of t)e.appendChild(f(n));n.addEventListener("click",(()=>{n.disabled=!0;const t=document.createElement("div");t.classList.add("new-task");const i=document.createElement("input");i.type="text",i.placeholder="Write your task here",i.classList.add("task-input");const o=document.createElement("div");o.classList.add("action-container");const A=document.createElement("div");A.classList.add("custom-container","priority-container");const a=document.createElement("label");a.textContent="Priority";const r=document.createElement("select");["High","Medium","Low"].forEach((n=>{const e=document.createElement("option");e.value=n,e.textContent=n,r.appendChild(e)})),A.appendChild(a),A.appendChild(r);const s=document.createElement("div");s.classList.add("custom-container","date-container");const c=document.createElement("label");c.textContent="Date";const d=document.createElement("input");d.type="date",s.appendChild(c),s.appendChild(d);const p=document.createElement("div");p.classList.add("buttons-container");const l=document.createElement("button");l.textContent="Add",p.appendChild(l);const C=document.createElement("button");C.textContent="Cancel",p.appendChild(C);const u=document.createElement("div");u.classList.add("input-group"),u.appendChild(i),t.appendChild(u),o.appendChild(A),o.appendChild(s),o.appendChild(p),t.appendChild(o),l.addEventListener("click",(()=>{if(i.value){const o={timestamp:Date.now(),text:i.value,priority:r.value,date:d.value};e.appendChild(f(o));const A=m();A.push(o),g(A),t.remove(),n.disabled=!1}})),C.addEventListener("click",(()=>{t.remove(),n.disabled=!1})),e.appendChild(t)}));const i=document.getElementById("togglePriorities"),o=document.querySelector(".sub-menu"),A=i.parentElement;i.addEventListener("click",(()=>{const n="block"===o.style.display;o.style.display=n?"none":"block",A.classList.toggle("sub-menu-opened",!n)}))}))})()})();