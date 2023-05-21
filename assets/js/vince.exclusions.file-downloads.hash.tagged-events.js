(function(){"use strict";var l=window.location,o=window.document,c=o.currentScript,O=c.getAttribute("data-api")||R(c);function d(e){console.warn("Ignoring Event: "+e)}function R(e){return new URL(e.src).origin+"/api/event"}function p(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||l.protocol==="file:")return d("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch(A){}var r=c&&c.getAttribute("data-include"),a=c&&c.getAttribute("data-exclude");if(e==="pageview"){var i=!r||r&&r.split(",").some(s),u=a&&a.split(",").some(s);if(!i||u)return d("exclusion rule")}function s(A){var F=l.pathname;return F+=l.hash,F.match(new RegExp("^"+A.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var n={};n.n=e,n.u=l.href,n.d=c.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),n.h=1;var f=new XMLHttpRequest;f.open("POST",O,!0),f.setRequestHeader("Content-Type","text/plain"),f.send(JSON.stringify(n)),f.onreadystatechange=function(){f.readyState===4&&t&&t.callback&&t.callback()}}var m=window.vince&&window.vince.q||[];window.vince=p;for(var v=0;v<m.length;v++)p.apply(this,m[v]);var h;function g(){h=l.pathname,p("pageview")}window.addEventListener("hashchange",g);function D(){!h&&o.visibilityState==="visible"&&g()}o.visibilityState==="prerender"?o.addEventListener("visibilitychange",D):g();function P(e){for(;e&&(typeof e.tagName=="undefined"||!y(e)||!e.href);)e=e.parentNode;return e}function y(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function $(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&a}var b=1;function L(e){if(!(e.type==="auxclick"&&e.button!==b)){var t=P(e.target),r=t&&t.href&&t.href.split("?")[0];if(!_(t,0)&&I(r))return E(e,t,{name:"File Download",props:{url:r}})}}function E(e,t,r){var a=!1;function i(){a||(a=!0,window.location=t.href)}$(e,t)?(vince(r.name,{props:r.props,callback:i}),setTimeout(i,5e3),e.preventDefault()):vince(r.name,{props:r.props})}o.addEventListener("click",L),o.addEventListener("auxclick",L);var T=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],k=c.getAttribute("file-types"),x=c.getAttribute("add-file-types"),q=k&&k.split(",")||x&&x.split(",").concat(T)||T;function I(e){if(!e)return!1;var t=e.split(".").pop();return q.some(function(r){return r===t})}function S(e){var t=w(e)?e:e&&e.parentNode,r={name:null,props:{}},a=t&&t.classList;if(!a)return r;for(var i=0;i<a.length;i++){var u=a.item(i),s=u.match(/vince-event-(.+)=(.+)/);if(s){var n=s[1],f=s[2].replace(/\+/g," ");n.toLowerCase()==="name"?r.name=f:r.props[n]=f}}return r}function M(e){var t=e.target,r=S(t);if(!r.name)return;e.preventDefault();var a=!1;function i(){a||(a=!0,t.submit())}setTimeout(i,5e3),vince(r.name,{props:r.props,callback:i})}function z(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var N=3;function C(e){if(!(e.type==="auxclick"&&e.button!==b)){for(var t=e.target,r,a,i=0;i<=N&&t;i++){if(z(t))return;y(t)&&(r=t),w(t)&&(a=t),t=t.parentNode}if(a){var u=S(a);r?(u.props.url=r.href,E(e,r,u)):vince(u.name,{props:u.props})}}}function w(e){var t=e&&e.classList;if(t){for(var r=0;r<t.length;r++)if(t.item(r).match(/vince-event-name=(.+)/))return!0}return!1}function _(e,t){return!e||t>N?!1:w(e)?!0:_(e.parentNode,t+1)}o.addEventListener("submit",M),o.addEventListener("click",C),o.addEventListener("auxclick",C)})();
