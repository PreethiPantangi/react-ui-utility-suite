"use strict";var r=require("react/jsx-runtime"),e=require("react"),t={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=e.createContext&&e.createContext(t),o=["attr","size","title"];function c(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t={};for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}function i(){return i=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},i.apply(this,arguments)}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){var n;return(e="symbol"==typeof(n=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"))?n:n+"")in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function s(r){return r&&r.map(((r,t)=>e.createElement(r.tag,l({key:t},r.attr),s(r.child))))}function u(r){return t=>e.createElement(b,i({attr:l({},r.attr)},t),s(r.child))}function b(r){var a=t=>{var n,{attr:a,size:d,title:s}=r,u=c(r,o),b=d||t.size||"1em";return t.className&&(n=t.className),r.className&&(n=(n?n+" ":"")+r.className),e.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:l(l({color:r.color||t.color},t.style),r.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),s&&e.createElement("title",null,s),r.children)};return void 0!==n?e.createElement(n.Consumer,null,(r=>a(r))):a(t)}function f(r){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function p(r){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}!function(r,e){void 0===e&&(e={});var t=e.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}("/* Accordion */\r\n.accordion {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.accordion-title {\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    font-weight: bold;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0.50rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.accordion-content {\r\n    padding: 1rem;\r\n}\r\n\r\n.accordion-content-border {\r\n    border: 0.05rem solid black;\r\n}\r\n\r\n/* Button */\r\n.btn {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .button-default {\r\n    background-color: cornflowerblue;\r\n    color: white;\r\n    font-weight: bold;\r\n    border: none;\r\n    padding: 0.50rem;\r\n  }\r\n  \r\n  .button-rounded {\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .button-disabled {\r\n    color: black;\r\n    background-color: slategrey;\r\n    border: none;\r\n    padding: 0.50rem;\r\n  }\r\n  \r\n  .button-warning, .button-success, .button-error {\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 0.50rem;\r\n  }\r\n  \r\n  .button-warning {\r\n    background-color: orange;\r\n  }\r\n  \r\n  .button-success {\r\n    background-color: green;\r\n  }\r\n  \r\n  .button-error {\r\n    background-color: red;\r\n  }");exports.Accordion=function(e){var t=e.title,n=e.isOpen,o=e.toggleAccordion,c=e.bordered,i=void 0!==c&&c,a=e.children;return r.jsxs("div",{className:"accordion",children:[r.jsxs("div",{onClick:o,className:"accordion-title",children:[r.jsx("div",{children:t}),r.jsx("div",{children:n?r.jsx(f,{}):r.jsx(p,{})})]}),n&&r.jsx("div",{className:"accordion-content ".concat(i?"accordion-content-border":""),children:a})]})},exports.Button=function(e){var t=e.title,n=e.action,o=e.type,c=void 0===o?"default":o,i=e.rounded,a="btn";return a+="disabled"===c?" button-disabled":"warning"===c?" button-warning":"success"===c?" button-success":"error"===c?" button-error":" button-default",void 0!==i&&i&&(a+=" button-rounded"),r.jsx("button",{className:a,onClick:n,disabled:"disabled"===c,children:t})};
//# sourceMappingURL=index.js.map