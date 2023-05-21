(function(){"use strict";var o=window.location,i=window.document,f=i.currentScript,C=f.getAttribute("data-api")||_(f);function O(e){console.warn("Ignoring Event: "+e)}function _(e){return new URL(e.src).origin+"/api/event"}function s(e,r){try{if(window.localStorage.vince_ignore==="true")return O("localStorage flag")}catch(n){}var t={};t.n=e,t.u=o.href,t.d=f.getAttribute("data-domain"),t.r=i.referrer||null,t.w=window.innerWidth,r&&r.meta&&(t.m=JSON.stringify(r.meta)),r&&r.props&&(t.p=r.props);var a=new XMLHttpRequest;a.open("POST",C,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(t)),a.onreadystatechange=function(){a.readyState===4&&r&&r.callback&&r.callback()}}var h=window.vince&&window.vince.q||[];window.vince=s;for(var d=0;d<h.length;d++)s.apply(this,h[d]);var l;function c(){l!==o.pathname&&(l=o.pathname,s("pageview"))}var p=window.history;if(p.pushState){var R=p.pushState;p.pushState=function(){R.apply(this,arguments),c()},window.addEventListener("popstate",c)}function q(){!l&&i.visibilityState==="visible"&&c()}i.visibilityState==="prerender"?i.addEventListener("visibilitychange",q):c();function x(e){for(;e&&(typeof e.tagName=="undefined"||!w(e)||!e.href);)e=e.parentNode;return e}function w(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function P(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var m=1;function L(e){if(!(e.type==="auxclick"&&e.button!==m)){var r=x(e.target),t=r&&r.href&&r.href.split("?")[0];if(!S(r,0)&&D(r))return b(e,r,{name:"Outbound Link: Click",props:{url:r.href}})}}function b(e,r,t){var a=!1;function n(){a||(a=!0,window.location=r.href)}P(e,r)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),e.preventDefault()):vince(t.name,{props:t.props})}i.addEventListener("click",L),i.addEventListener("auxclick",L);function D(e){return e&&e.href&&e.host&&e.host!==o.host}function y(e){var r=v(e)?e:e&&e.parentNode,t={name:null,props:{}},a=r&&r.classList;if(!a)return t;for(var n=0;n<a.length;n++){var u=a.item(n),g=u.match(/vince-event-(.+)=(.+)/);if(g){var T=g[1],N=g[2].replace(/\+/g," ");T.toLowerCase()==="name"?t.name=N:t.props[T]=N}}return t}function F(e){var r=e.target,t=y(r);if(!t.name)return;e.preventDefault();var a=!1;function n(){a||(a=!0,r.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function I(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var E=3;function k(e){if(!(e.type==="auxclick"&&e.button!==m)){for(var r=e.target,t,a,n=0;n<=E&&r;n++){if(I(r))return;w(r)&&(t=r),v(r)&&(a=r),r=r.parentNode}if(a){var u=y(a);t?(u.props.url=t.href,b(e,t,u)):vince(u.name,{props:u.props})}}}function v(e){var r=e&&e.classList;if(r){for(var t=0;t<r.length;t++)if(r.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function S(e,r){return!e||r>E?!1:v(e)?!0:S(e.parentNode,r+1)}i.addEventListener("submit",F),i.addEventListener("click",k),i.addEventListener("auxclick",k)})();
