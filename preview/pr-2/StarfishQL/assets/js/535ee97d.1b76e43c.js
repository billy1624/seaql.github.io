"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,y=d["".concat(p,".").concat(h)]||d[h]||l[h]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="What is a Graph Query Engine",s={unversionedId:"introduction/graph-query-engine",id:"introduction/graph-query-engine",title:"What is a Graph Query Engine",description:"A query engine takes input queries written in a specific query language (e.g. SQL statements), performs the necessary operations in the database, and then outputs the data of interest to the user application. You may also view a query engine as an abstraction layer such that the user can design queries simply in the supported query language and let the query engine do the rest.",source:"@site/docs/00-introduction/01-graph-query-engine.md",sourceDirName:"00-introduction",slug:"/introduction/graph-query-engine",permalink:"/preview/pr-2/StarfishQL/docs/introduction/graph-query-engine",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/00-introduction/01-graph-query-engine.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677059982,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/preview/pr-2/StarfishQL/docs/index"},next:{title:"The Objective",permalink:"/preview/pr-2/StarfishQL/docs/introduction/objective"}},p={},u=[],c={toc:u};function l(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-graph-query-engine"},"What is a Graph Query Engine"),(0,a.kt)("p",null,"A query engine takes input queries written in a specific query language (e.g. SQL statements), performs the necessary operations in the database, and then outputs the data of interest to the user application. You may also view a query engine as an abstraction layer such that the user can design queries simply in the supported query language and let the query engine do the rest."),(0,a.kt)("p",null,"In the case of a ",(0,a.kt)("em",{parentName:"p"},"graph")," query engine, the output data is a ",(0,a.kt)("em",{parentName:"p"},"graph")," (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_(abstract_data_type)"},"wiki"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Graph query engine overview",src:r(4714).Z,width:"831",height:"291"})))}l.isMDXComponent=!0},4714:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graph_query_engine_overview-fcfbf479105469234de4eb4b1189461a.png"}}]);