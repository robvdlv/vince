(function(){"use strict";var o=window.location,l=window.document,a=l.currentScript,T=a.getAttribute("data-api")||x(a);function d(e){console.warn("Ignoring Event: "+e)}function x(e){return new URL(e.src).origin+"/api/event"}function p(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||o.protocol==="file:")return d("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch(y){}var r=a&&a.getAttribute("data-include"),n=a&&a.getAttribute("data-exclude");if(e==="pageview"){var u=!r||r&&r.split(",").some(m),N=n&&n.split(",").some(m);if(!u||N)return d("exclusion rule")}function m(y){var k=o.pathname;return k+=o.hash,k.match(new RegExp("^"+y.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=t&&t.u?t.u:o.href,i.d=a.getAttribute("data-domain"),i.r=l.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),i.h=1;var c=new XMLHttpRequest;c.open("POST",T,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(i)),c.onreadystatechange=function(){c.readyState===4&&t&&t.callback&&t.callback()}}var s=window.vince&&window.vince.q||[];window.vince=p;for(var f=0;f<s.length;f++)p.apply(this,s[f]);function L(e){for(;e&&(typeof e.tagName=="undefined"||!E(e)||!e.href);)e=e.parentNode;return e}function E(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function b(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&n}var S=1;function w(e){if(!(e.type==="auxclick"&&e.button!==S)){var t=L(e.target),r=t&&t.href&&t.href.split("?")[0];if(_(r))return A(e,t,{name:"File Download",props:{url:r}})}}function A(e,t,r){var n=!1;function u(){n||(n=!0,window.location=t.href)}b(e,t)?(vince(r.name,{props:r.props,callback:u}),setTimeout(u,5e3),e.preventDefault()):vince(r.name,{props:r.props})}l.addEventListener("click",w),l.addEventListener("auxclick",w);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=a.getAttribute("file-types"),h=a.getAttribute("add-file-types"),C=v&&v.split(",")||h&&h.split(",").concat(g)||g;function _(e){if(!e)return!1;var t=e.split(".").pop();return C.some(function(r){return r===t})}})();
