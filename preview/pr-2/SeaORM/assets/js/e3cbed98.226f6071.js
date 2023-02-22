"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),k=n,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||p;return r?a.createElement(u,i(i({ref:t},s),{},{components:r})):a.createElement(u,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const p={},i="Index",o={unversionedId:"index",id:"version-0.4.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.4.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/pr-preview/pr-2/SeaORM/docs/0.4.x/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/01-index.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677058706,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",next:{title:"What is an ORM",permalink:"/pr-preview/pr-2/SeaORM/docs/0.4.x/introduction/orm"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Learn More",id:"learn-more",level:2}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/introduction/orm"},"What is an ORM"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/introduction/async"},"Async Programming in Rust"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/introduction/sea-orm"},"SeaORM Concepts")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"1.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"1.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/install-and-config/schema"},"Schema Management")),(0,n.kt)("p",{parentName:"li"},"1.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"1.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"2.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-database-schema/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/generate-database-schema/create-enum"},"Create Enum"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"4.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"4.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"4.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"4.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"7.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"7.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/subquery"},"Subquery")),(0,n.kt)("p",{parentName:"li"},"7.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"7.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"7.8 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.4.x/internal-design/diesel"},"Compare with Diesel")))))}m.isMDXComponent=!0}}]);