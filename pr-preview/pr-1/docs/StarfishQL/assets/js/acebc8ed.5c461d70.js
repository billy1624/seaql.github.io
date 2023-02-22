"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,h=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},o="Index",p={unversionedId:"index",id:"index",title:"Index",description:"Introduction",source:"@site/docs/00-index.md",sourceDirName:".",slug:"/index",permalink:"/StarfishQL/docs/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/00-index.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677052242,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is a Graph Query Engine",permalink:"/StarfishQL/docs/introduction/graph-query-engine"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/introduction/graph-query-engine"},"What is a Graph Query Engine"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/introduction/objective"},"The Objective"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/introduction/starfish-ql"},"StarfishQL Concepts")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"1.1 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/install-and-config/setup-graph-queery-engine"},"Setup Graph Query Engine")),(0,n.kt)("p",{parentName:"li"},"1.2 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/install-and-config/crawling-crates-io-data"},"Crawling crates.io Data")),(0,n.kt)("p",{parentName:"li"},"1.3 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/install-and-config/visualizing-dependency-graph"},"Visualizing Dependency Graph"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Architecture of Graph Query Engine"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/overview"},"Overview")),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema"},"Defining Graph Schema")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/data-storage"},"Data Storage")),(0,n.kt)("p",{parentName:"li"},"2.4 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations"},"Mutate Operations")),(0,n.kt)("p",{parentName:"li"},"2.5 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity"},"Calculating Node Connectivity")),(0,n.kt)("p",{parentName:"li"},"2.6 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data"},"Querying Graph Data")),(0,n.kt)("p",{parentName:"li"},"2.7 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-query-engine/web-api-layer"},"Web API Layer"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Architecture of crates.io Crawler"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-crates-io-crawler/overview"},"Overview"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Architecture of Graph Visualization"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/StarfishQL/docs/architecture-of-graph-visualization/overview"},"Overview")))))}u.isMDXComponent=!0}}]);