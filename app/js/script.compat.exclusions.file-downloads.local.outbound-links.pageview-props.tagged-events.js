!function(){"use strict";var p=window.location,s=window.document,l=s.getElementById("plausible"),u=l.getAttribute("data-api")||(g=(g=l).src.split("/"),o=g[0],g=g[2],o+"//"+g+"/api/event");function c(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",t)}catch(e){}var a=l&&l.getAttribute("data-include"),n=l&&l.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return c("exclusion rule",t)}function r(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},n=(a.n=e,a.u=p.href,a.d=l.getAttribute("data-domain"),a.r=s.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=a.p||{},o=(n.forEach(function(e){var t=e.replace("event-",""),e=l.getAttribute(e);i[t]=i[t]||e}),a.p=i,new XMLHttpRequest);o.open("POST",u,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(a)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback({status:o.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function r(){a!==p.pathname&&(a=p.pathname,e("pageview"))}var i,o=window.history;function f(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}o.pushState&&(i=o.pushState,o.pushState=function(){i.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){a||"visible"!==s.visibilityState||r()}):r();var d=1;function m(e){if("auxclick"!==e.type||e.button===d){var t,a,n=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target),r=n&&n.href&&n.href.split("?")[0];if(!function e(t,a){if(!t||k<a)return!1;if(L(t))return!0;return e(t.parentNode,a+1)}(n,0))return(t=n)&&t.href&&t.host&&t.host!==p.host?v(e,n,{name:"Outbound Link: Click",props:{url:n.href}}):(t=r)&&(a=t.split(".").pop(),w.some(function(e){return e===a}))?v(e,n,{name:"File Download",props:{url:r}}):void 0}}function v(e,t,a){var n,r=!1;function i(){r||(r=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?(n={props:a.props},plausible(a.name,n)):(n={props:a.props,callback:i},plausible(a.name,n),setTimeout(i,5e3),e.preventDefault())}s.addEventListener("click",m),s.addEventListener("auxclick",m);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],b=l.getAttribute("file-types"),h=l.getAttribute("add-file-types"),w=b&&b.split(",")||h&&h.split(",").concat(g)||g;function y(e){var e=L(e)?e:e&&e.parentNode,t={name:null,props:{}},a=e&&e.classList;if(a)for(var n=0;n<a.length;n++){var r,i=a.item(n).match(/plausible-event-(.+)(=|--)(.+)/);i&&(r=i[1],i=i[3].replace(/\+/g," "),"name"==r.toLowerCase()?t.name=i:t.props[r]=i)}return t}var k=3;function x(e){if("auxclick"!==e.type||e.button===d){for(var t,a,n,r,i=e.target,o=0;o<=k&&i;o++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;f(i)&&(t=i),L(i)&&(a=i),i=i.parentNode}a&&(r=y(a),t?(r.props.url=t.href,v(e,t,r)):((e={}).props=r.props,plausible(r.name,e)))}}function L(e){var t=e&&e.classList;if(t)for(var a=0;a<t.length;a++)if(t.item(a).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}s.addEventListener("submit",function(e){var t,a=e.target,n=y(a);function r(){t||(t=!0,a.submit())}n.name&&(e.preventDefault(),t=!1,setTimeout(r,5e3),e={props:n.props,callback:r},plausible(n.name,e))}),s.addEventListener("click",x),s.addEventListener("auxclick",x)}();