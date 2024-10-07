!function(){"use strict";var e,t,o=window.location,u=window.document,l=u.getElementById("plausible"),s=l.getAttribute("data-api")||(e=(e=l).src.split("/"),t=e[0],e=e[2],t+"//"+e+"/api/event");function p(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function r(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return p(null,t);try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag",t)}catch(e){}var r=l&&l.getAttribute("data-include"),n=l&&l.getAttribute("data-exclude");if("pageview"===e){r=!r||r.split(",").some(a),n=n&&n.split(",").some(a);if(!r||n)return p("exclusion rule",t)}function a(e){return o.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var r={},i=(r.n=e,r.u=t&&t.u?t.u:o.href,r.d=l.getAttribute("data-domain"),r.r=u.referrer||null,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=t.props),t&&t.revenue&&(r.$=t.revenue),new XMLHttpRequest);i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback({status:i.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=r;for(var a=0;a<n.length;a++)r.apply(this,n[a]);function c(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}var f=1;function i(e){var t,r;if("auxclick"!==e.type||e.button===f)return(t=function(e){for(;e&&(void 0===e.tagName||!c(e)||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],!function e(t,r){if(!t||m<r)return!1;if(w(t))return!0;return e(t.parentNode,r+1)}(t,0)&&(r=t)&&r.href&&r.host&&r.host!==o.host?d(e,t,{name:"Outbound Link: Click",props:{url:t.href}}):void 0}function d(e,t,r){var n,a=!1;function i(){a||(a=!0,window.location=t.href)}!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(e,t)?((n={props:r.props}).revenue=r.revenue,plausible(r.name,n)):((n={props:r.props,callback:i}).revenue=r.revenue,plausible(r.name,n),setTimeout(i,5e3),e.preventDefault())}function v(e){var e=w(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},r=e&&e.classList;if(r)for(var n=0;n<r.length;n++){var a,i,o=r.item(n),u=o.match(/plausible-event-(.+)(=|--)(.+)/),u=(u&&(a=u[1],i=u[3].replace(/\+/g," "),"name"==a.toLowerCase()?t.name=i:t.props[a]=i),o.match(/plausible-revenue-(.+)(=|--)(.+)/));u&&(a=u[1],i=u[3],t.revenue[a]=i)}return t}u.addEventListener("click",i),u.addEventListener("auxclick",i);var m=3;function g(e){if("auxclick"!==e.type||e.button===f){for(var t,r,n,a,i=e.target,o=0;o<=m&&i;o++){if((n=i)&&n.tagName&&"form"===n.tagName.toLowerCase())return;c(i)&&(t=i),w(i)&&(r=i),i=i.parentNode}r&&(a=v(r),t?(a.props.url=t.href,d(e,t,a)):((e={}).props=a.props,e.revenue=a.revenue,plausible(a.name,e)))}}function w(e){var t=e&&e.classList;if(t)for(var r=0;r<t.length;r++)if(t.item(r).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}u.addEventListener("submit",function(e){var t,r=e.target,n=v(r);function a(){t||(t=!0,r.submit())}n.name&&(e.preventDefault(),t=!1,setTimeout(a,5e3),(e={props:n.props,callback:a}).revenue=n.revenue,plausible(n.name,e))}),u.addEventListener("click",g),u.addEventListener("auxclick",g)}();