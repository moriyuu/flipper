(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(139)),o=r(140),c=r(143),u={id:"databases-plugin",title:"Databases"},s={unversionedId:"features/databases-plugin",id:"features/databases-plugin",isDocsHomePage:!1,title:"Databases",description:"\u2192 See setup instructions for the Databases plugin",source:"@site/../docs/features/databases-plugin.mdx",slug:"/features/databases-plugin",permalink:"/docs/features/databases-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/databases-plugin.mdx",version:"current",sidebar:"features",previous:{title:"Network",permalink:"/docs/features/network-plugin"},next:{title:"Images",permalink:"/docs/features/images-plugin"}},l=[],f={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)(c.a,{to:Object(o.a)("/docs/setup/databases-plugin"),mdxType:"Link"},"See setup instructions for the Databases plugin")),Object(i.b)("p",null,"The Databases plugin provides developers with read-write access to their databases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"browse your tables' data"),Object(i.b)("li",{parentName:"ul"},"see your tables' structure"),Object(i.b)("li",{parentName:"ul"},"execute queries"),Object(i.b)("li",{parentName:"ul"},"mark queries as favorites"),Object(i.b)("li",{parentName:"ul"},"see logs of past executed queries")),Object(i.b)("img",{alt:"Databases Plugin 1",src:Object(o.a)("img/databases-plugin-1.png")}),Object(i.b)("img",{alt:"Databases Plugin 2",src:Object(o.a)("img/databases-plugin-2.png")}),Object(i.b)("p",null,"Note: this plugin is only available for Android."))}p.isMDXComponent=!0},139:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},140:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(142),a=r(141);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},141:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},142:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(20);t.default=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},143:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(11),o=r(141),c=r(9),u=Object(n.createContext)({collectLink:function(){}}),s=r(140),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,f,p=e.isNavLink,b=e.to,d=e.href,v=e.activeClassName,O=e.isActive,m=e["data-noBrokenLinkCheck"],g=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(s.b)().withBaseUrl,y=Object(n.useContext)(u),w=b||d,h=Object(o.a)(w),k=null==w?void 0:w.replace("pathname://",""),x=void 0!==k?function(e){return e.startsWith("/")}(r=k)?j(r):r:void 0,P=Object(n.useRef)(!1),E=p?i.e:i.c,D=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!D&&h&&window.docusaurus.prefetch(x),function(){D&&f&&f.disconnect()}}),[x,D,h]);var N=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,C=!x||!h||N;return x&&h&&!N&&!m&&y.collectLink(x),C?a.a.createElement("a",Object.assign({href:x},w&&!h&&{target:"_blank",rel:"noopener noreferrer"},g)):a.a.createElement(E,Object.assign({},g,{onMouseEnter:function(){P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var t,r;D&&e&&h&&(t=e,r=function(){window.docusaurus.prefetch(x)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:x||""},p&&{isActive:O,activeClassName:v}))}}}]);