(function(){"use strict";var o=window.location,c=window.document,a=c.currentScript,T=a.getAttribute("data-api")||b(a);function f(e){console.warn("Ignoring Event: "+e)}function b(e){return new URL(e.src).origin+"/api/event"}function p(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||o.protocol==="file:")return f("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return f("localStorage flag")}catch(L){}var r=a&&a.getAttribute("data-include"),n=a&&a.getAttribute("data-exclude");if(e==="pageview"){var l=!r||r&&r.split(",").some(y),N=n&&n.split(",").some(y);if(!l||N)return f("exclusion rule")}function y(L){var k=o.pathname;return k+=o.hash,k.match(new RegExp("^"+L.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=t&&t.u?t.u:o.href,i.d=a.getAttribute("data-domain"),i.r=c.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),i.h=1;var u=new XMLHttpRequest;u.open("POST",T,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(i)),u.onreadystatechange=function(){u.readyState===4&&t&&t.callback&&t.callback()}}var s=window.vince&&window.vince.q||[];window.vince=p;for(var d=0;d<s.length;d++)p.apply(this,s[d]);function x(e){for(;e&&(typeof e.tagName=="undefined"||!E(e)||!e.href);)e=e.parentNode;return e}function E(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function C(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&n}var S=1;function w(e){if(!(e.type==="auxclick"&&e.button!==S)){var t=x(e.target),r=t&&t.href&&t.href.split("?")[0];if(A(t))return g(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(_(r))return g(e,t,{name:"File Download",props:{url:r}})}}function g(e,t,r){var n=!1;function l(){n||(n=!0,window.location=t.href)}C(e,t)?(vince(r.name,{props:r.props,callback:l}),setTimeout(l,5e3),e.preventDefault()):vince(r.name,{props:r.props})}c.addEventListener("click",w),c.addEventListener("auxclick",w);function A(e){return e&&e.href&&e.host&&e.host!==o.host}var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=a.getAttribute("file-types"),m=a.getAttribute("add-file-types"),O=v&&v.split(",")||m&&m.split(",").concat(h)||h;function _(e){if(!e)return!1;var t=e.split(".").pop();return O.some(function(r){return r===t})}})();
