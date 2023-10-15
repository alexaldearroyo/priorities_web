(()=>{"use strict";var e={791:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(537),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}aside ul{list-style-type:none}aside li,aside .sub-menu li{margin-bottom:10px;font-size:1em;line-height:1.5em}aside #togglePriorities{cursor:pointer;display:block}aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}aside li.sub-menu-opened #togglePriorities:before{content:"v"}aside>ul>li:first-child{margin-top:20px}aside .sub-menu{margin-left:20px}aside .sub-menu li:first-child{margin-top:10px}.sub-menu{display:none}main{flex:1;background-color:#ecf0f1;padding:20px}button{background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease}button.add-button{margin-right:10px}button:hover{background-color:#c0392b}#tasks>div{display:flex;flex-direction:column;background-color:#fff;padding:10px;margin:10px 0;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1)}#tasks>div>div{display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:10px}#tasks>div input[type=text]{flex:1;padding:5px 10px;margin:0 0 10px 0;border:1px solid #ccc;border-radius:3px;width:100%}#tasks>div select,#tasks>div input[type=date]{margin-right:10px}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"AACA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,8BAAA,CAEF,KACE,wBAAA,CACA,UAAA,CACA,WAAA,CAGF,KACE,YAAA,CACA,gBAAA,CACA,gBAAA,CACA,kCAAA,CAEF,MACE,WAAA,CACA,wBAAA,CACA,aAAA,CACA,YAAA,CAEA,SACE,oBAAA,CAEF,4BACE,kBAAA,CACA,aAAA,CACA,iBAAA,CAEF,wBACE,cAAA,CACA,aAAA,CAEA,+BACE,WAAA,CACA,oBAAA,CACA,gBAAA,CACA,gBAAA,CAGF,kDACE,WAAA,CAGF,wBACE,eAAA,CAEJ,gBACE,gBAAA,CACA,+BACE,eAAA,CAGN,UACE,YAAA,CAEF,KACE,MAAA,CACA,wBAAA,CACA,YAAA,CAEF,OACE,wBAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CAEA,kBACE,iBAAA,CAGF,aACE,wBAAA,CAIF,WACE,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,iCAAA,CAEA,eACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,kBAAA,CAEF,4BACE,MAAA,CACA,gBAAA,CACA,iBAAA,CACA,qBAAA,CACA,iBAAA,CACA,UAAA,CAEF,8CAEE,iBAAA",sourcesContent:['// Reset básico y estilos globales\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: \'Arial\', sans-serif\n\nbody\n  background-color: #f4f4f4\n  color: #333\n  padding: 10% // Espacio entre el contenido y el borde de la ventana\n\n// Estructura principal\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\naside\n  width: 250px\n  background-color: #2c3e50\n  color: #ecf0f1\n  padding: 20px\n\n  ul\n    list-style-type: none\n\n  li, .sub-menu li\n    margin-bottom: 10px\n    font-size: 1em\n    line-height: 1.5em // Ajusta la altura de línea para una mejor espaciación vertical\n\n  #togglePriorities\n    cursor: pointer\n    display: block // Asegura que se muestre como un bloque para un relleno consistente\n\n    &:before\n      content: ">"\n      display: inline-block\n      margin-right: 5px\n      font-weight: bold\n\n  li.sub-menu-opened\n    #togglePriorities:before\n      content: "v"\n\n  > ul\n    > li:first-child\n      margin-top: 20px // Espacio superior para "High"\n\n  .sub-menu\n    margin-left: 20px // Indentación del submenú\n    li:first-child\n      margin-top: 10px  // Ajusta este valor según la cantidad de margen que desees.\n\n\n.sub-menu\n  display: none\n\nmain\n  flex: 1\n  background-color: #ecf0f1\n  padding: 20px\n\nbutton\n  background-color: #e74c3c\n  color: #ecf0f1\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n\n  &.add-button\n    margin-right: 10px // o cualquier valor que desees\n\n\n  &:hover\n    background-color: #c0392b\n\n// Estilos específicos para tareas\n#tasks\n  > div\n    display: flex\n    flex-direction: column\n    background-color: #fff\n    padding: 10px\n    margin: 10px 0\n    border-radius: 5px\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n\n    > div\n      display: flex\n      align-items: center\n      justify-content: space-between\n      width: 100% \n      margin-bottom: 10px\n\n    input[type="text"]\n      flex: 1\n      padding: 5px 10px\n      margin: 0 0 10px 0 // Elimina el margen derecho y agrega margen abajo.\n      border: 1px solid #ccc\n      border-radius: 3px\n      width: 100% // Se extenderá completamente, el padding interno mantendrá el texto alejado de los bordes\n\n    select,\n    input[type="date"]\n      margin-right: 10px\n\n'],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[n].concat([r]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var A=e[s],c=o.base?A[0]+o.base:A[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var p=t(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var m=a(u,o);o.byIndex=s,n.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var A=o(e,a),c=0;c<r.length;c++){var d=t(r[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=A}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),A=t.n(s),c=t(216),d=t.n(c),l=t(589),p=t.n(l),u=t(791),m={};function C(e){localStorage.setItem("tasks",JSON.stringify(e))}function f(){const e=localStorage.getItem("tasks");return e?JSON.parse(e).filter((e=>e.timestamp)):[]}m.styleTagTransform=p(),m.setAttributes=A(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("addTaskButton"),n=document.getElementById("tasks");function t(e){const n=e.parentElement,t=n.dataset.timestamp;console.log("Timestamp de la tarea a eliminar:",t),n.remove();const o=f();console.log("Tareas antes de filtrar:",o);const a=o.filter((e=>e.timestamp&&e.timestamp.toString()!==t));console.log("Tareas después de filtrar:",a),C(a)}const o=f();for(const e of o){const o=document.createElement("div");o.dataset.timestamp=e.timestamp,o.innerHTML=`\n        ${e.text} - ${e.priority} - ${e.date}\n        <button>Eliminar</button>\n    `,o.querySelector("button").addEventListener("click",(function(){t(this)})),n.appendChild(o)}e.addEventListener("click",(()=>{e.disabled=!0;const o=document.createElement("div"),a=document.createElement("input");a.type="text",a.placeholder="Escribe tu tarea aquí";const r=document.createElement("select");["High","Medium","Low"].forEach((e=>{const n=document.createElement("option");n.value=e,n.textContent=e,r.appendChild(n)}));const i=document.createElement("input");i.type="date";const s=document.createElement("button");s.textContent="Agregar",s.classList.add("add-button"),s.addEventListener("click",(()=>{if(a.value){const s=Date.now(),A=document.createElement("div");A.dataset.timestamp=s,A.innerHTML=`\n            ${a.value} - ${r.value} - ${i.value}\n            <button>Eliminar</button>\n        `,A.querySelector("button").addEventListener("click",(function(){t(this)})),n.appendChild(A);const c=f();c.push({timestamp:s,text:a.value,priority:r.value,date:i.value}),C(c),o.remove(),e.disabled=!1}}));const A=document.createElement("button");A.textContent="Cancelar",A.addEventListener("click",(()=>{o.remove(),e.disabled=!1}));const c=document.createElement("div");c.appendChild(a),o.appendChild(c);const d=document.createElement("div");d.appendChild(r),d.appendChild(i),d.appendChild(s),d.appendChild(A),o.appendChild(d),n.appendChild(o)}));const a=document.getElementById("togglePriorities"),r=document.querySelector(".sub-menu"),i=a.parentElement;a.addEventListener("click",(()=>{"none"!==r.style.display&&r.style.display?(r.style.display="none",i.classList.remove("sub-menu-opened")):(r.style.display="block",i.classList.add("sub-menu-opened"))}))}))})()})();