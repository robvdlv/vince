(function(){"use strict";var s=window.location,o=window.document,f=o.currentScript,_=f.getAttribute("data-api")||x(f);function p(e){console.warn("Ignoring Event: "+e)}function x(e){return new URL(e.src).origin+"/api/event"}function v(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||s.protocol==="file:")return p("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return p("localStorage flag")}catch(C){}var r=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if(e==="pageview"){var i=!r||r&&r.split(",").some(l),u=a&&a.split(",").some(l);if(!i||u)return p("exclusion rule")}function l(C){var M=s.pathname;return M.match(new RegExp("^"+C.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var n={};n.n=e,n.u=s.href,n.d=f.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var c=new XMLHttpRequest;c.open("POST",_,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(n)),c.onreadystatechange=function(){c.readyState===4&&t&&t.callback&&t.callback()}}var L=window.vince&&window.vince.q||[];window.vince=v;for(var g=0;g<L.length;g++)v.apply(this,L[g]);var w;function d(){w!==s.pathname&&(w=s.pathname,v("pageview"))}var h=window.history;if(h.pushState){var O=h.pushState;h.pushState=function(){O.apply(this,arguments),d()},window.addEventListener("popstate",d)}function R(){!w&&o.visibilityState==="visible"&&d()}o.visibilityState==="prerender"?o.addEventListener("visibilitychange",R):d();function P(e){for(;e&&(typeof e.tagName=="undefined"||!b(e)||!e.href);)e=e.parentNode;return e}function b(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function $(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&a}var E=1;function y(e){if(!(e.type==="auxclick"&&e.button!==E)){var t=P(e.target),r=t&&t.href&&t.href.split("?")[0];N(t,0)}}function q(e,t,r){var a=!1;function i(){a||(a=!0,window.location=t.href)}$(e,t)?(vince(r.name,{props:r.props,callback:i}),setTimeout(i,5e3),e.preventDefault()):vince(r.name,{props:r.props})}o.addEventListener("click",y),o.addEventListener("auxclick",y);function k(e){var t=m(e)?e:e&&e.parentNode,r={name:null,props:{}},a=t&&t.classList;if(!a)return r;for(var i=0;i<a.length;i++){var u=a.item(i),l=u.match(/vince-event-(.+)=(.+)/);if(l){var n=l[1],c=l[2].replace(/\+/g," ");n.toLowerCase()==="name"?r.name=c:r.props[n]=c}}return r}function A(e){var t=e.target,r=k(t);if(!r.name)return;e.preventDefault();var a=!1;function i(){a||(a=!0,t.submit())}setTimeout(i,5e3),vince(r.name,{props:r.props,callback:i})}function I(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var S=3;function T(e){if(!(e.type==="auxclick"&&e.button!==E)){for(var t=e.target,r,a,i=0;i<=S&&t;i++){if(I(t))return;b(t)&&(r=t),m(t)&&(a=t),t=t.parentNode}if(a){var u=k(a);r?(u.props.url=r.href,q(e,r,u)):vince(u.name,{props:u.props})}}}function m(e){var t=e&&e.classList;if(t){for(var r=0;r<t.length;r++)if(t.item(r).match(/vince-event-name=(.+)/))return!0}return!1}function N(e,t){return!e||t>S?!1:m(e)?!0:N(e.parentNode,t+1)}o.addEventListener("submit",A),o.addEventListener("click",T),o.addEventListener("auxclick",T)})();
