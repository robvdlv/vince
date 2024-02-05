(function(){"use strict";var n,i,a,r,c,l,d,j,s=window.location,t=window.document,e=t.currentScript,C=e.getAttribute("data-api")||x(e);function h(e){console.warn("Ignoring Event: "+e)}function x(e){return new URL(e.src).origin+"/api/event"}function b(n,o){try{if(window.localStorage.vince_ignore==="true")return h("localStorage flag")}catch{}var i,a,l,d,r=e&&e.getAttribute("data-include"),c=e&&e.getAttribute("data-exclude");if(n==="pageview"&&(l=!r||r&&r.split(",").some(u),d=c&&c.split(",").some(u),!l||d))return h("exclusion rule");function u(e){var t=s.pathname;return t+=s.hash,t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^.])\*/g,"$1[^\\s/]*")+"/?$"))}i={},i.n=n,i.u=o&&o.u?o.u:s.href,i.d=e.getAttribute("data-domain"),i.r=t.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),i.h=1,a=new XMLHttpRequest,a.open("POST",C,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}r=window.vince&&window.vince.q||[],window.vince=b;for(n=0;n<r.length;n++)b.apply(this,r[n]);function k(e){for(;e&&(typeof e.tagName=="undefined"||!p(e)||!e.href);)e=e.parentNode;return e}function p(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function E(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}i=1;function m(e){if(e.type==="auxclick"&&e.button!==i)return;var t=k(e.target),n=t&&t.href&&t.href.split("?")[0];if(g(t,0))return;if(y(t))return o(e,t,{name:"Outbound Link: Click",props:{url:t.href}});if(_(n))return o(e,t,{name:"File Download",props:{url:n}})}function o(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}E(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}t.addEventListener("click",m),t.addEventListener("auxclick",m);function y(e){return e&&e.href&&e.host&&e.host!==s.host}l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=e.getAttribute("file-types"),a=e.getAttribute("add-file-types"),j=c&&c.split(",")||a&&a.split(",").concat(l)||l;function _(e){if(!e)return!1;var t=e.split(".").pop();return j.some(function(e){return e===t})}function v(e){var n,s,i,a,c,r=u(e)?e:e&&e.parentNode,t={name:null,props:{}},o=r&&r.classList;if(!o)return t;for(n=0;n<o.length;n++){if(c=o.item(n),s=c.match(/vince-event-(.+)=(.+)/),!s)continue;i=s[1],a=s[2].replace(/\+/g," "),i.toLowerCase()==="name"?t.name=a:t.props[i]=a}return t}function w(e){var n,s=e.target,t=v(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function O(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}d=3;function f(e){if(e.type==="auxclick"&&e.button!==i)return;for(var n,s,a,t=e.target,r=0;r<=d;r++){if(!t)break;if(O(t))return;p(t)&&(s=t),u(t)&&(a=t),t=t.parentNode}a&&(n=v(a),s?(n.props.url=s.href,o(e,s,n)):vince(n.name,{props:n.props}))}function u(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function g(e,t){return!(!e||t>d)&&(!!u(e)||g(e.parentNode,t+1))}t.addEventListener("submit",w),t.addEventListener("click",f),t.addEventListener("auxclick",f)})()