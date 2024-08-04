!function(){"use strict";var e,t,l=window.location,o=window.document,s=o.getElementById("plausible"),c=s.getAttribute("data-api")||(e=(e=s).src.split("/"),t=e[0],e=e[2],t+"//"+e+"/api/event");function p(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function r(e,t){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",t)}catch(e){}var r=s&&s.getAttribute("data-include"),n=s&&s.getAttribute("data-exclude");if("pageview"===e){r=!r||r.split(",").some(a),n=n&&n.split(",").some(a);if(!r||n)return p("exclusion rule",t)}function a(e){var t=l.pathname;return(t+=l.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var r={},n=(r.n=e,r.u=t&&t.u?t.u:l.href,r.d=s.getAttribute("data-domain"),r.r=o.referrer||null,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props),t&&t.revenue&&(r.$=t.revenue),s.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),i=r.p||{},u=(n.forEach(function(e){var t=e.replace("event-",""),e=s.getAttribute(e);i[t]=i[t]||e}),r.p=i,r.h=1,new XMLHttpRequest);u.open("POST",c,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(r)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback({status:u.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=r;for(var a=0;a<n.length;a++)r.apply(this,n[a]);function f(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}var v=1;function i(e){"auxclick"===e.type&&e.button!==v||((e=function(e){for(;e&&(void 0===e.tagName||!f(e)||!e.href);)e=e.parentNode;return e}(e.target))&&e.href&&e.href.split("?")[0],function e(t,r){if(!t||g<r)return!1;if(b(t))return!0;return e(t.parentNode,r+1)}(e,0))}function d(e,t,r){var n,a=!1;function i(){a||(a=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((n={props:r.props}).revenue=r.revenue,plausible(r.name,n)):((n={props:r.props,callback:i}).revenue=r.revenue,plausible(r.name,n),setTimeout(i,5e3),e.preventDefault())}function m(e){var e=b(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},r=e&&e.classList;if(r)for(var n=0;n<r.length;n++){var a,i,u=r.item(n),l=u.match(/plausible-event-(.+)(=|--)(.+)/),l=(l&&(a=l[1],i=l[3].replace(/\+/g," "),"name"==a.toLowerCase()?t.name=i:t.props[a]=i),u.match(/plausible-revenue-(.+)(=|--)(.+)/));l&&(a=l[1],i=l[3],t.revenue[a]=i)}return t}o.addEventListener("click",i),o.addEventListener("auxclick",i);var g=3;function u(e){if("auxclick"!==e.type||e.button===v){for(var t,r,n,a,i=e.target,u=0;u<=g&&i;u++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;f(i)&&(t=i),b(i)&&(r=i),i=i.parentNode}r&&(a=m(r),t?(a.props.url=t.href,d(e,t,a)):((e={}).props=a.props,e.revenue=a.revenue,plausible(a.name,e)))}}function b(e){var t=e&&e.classList;if(t)for(var r=0;r<t.length;r++)if(t.item(r).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}o.addEventListener("submit",function(e){var t,r=e.target,n=m(r);function a(){t||(t=!0,r.submit())}n.name&&(e.preventDefault(),t=!1,setTimeout(a,5e3),(e={props:n.props,callback:a}).revenue=n.revenue,plausible(n.name,e))}),o.addEventListener("click",u),o.addEventListener("auxclick",u)}();