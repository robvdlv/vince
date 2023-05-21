(function(){"use strict";var l=window.location,o=window.document,u=o.currentScript,D=u.getAttribute("data-api")||P(u);function L(e){console.warn("Ignoring Event: "+e)}function P(e){return new URL(e.src).origin+"/api/event"}function g(e,t){try{if(window.localStorage.vince_ignore==="true")return L("localStorage flag")}catch(f){}var r=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if(e==="pageview"){var i=!r||r&&r.split(",").some(s),c=a&&a.split(",").some(s);if(!i||c)return L("exclusion rule")}function s(f){var d=l.pathname;return d+=l.hash,d.match(new RegExp("^"+f.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var n={};n.n=e,n.u=l.href,n.d=u.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var v=u.getAttributeNames().filter(function(f){return f.substring(0,6)==="event-"}),y=n.p||{};v.forEach(function(f){var d=f.replace("event-",""),$=u.getAttribute(f);y[d]=y[d]||$}),n.p=y,n.h=1;var p=new XMLHttpRequest;p.open("POST",D,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(n)),p.onreadystatechange=function(){p.readyState===4&&t&&t.callback&&t.callback()}}var E=window.vince&&window.vince.q||[];window.vince=g;for(var m=0;m<E.length;m++)g.apply(this,E[m]);var T;function h(){T=l.pathname,g("pageview")}window.addEventListener("hashchange",h);function q(){!T&&o.visibilityState==="visible"&&h()}o.visibilityState==="prerender"?o.addEventListener("visibilitychange",q):h();function I(e){for(;e&&(typeof e.tagName=="undefined"||!k(e)||!e.href);)e=e.parentNode;return e}function k(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function M(e,t){if(e.defaultPrevented)return!1;var r=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return r&&a}var x=1;function S(e){if(!(e.type==="auxclick"&&e.button!==x)){var t=I(e.target),r=t&&t.href&&t.href.split("?")[0];if(!_(t,0)){if(K(t))return w(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(H(r))return w(e,t,{name:"File Download",props:{url:r}})}}}function w(e,t,r){var a=!1;function i(){a||(a=!0,window.location=t.href)}M(e,t)?(vince(r.name,{props:r.props,callback:i}),setTimeout(i,5e3),e.preventDefault()):vince(r.name,{props:r.props})}o.addEventListener("click",S),o.addEventListener("auxclick",S);function K(e){return e&&e.href&&e.host&&e.host!==l.host}var N=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],A=u.getAttribute("file-types"),C=u.getAttribute("add-file-types"),z=A&&A.split(",")||C&&C.split(",").concat(N)||N;function H(e){if(!e)return!1;var t=e.split(".").pop();return z.some(function(r){return r===t})}function O(e){var t=b(e)?e:e&&e.parentNode,r={name:null,props:{}},a=t&&t.classList;if(!a)return r;for(var i=0;i<a.length;i++){var c=a.item(i),s=c.match(/vince-event-(.+)=(.+)/);if(s){var n=s[1],v=s[2].replace(/\+/g," ");n.toLowerCase()==="name"?r.name=v:r.props[n]=v}}return r}function U(e){var t=e.target,r=O(t);if(!r.name)return;e.preventDefault();var a=!1;function i(){a||(a=!0,t.submit())}setTimeout(i,5e3),vince(r.name,{props:r.props,callback:i})}function W(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var F=3;function R(e){if(!(e.type==="auxclick"&&e.button!==x)){for(var t=e.target,r,a,i=0;i<=F&&t;i++){if(W(t))return;k(t)&&(r=t),b(t)&&(a=t),t=t.parentNode}if(a){var c=O(a);r?(c.props.url=r.href,w(e,r,c)):vince(c.name,{props:c.props})}}}function b(e){var t=e&&e.classList;if(t){for(var r=0;r<t.length;r++)if(t.item(r).match(/vince-event-name=(.+)/))return!0}return!1}function _(e,t){return!e||t>F?!1:b(e)?!0:_(e.parentNode,t+1)}o.addEventListener("submit",U),o.addEventListener("click",R),o.addEventListener("auxclick",R)})();
