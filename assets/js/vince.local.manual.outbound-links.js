(function(){"use strict";var o=window.location,n=window.document,i=n.currentScript,w=i.getAttribute("data-api")||p(i);function s(e){console.warn("Ignoring Event: "+e)}function p(e){return new URL(e.src).origin+"/api/event"}function f(e,r){try{if(window.localStorage.vince_ignore==="true")return s("localStorage flag")}catch(c){}var t={};t.n=e,t.u=r&&r.u?r.u:o.href,t.d=i.getAttribute("data-domain"),t.r=n.referrer||null,t.w=window.innerWidth,r&&r.meta&&(t.m=JSON.stringify(r.meta)),r&&r.props&&(t.p=r.props);var a=new XMLHttpRequest;a.open("POST",w,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(t)),a.onreadystatechange=function(){a.readyState===4&&r&&r.callback&&r.callback()}}var d=window.vince&&window.vince.q||[];window.vince=f;for(var u=0;u<d.length;u++)f.apply(this,d[u]);function g(e){for(;e&&(typeof e.tagName=="undefined"||!h(e)||!e.href);)e=e.parentNode;return e}function h(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function v(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var y=1;function l(e){if(!(e.type==="auxclick"&&e.button!==y)){var r=g(e.target),t=r&&r.href&&r.href.split("?")[0];if(m(r))return L(e,r,{name:"Outbound Link: Click",props:{url:r.href}})}}function L(e,r,t){var a=!1;function c(){a||(a=!0,window.location=r.href)}v(e,r)?(vince(t.name,{props:t.props,callback:c}),setTimeout(c,5e3),e.preventDefault()):vince(t.name,{props:t.props})}n.addEventListener("click",l),n.addEventListener("auxclick",l);function m(e){return e&&e.href&&e.host&&e.host!==o.host}})();
