(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,a){"use strict";a.r(t);a(192);var r=a(0),n=a.n(r),c=a(182),l=a(189),o=a(180);t.default=function(e){var t=e.metadata,a=e.items,r=t.allTagsPath,i=t.name,m=t.count;return n.a.createElement(c.a,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"'},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,m," ",function(e,t){return e>1?t+"s":t}(m,"post"),' tagged with "',i,'"'),n.a.createElement(o.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return n.a.createElement(l.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},n.a.createElement(t,null))})))))))}},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),s=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=s(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,p=u["".concat(l,".").concat(d)]||u[d]||f[d]||c;return a?n.a.createElement(p,o({ref:t},m,{components:a})):n.a.createElement(p,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<c;m++)l[m]=a[m];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},184:function(e,t,a){"use strict";var r=a(1),n=a(0),c=a.n(n),l=a(180),o=a(187),i=a(9),m=a(179),s=a.n(m),u=a(178),f=(a(131),a(132)),d=a.n(f),p=function(e){return function(t){var a,r=t.id,n=Object(i.a)(t,["id"]),l=Object(u.a)().siteConfig,o=(l=void 0===l?{}:l).themeConfig,m=(o=void 0===o?{}:o).navbar,f=(m=void 0===m?{}:m).hideOnScroll,p=void 0!==f&&f;return r?c.a.createElement(e,n,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:s()("anchor",(a={},a[d.a.enhancedAnchor]=!p,a)),id:r}),c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),n.children):c.a.createElement(e,n)}},h=a(133),g=a.n(h);t.a={code:function(e){var t=e.children;return"string"==typeof t?c.a.createElement(o.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(l.a,e)},pre:function(e){return c.a.createElement("div",Object(r.a)({className:g.a.mdxCodeBlock},e))},h1:p("h1"),h2:p("h2"),h3:p("h3"),h4:p("h4"),h5:p("h5"),h6:p("h6")}},189:function(e,t,a){"use strict";a(77);var r=a(0),n=a.n(r),c=a(179),l=a.n(c),o=a(177),i=a(180),m=a(184),s=a(134),u=a.n(s),f=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,r,c,s,d=e.children,p=e.frontMatter,h=e.metadata,g=e.truncated,v=e.isBlogPostPage,b=void 0!==v&&v,E=h.date,y=h.permalink,O=h.tags,N=p.author,w=p.title,j=p.author_url||p.authorURL,P=p.author_title||p.authorTitle,k=p.author_image_url||p.authorImageURL;return n.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(t=b?"h1":"h2",a=E.substring(0,10).split("-"),r=a[0],c=f[parseInt(a[1],10)-1],s=parseInt(a[2],10),n.a.createElement("header",null,n.a.createElement(t,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},b?w:n.a.createElement(i.a,{to:y},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:E,className:u.a.blogPostDate},c," ",s,", ",r)),n.a.createElement("div",{className:"avatar margin-vert--md"},k&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:j,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:k,alt:N})),n.a.createElement("div",{className:"avatar__intro"},N&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:j,target:"_blank",rel:"noreferrer noopener"},N)),n.a.createElement("small",{className:"avatar__subtitle"},P)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:m.a},d)),(O.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},O.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),O.map((function(e){var t=e.label,a=e.permalink;return n.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,"Read More")))))}},192:function(e,t,a){var r=a(25).f,n=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in n||a(10)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})}}]);