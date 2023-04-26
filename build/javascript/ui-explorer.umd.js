!function(l){"function"==typeof define&&define.amd?define(l):l()}(function(){"use strict";function W(l,t){if(!(l instanceof t))throw new TypeError("Cannot call a class as a function")}function a(l,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,function(l){l=function(l,t){if("object"!=typeof l||null===l)return l;var e=l[Symbol.toPrimitive];if(void 0===e)return("string"===t?String:Number)(l);e=e.call(l,t||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}(l,"string");return"symbol"==typeof l?l:String(l)}(a.key),a)}}function i(l,t,e){return t&&a(l.prototype,t),e&&a(l,e),Object.defineProperty(l,"prototype",{writable:!1}),l}function N(l){return(N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)})(l)}function Z(l,t){return(Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,t){return l.__proto__=t,l})(l,t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(l){return!1}}function n(l,t,e){return(n=o()?Reflect.construct.bind():function(l,t,e){var a=[null];a.push.apply(a,t);t=new(Function.bind.apply(l,a));return e&&Z(t,e.prototype),t}).apply(null,arguments)}function d(l){var e="function"==typeof Map?new Map:void 0;return(d=function(l){if(null===l||-1===Function.toString.call(l).indexOf("[native code]"))return l;if("function"!=typeof l)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(l))return e.get(l);e.set(l,t)}function t(){return n(l,arguments,N(this).constructor)}return t.prototype=Object.create(l.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Z(t,l)})(l)}function R(l,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");t=l;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(l,t){return function(l){if(Array.isArray(l))return l}(l)||function(l,t){var e=null==l?null:"undefined"!=typeof Symbol&&l[Symbol.iterator]||l["@@iterator"];if(null!=e){var a,n,d,c,W=[],i=!0,N=!1;try{if(d=(e=e.call(l)).next,0===t){if(Object(e)!==e)return;i=!1}else for(;!(i=(a=d.call(e)).done)&&(W.push(a.value),W.length!==t);i=!0);}catch(l){N=!0,n=l}finally{try{if(!i&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(N)throw n}}return W}}(l,t)||r(l,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(l,t){var e;if(l)return"string"==typeof l?c(l,t):"Map"===(e="Object"===(e=Object.prototype.toString.call(l).slice(8,-1))&&l.constructor?l.constructor.name:e)||"Set"===e?Array.from(l):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(l,t):void 0}function c(l,t){(null==t||t>l.length)&&(t=l.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=l[e];return a}function p(l){return/^[\s\S]*<body[^\>]*>([\s\S]*)<\/body>[\s\S]*$/im.exec(l)[1]}function T(l,t){l=l.replace("data:text/".concat(t,";base64,"),"");return atob(l)}function l(l){var t=p(T(l.btn.html,"html")),e=p(T(l.panel.html,"html")),l='<style>@import url("'.concat(l.styles,'");</style>'),a=document.createElement("template"),c=(a.innerHTML=l+t+e,a.content),l=function(l){var t=d;if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(l&&l.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),l&&Z(t,l);e=d,a=o();var e,a,n=function(){var l,t=N(e);return R(this,a?(l=N(this).constructor,Reflect.construct(t,arguments,l)):t.apply(this,arguments))};function d(){var l;return W(this,d),(l=n.call(this)).attachShadow({mode:"open"}).appendChild(c.cloneNode(!0)),l}return i(d)}(d(HTMLElement)),t=(customElements.define("ui-explorer",l),document.createElement("ui-explorer")),a=(document.body.appendChild(t),document.querySelector("ui-explorer"));return!!a&&{component:a.shadowRoot,content:e}}var u=function(){function l(){W(this,l)}return i(l,null,[{key:"update",value:function(l,t,e){for(var a=t.replace("uie".concat(l),""),t=JSON.parse(localStorage.getItem("uie-db")),n=t[l].data,d=0;d<n.length;d++)if(a===n[d].el){Object.assign(n[d],e);break}t[l].data=n,localStorage.setItem("uie-db",JSON.stringify(t))}},{key:"add",value:function(l,t,e){for(var a=JSON.parse(localStorage.getItem("uie-db")),n=a[l].data,d=!0,c=0;c<n.length;c++)if(n[c].el===t){d=!1;break}d&&n.push(e),a[l].data=n,localStorage.setItem("uie-db",JSON.stringify(a))}},{key:"remove",value:function(l,t){for(var e=t.replace("uie".concat(l),""),t=JSON.parse(localStorage.getItem("uie-db")),a=t[l].data,n=0;n<a.length;n++)if(a[n].el===e){a.splice(n,1);break}t[l].data=a,localStorage.setItem("uie-db",JSON.stringify(t))}},{key:"init",value:function(l){l=l.data;localStorage.getItem("uie-db")||localStorage.setItem("uie-db",JSON.stringify(l))}},{key:"get",value:function(l){var t=JSON.parse(localStorage.getItem("uie-db"));return l?t[l]:t}}]),l}();function G(l,t){for(var e=l,a=0,n=Object.entries(t);a<n.length;a++)var d=b(n[a],2),c=d[0],d=d[1],e=e.replaceAll(c,d);return e}function M(){function t(){var l,t=u.get(""),e=t.general.data.filter(function(l,t){return"outlines"===l.el}),a=[];e[0].active&&t.outlines.data.forEach(function(e){var l;e.active&&(l=document.querySelectorAll(e.el))&&l.forEach(function(l){var t=e.el,t=(t=(t=(t=(t=(t=t.replaceAll(".","dot")).replaceAll("#","hash")).replaceAll(" ","")).replaceAll("~","tld")).replaceAll("+","pls"),"uie-outlines-".concat(t));l.classList.add(t),a.push(".".concat(t," { outline: ").concat(e.size,"px solid ").concat(e.color,"; }"))})}),(e=a)&&(e=e.join(""),(t=document.querySelector("#uie-doc-styles"))?t.innerHTML=e:(t=document.head||document.getElementsByTagName("head")[0],(l=document.createElement("style")).setAttribute("id","uie-doc-styles"),t.appendChild(l),l.appendChild(document.createTextNode(e))))}"complete"!==document.readyState&&"loaded"!==document.readyState||t(),window.addEventListener("DOMContentLoaded",function(l){t()})}function t(l){var d=l.component,t=l.content,c="outlines",W="#uieOutlinesContent";!function n(){var e=d.querySelector(W);e.innerHTML="";var a=(new DOMParser).parseFromString(t,"text/html").querySelector(W).innerHTML,l=(u.get(c).data.forEach(function(l){var t=document.createElement("template"),l=(t.innerHTML=G(a,{"${id}":"uie"+c+l.el,"${cb_id}":"uie"+c+l.el+"Cb","${cb_val}":l.active?" checked ":"","${title}":l.el,"${id_color}":"uie"+c+l.el+"Color","${id_width}":"uie"+c+l.el+"Width","${id_color_val}":l.color,"${id_width_val}":l.size,"${shrink}":l.shrink?" hide ":"","uie-bg-color":l.color}),t.content);e.appendChild(l.cloneNode(!0))}),d.querySelectorAll("".concat(W," .uie-btn-shrink"))),l=(l&&l.forEach(function(l){l.addEventListener("click",function(l){l.preventDefault();var t=(l=l.currentTarget).classList.toggle("hide"),l=l.closest(".uie-panel-row").id;u.update(c,l,{shrink:t})})}),d.querySelectorAll("".concat(W," .uie-btn-remove"))),l=(l&&l.forEach(function(l){l.addEventListener("click",function(l){l.preventDefault(),l=l.currentTarget.closest(".uie-panel-row").id,u.remove(c,l),n(),M()})}),d.querySelector("".concat("#uieOutlines"," .uie-btn-add-new"))),l=(l&&l.addEventListener("click",function(l){var t,e,a;l.preventDefault(),(l=d.querySelector(".uie-input"))&&l.value&&(l=l.value,document.querySelector(l))&&(t={el:l,active:!0,color:(t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),"#"+t.toString(16).padStart(2,"0")+e.toString(16).padStart(2,"0")+a.toString(16).padStart(2,"0")),size:"1"},u.add(c,l,t),n(),M())}),d.querySelectorAll("".concat(W," .uie-checkbox"))),l=(l&&l.forEach(function(l){l.addEventListener("change",function(l){var t=(l=l.target).closest(".uie-panel-row").id;u.update(c,t,{active:l.checked}),M()})}),d.querySelectorAll("".concat(W," .uie-number"))),l=(l&&l.forEach(function(l){l.addEventListener("change",function(l){var t=(l=l.target).closest(".uie-panel-row").id;u.update(c,t,{size:l.value}),M()})}),d.querySelectorAll("".concat(W," .uie-color")));l&&l.forEach(function(l){l.addEventListener("change",function(l){var t=(l=l.target).closest(".uie-panel-row").id;u.update(c,t,{color:l.value}),n(),M()})})}()}function e(l){if(l){var t,l=l.getElementById("uie-elements-datalist"),e=[],a=function(l,t){var e,a,n,d,c="undefined"!=typeof Symbol&&l[Symbol.iterator]||l["@@iterator"];if(c)return a=!(e=!0),{s:function(){c=c.call(l)},n:function(){var l=c.next();return e=l.done,l},e:function(l){a=!0,n=l},f:function(){try{e||null==c.return||c.return()}finally{if(a)throw n}}};if(Array.isArray(l)||(c=r(l))||t&&l&&"number"==typeof l.length)return c&&(l=c),d=0,{s:t=function(){},n:function(){return d>=l.length?{done:!0}:{done:!1,value:l[d++]}},e:function(l){throw l},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(document.body.getElementsByTagName("*"));try{for(a.s();!(t=a.n()).done;){var n=t.value;e.includes(n.tagName)||e.push(n.tagName)}}catch(l){a.e(l)}finally{a.f()}for(var d=[],c=[],W=document.querySelectorAll("*"),i=0;i<W.length;i++){for(var N=W[i].className.toString().split(/\s+/),Z=0;Z<N.length;Z++){var o=N[Z];o&&-1===d.indexOf("."+o)&&d.push("."+o)}!W[i].id||c.includes("#"+W[i].id)||c.push("#"+W[i].id)}var R=[].concat(e,d,c).sort(),b="";R.forEach(function(l){b+='<option value="'.concat(l,'"></option>')}),l.innerHTML=b}}var m,U,h,V,j,Y,s,E,X,w,I,F;m={btn:{html:"data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48L2hlYWQ+PGJvZHk+PGEgaHJlZj0icGFuZWwuaHRtbCIgaWQ9InVpZUJ0biIgdGFiaW5kZXg9Ii0xIiBhcmlhLWxhYmVsPSJUb2dnbGUgQWN0aW9uIFBhbmVsIiBjbGFzcz0idWllLWJ0biI+PHNwYW4gY2xhc3M9InVpZS1idG4tbWF0Ij48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJiaSBiaS10b29scyIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMSAwIDAgMWwyLjIgMy4wODFhMSAxIDAgMCAwIC44MTUuNDE5aC4wN2ExIDEgMCAwIDEgLjcwOC4yOTNsMi42NzUgMi42NzUtMi42MTcgMi42NTRBMy4wMDMgMy4wMDMgMCAwIDAgMCAxM2EzIDMgMCAxIDAgNS44NzgtLjg1MWwyLjY1NC0yLjYxNy45NjguOTY4LS4zMDUuOTE0YTEgMSAwIDAgMCAuMjQyIDEuMDIzbDMuMjcgMy4yN2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDEuNTg2LTEuNTg2YS45OTcuOTk3IDAgMCAwIDAtMS40MTRsLTMuMjctMy4yN2ExIDEgMCAwIDAtMS4wMjMtLjI0MkwxMC41IDkuNWwtLjk2LS45NiAyLjY4LTIuNjQzQTMuMDA1IDMuMDA1IDAgMCAwIDE2IDNjMC0uMjY5LS4wMzUtLjUzLS4xMDItLjc3N2wtMi4xNCAyLjE0MUwxMiA0bC0uMzY0LTEuNzU3TDEzLjc3Ny4xMDJhMyAzIDAgMCAwLTMuNjc1IDMuNjhMNy40NjIgNi40NiA0Ljc5MyAzLjc5M2ExIDEgMCAwIDEtLjI5My0uNzA3di0uMDcxYTEgMSAwIDAgMC0uNDE5LS44MTRMMSAwWm05LjY0NiAxMC42NDZhLjUuNSAwIDAgMSAuNzA4IDBsMi45MTQgMi45MTVhLjUuNSAwIDAgMS0uNzA3LjcwN2wtMi45MTUtMi45MTRhLjUuNSAwIDAgMSAwLS43MDhaTTMgMTFsLjQ3MS4yNDIuNTI5LjAyNi4yODcuNDQ1LjQ0NS4yODcuMDI2LjUyOUw1IDEzbC0uMjQyLjQ3MS0uMDI2LjUyOS0uNDQ1LjI4Ny0uMjg3LjQ0NS0uNTI5LjAyNkwzIDE1bC0uNDcxLS4yNDJMMiAxNC43MzJsLS4yODctLjQ0NUwxLjI2OCAxNGwtLjAyNi0uNTI5TDEgMTNsLjI0Mi0uNDcxLjAyNi0uNTI5LjQ0NS0uMjg3LjI4Ny0uNDQ1LjUyOS0uMDI2TDMgMTFaIi8+PC9zdmc+PC9zcGFuPjwvYT48L2JvZHk+PC9odG1sPg==",id:"uieBtn"},panel:{html:"data:text/html;base64,PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xIj48dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGVzL21haW4uY3NzIj48c3R5bGU+LnVpZS1wYW5lbHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH08L3N0eWxlPjwvaGVhZD48Ym9keT48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwiIGlkPSJ1aWVQYW5lbCI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbnRhaW5lciI+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXIiPjxkaXYgY2xhc3M9InVpZS10b3AtdGl0bGUiPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXltYXRpbi91aS1leHBsb3JlciIgdGFyZ2V0PSJfYmxhbmsiPlVJIEV4cGxvcmVyIHYxMDE8L2E+PC9kaXY+PGRpdiBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uIj48YSBjbGFzcz0idWllLXRvcC1oZWFkZXItYWN0aW9uLWJ0biIgaHJlZj0iYnRuLmh0bWwiIHRpdGxlPSJIaWRlIFBhbmVsIFtFc2NdIj48L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0idWllLWJsb2NrIiBpZD0idWllR2VuZXJhbCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1hY2NvcmRpb24tYWN0aW9uIj48ZGl2IGNsYXNzPSJ1aWUtaHIiPjxoMyBjbGFzcz0idWllLWJsb2NrLXRpdGxlIj5HZW5lcmFsPC9oMz48L2Rpdj48L2E+PGRpdiBjbGFzcz0idWllLWFjY29yZGlvbi1wYW5lbCIgaWQ9InVpZUdlbmVyYWxDb250ZW50Ij48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtcm93IiBpZD0iJHtpZH0iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48bGFiZWwgY2xhc3M9InVpZS1sYWJlbCIgZm9yPSIke2NiX2lkfSI+PGlucHV0IGNsYXNzPSJ1aWUtY2hlY2tib3giIHR5cGU9ImNoZWNrYm94IiBpZD0iJHtjYl9pZH0iICR7Y2JfdmFsfT4gPHNwYW4gY2xhc3M9InVpZS1sYWJlbC10ZXh0Ij4ke3RpdGxlfTwvc3Bhbj48L2xhYmVsPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wiPjxkaXYgY2xhc3M9InVpZS10ZXh0LWtiZCI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS10ZXh0LWtiZC1jdXN0b20iPjxrYmQ+Q3RybDwva2JkPiArIDxrYmQ+fjwva2JkPjwvYT48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtYmxvY2siIGlkPSJ1aWVPdXRsaW5lcyI+PGEgaHJlZj0iIyIgY2xhc3M9InVpZS1hY2NvcmRpb24tYWN0aW9uIj48ZGl2IGNsYXNzPSJ1aWUtaHIiPjxoMyBjbGFzcz0idWllLWJsb2NrLXRpdGxlIj5PdXRsaW5lczwvaDM+PC9kaXY+PC9hPjxkaXYgY2xhc3M9InVpZS1hY2NvcmRpb24tcGFuZWwiIGlkPSJ1aWVPdXRsaW5lc0NvbnRlbnQiPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciIGlkPSIke2lkfSI+PGRpdiBjbGFzcz0idWllLXBhbmVsLWNvbCB1aWUtcGFuZWwtY29sLW1haW4iPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1tZW51LWluZGljYXRvciIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6dWllLWJnLWNvbG9yIj48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtcGFuZWwtbWVudS1jb250ZW50Ij48YSBocmVmPSIjIiBjbGFzcz0idWllLWJ0bi1zaHJpbmsgJHtzaHJpbmt9IiB0aXRsZT0iVG9nZ2xlIFByb3BlcnRpZXMiPjwvYT4gPGEgaHJlZj0iIyIgY2xhc3M9InVpZS1idG4tcmVtb3ZlIiB0aXRsZT0iUmVtb3ZlIj48L2E+IDxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7Y2JfaWR9Ij48aW5wdXQgY2xhc3M9InVpZS1jaGVja2JveCIgdHlwZT0iY2hlY2tib3giIGlkPSIke2NiX2lkfSIgJHtjYl92YWx9PiA8c3BhbiBjbGFzcz0idWllLWxhYmVsLXRleHQiPiR7dGl0bGV9PC9zcGFuPjwvbGFiZWw+PHVsIGNsYXNzPSJ1aWUtcGFuZWwtc3ViIj48bGkgY2xhc3M9InVpZS1wYW5lbC1zdWItaXRlbSI+PGRpdiBjbGFzcz0idWllLXJvdyI+PGRpdiBjbGFzcz0idWllLWNvbCB1aWUtY29sLW1haW4iPjxsYWJlbCBjbGFzcz0idWllLWxhYmVsIiBmb3I9IiR7aWRfY29sb3J9Ij5Db2xvcjo8L2xhYmVsPjwvZGl2PjxkaXYgY2xhc3M9InVpZS1jb2wiPjxpbnB1dCBjbGFzcz0idWllLWNvbG9yIiB0eXBlPSJjb2xvciIgaWQ9IiR7aWRfY29sb3J9IiB2YWx1ZT0iJHtpZF9jb2xvcl92YWx9IiBsaXN0PSJ1aWUtY29sb3Itc2VjdGlvbi1wcmVzZXQiPjwvZGl2PjwvZGl2PjwvbGk+PGxpIGNsYXNzPSJ1aWUtcGFuZWwtc3ViLWl0ZW0iPjxkaXYgY2xhc3M9InVpZS1yb3ciPjxkaXYgY2xhc3M9InVpZS1jb2wgdWllLWNvbC1tYWluIj48bGFiZWwgZm9yPSIke2lkX3dpZHRofSI+V2lkdGg6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPSJ1aWUtY29sIj48aW5wdXQgY2xhc3M9InVpZS1udW1iZXIiIHR5cGU9Im51bWJlciIgaWQ9IiR7aWRfd2lkdGh9IiB2YWx1ZT0iJHtpZF93aWR0aF92YWx9IiBtaW49IjEiIG1heD0iMyI+PC9kaXY+PC9kaXY+PC9saT48L3VsPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InVpZS1wYW5lbC1yb3ciPjxkaXYgY2xhc3M9InVpZS1wYW5lbC1jb2wgdWllLXBhbmVsLWNvbC1tYWluIj48ZGl2IGNsYXNzPSJ1aWUtbmV3LWl0ZW0iPjxpbnB1dCBjbGFzcz0idWllLWlucHV0IiB0eXBlPSJ0ZXh0IiBsaXN0PSJ1aWUtZWxlbWVudHMtZGF0YWxpc3QiPiA8YSBjbGFzcz0idWllLWJ0bi1hZGQtbmV3IiBocmVmPSIjIiBhcmlhLWxhYmVsPSJBZGQgTmV3IE91dGxpbmUgRWxlbWVudCI+PC9hPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkYXRhbGlzdCBjbGFzcz0idWllLWNvbG9ycy1kYXRhbGlzdCIgaWQ9InVpZS1jb2xvci1zZWN0aW9uLXByZXNldCI+PG9wdGlvbj4jRkZGRjAwPC9vcHRpb24+PG9wdGlvbj4jRkYwMEZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRkZGPC9vcHRpb24+PG9wdGlvbj4jMDBGRjAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMEZGPC9vcHRpb24+PG9wdGlvbj4jODA4MDgwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDAwPC9vcHRpb24+PG9wdGlvbj4jMDAwMDgwPC9vcHRpb24+PG9wdGlvbj4jODA4MDAwPC9vcHRpb24+PG9wdGlvbj4jODAwMDgwPC9vcHRpb24+PG9wdGlvbj4jRkYwMDAwPC9vcHRpb24+PG9wdGlvbj4jQzBDMEMwPC9vcHRpb24+PG9wdGlvbj4jMDA4MDgwPC9vcHRpb24+PG9wdGlvbj4jNEIwMDgyPC9vcHRpb24+PC9kYXRhbGlzdD48ZGF0YWxpc3QgaWQ9InVpZS1lbGVtZW50cy1kYXRhbGlzdCI+PG9wdGlvbiB2YWx1ZT0ic2VjdGlvbiI+PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iZGl2Ij48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJwIj48L29wdGlvbj48b3B0aW9uIHZhbHVlPSJuYXYiPjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9Ii5jbGFzc25hbWUiPjwvb3B0aW9uPjwvZGF0YWxpc3Q+PC9kaXY+PC9kaXY+PC9ib2R5PjwvaHRtbD4=",id:"uiePanel"},styles:"data:text/css;base64,LnVpZS1idG57YmFja2dyb3VuZDpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMwMDAsIzAwMCAycHgsI2ZmMCAwLCNmZjAgNHB4KTtib3JkZXI6MDtjb2xvcjojMDAwO2hlaWdodDozMXB4O2xlZnQ6LTMzcHg7bWFyZ2luOjA7b3V0bGluZTowO3BhZGRpbmc6MnB4O3Bvc2l0aW9uOmZpeGVkO3RvcDowO3RyYW5zaXRpb246YWxsIC4xczt3aWR0aDozMXB4fS51aWUtYnRuOmhvdmVye2xlZnQ6MH0udWllLWJ0bi1tYXR7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtvdXRsaW5lOjA7cGFkZGluZzowO3dpZHRoOjEwMCV9LnVpZS1wYW5lbHthbGw6aW5pdGlhbDtkaXNwbGF5Om5vbmV9LnVpZS1wYW5lbC5hY3RpdmV7ZGlzcGxheTpibG9ja30udWllLXBhbmVsICp7YWxsOnVuc2V0fS51aWUtcGFuZWwgKiwudWllLXBhbmVsIDphZnRlciwudWllLXBhbmVsIDpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94fS51aWUtcGFuZWwgKiBhe2N1cnNvcjpwb2ludGVyfS51aWUtY29sb3JzLWRhdGFsaXN0e2Rpc3BsYXk6bm9uZX0udWllLXBhbmVsLWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBkYXNoZWQgIzAwMDtib3gtc2hhZG93OjFweCAxcHggM3B4ICNjY2M7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7bGVmdDowO21pbi13aWR0aDoxNjBweDtvdXRsaW5lOjA7cGFkZGluZzowO3Bvc2l0aW9uOmZpeGVkO3RvcDowfS51aWUtcGFuZWwtcm93e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmc6MXB4fS51aWUtcGFuZWwtY29se2Rpc3BsYXk6ZmxleH0udWllLXBhbmVsLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS1yb3d7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleH0udWllLWNvbC1tYWlue3dpZHRoOjEwMCV9LnVpZS10b3AtaGVhZGVye2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrO2Rpc3BsYXk6ZmxleDtmb250LXNpemU6OHB4fS51aWUtdG9wLXRpdGxle3BhZGRpbmc6NXB4O3dpZHRoOjEwMCV9LnVpZS10b3AtaGVhZGVyLWFjdGlvbntkaXNwbGF5OmZsZXh9LnVpZS10b3AtaGVhZGVyLWFjdGlvbi1idG57YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6Izc3NztkaXNwbGF5OmZsZXg7aGVpZ2h0OjE1cHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46M3B4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RlQ0krUEhCaGRHZ2daRDBpVFRRdU5qUTJJRFF1TmpRMllTNDFMalVnTUNBd0lERWdMamN3T0NBd1REZ2dOeTR5T1ROc01pNDJORFl0TWk0Mk5EZGhMalV1TlNBd0lEQWdNU0F1TnpBNExqY3dPRXc0TGpjd055QTRiREl1TmpRM0lESXVOalEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTRMamN3TjJ3dE1pNDJORFlnTWk0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhNTnk0eU9UTWdPQ0EwTGpZME5pQTFMak0xTkdFdU5TNDFJREFnTUNBeElEQXRMamN3T0hvaUx6NDhMM04yWno0PSIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0ZUNJK1BIQmhkR2dnWkQwaVRUUXVOalEySURRdU5qUTJZUzQxTGpVZ01DQXdJREVnTGpjd09DQXdURGdnTnk0eU9UTnNNaTQyTkRZdE1pNDJORGRoTGpVdU5TQXdJREFnTVNBdU56QTRMamN3T0V3NExqY3dOeUE0YkRJdU5qUTNJREl1TmpRMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0E0TGpjd04yd3RNaTQyTkRZZ01pNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoTU55NHlPVE1nT0NBMExqWTBOaUExTGpNMU5HRXVOUzQxSURBZ01DQXhJREF0TGpjd09Ib2lMejQ4TDNOMlp6ND0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZToxNHB4IDE0cHg7bWFzay1zaXplOjE0cHggMTRweDt3aWR0aDoxNXB4fS51aWUtdG9wLWhlYWRlci1hY3Rpb24tYnRuOmhvdmVye2JhY2tncm91bmQ6IzAwMH0udWllLWhye2Rpc3BsYXk6YmxvY2t9LnVpZS1ibG9jay10aXRsZXtjb2xvcjojNzc3O2ZvbnQtc2l6ZTo4cHg7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOjFweDtsaW5lLWhlaWdodDoxOHB4O21hcmdpbjowO3BhZGRpbmc6MDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnVpZS10ZXh0LWtiZHtmb250LXNpemU6OHB4O3BhZGRpbmc6M3B4O3doaXRlLXNwYWNlOm5vd3JhcH0udWllLXRleHQta2JkIGtiZHtiYWNrZ3JvdW5kOiNlZWU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCAxcHggIzAwMDtwYWRkaW5nOjNweH0udWllLXRleHQta2JkLWN1c3RvbXtkaXNwbGF5OmJsb2NrfS51aWUtYWNjb3JkaW9uLWFjdGlvbntiYWNrZ3JvdW5kOiNlZWU7Y29sb3I6IzAwMDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6M3B4O3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtZGVjb3JhdGlvbjpub25lfS51aWUtYWNjb3JkaW9uLWFjdGlvbjpiZWZvcmV7YmFja2dyb3VuZDp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RZMmhsZG5KdmJpMTFjQ0krUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk55NDJORFlnTkM0Mk5EWmhMalV1TlNBd0lEQWdNU0F1TnpBNElEQnNOaUEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTFMamN3TjJ3dE5TNDJORFlnTlM0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhzTmkwMmVpSXZQand2YzNablBnPT0iKSAwIDAgbm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTpjb250YWluO2NvbG9yOiM3Nzc7Y29udGVudDoiIjtmb250LXNpemU6MThweDtoZWlnaHQ6OHB4O2xpbmUtaGVpZ2h0OjE4cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDo4cHg7d2lkdGg6OHB4fS51aWUtYWNjb3JkaW9uLWFjdGlvbi5oaWRlOmJlZm9yZXt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnVpZS1hY2NvcmRpb24tYWN0aW9uLmhpZGV+LnVpZS1hY2NvcmRpb24tcGFuZWx7ZGlzcGxheTpub25lfS51aWUtYnRuLW1lbnUtdG9nZ2xle2NvbG9yOiNjY2M7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTJweDtsaW5lLWhlaWdodDoxMnB4O291dGxpbmU6MDtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDoxMnB4fS51aWUtcGFuZWwtbWVudS1hY3Rpb257cGFkZGluZzozcHh9LnVpZS1wYW5lbC1tZW51LWluZGljYXRvcntiYWNrZ3JvdW5kOiNjY2M7d2lkdGg6MnB4fS51aWUtcGFuZWwtbWVudS1jb250ZW50e3BhZGRpbmc6M3B4O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LnVpZS1wYW5lbC1tZW51LWNvbnRlbnQgLnVpZS1idG4tcmVtb3ZlLC51aWUtcGFuZWwtbWVudS1jb250ZW50IC51aWUtYnRuLXNocmlua3tkaXNwbGF5Om5vbmV9LnVpZS1wYW5lbC1tZW51LWNvbnRlbnQ6aG92ZXIgLnVpZS1idG4tcmVtb3ZlLC51aWUtcGFuZWwtbWVudS1jb250ZW50OmhvdmVyIC51aWUtYnRuLXNocmlua3tkaXNwbGF5OmJsb2NrfS51aWUtcGFuZWwtc3Vie2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7cGFkZGluZzo1cHggMH0udWllLXBhbmVsLXN1Yi1pdGVte2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEwcHg7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6M3B4IDB9LnVpZS1uZXctaXRlbXtkaXNwbGF5OmZsZXg7cGFkZGluZzozcHh9LnVpZS1idG4tYWRkLW5ld3tiYWNrZ3JvdW5kOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojNzc3O2JhY2tncm91bmQtc2l6ZTpjb250YWluO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjE0cHg7bWFyZ2luLWxlZnQ6M3B4O21hcmdpbi10b3A6MXB4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RjR3gxY3kxamFYSmpiR1VpUGp4d1lYUm9JR1E5SWswNElERTFRVGNnTnlBd0lERWdNU0E0SURGaE55QTNJREFnTUNBeElEQWdNVFI2YlRBZ01VRTRJRGdnTUNBeElEQWdPQ0F3WVRnZ09DQXdJREFnTUNBd0lERTJlaUl2UGp4d1lYUm9JR1E5SWswNElEUmhMalV1TlNBd0lEQWdNU0F1TlM0MWRqTm9NMkV1TlM0MUlEQWdNQ0F4SURBZ01XZ3RNM1l6WVM0MUxqVWdNQ0F3SURFdE1TQXdkaTB6YUMwellTNDFMalVnTUNBd0lERWdNQzB4YUROMkxUTkJMalV1TlNBd0lEQWdNU0E0SURSNklpOCtQQzl6ZG1jKyIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0Y0d4MWN5MWphWEpqYkdVaVBqeHdZWFJvSUdROUlrMDRJREUxUVRjZ055QXdJREVnTVNBNElERmhOeUEzSURBZ01DQXhJREFnTVRSNmJUQWdNVUU0SURnZ01DQXhJREFnT0NBd1lUZ2dPQ0F3SURBZ01DQXdJREUyZWlJdlBqeHdZWFJvSUdROUlrMDRJRFJoTGpVdU5TQXdJREFnTVNBdU5TNDFkak5vTTJFdU5TNDFJREFnTUNBeElEQWdNV2d0TTNZellTNDFMalVnTUNBd0lERXRNU0F3ZGkwemFDMHpZUzQxTGpVZ01DQXdJREVnTUMweGFETjJMVE5CTGpVdU5TQXdJREFnTVNBNElEUjZJaTgrUEM5emRtYysiKTstd2Via2l0LW1hc2stcmVwZWF0Om5vLXJlcGVhdDttYXNrLXJlcGVhdDpuby1yZXBlYXQ7LXdlYmtpdC1tYXNrLXNpemU6MTRweCAxNHB4O21hc2stc2l6ZToxNHB4IDE0cHg7cGFkZGluZzozcHg7d2lkdGg6MTRweH0udWllLWJ0bi1hZGQtbmV3OmhvdmVye29wYWNpdHk6LjZ9LnVpZS1idG4tc2hyaW5re2JhY2tncm91bmQ6Izc3NztoZWlnaHQ6MTdweDstd2Via2l0LW1hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0WTJobGRuSnZiaTExY0NJK1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OeTQyTkRZZ05DNDJORFpoTGpVdU5TQXdJREFnTVNBdU56QTRJREJzTmlBMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0ExTGpjd04yd3ROUzQyTkRZZ05TNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoc05pMDJlaUl2UGp3dmMzWm5QZz09Iik7bWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RZMmhsZG5KdmJpMTFjQ0krUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk55NDJORFlnTkM0Mk5EWmhMalV1TlNBd0lEQWdNU0F1TnpBNElEQnNOaUEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTFMamN3TjJ3dE5TNDJORFlnTlM0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhzTmkwMmVpSXZQand2YzNablBnPT0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZTo4cHggOHB4O21hc2stc2l6ZTo4cHggOHB4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjIwcHg7dG9wOjJweDt3aWR0aDoxN3B4fS51aWUtYnRuLXNocmluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmJsdWV9LnVpZS1idG4tc2hyaW5rLmhpZGV7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS51aWUtYnRuLXNocmluay5oaWRlfi51aWUtcGFuZWwtc3Vie2Rpc3BsYXk6bm9uZX0udWllLWJ0bi1yZW1vdmV7YmFja2dyb3VuZC1jb2xvcjojNzc3O2hlaWdodDoxN3B4Oy13ZWJraXQtbWFzay1pbWFnZTp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE5pSWdhR1ZwWjJoMFBTSXhOaUlnWm1sc2JEMGlZM1Z5Y21WdWRFTnZiRzl5SWlCamJHRnpjejBpWW1rZ1lta3RlQ0krUEhCaGRHZ2daRDBpVFRRdU5qUTJJRFF1TmpRMllTNDFMalVnTUNBd0lERWdMamN3T0NBd1REZ2dOeTR5T1ROc01pNDJORFl0TWk0Mk5EZGhMalV1TlNBd0lEQWdNU0F1TnpBNExqY3dPRXc0TGpjd055QTRiREl1TmpRM0lESXVOalEyWVM0MUxqVWdNQ0F3SURFdExqY3dPQzQzTURoTU9DQTRMamN3TjJ3dE1pNDJORFlnTWk0Mk5EZGhMalV1TlNBd0lEQWdNUzB1TnpBNExTNDNNRGhNTnk0eU9UTWdPQ0EwTGpZME5pQTFMak0xTkdFdU5TNDFJREFnTUNBeElEQXRMamN3T0hvaUx6NDhMM04yWno0PSIpO21hc2staW1hZ2U6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0ZUNJK1BIQmhkR2dnWkQwaVRUUXVOalEySURRdU5qUTJZUzQxTGpVZ01DQXdJREVnTGpjd09DQXdURGdnTnk0eU9UTnNNaTQyTkRZdE1pNDJORGRoTGpVdU5TQXdJREFnTVNBdU56QTRMamN3T0V3NExqY3dOeUE0YkRJdU5qUTNJREl1TmpRMllTNDFMalVnTUNBd0lERXRMamN3T0M0M01EaE1PQ0E0TGpjd04yd3RNaTQyTkRZZ01pNDJORGRoTGpVdU5TQXdJREFnTVMwdU56QTRMUzQzTURoTU55NHlPVE1nT0NBMExqWTBOaUExTGpNMU5HRXVOUzQxSURBZ01DQXhJREF0TGpjd09Ib2lMejQ4TDNOMlp6ND0iKTstd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZToxNHB4IDE0cHg7bWFzay1zaXplOjE0cHggMTRweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoycHg7d2lkdGg6MTdweH0udWllLWJ0bi1yZW1vdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9LnVpZS1jb2xvcntib3JkZXI6MH0udWllLWNoZWNrYm94LC51aWUtY29sb3J7aGVpZ2h0OjEycHg7bWFyZ2luOjA7b3V0bGluZTowO3BhZGRpbmc6MDt3aWR0aDoxMnB4fS51aWUtY2hlY2tib3h7Ym94LXNoYWRvdzowO2xlZnQ6LTEwMDBweDtwb3NpdGlvbjphYnNvbHV0ZX0udWllLWNoZWNrYm94OmNoZWNrZWR+LnVpZS1sYWJlbC10ZXh0OmJlZm9yZXtiYWNrZ3JvdW5kOnVybCgiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TmlJZ2FHVnBaMmgwUFNJeE5pSWdabWxzYkQwaVkzVnljbVZ1ZEVOdmJHOXlJaUJqYkdGemN6MGlZbWtnWW1rdFpYbGxJajQ4Y0dGMGFDQmtQU0pOTVRZZ09ITXRNeTAxTGpVdE9DMDFMalZUTUNBNElEQWdPSE16SURVdU5TQTRJRFV1TlZNeE5pQTRJREUySURoNlRURXVNVGN6SURoaE1UTXVNVE16SURFekxqRXpNeUF3SURBZ01TQXhMalkyTFRJdU1EUXpRelF1TVRJZ05DNDJOamdnTlM0NE9DQXpMalVnT0NBekxqVmpNaTR4TWlBd0lETXVPRGM1SURFdU1UWTRJRFV1TVRZNElESXVORFUzUVRFekxqRXpNeUF4TXk0eE16TWdNQ0F3SURFZ01UUXVPREk0SURoakxTNHdOVGd1TURnM0xTNHhNakl1TVRnekxTNHhPVFV1TWpnNExTNHpNelV1TkRndExqZ3pJREV1TVRJdE1TNDBOalVnTVM0M05UVkRNVEV1T0RjNUlERXhMak16TWlBeE1DNHhNVGtnTVRJdU5TQTRJREV5TGpWakxUSXVNVElnTUMwekxqZzNPUzB4TGpFMk9DMDFMakUyT0MweUxqUTFOMEV4TXk0eE16UWdNVE11TVRNMElEQWdNQ0F4SURFdU1UY3lJRGg2SWk4K1BIQmhkR2dnWkQwaVRUZ2dOUzQxWVRJdU5TQXlMalVnTUNBeElEQWdNQ0ExSURJdU5TQXlMalVnTUNBd0lEQWdNQzAxZWswMExqVWdPR0V6TGpVZ015NDFJREFnTVNBeElEY2dNQ0F6TGpVZ015NDFJREFnTUNBeExUY2dNSG9pTHo0OEwzTjJaejQ9Iikgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtvcGFjaXR5OjF9LnVpZS1sYWJlbC10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoxNXB4O3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0udWllLWxhYmVsLXRleHQ6aG92ZXJ7Y29sb3I6IzAwMH0udWllLWxhYmVsLXRleHQ6YmVmb3Jle2JhY2tncm91bmQ6dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOaUlnYUdWcFoyaDBQU0l4TmlJZ1ptbHNiRDBpWTNWeWNtVnVkRU52Ykc5eUlpQmpiR0Z6Y3owaVlta2dZbWt0WlhsbExYTnNZWE5vSWo0OGNHRjBhQ0JrUFNKTk1UTXVNelU1SURFeExqSXpPRU14TlM0d05pQTVMamN5SURFMklEZ2dNVFlnT0hNdE15MDFMalV0T0MwMUxqVmhOeTR3TWpnZ055NHdNamdnTUNBd0lEQXRNaTQzT1M0MU9EaHNMamMzTGpjM01VRTFMamswTkNBMUxqazBOQ0F3SURBZ01TQTRJRE11TldNeUxqRXlJREFnTXk0NE56a2dNUzR4TmpnZ05TNHhOamdnTWk0ME5UZEJNVE11TVRNMElERXpMakV6TkNBd0lEQWdNU0F4TkM0NE1qZ2dPR010TGpBMU9DNHdPRGN0TGpFeU1pNHhPRE10TGpFNU5TNHlPRGd0TGpNek5TNDBPQzB1T0RNZ01TNHhNaTB4TGpRMk5TQXhMamMxTlMwdU1UWTFMakUyTlMwdU16TTNMak15T0MwdU5URTNMalE0Tm13dU56QTRMamN3T1hvaUx6NDhjR0YwYUNCa1BTSk5NVEV1TWprM0lEa3VNVGMyWVRNdU5TQXpMalVnTUNBd0lEQXROQzQwTnpRdE5DNDBOelJzTGpneU15NDRNak5oTWk0MUlESXVOU0F3SURBZ01TQXlMamd5T1NBeUxqZ3lPV3d1T0RJeUxqZ3lNbnB0TFRJdU9UUXpJREV1TWprNUxqZ3lNaTQ0TWpKaE15NDFJRE11TlNBd0lEQWdNUzAwTGpRM05DMDBMalEzTkd3dU9ESXpMamd5TTJFeUxqVWdNaTQxSURBZ01DQXdJREl1T0RJNUlESXVPREk1ZWlJdlBqeHdZWFJvSUdROUlrMHpMak0xSURVdU5EZGpMUzR4T0M0eE5pMHVNelV6TGpNeU1pMHVOVEU0TGpRNE4wRXhNeTR4TXpRZ01UTXVNVE0wSURBZ01DQXdJREV1TVRjeUlEaHNMakU1TlM0eU9EaGpMak16TlM0ME9DNDRNeUF4TGpFeUlERXVORFkxSURFdU56VTFRelF1TVRJeElERXhMak16TWlBMUxqZzRNU0F4TWk0MUlEZ2dNVEl1TldNdU56RTJJREFnTVM0ek9TMHVNVE16SURJdU1ESXRMak0yYkM0M055NDNOekpCTnk0d01qa2dOeTR3TWprZ01DQXdJREVnT0NBeE15NDFRek1nTVRNdU5TQXdJRGdnTUNBNGN5NDVNemt0TVM0M01qRWdNaTQyTkRFdE15NHlNemhzTGpjd09DNDNNRGw2YlRFd0xqSTVOaUE0TGpnNE5DMHhNaTB4TWlBdU56QTRMUzQzTURnZ01USWdNVEl0TGpjd09DNDNNRGg2SWk4K1BDOXpkbWMrIikgbm8tcmVwZWF0IDAgMDtiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtjb250ZW50OiIiO2hlaWdodDoxMnB4O2xlZnQ6MDtvcGFjaXR5Oi42O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7d2lkdGg6MTJweH0udWllLWxhYmVse2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2t9LnVpZS1udW1iZXJ7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2ZvbnQtc2l6ZTo5cHg7bWF4LXdpZHRoOjUwcHg7cGFkZGluZzozcHh9LnVpZS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjY2M7Zm9udC1zaXplOjEwcHg7cGFkZGluZzoycHh9",data:{general:{data:[{el:"outlines",active:!0}]},outlines:{data:[{el:"section",active:!0,shrink:!0,color:"#ff00ff",size:"1"},{el:"div",active:!0,shrink:!1,color:"#00ffff",size:"1"},{el:"p",active:!0,shrink:!1,color:"#cccccc",size:"1"}]}}},u.init(m),F=l(m),U=m,(h=F.component)&&(Y=h.getElementById(U.btn.id))&&Y.addEventListener("click",function(l){l.preventDefault();l=h.getElementById(U.panel.id);l&&l.classList.toggle("active")}),V=m,(j=F.component)&&((Y=j.querySelector(".uie-top-header-action-btn"))&&Y.addEventListener("click",function(l){l.preventDefault(),j.getElementById(V.panel.id).classList.remove("active")}),document.addEventListener("keydown",function(l){"Escape"===l.code&&j.getElementById(V.panel.id).classList.remove("active")}),Y=j.querySelectorAll(".uie-accordion-action"))&&Y.forEach(function(l){l.addEventListener("click",function(l){l.preventDefault(),l.currentTarget.classList.toggle("hide")})}),e(F.component),X=(m=F).component,m=m.content,w="general",I="#uieGeneralContent",document.addEventListener("keydown",function(l){"Backquote"===l.code&&l.ctrlKey&&(l=X.querySelector("".concat(I," #uiegeneraloutlinesCb")))&&(l.checked^=1,l.dispatchEvent(new Event("change")),M())}),(s=X.querySelector(I)).innerHTML="",E=(new DOMParser).parseFromString(m,"text/html").querySelector(I).innerHTML,u.get(w).data.forEach(function(l){var t=document.createElement("template"),l=(t.innerHTML=G(E,{"${id}":"uie"+w+l.el,"${cb_id}":"uie"+w+l.el+"Cb","${cb_val}":l.active?" checked ":"","${title}":l.el}),t.content);s.appendChild(l.cloneNode(!0))}),(m=X.querySelectorAll("".concat(I," .uie-checkbox")))&&m.forEach(function(l){l.addEventListener("change",function(l){var l=l.target,t=l.closest(".uie-panel-row").id;u.update(w,t,{active:l.checked}),M()})}),t(F),M()});