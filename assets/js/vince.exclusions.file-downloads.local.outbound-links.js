(function(){"use strict";var o=window.location,n=window.document,a=n.currentScript,T=a.getAttribute("data-api")||x(a);function v(e){console.warn("Ignoring Event: "+e)}function x(e){return new URL(e.src).origin+"/api/event"}function s(e,t){try{if(window.localStorage.vince_ignore==="true")return v("localStorage flag")}catch(E){}var r=a&&a.getAttribute("data-include"),u=a&&a.getAttribute("data-exclude");if(e==="pageview"){var p=!r||r&&r.split(",").some(k),M=u&&u.split(",").some(k);if(!p||M)return v("exclusion rule")}function k(E){var P=o.pathname;return P.match(new RegExp("^"+E.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=o.href,i.d=a.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props);var c=new XMLHttpRequest;c.open("POST",T,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(i)),c.onreadystatechange=function(){c.readyState===4&&t&&t.callback&&t.callback()}}var w=window.vince&&window.vince.q||[];window.vince=s;for(var f=0;f<w.length;f++)s.apply(this,w[f]);var d;function l(){d!==o.pathname&&(d=o.pathname,s("pageview"))}var g=window.history;if(g.pushState){var S=g.pushState;g.pushState=function(){S.apply(this,arguments),l()},window.addEventListener("popstate",l)}function C(){!d&&n.visibilityState==="visible"&&l()}n.visibilityState==="prerender"?n.addEventListener("visibilitychange",C):l();function A(e){for(;e&&(typeof e.tagName=="undefined"||!O(e)||!e.href);)e=e.parentNode;return e}function O(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function N(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),u=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&u}var q=1;function h(e){if(!(e.type==="auxclick"&&e.button!==q)){var t=A(e.target),r=t&&t.href&&t.href.split("?")[0];if(D(t))return m(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(F(r))return m(e,t,{name:"File Download",props:{url:r}})}}function m(e,t,r){var u=!1;function p(){u||(u=!0,window.location=t.href)}N(e,t)?(vince(r.name,{props:r.props,callback:p}),setTimeout(p,5e3),e.preventDefault()):vince(r.name,{props:r.props})}n.addEventListener("click",h),n.addEventListener("auxclick",h);function D(e){return e&&e.href&&e.host&&e.host!==o.host}var y=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],b=a.getAttribute("file-types"),L=a.getAttribute("add-file-types"),R=b&&b.split(",")||L&&L.split(",").concat(y)||y;function F(e){if(!e)return!1;var t=e.split(".").pop();return R.some(function(r){return r===t})}})();
