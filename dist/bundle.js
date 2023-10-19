(()=>{"use strict";var n={791:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(537),A=t.n(o),a=t(645),i=t.n(a)()(A());i.push([n.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%;margin:0}.hamburger-menu{background:none;border:none;font-size:2em;cursor:pointer;color:#333;margin-right:20px;padding:0;display:inline;outline:none;transition:none;min-width:0}.hamburger-menu:hover,.hamburger-menu:focus{color:blue;border:none;outline:none;background:none}aside.hidden{display:none}#title{max-width:1200px;margin:40px auto}#app-title{font-family:"Courier New",Courier,monospace;font-size:2em;font-weight:bold}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}#app aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}#app aside ul,#app aside li,#app aside .sub-menu li{list-style-type:none;margin-top:10px;margin-bottom:10px;font-size:1em;line-height:1.5em;cursor:pointer}#app aside #togglePriorities{cursor:pointer;display:block}#app aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}#app aside li.sub-menu-opened #togglePriorities:before{content:"v"}#app .sub-menu{margin-left:20px;display:none}#app main{flex:1;background-color:#ecf0f1;padding:20px}.custom-container{background-color:blue;padding:5px 10px;border-radius:5px;height:30px;display:flex;align-items:center;justify-content:center}.custom-container label,.custom-container span{color:#ecf0f1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.custom-container span{font-size:.8em}.buttons-container{display:flex}button{height:30px;background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:5px;min-width:100px;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center}button.add-button{margin-right:10px}button:hover{background-color:#d62c1a}#addTaskButton{display:flex;align-items:center;justify-content:center}.task .custom-container,.new-task .custom-container{align-items:center;display:flex;margin-right:10px}.task .custom-container label,.new-task .custom-container label{margin-right:5px}.task .custom-container span,.new-task .custom-container span{font-size:14px}.task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:20px}.task .task-text{font-size:16px;font-weight:bold;margin-bottom:10px}.task .task-details{align-items:center;display:flex;justify-content:space-between}.task .task-details>*{flex:1}.task .priority-container{order:1}.task .date-container{order:2}.task .complete-button{background-color:#e74c3c;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:5px 10px;transition:background-color .3s ease;order:3}.task .complete-button:hover{background-color:#d62c1a}.tasks-modal{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);display:flex;justify-content:center;align-items:center;z-index:1000}.tasks-modal .close-button{display:flex;justify-content:center;align-items:center}.tasks-modal>div{background-color:#fff;padding:20px;border-radius:5px;width:70%;max-width:500px;overflow-y:auto;margin-bottom:20px}.tasks-modal-container{display:flex;flex-direction:column}.new-task{background-color:#fff;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1);margin:10px 0;padding:10px}.new-task .input-group{margin-bottom:10px;display:flex}.new-task .task-input{font-size:14px;height:40px;width:100%;padding:0 10px;flex:1}.new-task .action-container{align-items:center;display:flex;justify-content:space-between;width:100%}.new-task .custom-container{flex:1}.new-task button{padding:0px 10px}.new-task .priority-container,.new-task .date-container{flex:1}#calendarContainer{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%}.calendar-header{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;font-weight:bold}.calendar-header button{background-color:rgba(0,0,0,0);color:#000;border:none;transition:none;align-items:center;padding:0;margin:0;cursor:pointer}.calendar-header button:hover,.calendar-header button:focus{background-color:rgba(0,0,0,0);color:#666}.weekdays-header{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.weekdays-header>div{display:flex;align-items:center;justify-content:center;margin:0;padding:0}.calendar-dates-container{display:grid;grid-template-columns:repeat(7, 1fr);gap:10px;width:100%}.calendar-day{width:100%;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;margin:0;padding:0}.calendar-day.has-tasks{background-color:#e74c3c;color:#fff;cursor:pointer}.calendar-day.out-of-month{color:gray}.close-modal-button{display:flex;align-items:center;justify-content:center;height:30px}#createProjectContainer{display:flex;align-items:center;flex-direction:column}#createProjectContainer input[type=text]{flex:1;margin-right:10px;height:30px;padding:0 10px}#createProjectContainer button{background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}#projectInputContainer{display:flex;align-items:center;justify-content:center;margin-bottom:10px}.input-and-buttons-container{display:flex;align-items:center}.project-container{display:grid;grid-template-columns:1fr;gap:10px}#createProjectButton{margin-bottom:20px}.project-item{background-color:#fff;padding:10px 20px;border-radius:10px;display:flex;flex-direction:row;align-items:center;width:100%;min-width:300px;margin:10px 0;justify-content:space-between}.project-item .text-container{flex:1;white-space:nowrap}.project-item .buttons-container{display:flex;align-items:center;justify-content:flex-end}.project-item .buttons-container button{min-width:60px}.project-item .buttons-container button:not(:first-child){margin-left:5px}footer{text-align:center;position:fixed;bottom:0;left:0;width:100%;background-color:#f0f0f0;padding:10px 0}footer p{margin:20px 0;font-size:18px;display:flex;justify-content:center;align-items:center;gap:10px}footer a{text-decoration:none;font-size:18px;color:#000}footer .github-icon{font-size:24px;margin-right:30px}i{margin-right:10px}#menuTasks::before{content:"";font-family:"Font Awesome 5 Free";padding-right:8px;font-weight:900}#projectsMenuItem::before{content:"";font-family:"Font Awesome 5 Free";padding-right:8px;font-weight:900}#menuDates::before{content:"";font-family:"Font Awesome 5 Free";padding-right:8px;font-weight:900}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"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",sourcesContent:['// Variables\n$bg-color-main: #f4f4f4\n$bg-color-aside: #2c3e50\n$bg-color-button: #e74c3c\n$color-main: #333\n$color-inverse: #ecf0f1\n$font-main: \'Arial\', sans-serif\n$common-height: 30px\n\n// Basic reset and global settings\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: $font-main\n\nbody\n  background-color: $bg-color-main\n  color: $color-main\n  padding: 10%\n  margin: 0\n\n// Hamburger Menu Styles\n.hamburger-menu\n  background: none\n  border: none\n  font-size: 2em\n  cursor: pointer\n  color: $color-main\n  margin-right: 20px\n  padding: 0\n  display: inline\n  outline: none\n  transition: none\n  min-width: 0\n\n  &:hover, &:focus\n    color: blue\n    border: none\n    outline: none\n    background: none\n\n\n// Style for hidden sidebar\naside.hidden\n  display: none\n\n#title\n  max-width: 1200px\n  margin: 40px auto\n\n// Header styles\n#app-title\n  font-family: \'Courier New\', Courier, monospace\n  font-size: 2em\n  font-weight: bold\n\n// Main structure\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\n  // Sidebar\n  aside\n    width: 250px\n    background-color: $bg-color-aside\n    color: $color-inverse\n    padding: 20px\n\n    ul, li, .sub-menu li\n      list-style-type: none\n      margin-top: 10px\n      margin-bottom: 10px\n      font-size: 1em\n      line-height: 1.5em\n      cursor: pointer\n\n    // Projects Menu\n    #togglePriorities\n      cursor: pointer\n      display: block\n\n      &:before\n        content: ">"\n        display: inline-block\n        margin-right: 5px\n        font-weight: bold\n\n    li.sub-menu-opened\n      #togglePriorities:before\n        content: "v"\n\n  .sub-menu\n    margin-left: 20px\n    display: none\n\n  // Main content\n  main\n    flex: 1\n    background-color: $color-inverse\n    padding: 20px\n\n// Common style\n.custom-container\n  background-color: blue\n  padding: 5px 10px\n  border-radius: 5px\n  height: $common-height\n  display: flex\n  align-items: center\n  justify-content: center\n  \n  label, span\n    color: $color-inverse\n    line-height: 20px\n    white-space: nowrap\n    overflow: hidden\n    text-overflow: ellipsis\n\n  span\n    font-size: 0.8em\n\n.buttons-container\n  display: flex\n\nbutton\n  height: $common-height\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  margin: 5px\n  min-width: 100px\n  font-size: 14px\n  text-align: center\n  display: flex\n  align-items: center\n  justify-content: center\n\n  &.add-button\n    margin-right: 10px\n\n  &:hover\n    background-color: darken($bg-color-button, 10%)\n\n#addTaskButton\n  display: flex\n  align-items: center\n  justify-content: center\n\n// Saved Tasks Styles\n.task, .new-task\n  .custom-container\n    align-items: center\n    display: flex\n    margin-right: 10px\n\n    label\n      margin-right: 5px\n\n    span\n      font-size: 14px\n\n\n.task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 20px\n\n  .task-text\n    font-size: 16px\n    font-weight: bold\n    margin-bottom: 10px\n\n  .task-details\n    align-items: center\n    display: flex\n    justify-content: space-between\n\n    > *\n      flex: 1\n\n  .priority-container\n    order: 1\n  \n  .date-container\n    order: 2\n\n  .complete-button\n    background-color: #e74c3c\n    border: none\n    border-radius: 5px\n    color: #fff\n    cursor: pointer\n    padding: 5px 10px\n    transition: background-color 0.3s ease\n    order: 3\n\n    &:hover\n      background-color: darken(#e74c3c, 10%)\n\n.tasks-modal\n    position: fixed\n    top: 0\n    left: 0\n    width: 100%\n    height: 100%\n    background-color: rgba(0, 0, 0, 0.7)\n    display: flex\n    justify-content: center\n    align-items: center\n    z-index: 1000 // para asegurarse de que se muestre por encima de otros elementos\n\n    .close-button\n      display: flex\n      justify-content: center\n      align-items: center\n\n.tasks-modal > div\n  background-color: white\n  padding: 20px\n  border-radius: 5px\n  width: 70%\n  max-width: 500px\n  overflow-y: auto // para que se pueda desplazar si hay muchas tareas\n  margin-bottom: 20px\n\n\n.tasks-modal-container  // Añade el nuevo estilo aquí\n    display: flex\n    flex-direction: column      \n\n\n// New Task Styles\n.new-task\n  background-color: #fff\n  border-radius: 5px\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n  margin: 10px 0\n  padding: 10px\n\n  .input-group\n    margin-bottom: 10px\n    display: flex \n\n  .task-input\n    font-size: 14px\n    height: 40px\n    width: 100%\n    padding: 0 10px\n    flex: 1\n\n  .action-container\n    align-items: center\n    display: flex\n    justify-content: space-between\n    width: 100%\n\n  .custom-container\n    flex: 1\n\n  button\n    padding: 0px 10px\n\n  .priority-container, .date-container\n    flex: 1\n\n// Calendar styles\n#calendarContainer\n  display: flex\n  flex-direction: column\n  align-items: center\n  gap: 10px\n  width: 100%\n\n.calendar-header\n  display: flex\n  justify-content: space-between\n  align-items: center\n  padding: 5px 10px\n  font-weight: bold\n\n  button\n    background-color: transparent\n    color: #000\n    border: none\n    transition: none\n    align-items: center\n    padding: 0\n    margin: 0\n    cursor: pointer\n\n    &:hover, &:focus\n      background-color: transparent\n      color: #666\n\n.weekdays-header\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n  > div\n    display: flex\n    align-items: center\n    justify-content: center\n    margin: 0\n    padding: 0\n\n.calendar-dates-container\n  display: grid\n  grid-template-columns: repeat(7, 1fr)\n  gap: 10px\n  width: 100%\n\n.calendar-day\n  width: 100%\n  height: 40px\n  display: flex\n  align-items: center\n  justify-content: center\n  border: 1px solid #ccc\n  margin: 0\n  padding: 0\n\n  &.has-tasks\n    background-color: #e74c3c\n    color: #fff\n    cursor: pointer\n\n  &.out-of-month\n    color: gray\n\n\n.close-modal-button\n  display: flex\n  align-items: center\n  justify-content: center\n  height: 30px\n\n\n// Projects Styles\n\n#createProjectContainer\n  display: flex // Para que los elementos se muestren en línea\n  align-items: center // Para centrar verticalmente los elementos\n  flex-direction: column\n\n#createProjectContainer input[type="text"]\n  flex: 1 // El input ocupará todo el espacio disponible\n  margin-right: 10px // Espacio entre el input y los botones\n  height: $common-height\n  padding: 0 10px\n\n#createProjectContainer button\n  background-color: $bg-color-button\n  color: $color-inverse\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n  font-size: 14px\n  text-align: center\n  display: flex\n  align-items: center\n  justify-content: center\n  flex-direction: column\n\n#projectInputContainer\n  display: flex\n  align-items: center\n  justify-content: center\n  margin-bottom: 10px\n\n.input-and-buttons-container\n  display: flex\n  align-items: center\n\n.project-container\n  display: grid\n  grid-template-columns: 1fr   // Cada proyecto toma el mismo espacio\n  gap: 10px\n\n#createProjectButton\n  margin-bottom: 20px\n\n.project-item\n  background-color: white\n  padding: 10px 20px\n  border-radius: 10px\n  display: flex\n  flex-direction: row  // Alinea los elementos en una fila\n  align-items: center\n  width: 100%\n  min-width: 300px\n  margin: 10px 0\n  // haz que los elementos de dentro tengan un espacio de manera que los botonos (button) vayan a la derecha del todo\n  justify-content: space-between\n\n  .text-container\n    flex: 1             // El contenedor de texto ocupa el espacio restante\n    white-space: nowrap // Evita que el texto se desborde\n\n  .buttons-container\n    display: flex\n    align-items: center\n    justify-content: flex-end  // Alinea los botones a la derecha\n\n    button\n      min-width: 60px\n\n    button:not(:first-child)  // Aplica estilo a todos los botones excepto el primero (Delete)\n      margin-left: 5px  // Establece un pequeño margen entre ellos\n\n\n// Estilo del footer\nfooter\n  text-align: center\n  position: fixed\n  bottom: 0\n  left: 0\n  width: 100%\n  background-color: #f0f0f0\n  padding: 10px 0\n\n  p\n    margin: 20px 0 // Add margin to the top and bottom\n    font-size: 18px\n    display: flex\n    // flex-direction: column // Cambiar la dirección de flexbox a columna\n    justify-content: center // Centrar horizontalmente\n    align-items: center // Centrar verticalmente\n    gap: 10px // Agregar espacio (gap) entre elementos\n\n\n\n  a\n    text-decoration: none\n    font-size: 18px\n    color: black\n\n  // Estilo del icono de GitHub\n  .github-icon\n    font-size: 24px\n    margin-right: 30px // Agregar margen a la derecha del icono\n\ni\n  margin-right: 10px\n\n\n#menuTasks::before\n  content: "\\f0ca"\n  font-family: "Font Awesome 5 Free"\n  padding-right: 8px\n  font-weight: 900\n\n#projectsMenuItem::before\n  content: "\\f07b"\n  font-family: "Font Awesome 5 Free"\n  padding-right: 8px\n  font-weight: 900\n\n#menuDates::before\n  content: "\\f073"\n  font-family: "Font Awesome 5 Free"\n  padding-right: 8px\n  font-weight: 900'],sourceRoot:""}]);const r=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,A,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),A&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=A):d[4]="".concat(A)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(A," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],r=0;r<n.length;r++){var c=n[r],s=o.base?c[0]+o.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=t(l),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(C);else{var u=A(C,o);o.byIndex=r,e.splice(r,0,{identifier:l,updater:u,references:1})}i.push(l)}return i}function A(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,A){var a=o(n=n||[],A=A||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var r=t(a[i]);e[r].references--}for(var c=o(n,A),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var A=void 0!==t.layer;A&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,A&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var A=e[o];if(void 0!==A)return A.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),A=t.n(o),a=t(569),i=t.n(a),r=t(565),c=t.n(r),s=t(216),d=t.n(s),l=t(589),p=t.n(l),C=t(791),u={};u.styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=A(),u.insertStyleElement=d(),e()(C.Z,u),C.Z&&C.Z.locals&&C.Z.locals;const m="tasks";function g(n){localStorage.setItem(m,JSON.stringify(n))}function f(){const n=localStorage.getItem(m);return n?JSON.parse(n).filter((n=>n.timestamp)):[]}const x="projects";function b(n){localStorage.setItem(x,JSON.stringify(n))}function h(){const n=localStorage.getItem(x);return n?JSON.parse(n):[]}function y(){document.getElementById("addTaskButton").style.display="flex";const n=f(),e=document.getElementById("tasks");e.innerHTML="";for(const t of n)e.appendChild(E(t));e.style.display="block"}function E(n){const e=document.createElement("div");e.classList.add("task"),e.dataset.timestamp=n.timestamp;const t=document.createElement("div");t.classList.add("task-text"),t.textContent=n.text,e.appendChild(t);const o=document.createElement("div");o.classList.add("task-details");const A=document.createElement("div");A.classList.add("custom-container","priority-container");const a=document.createElement("span");if(a.textContent=n.priority,A.appendChild(a),n.date&&""!==n.date.trim()){const e=document.createElement("div");e.classList.add("custom-container","date-container");const t=document.createElement("span");t.textContent=n.date,e.appendChild(t),o.appendChild(e)}const i=document.createElement("button");return i.classList.add("complete-button"),i.textContent="Complete",i.addEventListener("click",(function(){B(this)})),o.appendChild(A),o.appendChild(i),e.appendChild(o),e}function B(n){const e=n.parentElement.parentElement,t=e.dataset.timestamp;e.remove(),g(f().filter((n=>n.timestamp&&n.timestamp.toString()!==t)))}function k(n,e){const t=function(n){const e=document.createElement("div");e.className="project-item";const t=document.createElement("span");t.textContent=n;const o=function(n,e){const t=document.createElement("div");t.className="buttons-container";const o=document.createElement("button");o.textContent="View",o.addEventListener("click",(()=>{}));const A=document.createElement("button");return A.textContent="Delete",A.id=`deleteProjectButton_${n}`,A.addEventListener("click",(()=>{e.remove(),function(n){console.log(`Dentro de removeProjectFromLocalStorage para: ${n}`);const e=h();console.log("Antes de eliminar:",e);const t=e.indexOf(n);t>-1?(e.splice(t,1),b(e)):console.log(`El proyecto ${n} no fue encontrado`)}(n)})),t.appendChild(o),t.appendChild(A),t}(n,e);return e.appendChild(t),e.appendChild(o),e}(n);e.appendChild(t)}let v=!1;function w(n,e,t,o=new Date){n.innerHTML="",e.innerHTML="";const A=o.getMonth(),a=o.getFullYear();e.appendChild(function(n,e,t,o){const A=document.createElement("div");A.classList.add("calendar-header");const a=document.createElement("button");a.innerHTML="&lt;",a.addEventListener("click",(()=>{n.setMonth(n.getMonth()-1),w(t,e,o,n)}));const i=document.createElement("button");i.innerHTML="&gt;",i.addEventListener("click",(()=>{n.setMonth(n.getMonth()+1),w(t,e,o,n)}));const r=document.createElement("span");return r.textContent=`${n.toLocaleString("en-US",{month:"long"})} ${n.getFullYear()}`,A.appendChild(a),A.appendChild(r),A.appendChild(i),A}(o,e,n,t)),e.appendChild(function(){const n=document.createElement("div");return n.classList.add("weekdays-header"),["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach((e=>{const t=document.createElement("div");t.textContent=e,n.appendChild(t)})),n}());const i=function(n,e){const t=function(n,e){let t=new Date(n,e,1).getDay();return 0===t?6:t-1}(n,e),o=new Date(n,e+1,0).getDate(),A=[];for(let o=0;o<t;o++){const a=new Date(n,e,o-t+1).getDate();A.push({day:a,outOfCurrentMonth:!0})}for(let n=1;n<=o;n++)A.push({day:n});const a=function(n,e){let t=new Date(n,e+1,0).getDay();return 0===t?6:t-1}(n,e);for(let t=a+1;t<7;t++){const o=new Date(n,e+1,t-a).getDate();A.push({day:o,outOfCurrentMonth:!0})}return A}(a,A),r=document.createElement("div");r.classList.add("calendar-dates-container"),i.forEach((({day:n,outOfCurrentMonth:e})=>{const o=document.createElement("div");if(o.classList.add("calendar-day"),e&&o.classList.add("out-of-month"),o.textContent=n,!e){const e=t.filter((e=>{const t=new Date(e.date);return t.getDate()===n&&t.getMonth()===A&&t.getFullYear()===a}));e.length>0&&(o.classList.add("has-tasks"),o.addEventListener("click",(()=>{!function(n){const e=document.createElement("div");e.classList.add("tasks-modal","tasks-modal-container");const t=document.createElement("div");e.appendChild(t),n.forEach((n=>{const e=E(n);t.appendChild(e)}));const o=document.createElement("button");o.classList.add("close-modal-button"),o.textContent="Close",o.addEventListener("click",(()=>{e.remove()})),e.appendChild(o),document.body.appendChild(e)}(e)})))}r.appendChild(o)})),e.appendChild(r),document.getElementById("addTaskButton").style.display="none"}const j=["High","Medium","Low"];function L(n){n.target.classList.contains("complete-button")&&B(n.target)}function F(){const n=document.getElementById("addTaskButton");document.getElementById("createProjectButton").style.display="none";const e=document.getElementById("tasks");e.addEventListener("click",(n=>{n.target.classList.contains("complete-button")&&B(n.target)}));const t=f();for(const n of t)e.appendChild(E(n));n.addEventListener("click",(()=>{n.disabled=!0;const t=document.createElement("div");t.classList.add("new-task");const o=document.createElement("input");o.type="text",o.placeholder="Write your task here",o.classList.add("task-input");const A=document.createElement("div");A.classList.add("action-container");const a=document.createElement("div");a.classList.add("custom-container","priority-container");const i=document.createElement("label");i.textContent="Priority";const r=document.createElement("select");j.forEach((n=>{const e=document.createElement("option");e.value=n,e.textContent=n,r.appendChild(e)})),a.appendChild(i),a.appendChild(r);const c=document.createElement("div");c.classList.add("custom-container","date-container");const s=document.createElement("label");s.textContent="Date";const d=document.createElement("input");d.type="date",c.appendChild(s),c.appendChild(d);const l=document.createElement("div");l.classList.add("buttons-container");const p=document.createElement("button");p.textContent="Add",l.appendChild(p);const C=document.createElement("button");C.textContent="Cancel",l.appendChild(C);const u=document.createElement("div");u.classList.add("input-group"),u.appendChild(o),t.appendChild(u),A.appendChild(a),A.appendChild(c),A.appendChild(l),t.appendChild(A),p.addEventListener("click",(()=>{if(o.value){const A={timestamp:Date.now(),text:o.value,priority:r.value,date:d.value};e.appendChild(E(A));const a=f();a.push(A),g(a),t.remove(),n.disabled=!1}})),C.addEventListener("click",(()=>{t.remove(),n.disabled=!1})),e.prepend(t)}))}document.addEventListener("DOMContentLoaded",(()=>{!function(n,e){n.addEventListener("click",(()=>{!function(n,e){if(v)return;const t=document.createElement("input");t.type="text",t.placeholder="Project Name";const o=document.createElement("button");o.textContent="Add",o.addEventListener("click",(()=>{const n=t.value.trim();n?(function(n){const e=h();console.log("Antes de añadir:",e),e.push(n),b(e),console.log("Después de añadir:",e)}(n),k(n,e),t.value="",i.remove(),v=!1):alert("Please, enter a project title.")}));const A=document.createElement("button");A.textContent="Cancel",A.addEventListener("click",(()=>{i.remove(),v=!1}));const a=document.createElement("div");a.appendChild(o),a.appendChild(A);const i=document.createElement("div");i.className="input-and-buttons-container",i.appendChild(t),i.appendChild(a),n.insertAdjacentElement("afterend",i),t.style.display="block",a.style.display="flex",t.focus(),v=!0}(n,e)})),document.querySelector("#projectsMenuItem").addEventListener("click",(()=>{const n=document.getElementById("addTaskButton");n&&(n.style.display="none"),e.style.display="flex",document.getElementById("tasks").style.display="none"}))}(document.getElementById("createProjectButton"),document.getElementById("createProjectContainer")),function(){const n=document.getElementById("addTaskButton"),e=document.getElementById("tasks");n.style.display="none",e.addEventListener("click",L),function(n){const e=f();for(const t of e)n.appendChild(E(t))}(e),n.addEventListener("click",F)}(),function(){const n=document.getElementById("togglePriorities"),e=document.querySelector(".sub-menu"),t=n.parentElement;document.querySelector("aside ul li:first-child").addEventListener("click",y),n.addEventListener("click",(()=>{const n="block"===e.style.display;e.style.display=n?"none":"block",t.classList.toggle("sub-menu-opened",!n)})),e.addEventListener("click",(n=>{if("LI"===n.target.tagName){!function(n){const e=f().filter((e=>e.priority===n)),t=document.getElementById("tasks");t.innerHTML="";for(const n of e)t.appendChild(E(n));document.getElementById("addTaskButton").style.display="none"}(n.target.textContent),document.getElementById("tasks").style.display="block";const e=document.getElementById("createProjectContainer"),t=document.getElementById("calendarContainer");e.style.display="none",t.innerHTML=""}}))}(),function(){const n=document.querySelector("#projectsMenuItem");let e=!1;const t=document.getElementById("createProjectContainer");t.classList.add("project-container"),n.addEventListener("click",(()=>{if(!e){const n=document.getElementById("addTaskButton");n&&(n.style.display="none"),t.style.display="block",function(n){document.getElementById("projectsList").innerHTML="",h().forEach((e=>{k(e,n)}))}(t),document.getElementById("tasks").style.display="none",e=!0}}))}(),function(){const n=document.querySelector("aside ul li:nth-child(4)");n.addEventListener("click",w),n.addEventListener("click",(()=>{const n=f();w(document.getElementById("tasks"),document.getElementById("calendarContainer"),n)}))}(),document.querySelectorAll("aside ul li").forEach((n=>{n.addEventListener("click",(n=>{const e=document.getElementById("calendarContainer");switch(n.target.textContent){case"Projects":createProjectButton.style.display="block",createProjectContainer.style.display="block",e.innerHTML="";break;case"Dates":createProjectButton.style.display="none",createProjectContainer.style.display="none";const n=f();w(document.getElementById("tasks"),e,n);break;default:createProjectButton.style.display="none",createProjectContainer.style.display="none",e.innerHTML=""}}))})),function(){const n=document.getElementById("toggleSidebar"),e=document.querySelector("aside");n.addEventListener("click",(()=>{e.classList.toggle("hidden")}))}()}))})()})();