(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{175:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(178),c=t(182),o=t(189),i=t(180);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(i.a,{className:"pagination-nav__link",to:t},n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(i.a,{className:"pagination-nav__link",to:r},n.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,r=Object(l.a)().siteConfig.title,i="/"===a.permalink?r:"Blog";return n.a.createElement(c.a,{title:i,description:"Blog"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return n.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(m,{metadata:a})))))}},177:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return f}));var r=t(0),n=t.n(r);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),s=function(e){var a=n.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},u=function(e){var a=s(e.components);return n.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return t?n.a.createElement(f,o({ref:a},m,{components:t})):n.a.createElement(f,o({ref:a},m))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var m=2;m<l;m++)c[m]=t[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},184:function(e,a,t){"use strict";var r=t(1),n=t(0),l=t.n(n),c=t(180),o=t(187),i=t(9),m=t(179),s=t.n(m),u=t(178),p=(t(131),t(132)),d=t.n(p),f=function(e){return function(a){var t,r=a.id,n=Object(i.a)(a,["id"]),c=Object(u.a)().siteConfig,o=(c=void 0===c?{}:c).themeConfig,m=(o=void 0===o?{}:o).navbar,p=(m=void 0===m?{}:m).hideOnScroll,f=void 0!==p&&p;return r?l.a.createElement(e,n,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:s()("anchor",(t={},t[d.a.enhancedAnchor]=!f,t)),id:r}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),n.children):l.a.createElement(e,n)}},v=t(133),g=t.n(v);a.a={code:function(e){var a=e.children;return"string"==typeof a?l.a.createElement(o.a,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e))},h1:f("h1"),h2:f("h2"),h3:f("h3"),h4:f("h4"),h5:f("h5"),h6:f("h6")}},189:function(e,a,t){"use strict";t(77);var r=t(0),n=t.n(r),l=t(179),c=t.n(l),o=t(177),i=t(180),m=t(184),s=t(134),u=t.n(s),p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,s,d=e.children,f=e.frontMatter,v=e.metadata,g=e.truncated,h=e.isBlogPostPage,E=void 0!==h&&h,b=v.date,y=v.permalink,O=v.tags,N=f.author,_=f.title,w=f.author_url||f.authorURL,k=f.author_title||f.authorTitle,j=f.author_image_url||f.authorImageURL;return n.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",t=b.substring(0,10).split("-"),r=t[0],l=p[parseInt(t[1],10)-1],s=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},E?_:n.a.createElement(i.a,{to:y},_)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},l," ",s,", ",r)),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:N})),n.a.createElement("div",{className:"avatar__intro"},N&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},N)),n.a.createElement("small",{className:"avatar__subtitle"},k)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:m.a},d)),(O.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},O.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),O.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:v.permalink,"aria-label":"Read more about "+_},n.a.createElement("strong",null,"Read More")))))}}}]);