(function(){"use strict";var s=window.location,i=window.document,o=i.currentScript,T=o.getAttribute("data-api")||S(o);function N(r){console.warn("Ignoring Event: "+r)}function S(r){return new URL(r.src).origin+"/api/event"}function l(r,e){try{if(window.localStorage.vince_ignore==="true")return N("localStorage flag")}catch(n){}var t={};t.n=r,t.u=e&&e.u?e.u:s.href,t.d=o.getAttribute("data-domain"),t.r=i.referrer||null,t.w=window.innerWidth,e&&e.meta&&(t.m=JSON.stringify(e.meta)),e&&e.props&&(t.p=e.props),t.h=1;var a=new XMLHttpRequest;a.open("POST",T,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(t)),a.onreadystatechange=function(){a.readyState===4&&e&&e.callback&&e.callback()}}var g=window.vince&&window.vince.q||[];window.vince=l;for(var c=0;c<g.length;c++)l.apply(this,g[c]);function C(r){for(;r&&(typeof r.tagName=="undefined"||!p(r)||!r.href);)r=r.parentNode;return r}function p(r){return r&&r.tagName&&r.tagName.toLowerCase()==="a"}function O(r,e){if(r.defaultPrevented)return!1;var t=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(r.ctrlKey||r.metaKey||r.shiftKey)&&r.type==="click";return t&&a}var v=1;function m(r){if(!(r.type==="auxclick"&&r.button!==v)){var e=C(r.target),t=e&&e.href&&e.href.split("?")[0];if(!b(e,0)&&_(e))return w(r,e,{name:"Outbound Link: Click",props:{url:e.href}})}}function w(r,e,t){var a=!1;function n(){a||(a=!0,window.location=e.href)}O(r,e)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),r.preventDefault()):vince(t.name,{props:t.props})}i.addEventListener("click",m),i.addEventListener("auxclick",m);function _(r){return r&&r.href&&r.host&&r.host!==s.host}function h(r){var e=f(r)?r:r&&r.parentNode,t={name:null,props:{}},a=e&&e.classList;if(!a)return t;for(var n=0;n<a.length;n++){var u=a.item(n),d=u.match(/vince-event-(.+)=(.+)/);if(d){var k=d[1],y=d[2].replace(/\+/g," ");k.toLowerCase()==="name"?t.name=y:t.props[k]=y}}return t}function R(r){var e=r.target,t=h(e);if(!t.name)return;r.preventDefault();var a=!1;function n(){a||(a=!0,e.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function q(r){return r&&r.tagName&&r.tagName.toLowerCase()==="form"}var L=3;function E(r){if(!(r.type==="auxclick"&&r.button!==v)){for(var e=r.target,t,a,n=0;n<=L&&e;n++){if(q(e))return;p(e)&&(t=e),f(e)&&(a=e),e=e.parentNode}if(a){var u=h(a);t?(u.props.url=t.href,w(r,t,u)):vince(u.name,{props:u.props})}}}function f(r){var e=r&&r.classList;if(e){for(var t=0;t<e.length;t++)if(e.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function b(r,e){return!r||e>L?!1:f(r)?!0:b(r.parentNode,e+1)}i.addEventListener("submit",R),i.addEventListener("click",E),i.addEventListener("auxclick",E)})();
