(function(){"use strict";var l=window.location,u=window.document,o=u.currentScript,R=o.getAttribute("data-api")||_(o);function h(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function d(e,t){try{if(window.localStorage.vince_ignore==="true")return h("localStorage flag")}catch(O){}var r=o&&o.getAttribute("data-include"),a=o&&o.getAttribute("data-exclude");if(e==="pageview"){var i=!r||r&&r.split(",").some(s),c=a&&a.split(",").some(s);if(!i||c)return h("exclusion rule")}function s(O){var U=l.pathname;return U.match(new RegExp("^"+O.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var n={};n.n=e,n.u=l.href,n.d=o.getAttribute("data-domain"),n.r=u.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var f=new XMLHttpRequest;f.open("POST",R,!0),f.setRequestHeader("Content-Type","text/plain"),f.send(JSON.stringify(n)),f.onreadystatechange=function(){f.readyState===4&&t&&t.callback&&t.callback()}}var y=window.vince&&window.vince.q||[];window.vince=d;for(var v=0;v<y.length;v++)d.apply(this,y[v]);var g;function p(){g!==l.pathname&&(g=l.pathname,d("pageview"))}var m=window.history;if(m.pushState){var D=m.pushState;m.pushState=function(){D.apply(this,arguments),p()},window.addEventListener("popstate",p)}function P(){!g&&u.visibilityState==="visible"&&p()}u.visibilityState==="prerender"?u.addEventListener("visibilitychange",P):p();function q(e){for(;e&&(typeof e.tagName=="undefined"||!b(e)||!e.href);)e=e.parentNode;return e}function b(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function I(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&a}var L=1;function E(e){if(!(e.type==="auxclick"&&e.button!==L)){var t=q(e.target),r=t&&t.href&&t.href.split("?")[0];if(!F(t,0)&&z(r))return T(e,t,{name:"File Download",props:{url:r}})}}function T(e,t,r){var a=!1;function i(){a||(a=!0,window.location=t.href)}I(e,t)?(vince(r.name,{props:r.props,callback:i}),setTimeout(i,5e3),e.preventDefault()):vince(r.name,{props:r.props})}u.addEventListener("click",E),u.addEventListener("auxclick",E);var k=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],S=o.getAttribute("file-types"),x=o.getAttribute("add-file-types"),M=S&&S.split(",")||x&&x.split(",").concat(k)||k;function z(e){if(!e)return!1;var t=e.split(".").pop();return M.some(function(r){return r===t})}function N(e){var t=w(e)?e:e&&e.parentNode,r={name:null,props:{}},a=t&&t.classList;if(!a)return r;for(var i=0;i<a.length;i++){var c=a.item(i),s=c.match(/vince-event-(.+)=(.+)/);if(s){var n=s[1],f=s[2].replace(/\+/g," ");n.toLowerCase()==="name"?r.name=f:r.props[n]=f}}return r}function H(e){var t=e.target,r=N(t);if(!r.name)return;e.preventDefault();var a=!1;function i(){a||(a=!0,t.submit())}setTimeout(i,5e3),vince(r.name,{props:r.props,callback:i})}function K(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var C=3;function A(e){if(!(e.type==="auxclick"&&e.button!==L)){for(var t=e.target,r,a,i=0;i<=C&&t;i++){if(K(t))return;b(t)&&(r=t),w(t)&&(a=t),t=t.parentNode}if(a){var c=N(a);r?(c.props.url=r.href,T(e,r,c)):vince(c.name,{props:c.props})}}}function w(e){var t=e&&e.classList;if(t){for(var r=0;r<t.length;r++)if(t.item(r).match(/vince-event-name=(.+)/))return!0}return!1}function F(e,t){return!e||t>C?!1:w(e)?!0:F(e.parentNode,t+1)}u.addEventListener("submit",H),u.addEventListener("click",A),u.addEventListener("auxclick",A)})();
