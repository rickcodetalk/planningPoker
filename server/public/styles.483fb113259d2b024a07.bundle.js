webpackJsonp([1,2],{362:function(n,e,t){var r=t(625);"string"==typeof r&&(r=[[n.i,r,""]]);t(647)(r,{});r.locals&&(n.exports=r.locals)},625:function(n,e,t){e=n.exports=t(626)(),e.push([n.i,"\n.client-panel {\n\n    margin-top: 50px\n}\n\n\n.host-panel {\n    display:block;\n    overflow:auto;\n    margin-top: 50px\n}\n\n.poker-card {\n\n    border-style: solid;\n}\n\n.poker-card-number {\n\n    font-size: 50px;\n    text-align: center;\n}\n\n.poker-card-user-name {\n\n    font-size: 15px;\n    bottom: 0px;\n    text-align: center;\n}\n\n.poker-card {\n\n    width: 100px\n}\n\n.main-menu-form {\n\n    margin-top: 50px\n\n}\n\n.error-message {\n\n    color: red;\n    margin-top: 10px;\n    border-style: solid;\n}\n\n.host-result {\n\n    margin-bottom: 5px;\n}\n\n.result-button {\n\n    margin-top: 10px;\n}\n\n.result-card {\n\n    margin-top: 10px;\n}",""])},626:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},647:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(f(r.parts[i],e));c[r.id]={id:r.id,refs:1,parts:s}}}}function r(n){for(var e=[],t={},r=0;r<n.length;r++){var o=n[r],i=o[0],s=o[1],a=o[2],f=o[3],u={css:s,media:a,sourceMap:f};t[i]?t[i].parts.push(u):e.push(t[i]={id:i,parts:[u]})}return e}function o(n,e){var t=v(),r=b[b.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),b.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=b.indexOf(n);e>=0&&b.splice(e,1)}function s(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function a(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function f(n,e){var t,r,o;if(e.singleton){var f=g++;t=m||(m=s(e)),r=u.bind(null,t,f,!1),o=u.bind(null,t,f,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=a(e),r=l.bind(null,t),o=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),r=p.bind(null,t),o=function(){i(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function u(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function l(n,e){var t=e.css,r=e.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var c={},d=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,b=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=r(n);return t(o,e),function(n){for(var i=[],s=0;s<o.length;s++){var a=o[s],f=c[a.id];f.refs--,i.push(f)}if(n){var u=r(n);t(u,e)}for(var s=0;s<i.length;s++){var f=i[s];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete c[f.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},650:function(n,e,t){n.exports=t(362)}},[650]);