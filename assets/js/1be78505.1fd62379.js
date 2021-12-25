"use strict";(self.webpackChunkdatalogui_dev=self.webpackChunkdatalogui_dev||[]).push([[514,75],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5642:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),o=n(7019),i=n(6010),c=n(3616),s=n(3783),u=n(5537),d=n(7462);var m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),f=n(3366),b=n(9960),h=n(3919),v=n(541),E="menuLinkText_OKON",g="hasHref_TwRn",y=n(2389),k=["items"],Z=["item"],_=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],T=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(N,(0,d.Z)({key:t,item:e},n))})))}));function N(e){var t=e.item,n=(0,f.Z)(e,Z);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,d.Z)({item:t},n)):a.createElement(O,(0,d.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,s=(0,f.Z)(e,_),u=n.items,m=n.label,h=n.collapsible,v=n.className,k=n.href,Z=function(e){var t=(0,y.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(n),C=(0,c._F)(n,l),N=(0,c.uR)({initialState:function(){return!!h&&(!C&&n.collapsed)}}),S=N.collapsed,O=N.setCollapsed,I=N.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:C,collapsed:S,setCollapsed:O}),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":S},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":h&&!k,"menu__link--active":C},t[E]=!h,t[g]=!!Z,t)),onClick:h?function(e){null==r||r(n),k?O(!1):(e.preventDefault(),I())}:function(){null==r||r(n)},href:h?null!=Z?Z:"#":Z},s),m),k&&h&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),I()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(T,{items:u,tabIndex:S?-1:0,onItemClick:r,activePath:l,level:o+1})))}function O(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(0,f.Z)(e,C),s=t.href,u=t.label,m=t.className,p=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(b.Z,(0,d.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,h.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var I="sidebar_a3j0",w="sidebarWithHideableNavbar_VlPv",P="sidebarHidden_OqfG",x="sidebarLogo_hmkv",M="menu_cyFh",A="menuWithAnnouncementBar_+O1J",j="collapseSidebarButton_eoK2",F="collapseSidebarButtonIcon_e+kA";function L(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",j),onClick:t},a.createElement(m,{className:F}))}function D(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(I,(t={},t[w]=p,t[P]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:x}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",M,(n={},n[A]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:l,activePath:r,level:1}))),f&&a.createElement(L,{onClick:o}))}var B=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(T,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return a.createElement(c.Cv,{component:B,props:e})}var H=a.memo(D),W=a.memo(R);function V(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(W,e))}var q=n(7440),z=n(4608),Y="backToTopButton_i9tI",U="backToTopButtonShow_wCmF";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=K(),s=o.smoothScrollTop,u=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||u(),n<300)r(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,Y,(e={},e[U]=n,e)),type:"button",onClick:function(){return s()}})},G=n(6775),J={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},Q=n(2859);function $(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=e.sidebarName,b=(0,c.Vq)(),h=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],y=E[1],k=(0,a.useState)(!1),Z=k[0],_=k[1],C=(0,a.useCallback)((function(){Z&&_(!1),y((function(e){return!e}))}),[Z]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(h,v)}},a.createElement("div",{className:J.docPage},a.createElement(X,null),b&&a.createElement("aside",{className:(0,i.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&g&&_(!0)}},a.createElement(V,{key:f,sidebar:b,path:s.path,onCollapse:C,isHidden:Z}),Z&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},a.createElement(m,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(J.docMainContainer,(n={},n[J.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(l={},l[J.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:q.Z},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,G.LX)(r.pathname,e)}));if(!o)return a.createElement(z.default,null);var i=o.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:i},(0,l.Z)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(3366),r=n(7462),l=n(7294),o=n(6010),i=n(5999),c=n(3616),s="anchorWithStickyNavbar_y2LR",u="anchorWithHideOnScrollNavbar_3ly5",d=["id"],m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,a.Z)(e,d),f=(0,c.LU)().navbar.hideOnScroll;return m?l.createElement(t,(0,r.Z)({},p,{className:(0,o.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,l.createElement("a",{className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,p)});var t}},7440:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7462),r=n(3366),l=n(7294),o=n(2859),i=n(9960),c=n(7743),s=n(9649),u=n(6010),d=n(3616),m="details_h+cY";function p(e){var t=Object.assign({},e);return l.createElement(d.PO,(0,a.Z)({},t,{className:(0,u.Z)("alert alert--info",m,t.className)}))}var f=["mdxType","originalType"];var b={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,r.Z)(a,f));return l.createElement(e.props.originalType,o)}return e}(e)}));return l.createElement(o.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(c.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(c.Z,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(p,(0,a.Z)({},e,{summary:n}),r)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(7019),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);