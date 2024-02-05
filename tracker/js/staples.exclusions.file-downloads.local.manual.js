(function(){"use strict";var n,s,o,i,a,r,h,l=window.location,t=window.document,e=t.currentScript,b=e.getAttribute("data-api")||m(e);function d(e){console.warn("Ignoring Event: "+e)}function m(e){return new URL(e.src).origin+"/api/event"}function c(n,s){try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch{}var o,i,c,u,a=e&&e.getAttribute("data-include"),r=e&&e.getAttribute("data-exclude");if(n==="pageview"&&(c=!a||a&&a.split(",").some(h),u=r&&r.split(",").some(h),!c||u))return d("exclusion rule");function h(e){var t=l.pathname;return t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}o={},o.n=n,o.u=s&&s.u?s.u:l.href,o.d=e.getAttribute("data-domain"),o.r=t.referrer||null,o.w=window.innerWidth,s&&s.meta&&(o.m=JSON.stringify(s.meta)),s&&s.props&&(o.p=s.props),i=new XMLHttpRequest,i.open("POST",b,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(o)),i.onreadystatechange=function(){i.readyState===4&&s&&s.callback&&s.callback()}}s=window.vince&&window.vince.q||[],window.vince=c;for(n=0;n<s.length;n++)c.apply(this,s[n]);function v(e){for(;e&&(typeof e.tagName=="undefined"||!g(e)||!e.href);)e=e.parentNode;return e}function g(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function p(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}h=1;function u(e){if(e.type==="auxclick"&&e.button!==h)return;var t=v(e.target),n=t&&t.href&&t.href.split("?")[0];if(j(n))return f(e,t,{name:"File Download",props:{url:n}})}function f(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}p(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",u),t.addEventListener("auxclick",u),o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=e.getAttribute("file-types"),a=e.getAttribute("add-file-types"),r=i&&i.split(",")||a&&a.split(",").concat(o)||o;function j(e){if(!e)return!1;var t=e.split(".").pop();return r.some(function(e){return e===t})}})()