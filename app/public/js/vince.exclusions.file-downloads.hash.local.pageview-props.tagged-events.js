!function(){"use strict";var p=window.location,l=window.document,s=l.currentScript,u=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function c(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag",t)}catch(e){}var a=s&&s.getAttribute("data-include"),r=s&&s.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(n),r=r&&r.split(",").some(n);if(!a||r)return c("exclusion rule",t)}function n(e){var t=p.pathname;return(t+=p.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},r=(a.n=e,a.u=p.href,a.d=s.getAttribute("data-domain"),a.r=l.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),s.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=a.p||{},o=(r.forEach(function(e){var t=e.replace("event-",""),e=s.getAttribute(e);i[t]=i[t]||e}),a.p=i,a.h=1,new XMLHttpRequest);o.open("POST",u,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(a)),o.onreadystatechange=function(){4===o.readyState&&t&&t.callback&&t.callback({status:o.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,r=0;r<t.length;r++)e.apply(this,t[r]);function n(){a=p.pathname,e("pageview")}function f(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}window.addEventListener("hashchange",n),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){a||"visible"!==l.visibilityState||n()}):n();var d=1;function i(e){var t,a,r,n;if("auxclick"!==e.type||e.button===d)return t=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],!function e(t,a){if(!t||h<a)return!1;if(k(t))return!0;return e(t.parentNode,a+1)}(t,0)&&(r=a)&&(n=r.split(".").pop(),b.some(function(e){return e===n}))?v(e,t,{name:"File Download",props:{url:a}}):void 0}function v(e,t,a){var r,n=!1;function i(){n||(n=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?(r={props:a.props},plausible(a.name,r)):(r={props:a.props,callback:i},plausible(a.name,r),setTimeout(i,5e3),e.preventDefault())}l.addEventListener("click",i),l.addEventListener("auxclick",i);var o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],m=s.getAttribute("file-types"),g=s.getAttribute("add-file-types"),b=m&&m.split(",")||g&&g.split(",").concat(o)||o;function w(e){var e=k(e)?e:e&&e.parentNode,t={name:null,props:{}},a=e&&e.classList;if(a)for(var r=0;r<a.length;r++){var n,i=a.item(r).match(/plausible-event-(.+)(=|--)(.+)/);i&&(n=i[1],i=i[3].replace(/\+/g," "),"name"==n.toLowerCase()?t.name=i:t.props[n]=i)}return t}var h=3;function y(e){if("auxclick"!==e.type||e.button===d){for(var t,a,r,n,i=e.target,o=0;o<=h&&i;o++){if((r=i)&&r.tagName&&"form"===r.tagName.toLowerCase())return;f(i)&&(t=i),k(i)&&(a=i),i=i.parentNode}a&&(n=w(a),t?(n.props.url=t.href,v(e,t,n)):((e={}).props=n.props,plausible(n.name,e)))}}function k(e){var t=e&&e.classList;if(t)for(var a=0;a<t.length;a++)if(t.item(a).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}l.addEventListener("submit",function(e){var t,a=e.target,r=w(a);function n(){t||(t=!0,a.submit())}r.name&&(e.preventDefault(),t=!1,setTimeout(n,5e3),e={props:r.props,callback:n},plausible(r.name,e))}),l.addEventListener("click",y),l.addEventListener("auxclick",y)}();