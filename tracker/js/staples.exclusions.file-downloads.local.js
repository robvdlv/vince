(function(){"use strict";var s,i,a,r,c,d,u,h,m,g,n=window.location,t=window.document,e=t.currentScript,O=e.getAttribute("data-api")||w(e);function p(e){console.warn("Ignoring Event: "+e)}function w(e){return new URL(e.src).origin+"/api/event"}function l(s,o){try{if(window.localStorage.vince_ignore==="true")return p("localStorage flag")}catch{}var i,a,l,d,r=e&&e.getAttribute("data-include"),c=e&&e.getAttribute("data-exclude");if(s==="pageview"&&(l=!r||r&&r.split(",").some(u),d=c&&c.split(",").some(u),!l||d))return p("exclusion rule");function u(e){var t=n.pathname;return t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=s,i.u=n.href,i.d=e.getAttribute("data-domain"),i.r=t.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),a=new XMLHttpRequest,a.open("POST",O,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}d=window.vince&&window.vince.q||[],window.vince=l;for(s=0;s<d.length;s++)l.apply(this,d[s]);function o(){if(u===n.pathname)return;u=n.pathname,l("pageview")}i=window.history,i.pushState&&(h=i.pushState,i.pushState=function(){h.apply(this,arguments),o()},window.addEventListener("popstate",o));function v(){!u&&t.visibilityState==="visible"&&o()}t.visibilityState==="prerender"?t.addEventListener("visibilitychange",v):o();function b(e){for(;e&&(typeof e.tagName=="undefined"||!j(e)||!e.href);)e=e.parentNode;return e}function j(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function y(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}m=1;function f(e){if(e.type==="auxclick"&&e.button!==m)return;var t=b(e.target),n=t&&t.href&&t.href.split("?")[0];if(x(n))return _(e,t,{name:"File Download",props:{url:n}})}function _(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}y(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",f),t.addEventListener("auxclick",f),c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=e.getAttribute("file-types"),a=e.getAttribute("add-file-types"),g=r&&r.split(",")||a&&a.split(",").concat(c)||c;function x(e){if(!e)return!1;var t=e.split(".").pop();return g.some(function(e){return e===t})}})()