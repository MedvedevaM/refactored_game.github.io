!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=4)}([function(n,e,r){var t={},o=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),a=null,s=0,l=[],c=r(8);function u(n,e){for(var r=0;r<n.length;r++){var o=n[r],i=t[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],e));t[o.id]={id:o.id,refs:1,parts:s}}}}function f(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):r.push(t[a]={id:a,parts:[s]})}return r}function p(n,e){var r=i(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=l[l.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertInto+" "+n.insertAt.before);r.insertBefore(e,o)}}function d(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function m(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),h(e,n.attrs),p(n,e),e}function h(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function g(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=s++;r=a||(a=m(e)),t=y.bind(null,r,l,!1),o=y.bind(null,r,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),p(n,e),e}(e),t=function(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=c(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),o=function(){d(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(e),t=function(n,e){var r=e.css,t=e.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){d(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=f(n,e);return u(r,e),function(n){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=t[a.id]).refs--,o.push(s)}n&&u(f(n,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete t[s.id]}}}};var v=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}();function y(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(t),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(n,e,r){var t=r(5);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(t,o);t.locals&&(n.exports=t.locals)},function(n,e,r){var t=r(12);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(t,o);t.locals&&(n.exports=t.locals)},function(n,e,r){"use strict";r.r(e);r(3),r(7),r(2);let t=["img/1.png","img/2.jpg","img/3.png","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"];!function(){let n=document.createElement("div");n.classList.add("wrapper"),n.id="loading",document.body.appendChild(n);let e=document.createElement("div");e.classList.add("preloader"),n.appendChild(e);let r=document.createElement("p");r.innerHTML="LOADING",e.classList.add("title_loading"),e.appendChild(r);for(let n=1;n<10;n++){let r=document.createElement("div");r.classList.add(`line-${n}`),r.classList.add("line"),e.appendChild(r)}}(),function(n,e){let r=0;function t(){++r==n.length&&e()}for(var o=0;o<n.length;o++){var i=document.createElement("img");i.onload=i.onerror=t,i.src=n[o]}}(t,function(){setTimeout(()=>{document.body.removeChild(loading)},1e3)});let o=document.createElement("img");o.id="exampleImages",o.src=t[0],o.classList.add("example_images"),example.appendChild(o);let i=document.createElement("div");i.id="nextImage",i.classList.add("controls"),i.innerHTML='<i class="fa fa-chevron-circle-right"></i>',example.appendChild(i);let a=0;i.onclick=(()=>{!function(n,e){let r=(n+a+1)%n;e.setAttribute("src",`${t[r]}`),a=r}(t.length,o)})},function(n,e,r){(n.exports=r(1)(!1)).push([n.i,".wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 100;\r\n  top: 0;\r\n  position: absolute;\r\n  background-color: #c4e381;\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.preloader {\r\n  margin: 0 auto;\r\n}\r\n\r\n.title_loading {\r\n  font-size: 2rem;\r\n  color: #008000;\r\n  text-align: center;\r\n}\r\n\r\n.preloader .line {\r\n  width: 7px;\r\n  height: 50px;\r\n  background: #008000;\r\n  border-radius: 5px;\r\n  margin: 0 3px;\r\n  display: inline-block;\r\n  animation: opacity-1 1000ms infinite ease-in-out;\r\n}\r\n\r\n.preloader .line-1 {\r\n  animation-delay: 800ms;\r\n}\r\n.preloader .line-2 {\r\n  animation-delay: 600ms;\r\n}\r\n\r\n.preloader .line-3 {\r\n  animation-delay: 400ms;\r\n}\r\n\r\n.preloader .line-4 {\r\n  animation-delay: 200ms;\r\n}\r\n\r\n.preloader .line-6 {\r\n  animation-delay: 200ms;\r\n}\r\n\r\n.preloader .line-7 {\r\n  animation-delay: 400ms;\r\n}\r\n\r\n.preloader .line-8 {\r\n  animation-delay: 600ms;\r\n}\r\n\r\n.preloader .line-9 {\r\n  animation-delay: 800ms;\r\n}\r\n\r\n@keyframes opacity-1 {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes opacity-2 {\r\n  0% {\r\n    opacity: 1;\r\n    height: 15px;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    height: 12px;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 15px;\r\n  }\r\n}\r\n",""])},function(n,e,r){(n.exports=r(1)(!1)).push([n.i,".example_images {\r\n  width: 600px;\r\n  height: 400px;\r\n  display: block;\r\n  margin: 15px auto;\r\n  object-fit: fill;\r\n}\r\n\r\nmain {\r\n  width: 900px;\r\n  min-height: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  color: #008000;\r\n  font-size: 2rem;\r\n}\r\n\r\n.controls {\r\n  font-size: 4rem;\r\n  color: #008000;\r\n  text-align: center;\r\n}\r\n",""])},function(n,e,r){var t=r(6);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(t,o);t.locals&&(n.exports=t.locals)},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,r){n.exports=r.p+"./../../../../css/cursor/cursor.cur"},function(n,e,r){n.exports=r.p+"./../../../../css/fonts/gloriahallelujah.ttf"},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,r){var t=r(11);(n.exports=r(1)(!1)).push([n.i,"@font-face {\r\n  font-family: 'Gloria Hallelujah';\r\n  src: url("+t(r(10))+") format('truetype');\r\n}\r\n\r\n* {\r\n  outline: none;\r\n  font-family: 'Gloria Hallelujah';\r\n  cursor: url("+t(r(9))+"), auto;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  background-color: #c4e381;\r\n}\r\n\r\nmain {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\nh1 {\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: #004524;\r\n}\r\n",""])}]);
//# sourceMappingURL=loading.bundle.js.map