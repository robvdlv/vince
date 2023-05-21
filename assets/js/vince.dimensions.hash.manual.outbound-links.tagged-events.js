(function(){"use strict";var s=window.location,u=window.document,c=u.currentScript,T=c.getAttribute("data-api")||S(c);function g(r){console.warn("Ignoring Event: "+r)}function S(r){return new URL(r.src).origin+"/api/event"}function v(r,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||s.protocol==="file:")return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if(window.localStorage.vince_ignore==="true")return g("localStorage flag")}catch(o){}var t={};t.n=r,t.u=e&&e.u?e.u:s.href,t.d=c.getAttribute("data-domain"),t.r=u.referrer||null,t.w=window.innerWidth,e&&e.meta&&(t.m=JSON.stringify(e.meta)),e&&e.props&&(t.p=e.props);var a=c.getAttributeNames().filter(function(o){return o.substring(0,6)==="event-"}),n=t.p||{};a.forEach(function(o){var f=o.replace("event-",""),l=c.getAttribute(o);n[f]=n[f]||l}),t.p=n,t.h=1;var i=new XMLHttpRequest;i.open("POST",T,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(t)),i.onreadystatechange=function(){i.readyState===4&&e&&e.callback&&e.callback()}}}var w=window.vince&&window.vince.q||[];window.vince=v;for(var d=0;d<w.length;d++)v.apply(this,w[d]);function C(r){for(;r&&(typeof r.tagName=="undefined"||!m(r)||!r.href);)r=r.parentNode;return r}function m(r){return r&&r.tagName&&r.tagName.toLowerCase()==="a"}function _(r,e){if(r.defaultPrevented)return!1;var t=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(r.ctrlKey||r.metaKey||r.shiftKey)&&r.type==="click";return t&&a}var h=1;function L(r){if(!(r.type==="auxclick"&&r.button!==h)){var e=C(r.target),t=e&&e.href&&e.href.split("?")[0];if(!N(e,0)&&O(e))return b(r,e,{name:"Outbound Link: Click",props:{url:e.href}})}}function b(r,e,t){var a=!1;function n(){a||(a=!0,window.location=e.href)}_(r,e)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),r.preventDefault()):vince(t.name,{props:t.props})}u.addEventListener("click",L),u.addEventListener("auxclick",L);function O(r){return r&&r.href&&r.host&&r.host!==s.host}function E(r){var e=p(r)?r:r&&r.parentNode,t={name:null,props:{}},a=e&&e.classList;if(!a)return t;for(var n=0;n<a.length;n++){var i=a.item(n),o=i.match(/vince-event-(.+)=(.+)/);if(o){var f=o[1],l=o[2].replace(/\+/g," ");f.toLowerCase()==="name"?t.name=l:t.props[f]=l}}return t}function R(r){var e=r.target,t=E(e);if(!t.name)return;r.preventDefault();var a=!1;function n(){a||(a=!0,e.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function q(r){return r&&r.tagName&&r.tagName.toLowerCase()==="form"}var k=3;function y(r){if(!(r.type==="auxclick"&&r.button!==h)){for(var e=r.target,t,a,n=0;n<=k&&e;n++){if(q(e))return;m(e)&&(t=e),p(e)&&(a=e),e=e.parentNode}if(a){var i=E(a);t?(i.props.url=t.href,b(r,t,i)):vince(i.name,{props:i.props})}}}function p(r){var e=r&&r.classList;if(e){for(var t=0;t<e.length;t++)if(e.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function N(r,e){return!r||e>k?!1:p(r)?!0:N(r.parentNode,e+1)}u.addEventListener("submit",R),u.addEventListener("click",y),u.addEventListener("auxclick",y)})();
