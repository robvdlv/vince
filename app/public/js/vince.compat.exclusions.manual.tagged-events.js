!function(){"use strict";var e,t,o=window.location,l=window.document,u=l.getElementById("plausible"),s=u.getAttribute("data-api")||(e=(e=u).src.split("/"),t=e[0],e=e[2],t+"//"+e+"/api/event");function p(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return p(null,t);try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",t)}catch(e){}var a=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return p("exclusion rule",t)}function r(e){return o.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},i=(a.n=e,a.u=t&&t.u?t.u:o.href,a.d=u.getAttribute("data-domain"),a.r=l.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),new XMLHttpRequest);i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r=0;r<n.length;r++)a.apply(this,n[r]);function c(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}var f=1;function i(e){"auxclick"===e.type&&e.button!==f||((e=function(e){for(;e&&(void 0===e.tagName||!c(e)||!e.href);)e=e.parentNode;return e}(e.target))&&e.href&&e.href.split("?")[0],function e(t,a){if(!t||g<a)return!1;if(v(t))return!0;return e(t.parentNode,a+1)}(e,0))}function d(e,t,a){var n,r=!1;function i(){r||(r=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?(n={props:a.props},plausible(a.name,n)):(n={props:a.props,callback:i},plausible(a.name,n),setTimeout(i,5e3),e.preventDefault())}function m(e){var e=v(e)?e:e&&e.parentNode,t={name:null,props:{}},a=e&&e.classList;if(a)for(var n=0;n<a.length;n++){var r,i=a.item(n).match(/plausible-event-(.+)(=|--)(.+)/);i&&(r=i[1],i=i[3].replace(/\+/g," "),"name"==r.toLowerCase()?t.name=i:t.props[r]=i)}return t}l.addEventListener("click",i),l.addEventListener("auxclick",i);var g=3;function w(e){if("auxclick"!==e.type||e.button===f){for(var t,a,n,r,i=e.target,o=0;o<=g&&i;o++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;c(i)&&(t=i),v(i)&&(a=i),i=i.parentNode}a&&(r=m(a),t?(r.props.url=t.href,d(e,t,r)):((e={}).props=r.props,plausible(r.name,e)))}}function v(e){var t=e&&e.classList;if(t)for(var a=0;a<t.length;a++)if(t.item(a).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}l.addEventListener("submit",function(e){var t,a=e.target,n=m(a);function r(){t||(t=!0,a.submit())}n.name&&(e.preventDefault(),t=!1,setTimeout(r,5e3),e={props:n.props,callback:r},plausible(n.name,e))}),l.addEventListener("click",w),l.addEventListener("auxclick",w)}();