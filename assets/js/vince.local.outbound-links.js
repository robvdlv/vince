(function(){"use strict";var n=window.location,i=window.document,u=i.currentScript,w=u.getAttribute("data-api")||v(u);function g(e){console.warn("Ignoring Event: "+e)}function v(e){return new URL(e.src).origin+"/api/event"}function c(e,t){try{if(window.localStorage.vince_ignore==="true")return g("localStorage flag")}catch(s){}var r={};r.n=e,r.u=n.href,r.d=u.getAttribute("data-domain"),r.r=i.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props);var a=new XMLHttpRequest;a.open("POST",w,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(r)),a.onreadystatechange=function(){a.readyState===4&&t&&t.callback&&t.callback()}}var p=window.vince&&window.vince.q||[];window.vince=c;for(var f=0;f<p.length;f++)c.apply(this,p[f]);var l;function o(){l!==n.pathname&&(l=n.pathname,c("pageview"))}var d=window.history;if(d.pushState){var y=d.pushState;d.pushState=function(){y.apply(this,arguments),o()},window.addEventListener("popstate",o)}function L(){!l&&i.visibilityState==="visible"&&o()}i.visibilityState==="prerender"?i.addEventListener("visibilitychange",L):o();function m(e){for(;e&&(typeof e.tagName=="undefined"||!b(e)||!e.href);)e=e.parentNode;return e}function b(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function S(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&a}var E=1;function h(e){if(!(e.type==="auxclick"&&e.button!==E)){var t=m(e.target),r=t&&t.href&&t.href.split("?")[0];if(C(t))return k(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}}function k(e,t,r){var a=!1;function s(){a||(a=!0,window.location=t.href)}S(e,t)?(vince(r.name,{props:r.props,callback:s}),setTimeout(s,5e3),e.preventDefault()):vince(r.name,{props:r.props})}i.addEventListener("click",h),i.addEventListener("auxclick",h);function C(e){return e&&e.href&&e.host&&e.host!==n.host}})();
