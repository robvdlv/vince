!function(){"use strict";var l=window.location,p=window.document,u=p.getElementById("plausible"),s=u.getAttribute("data-api")||(i=(i=u).src.split("/"),n=i[0],i=i[2],n+"//"+i+"/api/event");function c(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return c("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return c(null,t);try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",t)}catch(e){}var r=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===e){r=!r||r.split(",").some(n),a=a&&a.split(",").some(n);if(!r||a)return c("exclusion rule",t)}function n(e){return l.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var r={},a=(r.n=e,r.u=t&&t.u?t.u:l.href,r.d=u.getAttribute("data-domain"),r.r=p.referrer||null,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props),u.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=r.p||{},o=(a.forEach(function(e){var t=e.replace("event-",""),e=u.getAttribute(e);i[t]=i[t]||e}),r.p=i,new XMLHttpRequest);o.open("POST",s,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(r)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback({status:o.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var r=0;r<t.length;r++)e.apply(this,t[r]);function f(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}var d=1;function a(e){if("auxclick"!==e.type||e.button===d){var t,r,a=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target),n=a&&a.href&&a.href.split("?")[0];if(!function e(t,r){if(!t||w<r)return!1;if(h(t))return!0;return e(t.parentNode,r+1)}(a,0))return(t=a)&&t.href&&t.host&&t.host!==l.host?m(e,a,{name:"Outbound Link: Click",props:{url:a.href}}):(t=n)&&(r=t.split(".").pop(),g.some(function(e){return e===r}))?m(e,a,{name:"File Download",props:{url:n}}):void 0}}function m(e,t,r){var a,n=!1;function i(){n||(n=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?(a={props:r.props},plausible(r.name,a)):(a={props:r.props,callback:i},plausible(r.name,a),setTimeout(i,5e3),e.preventDefault())}p.addEventListener("click",a),p.addEventListener("auxclick",a);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],i=u.getAttribute("file-types"),o=u.getAttribute("add-file-types"),g=i&&i.split(",")||o&&o.split(",").concat(n)||n;function v(e){var e=h(e)?e:e&&e.parentNode,t={name:null,props:{}},r=e&&e.classList;if(r)for(var a=0;a<r.length;a++){var n,i=r.item(a).match(/plausible-event-(.+)(=|--)(.+)/);i&&(n=i[1],i=i[3].replace(/\+/g," "),"name"==n.toLowerCase()?t.name=i:t.props[n]=i)}return t}var w=3;function b(e){if("auxclick"!==e.type||e.button===d){for(var t,r,a,n,i=e.target,o=0;o<=w&&i;o++){if((a=i)&&a.tagName&&"form"===a.tagName.toLowerCase())return;f(i)&&(t=i),h(i)&&(r=i),i=i.parentNode}r&&(n=v(r),t?(n.props.url=t.href,m(e,t,n)):((e={}).props=n.props,plausible(n.name,e)))}}function h(e){var t=e&&e.classList;if(t)for(var r=0;r<t.length;r++)if(t.item(r).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}p.addEventListener("submit",function(e){var t,r=e.target,a=v(r);function n(){t||(t=!0,r.submit())}a.name&&(e.preventDefault(),t=!1,setTimeout(n,5e3),e={props:a.props,callback:n},plausible(a.name,e))}),p.addEventListener("click",b),p.addEventListener("auxclick",b)}();