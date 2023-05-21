(function(){"use strict";var f=window.location,o=window.document,s=o.currentScript,x=s.getAttribute("data-api")||O(s);function d(e){console.warn("Ignoring Event: "+e)}function O(e){return new URL(e.src).origin+"/api/event"}function p(e,r){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(f.hostname)||f.protocol==="file:")return d("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return d("localStorage flag")}catch(N){}var t=s&&s.getAttribute("data-include"),a=s&&s.getAttribute("data-exclude");if(e==="pageview"){var n=!t||t&&t.split(",").some(l),u=a&&a.split(",").some(l);if(!n||u)return d("exclusion rule")}function l(N){var _=f.pathname;return _+=f.hash,_.match(new RegExp("^"+N.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var i={};i.n=e,i.u=f.href,i.d=s.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,r&&r.meta&&(i.m=JSON.stringify(r.meta)),r&&r.props&&(i.p=r.props),i.h=1;var c=new XMLHttpRequest;c.open("POST",x,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(i)),c.onreadystatechange=function(){c.readyState===4&&r&&r.callback&&r.callback()}}var w=window.vince&&window.vince.q||[];window.vince=p;for(var g=0;g<w.length;g++)p.apply(this,w[g]);var m;function v(){m=f.pathname,p("pageview")}window.addEventListener("hashchange",v);function R(){!m&&o.visibilityState==="visible"&&v()}o.visibilityState==="prerender"?o.addEventListener("visibilitychange",R):v();function P(e){for(;e&&(typeof e.tagName=="undefined"||!L(e)||!e.href);)e=e.parentNode;return e}function L(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function $(e,r){if(e.defaultPrevented)return!1;var t=!r.target||r.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return t&&a}var b=1;function E(e){if(!(e.type==="auxclick"&&e.button!==b)){var r=P(e.target),t=r&&r.href&&r.href.split("?")[0];if(!C(r,0)&&q(r))return y(e,r,{name:"Outbound Link: Click",props:{url:r.href}})}}function y(e,r,t){var a=!1;function n(){a||(a=!0,window.location=r.href)}$(e,r)?(vince(t.name,{props:t.props,callback:n}),setTimeout(n,5e3),e.preventDefault()):vince(t.name,{props:t.props})}o.addEventListener("click",E),o.addEventListener("auxclick",E);function q(e){return e&&e.href&&e.host&&e.host!==f.host}function k(e){var r=h(e)?e:e&&e.parentNode,t={name:null,props:{}},a=r&&r.classList;if(!a)return t;for(var n=0;n<a.length;n++){var u=a.item(n),l=u.match(/vince-event-(.+)=(.+)/);if(l){var i=l[1],c=l[2].replace(/\+/g," ");i.toLowerCase()==="name"?t.name=c:t.props[i]=c}}return t}function A(e){var r=e.target,t=k(r);if(!t.name)return;e.preventDefault();var a=!1;function n(){a||(a=!0,r.submit())}setTimeout(n,5e3),vince(t.name,{props:t.props,callback:n})}function I(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}var S=3;function T(e){if(!(e.type==="auxclick"&&e.button!==b)){for(var r=e.target,t,a,n=0;n<=S&&r;n++){if(I(r))return;L(r)&&(t=r),h(r)&&(a=r),r=r.parentNode}if(a){var u=k(a);t?(u.props.url=t.href,y(e,t,u)):vince(u.name,{props:u.props})}}}function h(e){var r=e&&e.classList;if(r){for(var t=0;t<r.length;t++)if(r.item(t).match(/vince-event-name=(.+)/))return!0}return!1}function C(e,r){return!e||r>S?!1:h(e)?!0:C(e.parentNode,r+1)}o.addEventListener("submit",A),o.addEventListener("click",T),o.addEventListener("auxclick",T)})();
