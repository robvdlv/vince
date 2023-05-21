(function(){"use strict";var d=window.location,o=window.document,f=o.currentScript,N=f.getAttribute("data-api")||S(f);function s(e){console.warn("Ignoring Event: "+e)}function S(e){return new URL(e.src).origin+"/api/event"}function v(e,r){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(d.hostname)||d.protocol==="file:")return s("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return s("localStorage flag")}catch(T){}var t=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if(e==="pageview"){var n=!t||t&&t.split(",").some(l),u=a&&a.split(",").some(l);if(!n||u)return s("exclusion rule")}function l(T){var $=d.pathname;return $.match(new RegExp("^"+T.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=r&&r.u?r.u:d.href,i.d=f.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,r&&r.meta&&(i.m=JSON.stringify(r.meta)),r&&r.props&&(i.p=r.props);var c=new XMLHttpRequest;c.open("POST",N,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(i)),c.onreadystatechange=function(){c.readyState===4&&r&&r.callback&&r.callback()}}var w=window.vince&&window.vince.q||[];window.vince=v;for(var g=0;g<w.length;g++)v.apply(this,w[g]);function C(e){for(;e&&(typeof e.tagName=="undefined"||!m(e)||!e.href);)e=e.parentNode;return e}function m(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function _(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var h=1;function L(e){if(!(e.type==="auxclick"&&e.button!==h)){var r=C(e.target),t=r&&r.href&&r.href.split("?")[0];y(r,0)}}function x(e,r,t){var a=!1;function n(){a||(a=!0,window.location=r.href)}_(e,r)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),e.preventDefault()):vince(t.name,{props:t.props})}o.addEventListener("click",L),o.addEventListener("auxclick",L);function E(e){var r=p(e)?e:e&&e.parentNode,t={name:null,props:{}},a=r&&r.classList;if(!a)return t;for(var n=0;n<a.length;n++){var u=a.item(n),l=u.match(/vince-event-(.+)=(.+)/);if(l){var i=l[1],c=l[2].replace(/\+/g," ");i.toLowerCase()==="name"?t.name=c:t.props[i]=c}}return t}function O(e){var r=e.target,t=E(r);if(!t.name)return;e.preventDefault();var a=!1;function n(){a||(a=!0,r.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function R(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var b=3;function k(e){if(!(e.type==="auxclick"&&e.button!==h)){for(var r=e.target,t,a,n=0;n<=b&&r;n++){if(R(r))return;m(r)&&(t=r),p(r)&&(a=r),r=r.parentNode}if(a){var u=E(a);t?(u.props.url=t.href,x(e,t,u)):vince(u.name,{props:u.props})}}}function p(e){var r=e&&e.classList;if(r){for(var t=0;t<r.length;t++)if(r.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function y(e,r){return!e||r>b?!1:p(e)?!0:y(e.parentNode,r+1)}o.addEventListener("submit",O),o.addEventListener("click",k),o.addEventListener("auxclick",k)})();
