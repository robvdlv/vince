(function(){"use strict";var s=window.location,u=window.document,c=u.currentScript,C=c.getAttribute("data-api")||_(c);function v(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function g(e,r){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||s.protocol==="file:")return v("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if(window.localStorage.vince_ignore==="true")return v("localStorage flag")}catch(o){}var t={};t.n=e,t.u=r&&r.u?r.u:s.href,t.d=c.getAttribute("data-domain"),t.r=u.referrer||null,t.w=window.innerWidth,r&&r.meta&&(t.m=JSON.stringify(r.meta)),r&&r.props&&(t.p=r.props);var a=c.getAttributeNames().filter(function(o){return o.substring(0,6)==="event-"}),n=t.p||{};a.forEach(function(o){var f=o.replace("event-",""),l=c.getAttribute(o);n[f]=n[f]||l}),t.p=n;var i=new XMLHttpRequest;i.open("POST",C,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(t)),i.onreadystatechange=function(){i.readyState===4&&r&&r.callback&&r.callback()}}}var w=window.vince&&window.vince.q||[];window.vince=g;for(var p=0;p<w.length;p++)g.apply(this,w[p]);function A(e){for(;e&&(typeof e.tagName=="undefined"||!m(e)||!e.href);)e=e.parentNode;return e}function m(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function F(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var y=1;function h(e){if(!(e.type==="auxclick"&&e.button!==y)){var r=A(e.target),t=r&&r.href&&r.href.split("?")[0];if(!x(r,0)&&D(t))return T(e,r,{name:"File Download",props:{url:t}})}}function T(e,r,t){var a=!1;function n(){a||(a=!0,window.location=r.href)}F(e,r)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),e.preventDefault()):vince(t.name,{props:t.props})}u.addEventListener("click",h),u.addEventListener("auxclick",h);var L=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],b=c.getAttribute("file-types"),k=c.getAttribute("add-file-types"),O=b&&b.split(",")||k&&k.split(",").concat(L)||L;function D(e){if(!e)return!1;var r=e.split(".").pop();return O.some(function(t){return t===r})}function E(e){var r=d(e)?e:e&&e.parentNode,t={name:null,props:{}},a=r&&r.classList;if(!a)return t;for(var n=0;n<a.length;n++){var i=a.item(n),o=i.match(/vince-event-(.+)=(.+)/);if(o){var f=o[1],l=o[2].replace(/\+/g," ");f.toLowerCase()==="name"?t.name=l:t.props[f]=l}}return t}function R(e){var r=e.target,t=E(r);if(!t.name)return;e.preventDefault();var a=!1;function n(){a||(a=!0,r.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function q(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var N=3;function S(e){if(!(e.type==="auxclick"&&e.button!==y)){for(var r=e.target,t,a,n=0;n<=N&&r;n++){if(q(r))return;m(r)&&(t=r),d(r)&&(a=r),r=r.parentNode}if(a){var i=E(a);t?(i.props.url=t.href,T(e,t,i)):vince(i.name,{props:i.props})}}}function d(e){var r=e&&e.classList;if(r){for(var t=0;t<r.length;t++)if(r.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function x(e,r){return!e||r>N?!1:d(e)?!0:x(e.parentNode,r+1)}u.addEventListener("submit",R),u.addEventListener("click",S),u.addEventListener("auxclick",S)})();
