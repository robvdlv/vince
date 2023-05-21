(function(){"use strict";var s=window.location,o=window.document,u=o.currentScript,A=u.getAttribute("data-api")||O(u);function g(e){console.warn("Ignoring Event: "+e)}function O(e){return new URL(e.src).origin+"/api/event"}function w(e,r){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||s.protocol==="file:")return g("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return g("localStorage flag")}catch(f){}var t=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if(e==="pageview"){var n=!t||t&&t.split(",").some(l),c=a&&a.split(",").some(l);if(!n||c)return g("exclusion rule")}function l(f){var p=s.pathname;return p+=s.hash,p.match(new RegExp("^"+f.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=s.href,i.d=u.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,r&&r.meta&&(i.m=JSON.stringify(r.meta)),r&&r.props&&(i.p=r.props);var v=u.getAttributeNames().filter(function(f){return f.substring(0,6)==="event-"}),E=i.p||{};v.forEach(function(f){var p=f.replace("event-",""),D=u.getAttribute(f);E[p]=E[p]||D}),i.p=E,i.h=1;var d=new XMLHttpRequest;d.open("POST",A,!0),d.setRequestHeader("Content-Type","text/plain"),d.send(JSON.stringify(i)),d.onreadystatechange=function(){d.readyState===4&&r&&r.callback&&r.callback()}}var L=window.vince&&window.vince.q||[];window.vince=w;for(var h=0;h<L.length;h++)w.apply(this,L[h]);var y;function m(){y=s.pathname,w("pageview")}window.addEventListener("hashchange",m);function R(){!y&&o.visibilityState==="visible"&&m()}o.visibilityState==="prerender"?o.addEventListener("visibilitychange",R):m();function P(e){for(;e&&(typeof e.tagName=="undefined"||!k(e)||!e.href);)e=e.parentNode;return e}function k(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function $(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var S=1;function T(e){if(!(e.type==="auxclick"&&e.button!==S)){var r=P(e.target),t=r&&r.href&&r.href.split("?")[0];x(r,0)}}function q(e,r,t){var a=!1;function n(){a||(a=!0,window.location=r.href)}$(e,r)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),e.preventDefault()):vince(t.name,{props:t.props})}o.addEventListener("click",T),o.addEventListener("auxclick",T);function N(e){var r=b(e)?e:e&&e.parentNode,t={name:null,props:{}},a=r&&r.classList;if(!a)return t;for(var n=0;n<a.length;n++){var c=a.item(n),l=c.match(/vince-event-(.+)=(.+)/);if(l){var i=l[1],v=l[2].replace(/\+/g," ");i.toLowerCase()==="name"?t.name=v:t.props[i]=v}}return t}function I(e){var r=e.target,t=N(r);if(!t.name)return;e.preventDefault();var a=!1;function n(){a||(a=!0,r.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function M(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var C=3;function _(e){if(!(e.type==="auxclick"&&e.button!==S)){for(var r=e.target,t,a,n=0;n<=C&&r;n++){if(M(r))return;k(r)&&(t=r),b(r)&&(a=r),r=r.parentNode}if(a){var c=N(a);t?(c.props.url=t.href,q(e,t,c)):vince(c.name,{props:c.props})}}}function b(e){var r=e&&e.classList;if(r){for(var t=0;t<r.length;t++)if(r.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function x(e,r){return!e||r>C?!1:b(e)?!0:x(e.parentNode,r+1)}o.addEventListener("submit",I),o.addEventListener("click",_),o.addEventListener("auxclick",_)})();
