(()=>{"use strict";var e={791:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(537),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Arial",sans-serif}body{background-color:#f4f4f4;color:#333;padding:10%}#app{display:flex;max-width:1200px;margin:40px auto;box-shadow:0 0 15px rgba(0,0,0,.1)}aside{width:250px;background-color:#2c3e50;color:#ecf0f1;padding:20px}aside ul{list-style-type:none}aside li,aside .sub-menu li{margin-bottom:10px;font-size:1em;line-height:1.5em}aside #togglePriorities{cursor:pointer;display:block}aside #togglePriorities:before{content:">";display:inline-block;margin-right:5px;font-weight:bold}aside li.sub-menu-opened #togglePriorities:before{content:"v"}aside>ul>li:first-child{margin-top:20px}aside .sub-menu{margin-left:20px}aside .sub-menu li:first-child{margin-top:10px}.sub-menu{display:none}main{flex:1;background-color:#ecf0f1;padding:20px}button{background-color:#e74c3c;color:#ecf0f1;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease}button.add-button{margin-right:10px}button:hover{background-color:#c0392b}#tasks>div{display:flex;flex-direction:column;background-color:#fff;padding:10px;margin:10px 0;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,.1)}#tasks>div>div{display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:10px;gap:10px}#tasks>div input[type=text]{flex:1;padding:5px 10px;margin:0 0 10px 0;border:1px solid #ccc;border-radius:3px;width:100%;box-sizing:border-box}#tasks>div select,#tasks>div input[type=date],#tasks>div button{flex:1;box-sizing:border-box;margin-right:10px}#tasks>div div{display:flex;align-items:center;gap:5px}#tasks>div label{margin-right:5px}#tasks>div button{flex:1;margin-right:10px}#tasks>div button:last-child{margin-right:0}',"",{version:3,sources:["webpack://./src/sass/main.sass"],names:[],mappings:"AACA,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,8BAAA,CAEF,KACE,wBAAA,CACA,UAAA,CACA,WAAA,CAGF,KACE,YAAA,CACA,gBAAA,CACA,gBAAA,CACA,kCAAA,CAEF,MACE,WAAA,CACA,wBAAA,CACA,aAAA,CACA,YAAA,CAEA,SACE,oBAAA,CAEF,4BACE,kBAAA,CACA,aAAA,CACA,iBAAA,CAEF,wBACE,cAAA,CACA,aAAA,CAEA,+BACE,WAAA,CACA,oBAAA,CACA,gBAAA,CACA,gBAAA,CAGF,kDACE,WAAA,CAGF,wBACE,eAAA,CAEJ,gBACE,gBAAA,CACA,+BACE,eAAA,CAGN,UACE,YAAA,CAEF,KACE,MAAA,CACA,wBAAA,CACA,YAAA,CAEF,OACE,wBAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CAEA,kBACE,iBAAA,CAGF,aACE,wBAAA,CAIF,WACE,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,iCAAA,CAEA,eACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,UAAA,CACA,kBAAA,CACA,QAAA,CAEF,4BACE,MAAA,CACA,gBAAA,CACA,iBAAA,CACA,qBAAA,CACA,iBAAA,CACA,UAAA,CACA,qBAAA,CAEF,gEAGE,MAAA,CACA,qBAAA,CACA,iBAAA,CAGF,eACE,YAAA,CACA,kBAAA,CACA,OAAA,CAEF,iBACE,gBAAA,CAEF,kBACE,MAAA,CACA,iBAAA,CAEF,6BACE,cAAA",sourcesContent:['// Reset básico y estilos globales\n*\n  margin: 0\n  padding: 0\n  box-sizing: border-box\n  font-family: \'Arial\', sans-serif\n\nbody\n  background-color: #f4f4f4\n  color: #333\n  padding: 10% // Espacio entre el contenido y el borde de la ventana\n\n// Estructura principal\n#app\n  display: flex\n  max-width: 1200px\n  margin: 40px auto\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)\n\naside\n  width: 250px\n  background-color: #2c3e50\n  color: #ecf0f1\n  padding: 20px\n\n  ul\n    list-style-type: none\n\n  li, .sub-menu li\n    margin-bottom: 10px\n    font-size: 1em\n    line-height: 1.5em // Ajusta la altura de línea para una mejor espaciación vertical\n\n  #togglePriorities\n    cursor: pointer\n    display: block // Asegura que se muestre como un bloque para un relleno consistente\n\n    &:before\n      content: ">"\n      display: inline-block\n      margin-right: 5px\n      font-weight: bold\n\n  li.sub-menu-opened\n    #togglePriorities:before\n      content: "v"\n\n  > ul\n    > li:first-child\n      margin-top: 20px // Espacio superior para "High"\n\n  .sub-menu\n    margin-left: 20px // Indentación del submenú\n    li:first-child\n      margin-top: 10px  // Ajusta este valor según la cantidad de margen que desees.\n\n\n.sub-menu\n  display: none\n\nmain\n  flex: 1\n  background-color: #ecf0f1\n  padding: 20px\n\nbutton\n  background-color: #e74c3c\n  color: #ecf0f1\n  padding: 10px 20px\n  border: none\n  border-radius: 5px\n  cursor: pointer\n  transition: background-color 0.3s ease\n\n  &.add-button\n    margin-right: 10px // o cualquier valor que desees\n\n\n  &:hover\n    background-color: #c0392b\n\n// Estilos específicos para tareas\n#tasks\n  > div\n    display: flex\n    flex-direction: column\n    background-color: #fff\n    padding: 10px\n    margin: 10px 0\n    border-radius: 5px\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)\n\n    > div\n      display: flex\n      align-items: center\n      justify-content: space-between\n      width: 100% \n      margin-bottom: 10px\n      gap: 10px\n\n    input[type="text"]\n      flex: 1\n      padding: 5px 10px\n      margin: 0 0 10px 0\n      border: 1px solid #ccc\n      border-radius: 3px\n      width: 100% \n      box-sizing: border-box\n\n    select,\n    input[type="date"],\n    button\n      flex: 1\n      box-sizing: border-box\n      margin-right: 10px\n\n        // Esto es para que los contenedores de priority y date estén en línea\n    div\n      display: flex\n      align-items: center\n      gap: 5px\n\n    label\n      margin-right: 5px\n\n    button\n      flex: 1\n      margin-right: 10px\n\n    button:last-child\n      margin-right: 0\n\n\n\n\n'],sourceRoot:""}]);const A=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&r[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(i," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},r=[],A=0;A<e.length;A++){var s=e[A],d=o.base?s[0]+o.base:s[0],c=a[d]||0,l="".concat(d," ").concat(c);a[d]=c+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var C=i(u,o);o.byIndex=A,n.splice(A,0,{identifier:l,updater:C,references:1})}r.push(l)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var A=t(a[r]);n[A].references--}for(var s=o(e,i),d=0;d<a.length;d++){var c=t(a[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),r=t.n(a),A=t(565),s=t.n(A),d=t(216),c=t.n(d),l=t(589),p=t.n(l),u=t(791),C={};function m(e){localStorage.setItem("tasks",JSON.stringify(e))}function f(){const e=localStorage.getItem("tasks");return e?JSON.parse(e).filter((e=>e.timestamp)):[]}C.styleTagTransform=p(),C.setAttributes=s(),C.insert=r().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=c(),n()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("addTaskButton"),n=document.getElementById("tasks");function t(e){const n=e.parentElement,t=n.dataset.timestamp;console.log("Timestamp de la tarea a eliminar:",t),n.remove();const o=f();console.log("Tareas antes de filtrar:",o);const i=o.filter((e=>e.timestamp&&e.timestamp.toString()!==t));console.log("Tareas después de filtrar:",i),m(i)}const o=f();for(const e of o){const o=document.createElement("div");o.dataset.timestamp=e.timestamp,o.innerHTML=`\n        ${e.text} - ${e.priority} - ${e.date}\n        <button>Eliminar</button>\n    `,o.querySelector("button").addEventListener("click",(function(){t(this)})),n.appendChild(o)}e.addEventListener("click",(()=>{e.disabled=!0;const o=document.createElement("div"),i=document.createElement("input");i.type="text",i.placeholder="Write your task here",i.style.width="100%";const a=document.createElement("div");a.style.display="flex",a.style.justifyContent="space-between",a.style.width="100%";const r=document.createElement("div"),A=document.createElement("label");A.textContent="Priority";const s=document.createElement("select");["High","Medium","Low"].forEach((e=>{const n=document.createElement("option");n.value=e,n.textContent=e,s.appendChild(n)})),r.appendChild(A),r.appendChild(s);const d=document.createElement("div"),c=document.createElement("label");c.textContent="Date";const l=document.createElement("input");l.type="date",d.appendChild(c),d.appendChild(l);const p=document.createElement("button");p.textContent="Add";const u=document.createElement("button");u.textContent="Cancel";const C=document.createElement("div");C.appendChild(i),o.appendChild(C),a.appendChild(r),a.appendChild(d),a.appendChild(p),a.appendChild(u),o.appendChild(a),p.addEventListener("click",(()=>{if(i.value){const a=Date.now(),r=document.createElement("div");r.dataset.timestamp=a,r.innerHTML=`\n            ${i.value} - ${s.value} - ${l.value}\n            <button>Eliminar</button>\n        `,r.querySelector("button").addEventListener("click",(function(){t(this)})),n.appendChild(r);const A=f();A.push({timestamp:a,text:i.value,priority:s.value,date:l.value}),m(A),o.remove(),e.disabled=!1}})),u.addEventListener("click",(()=>{o.remove(),e.disabled=!1})),n.appendChild(o)}));const i=document.getElementById("togglePriorities"),a=document.querySelector(".sub-menu"),r=i.parentElement;i.addEventListener("click",(()=>{"none"!==a.style.display&&a.style.display?(a.style.display="none",r.classList.remove("sub-menu-opened")):(a.style.display="block",r.classList.add("sub-menu-opened"))}))}))})()})();