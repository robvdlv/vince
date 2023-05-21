(function(){"use strict";var i=window.location,n=window.document,o=n.currentScript,L=o.getAttribute("data-api")||b(o);function d(e){console.warn("Ignoring Event: "+e)}function b(e){return new URL(e.src).origin+"/api/event"}function f(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||i.protocol==="file:")return d("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch(m){}var r=o&&o.getAttribute("data-include"),c=o&&o.getAttribute("data-exclude");if(e==="pageview"){var l=!r||r&&r.split(",").some(v),N=c&&c.split(",").some(v);if(!l||N)return d("exclusion rule")}function v(m){var y=i.pathname;return y+=i.hash,y.match(new RegExp("^"+m.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={};a.n=e,a.u=i.href,a.d=o.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),a.h=1;var u=new XMLHttpRequest;u.open("POST",L,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(a)),u.onreadystatechange=function(){u.readyState===4&&t&&t.callback&&t.callback()}}var h=window.vince&&window.vince.q||[];window.vince=f;for(var s=0;s<h.length;s++)f.apply(this,h[s]);var w;function p(){w=i.pathname,f("pageview")}window.addEventListener("hashchange",p);function E(){!w&&n.visibilityState==="visible"&&p()}n.visibilityState==="prerender"?n.addEventListener("visibilitychange",E):p();function k(e){for(;e&&(typeof e.tagName=="undefined"||!S(e)||!e.href);)e=e.parentNode;return e}function S(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function C(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),c=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&c}var x=1;function g(e){if(!(e.type==="auxclick"&&e.button!==x)){var t=k(e.target),r=t&&t.href&&t.href.split("?")[0];if(_(t))return O(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}}function O(e,t,r){var c=!1;function l(){c||(c=!0,window.location=t.href)}C(e,t)?(vince(r.name,{props:r.props,callback:l}),setTimeout(l,5e3),e.preventDefault()):vince(r.name,{props:r.props})}n.addEventListener("click",g),n.addEventListener("auxclick",g);function _(e){return e&&e.href&&e.host&&e.host!==i.host}})();
