(function(){"use strict";var l=window.location,o=window.document,i=o.currentScript,w=i.getAttribute("data-api")||v(i);function h(e){console.warn("Ignoring Event: "+e)}function v(e){return new URL(e.src).origin+"/api/event"}function d(e,r){try{if(window.localStorage.vince_ignore==="true")return h("localStorage flag")}catch(c){}var t={};t.n=e,t.u=r&&r.u?r.u:l.href,t.d=i.getAttribute("data-domain"),t.r=o.referrer||null,t.w=window.innerWidth,r&&r.meta&&(t.m=JSON.stringify(r.meta)),r&&r.props&&(t.p=r.props);var n=i.getAttributeNames().filter(function(c){return c.substring(0,6)==="event-"}),a=t.p||{};n.forEach(function(c){var g=c.replace("event-",""),N=i.getAttribute(c);a[g]=a[g]||N}),t.p=a,t.h=1;var u=new XMLHttpRequest;u.open("POST",w,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(t)),u.onreadystatechange=function(){u.readyState===4&&r&&r.callback&&r.callback()}}var p=window.vince&&window.vince.q||[];window.vince=d;for(var f=0;f<p.length;f++)d.apply(this,p[f]);function y(e){for(;e&&(typeof e.tagName=="undefined"||!m(e)||!e.href);)e=e.parentNode;return e}function m(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function L(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&n}var b=1;function s(e){if(!(e.type==="auxclick"&&e.button!==b)){var r=y(e.target),t=r&&r.href&&r.href.split("?")[0];if(k(r))return E(e,r,{name:"Outbound Link: Click",props:{url:r.href}})}}function E(e,r,t){var n=!1;function a(){n||(n=!0,window.location=r.href)}L(e,r)?(vince(t.name,{props:t.props,callback:a}),setTimeout(a,5e3),e.preventDefault()):vince(t.name,{props:t.props})}o.addEventListener("click",s),o.addEventListener("auxclick",s);function k(e){return e&&e.href&&e.host&&e.host!==l.host}})();
