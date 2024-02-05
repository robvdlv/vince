(function(){"use strict";var s,a,c,l,p,n=window.location,e=window.document,t=e.currentScript,O=t.getAttribute("data-api")||b(t);function u(e){console.warn("Ignoring Event: "+e)}function b(e){return new URL(e.src).origin+"/api/event"}function r(s,o){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(n.hostname)||n.protocol==="file:")return u("localhost");if(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)return;try{if(window.localStorage.vince_ignore==="true")return u("localStorage flag")}catch{}var a,r,c,i={};i.n=s,i.u=n.href,i.d=t.getAttribute("data-domain"),i.r=e.referrer||null,i.w=window.innerWidth,o&&o.meta&&(i.m=JSON.stringify(o.meta)),o&&o.props&&(i.p=o.props),c=t.getAttributeNames().filter(function(e){return e.substring(0,6)==="event-"}),r=i.p||{},c.forEach(function(e){var n=e.replace("event-",""),s=t.getAttribute(e);r[n]=r[n]||s}),i.p=r,i.h=1,a=new XMLHttpRequest,a.open("POST",O,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){a.readyState===4&&o&&o.callback&&o.callback()}}c=window.vince&&window.vince.q||[],window.vince=r;for(s=0;s<c.length;s++)r.apply(this,c[s]);function o(){p=n.pathname,r("pageview")}window.addEventListener("hashchange",o);function _(){!p&&e.visibilityState==="visible"&&o()}e.visibilityState==="prerender"?e.addEventListener("visibilitychange",_):o();function x(e){for(;e&&(typeof e.tagName=="undefined"||!m(e)||!e.href);)e=e.parentNode;return e}function m(e){return e&&e.tagName&&e.tagName.toLowerCase()==="a"}function w(e,t){if(e.defaultPrevented)return!1;var n=!t.target||t.target.match(/^_(self|parent|top)$/i),s=!(e.ctrlKey||e.metaKey||e.shiftKey)&&e.type==="click";return n&&s}l=1;function g(e){if(e.type==="auxclick"&&e.button!==l)return;var t=x(e.target),n=t&&t.href&&t.href.split("?")[0];if(h(t,0))return}function v(e,t,n){var s=!1;function o(){s||(s=!0,window.location=t.href)}w(e,t)?(vince(n.name,{props:n.props,callback:o}),setTimeout(o,5e3),e.preventDefault()):vince(n.name,{props:n.props})}e.addEventListener("click",g),e.addEventListener("auxclick",g);function d(e){var n,s,a,r,l,c=i(e)?e:e&&e.parentNode,t={name:null,props:{}},o=c&&c.classList;if(!o)return t;for(n=0;n<o.length;n++){if(l=o.item(n),s=l.match(/vince-event-(.+)=(.+)/),!s)continue;a=s[1],r=s[2].replace(/\+/g," "),a.toLowerCase()==="name"?t.name=r:t.props[a]=r}return t}function j(e){var n,s=e.target,t=d(s);if(!t.name)return;e.preventDefault(),n=!1;function o(){n||(n=!0,s.submit())}setTimeout(o,5e3),vince(t.name,{props:t.props,callback:o})}function y(e){return e&&e.tagName&&e.tagName.toLowerCase()==="form"}a=3;function f(e){if(e.type==="auxclick"&&e.button!==l)return;for(var n,s,o,t=e.target,r=0;r<=a;r++){if(!t)break;if(y(t))return;m(t)&&(s=t),i(t)&&(o=t),t=t.parentNode}o&&(n=d(o),s?(n.props.url=s.href,v(e,s,n)):vince(n.name,{props:n.props}))}function i(e){var t,n=e&&e.classList;if(n)for(t=0;t<n.length;t++)if(n.item(t).match(/vince-event-name=(.+)/))return!0;return!1}function h(e,t){return!(!e||t>a)&&(!!i(e)||h(e.parentNode,t+1))}e.addEventListener("submit",j),e.addEventListener("click",f),e.addEventListener("auxclick",f)})()