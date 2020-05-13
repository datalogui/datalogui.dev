(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(9),o=(a(0),a(177)),i={id:"terminology",title:"Terminology",sidebar_label:"Terminology"},l={id:"terminology",title:"Terminology",description:"## Glossary of terms used in Datalog UI",source:"@site/docs/Terminology.md",permalink:"/docs/terminology",editUrl:"https://github.com/datalogui/datalogui.dev/edit/master/docs/Terminology.md",sidebar_label:"Terminology",sidebar:"docs",previous:{title:"Bacon Numbers",permalink:"/docs/examples/bacon-numbers"}},c=[{value:"Glossary of terms used in Datalog UI",id:"glossary-of-terms-used-in-datalog-ui",children:[]},{value:"Table",id:"table",children:[]},{value:"Datum",id:"datum",children:[]},{value:"Materialized Table",id:"materialized-table",children:[]},{value:"Table View",id:"table-view",children:[]},{value:"Query",id:"query",children:[]}],s={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"glossary-of-terms-used-in-datalog-ui"},"Glossary of terms used in Datalog UI"),Object(o.b)("p",null,"These terms have a a meaning outside of Datalog UI, but sometimes they have more then one meaning. This pages defines exactly what we mean by the words we use."),Object(o.b)("h2",{id:"table"},"Table"),Object(o.b)("p",null,"A data structure that stores rows of Datums. This is equivalent to a SQL table."),Object(o.b)("h2",{id:"datum"},"Datum"),Object(o.b)("p",null,"A piece of data that lives as a row in a table. I.e. an object ",Object(o.b)("inlineCode",{parentName:"p"},"{foo: 1, bar: 2}")," in some Table with schema ",Object(o.b)("inlineCode",{parentName:"p"},"{foo: NumberType, bar: NumberType}"),"."),Object(o.b)("h2",{id:"materialized-table"},"Materialized Table"),Object(o.b)("p",null,"A table that is created as the result of a Query. You can't assert/retract datums to it. This ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Materialized_view"}),"Wikipedia")," entry applies."),Object(o.b)("h2",{id:"table-view"},"Table View"),Object(o.b)("p",null,"A Table View is one of the core abstractions in DatalogUI. It's how you read data from a Table or Materialized Table. It exposes the methods ",Object(o.b)("inlineCode",{parentName:"p"},"recentData")," which returns data that is new since the last time you called ",Object(o.b)("inlineCode",{parentName:"p"},"recentData"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"readAllData")," which reads all the data in the backing Table. If you ignore the differential part of Datalog UI, you can think of a Table View as providing you access to all the results of a query or rows in a Table. If you want to take advantage of the differential part of Datalog UI you can use ",Object(o.b)("inlineCode",{parentName:"p"},"recentData")," to give you only the changes since the last time you asked for data."),Object(o.b)("h2",{id:"query"},"Query"),Object(o.b)("p",null,"A Query is the pure function that you pass into ",Object(o.b)("inlineCode",{parentName:"p"},"datalog.query"),". This function should be free of side effects. The function itself is run to understand the query declaration, but it is not run every time the query is run."))}u.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return a?n.a.createElement(m,l({ref:t},s,{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);