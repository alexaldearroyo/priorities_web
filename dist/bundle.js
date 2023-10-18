(()=>{"use strict";var e={791:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(537),A=t.n(o),a=t(645),i=t.n(a)()(A());i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%}.hamburger-menu{background:none;border:none;font-size:2em;cursor:pointer;color:#333;margin-right:20px;padding:0;display:inline;outline:none;transition:none;min-width:0}.hamburger-menu:hover,.hamburger-menu:focus{color:blue;border:none;outline:none;background:none}aside.hidden{display:none}#title{max-width:1200px;margin:40px auto}#app-title{font-family:"Courier New",Courier,monospace;font-size:2em;font-weight:bold}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}#app aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}#app aside ul,#app aside li,#app aside .sub-menu li{list-style-type:none;margin-top:10px;margin-bottom:10px;font-size:1em;line-height:1.5em;cursor:pointer}#app aside #togglePriorities{cursor:pointer;display:block}#app aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}#app aside li.sub-menu-opened #togglePriorities:before{content:"v"}#app .sub-menu{margin-left:20px;display:none}#app main{flex:1;background-color:#ecf0f1;padding:20px}.custom-container{background-color:blue;padding:5px 10px;border-radius:5px;height:30px;display:flex;align-items:center;justify-content:center}.custom-container label,.custom-container span{color:#ecf0f1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-container span{font-size:.8em}.buttons-container{display:flex}button{height:30px;background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:5px;min-width:100px;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center}button.add-button{margin-right:10px}button:hover{background-color:#d62c1a}#addTaskButton{display:flex;align-items:center;justify-content:center}.task .custom-container,.new-task .custom-container{align-items:center;display:flex;margin-right:10px}.task .custom-container label,.new-task .custom-container label{margin-right:5px}.task .custom-container span,.new-task .custom-container span{font-size:14px}.task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:20px}.task .task-text{font-size:16px;font-weight:bold;margin-bottom:10px}.task .task-details{align-items:center;display:flex;justify-content:space-between}.task .task-details>*{flex:1}.task .priority-container{order:1}.task .date-container{order:2}.task .complete-button{background-color:#e74c3c;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:5px 10px;transition:background-color .3s ease;order:3}.task .complete-button:hover{background-color:#d62c1a}.tasks-modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);display:flex;justify-content:center;align-items:center;z-index:1000}.tasks-modal .close-button{display:flex;justify-content:center;align-items:center}.tasks-modal>div{background-color:#fff;padding:20px;border-radius:5px;width:70%;max-width:500px;overflow-y:auto;margin-bottom:20px}.tasks-modal-container{display:flex;flex-direction:column}.new-task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:10px}.new-task .input-group{margin-bottom:10px;display:flex}.new-task .task-input{font-size:14px;height:40px;width:100%;padding:0 10px;flex:1}.new-task .action-container{align-items:center;display:flex;justify-content:space-between;width:100%}.new-task .custom-container{flex:1}.new-task button{padding:0px 10px}.new-task .priority-container,.new-task .date-container{flex:1}#calendarContainer{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%}.calendar-header{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;font-weight:bold}.calendar-header button{background-color:rgba(0,0,0,0);color:#000;border:none;transition:none;align-items:center;padding:0;margin:0;cursor:pointer}.calendar-header button:hover,.calendar-header button:focus{background-color:rgba(0,0,0,0);color:#666}.weekdays-header{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.weekdays-header>div{display:flex;align-items:center;justify-content:center;margin:0;padding:0}.calendar-dates-container{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.calendar-day{width:100%;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;margin:0;padding:0}.calendar-day.has-tasks{background-color:#e74c3c;color:#fff;cursor:pointer}.calendar-day.out-of-month{color:gray}.close-modal-button{display:flex;align-items:center;justify-content:center;height:30px}#createProjectContainer{display:flex;align-items:center;flex-direction:column}#createProjectContainer input[type=text]{flex:1;margin-right:10px;height:30px;padding:0 10px}#createProjectContainer button{background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}#projectInputContainer{display:flex;align-items:center;justify-content:center;margin-bottom:10px}.input-and-buttons-container{display:flex;align-items:center}.project-container{display:grid;grid-template-columns:1fr;gap:10px}#createProjectButton{margin-bottom:20px}.project-item{background-color:#fff;padding:10px 20px;border-radius:10px;display:flex;flex-direction:row;align-items:center;width:100%;min-width:300px;margin:10px 0;justify-content:space-between}.project-item .text-container{flex:1;white-space:nowrap}.project-item .buttons-container{display:flex;align-items:center;justify-content:flex-end}.project-item .buttons-container button{min-width:60px}.project-item .buttons-container button:not(:first-child){margin-left:5px}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"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",sourcesContent:['// Variables\n$bg-color-main: #f4f4f4\n$bg-color-aside: #2c3e50\n$bg-color-button: #e74c3c\n$color-main: #333\n$color-inverse: #ecf0f1\n$font-main: \'Arial\', sans-serif\n$common-height: 30px\n\n// Basic reset and global settings\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: $font-main\n\nbody\n  background-color: $bg-color-main\n  color: $color-main\n  padding: 10%\n\n// Hamburger Menu Styles\n.hamburger-menu\n  background: none\n  border: none\n  font-size: 2em\n  cursor: pointer\n  color: $color-main\n  margin-right: 20px\n  padding: 0\n  display: inline\n  outline: none\n  transition: none\n  min-width: 0\n\n  &:hover, &:focus\n    color: blue\n    border: none\n    outline: none\n    background: none\n\n\n// Style for hidden sidebar\naside.hidden\n  display: none\n\n#title\n  max-width: 1200px\n  margin: 40px auto\n\n// Header styles\n#app-title\n  font-family: \'Courier New\', Courier, monospace\n  font-size: 2em\n  font-weight: bold\n\n// Main structure\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\n  // Sidebar\n  aside\n    width: 250px\n    background-color: $bg-color-aside\n    color: $color-inverse\n    padding: 20px\n\n    ul, li, .sub-menu li\n      list-style-type: none\n      margin-top: 10px\n      margin-bottom: 10px\n      font-size: 1em\n      line-height: 1.5em\n      cursor: pointer\n\n    // Projects Menu\n    #togglePriorities\n      cursor: pointer\n      display: block\n\n      &:before\n        content: ">"\n        display: inline-block\n        margin-right: 5px\n        font-weight: bold\n\n    li.sub-menu-opened\n      #togglePriorities:before\n        content: "v"\n\n  .sub-menu\n    margin-left: 20px\n    display: none\n\n  // Main content\n  main\n    flex: 1\n    background-color: $color-inverse\n    padding: 20px\n\n// Common style\n.custom-container\n  background-color: blue\n  padding: 5px 10px\n  border-radius: 5px\n  height: $common-height\n  display: flex\n  align-items: center\n  justify-content: center\n  \n  label, span\n    color: $color-inverse\n    line-height: 20px\n    white-space: nowrap\n    overflow: hidden\n    text-overflow: ellipsis\n\n  span\n    font-size: 0.8em\n\n.buttons-container\n  display: flex\n\nbutton\n  height: $common-height\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  margin: 5px\n  min-width: 100px\n  font-size: 14px\n  text-align: center\n  display: flex\n  align-items: center\n  justify-content: center\n\n  &.add-button\n    margin-right: 10px\n\n  &:hover\n    background-color: darken($bg-color-button, 10%)\n\n#addTaskButton\n  display: flex\n  align-items: center\n  justify-content: center\n\n// Saved Tasks Styles\n.task, .new-task\n  .custom-container\n    align-items: center\n    display: flex\n    margin-right: 10px\n\n    label\n      margin-right: 5px\n\n    span\n      font-size: 14px\n\n\n.task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 20px\n\n  .task-text\n    font-size: 16px\n    font-weight: bold\n    margin-bottom: 10px\n\n  .task-details\n    align-items: center\n    display: flex\n    justify-content: space-between\n\n    > *\n      flex: 1\n\n  .priority-container\n    order: 1\n  \n  .date-container\n    order: 2\n\n  .complete-button\n    background-color: #e74c3c\n    border: none\n    border-radius: 5px\n    color: #fff\n    cursor: pointer\n    padding: 5px 10px\n    transition: background-color 0.3s ease\n    order: 3\n\n    &:hover\n      background-color: darken(#e74c3c, 10%)\n\n.tasks-modal\n    position: fixed\n    top: 0\n    left: 0\n    width: 100%\n    height: 100%\n    background-color: rgba(0, 0, 0, 0.7)\n    display: flex\n    justify-content: center\n    align-items: center\n    z-index: 1000 // para asegurarse de que se muestre por encima de otros elementos\n\n    .close-button\n      display: flex\n      justify-content: center\n      align-items: center\n\n.tasks-modal > div\n  background-color: white\n  padding: 20px\n  border-radius: 5px\n  width: 70%\n  max-width: 500px\n  overflow-y: auto // para que se pueda desplazar si hay muchas tareas\n  margin-bottom: 20px\n\n\n.tasks-modal-container  // Añade el nuevo estilo aquí\n    display: flex\n    flex-direction: column      \n\n\n// New Task Styles\n.new-task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 10px\n\n  .input-group\n    margin-bottom: 10px\n    display: flex \n\n  .task-input\n    font-size: 14px\n    height: 40px\n    width: 100%\n    padding: 0 10px\n    flex: 1\n\n  .action-container\n    align-items: center\n    display: flex\n    justify-content: space-between\n    width: 100%\n\n  .custom-container\n    flex: 1\n\n  button\n    padding: 0px 10px\n\n  .priority-container, .date-container\n    flex: 1\n\n// Calendar styles\n#calendarContainer\n  display: flex\n  flex-direction: column\n  align-items: center\n  gap: 10px\n  width: 100%\n\n.calendar-header\n  display: flex\n  justify-content: space-between\n  align-items: center\n  padding: 5px 10px\n  font-weight: bold\n\n  button\n    background-color: transparent\n    color: #000\n    border: none\n    transition: none\n    align-items: center\n    padding: 0\n    margin: 0\n    cursor: pointer\n\n    &:hover, &:focus\n      background-color: transparent\n      color: #666\n\n.weekdays-header\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n  > div\n    display: flex\n    align-items: center\n    justify-content: center\n    margin: 0\n    padding: 0\n\n.calendar-dates-container\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n.calendar-day\n  width: 100%\n  height: 40px\n  display: flex\n  align-items: center\n  justify-content: center\n  border: 1px solid #ccc\n  margin: 0\n  padding: 0\n\n  &.has-tasks\n    background-color: #e74c3c\n    color: #fff\n    cursor: pointer\n\n  &.out-of-month\n    color: gray\n\n\n.close-modal-button\n  display: flex\n  align-items: center\n  justify-content: center\n  height: 30px\n\n\n// Projects Styles\n\n#createProjectContainer\n  display: flex // Para que los elementos se muestren en línea\n  align-items: center // Para centrar verticalmente los elementos\n  flex-direction: column\n\n#createProjectContainer input[type="text"]\n  flex: 1 // El input ocupará todo el espacio disponible\n  margin-right: 10px // Espacio entre el input y los botones\n  height: $common-height\n  padding: 0 10px\n\n#createProjectContainer button\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  font-size: 14px\n  text-align: center\n  display: flex\n  align-items: center\n  justify-content: center\n  flex-direction: column\n\n#projectInputContainer\n  display: flex\n  align-items: center\n  justify-content: center\n  margin-bottom: 10px\n\n.input-and-buttons-container\n  display: flex\n  align-items: center\n\n.project-container\n  display: grid\n  grid-template-columns: 1fr   // Cada proyecto toma el mismo espacio\n  gap: 10px\n\n#createProjectButton\n  margin-bottom: 20px\n\n.project-item\n  background-color: white\n  padding: 10px 20px\n  border-radius: 10px\n  display: flex\n  flex-direction: row  // Alinea los elementos en una fila\n  align-items: center\n  width: 100%\n  min-width: 300px\n  margin: 10px 0\n  // haz que los elementos de dentro tengan un espacio de manera que los botonos (button) vayan a la derecha del todo\n  justify-content: space-between\n\n  .text-container\n    flex: 1             // El contenedor de texto ocupa el espacio restante\n    white-space: nowrap // Evita que el texto se desborde\n\n  .buttons-container\n    display: flex\n    align-items: center\n    justify-content: flex-end  // Alinea los botones a la derecha\n\n    button\n      min-width: 60px\n\n    button:not(:first-child)  // Aplica estilo a todos los botones excepto el primero (Delete)\n      margin-left: 5px  // Establece un pequeño margen entre ellos\n'],sourceRoot:""}]);const r=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,A,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),A&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=A):d[4]="".concat(A)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(A," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],r=0;r<e.length;r++){var c=e[r],s=o.base?c[0]+o.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=t(l),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(C);else{var u=A(C,o);o.byIndex=r,n.splice(r,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function A(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,A){var a=o(e=e||[],A=A||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var r=t(a[i]);n[r].references--}for(var c=o(e,A),s=0;s<a.length;s++){var d=t(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var A=n[o];if(void 0!==A)return A.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),A=t.n(o),a=t(569),i=t.n(a),r=t(565),c=t.n(r),s=t(216),d=t.n(s),l=t(589),p=t.n(l),C=t(791),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=d(),n()(C.Z,u),C.Z&&C.Z.locals&&C.Z.locals;const m="tasks";function g(e){localStorage.setItem(m,JSON.stringify(e))}function f(){const e=localStorage.getItem(m);return e?JSON.parse(e).filter((e=>e.timestamp)):[]}const x="projects";function b(e){localStorage.setItem(x,JSON.stringify(e))}function h(){const e=localStorage.getItem(x);return e?JSON.parse(e):[]}function y(e){const n=document.createElement("div");n.classList.add("task"),n.dataset.timestamp=e.timestamp;const t=document.createElement("div");t.classList.add("task-text"),t.textContent=e.text,n.appendChild(t);const o=document.createElement("div");o.classList.add("task-details");const A=document.createElement("div");A.classList.add("custom-container","priority-container");const a=document.createElement("span");if(a.textContent=e.priority,A.appendChild(a),e.date&&""!==e.date.trim()){const n=document.createElement("div");n.classList.add("custom-container","date-container");const t=document.createElement("span");t.textContent=e.date,n.appendChild(t),o.appendChild(n)}const i=document.createElement("button");return i.classList.add("complete-button"),i.textContent="Complete",i.addEventListener("click",(function(){E(this)})),o.appendChild(A),o.appendChild(i),n.appendChild(o),n}function E(e){const n=e.parentElement.parentElement,t=n.dataset.timestamp;n.remove(),g(f().filter((e=>e.timestamp&&e.timestamp.toString()!==t)))}function k(e,n){const t=function(e){const n=document.createElement("div");n.className="project-item";const t=document.createElement("span");t.textContent=e;const o=function(e,n){const t=document.createElement("div");t.className="buttons-container";const o=document.createElement("button");o.textContent="View",o.addEventListener("click",(()=>{}));const A=document.createElement("button");return A.textContent="Delete",A.id=`deleteProjectButton_${e}`,A.addEventListener("click",(()=>{n.remove(),function(e){console.log(`Dentro de removeProjectFromLocalStorage para: ${e}`);const n=h();console.log("Antes de eliminar:",n);const t=n.indexOf(e);t>-1?(n.splice(t,1),b(n)):console.log(`El proyecto ${e} no fue encontrado`)}(e)})),t.appendChild(o),t.appendChild(A),t}(e,n);return n.appendChild(t),n.appendChild(o),n}(e);n.appendChild(t)}let B=!1;function v(e,n,t,o=new Date){e.innerHTML="",n.innerHTML="";const A=o.getMonth(),a=o.getFullYear();n.appendChild(function(e,n,t,o){const A=document.createElement("div");A.classList.add("calendar-header");const a=document.createElement("button");a.innerHTML="&lt;",a.addEventListener("click",(()=>{e.setMonth(e.getMonth()-1),v(t,n,o,e)}));const i=document.createElement("button");i.innerHTML="&gt;",i.addEventListener("click",(()=>{e.setMonth(e.getMonth()+1),v(t,n,o,e)}));const r=document.createElement("span");return r.textContent=`${e.toLocaleString("en-US",{month:"long"})} ${e.getFullYear()}`,A.appendChild(a),A.appendChild(r),A.appendChild(i),A}(o,n,e,t)),n.appendChild(function(){const e=document.createElement("div");return e.classList.add("weekdays-header"),["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach((n=>{const t=document.createElement("div");t.textContent=n,e.appendChild(t)})),e}());const i=function(e,n){const t=function(e,n){let t=new Date(e,n,1).getDay();return 0===t?6:t-1}(e,n),o=new Date(e,n+1,0).getDate(),A=[];for(let o=0;o<t;o++){const a=new Date(e,n,o-t+1).getDate();A.push({day:a,outOfCurrentMonth:!0})}for(let e=1;e<=o;e++)A.push({day:e});const a=function(e,n){let t=new Date(e,n+1,0).getDay();return 0===t?6:t-1}(e,n);for(let t=a+1;t<7;t++){const o=new Date(e,n+1,t-a).getDate();A.push({day:o,outOfCurrentMonth:!0})}return A}(a,A),r=document.createElement("div");r.classList.add("calendar-dates-container"),i.forEach((({day:e,outOfCurrentMonth:n})=>{const o=document.createElement("div");if(o.classList.add("calendar-day"),n&&o.classList.add("out-of-month"),o.textContent=e,!n){const n=t.filter((n=>{const t=new Date(n.date);return t.getDate()===e&&t.getMonth()===A&&t.getFullYear()===a}));n.length>0&&(o.classList.add("has-tasks"),o.addEventListener("click",(()=>{!function(e){const n=document.createElement("div");n.classList.add("tasks-modal","tasks-modal-container");const t=document.createElement("div");n.appendChild(t),e.forEach((e=>{const n=y(e);t.appendChild(n)}));const o=document.createElement("button");o.classList.add("close-modal-button"),o.textContent="Close",o.addEventListener("click",(()=>{n.remove()})),n.appendChild(o),document.body.appendChild(n)}(n)})))}r.appendChild(o)})),n.appendChild(r),document.getElementById("addTaskButton").style.display="none"}const w=["High","Medium","Low"];document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("createProjectButton"),n=document.getElementById("createProjectContainer");!function(e){h().forEach((n=>{k(n,e)}))}(n),function(e,n){e.addEventListener("click",(()=>{!function(e,n){if(B)return;const t=document.createElement("input");t.type="text",t.placeholder="Project Name";const o=document.createElement("button");o.textContent="Add",o.addEventListener("click",(()=>{const e=t.value;!function(e){const n=h();console.log("Antes de añadir:",n),n.push(e),b(n),console.log("Después de añadir:",n)}(e),k(e,n),t.value="",i.remove(),B=!1}));const A=document.createElement("button");A.textContent="Cancel",A.addEventListener("click",(()=>{i.remove(),B=!1}));const a=document.createElement("div");a.appendChild(o),a.appendChild(A);const i=document.createElement("div");i.className="input-and-buttons-container",i.appendChild(t),i.appendChild(a),e.insertAdjacentElement("afterend",i),t.style.display="block",a.style.display="flex",t.focus(),B=!0}(e,n)})),document.querySelector("#projectsMenuItem").addEventListener("click",(()=>{const e=document.getElementById("addTaskButton");e&&(e.style.display="none"),n.style.display="flex",document.getElementById("tasks").style.display="none"}))}(e,n)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("addTaskButton"),n=document.getElementById("createProjectButton");n.style.display="none";const t=document.getElementById("tasks");t.addEventListener("click",(e=>{e.target.classList.contains("complete-button")&&E(e.target)}));const o=f();for(const e of o)t.appendChild(y(e));e.addEventListener("click",(()=>{e.disabled=!0;const n=document.createElement("div");n.classList.add("new-task");const o=document.createElement("input");o.type="text",o.placeholder="Write your task here",o.classList.add("task-input");const A=document.createElement("div");A.classList.add("action-container");const a=document.createElement("div");a.classList.add("custom-container","priority-container");const i=document.createElement("label");i.textContent="Priority";const r=document.createElement("select");w.forEach((e=>{const n=document.createElement("option");n.value=e,n.textContent=e,r.appendChild(n)})),a.appendChild(i),a.appendChild(r);const c=document.createElement("div");c.classList.add("custom-container","date-container");const s=document.createElement("label");s.textContent="Date";const d=document.createElement("input");d.type="date",c.appendChild(s),c.appendChild(d);const l=document.createElement("div");l.classList.add("buttons-container");const p=document.createElement("button");p.textContent="Add",l.appendChild(p);const C=document.createElement("button");C.textContent="Cancel",l.appendChild(C);const u=document.createElement("div");u.classList.add("input-group"),u.appendChild(o),n.appendChild(u),A.appendChild(a),A.appendChild(c),A.appendChild(l),n.appendChild(A),p.addEventListener("click",(()=>{if(o.value){const A={timestamp:Date.now(),text:o.value,priority:r.value,date:d.value};t.appendChild(y(A));const a=f();a.push(A),g(a),n.remove(),e.disabled=!1}})),C.addEventListener("click",(()=>{n.remove(),e.disabled=!1})),t.prepend(n)}));const A=document.getElementById("togglePriorities"),a=document.querySelector(".sub-menu"),i=A.parentElement;document.querySelector("aside ul li:first-child").addEventListener("click",(function(){e.style.display="flex";const n=f(),t=document.getElementById("tasks");t.innerHTML="";for(const e of n)t.appendChild(y(e));t.style.display="block"})),A.addEventListener("click",(()=>{const e="block"===a.style.display;a.style.display=e?"none":"block",i.classList.toggle("sub-menu-opened",!e)})),a.addEventListener("click",(e=>{if("LI"===e.target.tagName){!function(e){const n=f().filter((n=>n.priority===e)),t=document.getElementById("tasks");t.innerHTML="";for(const e of n)t.appendChild(y(e));document.getElementById("addTaskButton").style.display="none"}(e.target.textContent),document.getElementById("tasks").style.display="block";const n=document.getElementById("createProjectContainer"),t=document.getElementById("calendarContainer");n.style.display="none",t.innerHTML=""}}));const r=document.querySelector("#projectsMenuItem"),c=document.getElementById("createProjectContainer");c.classList.add("project-container"),r.addEventListener("click",(()=>{console.log("Clicked on Projects"),e&&(e.style.display="none"),c.style.display="block",document.getElementById("tasks").style.display="none"}));const s=document.querySelector("aside ul li:nth-child(4)");s.addEventListener("click",v),s.addEventListener("click",(()=>{const e=f();v(document.getElementById("tasks"),document.getElementById("calendarContainer"),e)})),document.querySelectorAll("aside ul li").forEach((e=>{e.addEventListener("click",(e=>{const t=document.getElementById("calendarContainer");switch(e.target.textContent){case"Projects":n.style.display="block",c.style.display="block",t.innerHTML="";break;case"Dates":n.style.display="none",c.style.display="none";const e=f();v(document.getElementById("tasks"),t,e);break;default:n.style.display="none",c.style.display="none",t.innerHTML=""}}))}));const d=document.getElementById("toggleSidebar"),l=document.querySelector("aside");d.addEventListener("click",(()=>{l.classList.toggle("hidden")}))}))})()})();