!function(){"use strict";var p=window.location,u=window.document,o=u.getElementById("plausible"),l=o.getAttribute("data-api")||(g=(g=o).src.split("/"),c=g[0],g=g[2],c+"//"+g+"/api/event");function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var a=o&&o.getAttribute("data-include"),n=o&&o.getAttribute("data-exclude");if("pageview"===e){a=!a||a.split(",").some(r),n=n&&n.split(",").some(r);if(!a||n)return s("exclusion rule",t)}function r(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var a={},i=(a.n=e,a.u=p.href,a.d=o.getAttribute("data-domain"),a.r=u.referrer||null,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),t&&t.revenue&&(a.$=t.revenue),new XMLHttpRequest);i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function r(){a!==p.pathname&&(a=p.pathname,e("pageview"))}var i,c=window.history;function f(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}c.pushState&&(i=c.pushState,c.pushState=function(){i.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){a||"visible"!==u.visibilityState||r()}):r();var v=1;function d(e){var t,a,n,r;if("auxclick"!==e.type||e.button===v)return t=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target),a=t&&t.href&&t.href.split("?")[0],!function e(t,a){if(!t||k<a)return!1;if(L(t))return!0;return e(t.parentNode,a+1)}(t,0)&&(n=a)&&(r=n.split(".").pop(),h.some(function(e){return e===r}))?m(e,t,{name:"File Download",props:{url:a}}):void 0}function m(e,t,a){var n,r=!1;function i(){r||(r=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((n={props:a.props}).revenue=a.revenue,plausible(a.name,n)):((n={props:a.props,callback:i}).revenue=a.revenue,plausible(a.name,n),setTimeout(i,5e3),e.preventDefault())}u.addEventListener("click",d),u.addEventListener("auxclick",d);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],b=o.getAttribute("file-types"),w=o.getAttribute("add-file-types"),h=b&&b.split(",")||w&&w.split(",").concat(g)||g;function y(e){var e=L(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},a=e&&e.classList;if(a)for(var n=0;n<a.length;n++){var r,i,p=a.item(n),u=p.match(/plausible-event-(.+)(=|--)(.+)/),u=(u&&(r=u[1],i=u[3].replace(/\+/g," "),"name"==r.toLowerCase()?t.name=i:t.props[r]=i),p.match(/plausible-revenue-(.+)(=|--)(.+)/));u&&(r=u[1],i=u[3],t.revenue[r]=i)}return t}var k=3;function x(e){if("auxclick"!==e.type||e.button===v){for(var t,a,n,r,i=e.target,p=0;p<=k&&i;p++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;f(i)&&(t=i),L(i)&&(a=i),i=i.parentNode}a&&(r=y(a),t?(r.props.url=t.href,m(e,t,r)):((e={}).props=r.props,e.revenue=r.revenue,plausible(r.name,e)))}}function L(e){var t=e&&e.classList;if(t)for(var a=0;a<t.length;a++)if(t.item(a).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}u.addEventListener("submit",function(e){var t,a=e.target,n=y(a);function r(){t||(t=!0,a.submit())}n.name&&(e.preventDefault(),t=!1,setTimeout(r,5e3),(e={props:n.props,callback:r}).revenue=n.revenue,plausible(n.name,e))}),u.addEventListener("click",x),u.addEventListener("auxclick",x)}();