(function(){"use strict";var u=window.location,i=window.document,n=i.currentScript,L=n.getAttribute("data-api")||b(n);function p(e){console.warn("Ignoring Event: "+e)}function b(e){return new URL(e.src).origin+"/api/event"}function d(e,t){try{if(window.localStorage.vince_ignore==="true")return p("localStorage flag")}catch(y){}var a=n&&n.getAttribute("data-include"),c=n&&n.getAttribute("data-exclude");if(e==="pageview"){var l=!a||a&&a.split(",").some(v),q=c&&c.split(",").some(v);if(!l||q)return p("exclusion rule")}function v(y){var m=u.pathname;return m+=u.hash,m.match(new RegExp("^"+y.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var r={};r.n=e,r.u=u.href,r.d=n.getAttribute("data-domain"),r.r=i.referrer||null,r.w=window.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props),r.h=1;var o=new XMLHttpRequest;o.open("POST",L,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(r)),o.onreadystatechange=function(){o.readyState===4&&t&&t.callback&&t.callback()}}var h=window.vince&&window.vince.q||[];window.vince=d;for(var f=0;f<h.length;f++)d.apply(this,h[f]);var g;function s(){g=u.pathname,d("pageview")}window.addEventListener("hashchange",s);function E(){!g&&i.visibilityState==="visible"&&s()}i.visibilityState==="prerender"?i.addEventListener("visibilitychange",E):s();function k(e){for(;e&&(typeof e.tagName=="undefined"||!S(e)||!e.href);)e=e.parentNode;return e}function S(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function C(e,t){if(e.defaultPrevented)return!1;var a=!t.target||t.target.match(/^_(self|parent|top)$/i),c=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return a&&c}var x=1;function w(e){if(!(e.type==="auxclick"&&e.button!==x)){var t=k(e.target),a=t&&t.href&&t.href.split("?")[0];if(N(t))return O(e,t,{name:"Outbound Link: Click",props:{url:t.href}})}}function O(e,t,a){var c=!1;function l(){c||(c=!0,window.location=t.href)}C(e,t)?(vince(a.name,{props:a.props,callback:l}),setTimeout(l,5e3),e.preventDefault()):vince(a.name,{props:a.props})}i.addEventListener("click",w),i.addEventListener("auxclick",w);function N(e){return e&&e.href&&e.host&&e.host!==u.host}})();
