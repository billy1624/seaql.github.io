"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4306],{3905:(e,r,a)=>{a.d(r,{Zo:()=>m,kt:()=>k});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},m=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=n,u=d["".concat(c,".").concat(k)]||d[k]||l[k]||p;return a?t.createElement(u,i(i({ref:r},m),{},{components:a})):t.createElement(u,i({ref:r},m))}));function k(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},89797:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var t=a(87462),n=(a(67294),a(3905));const p={},i="Index",o={unversionedId:"index",id:"version-0.11.x/index",title:"Index",description:"Introduction",source:"@site/versioned_docs/version-0.11.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/pr-preview/pr-1/SeaORM/docs/index",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/01-index.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677055496,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/pr-preview/pr-1/SeaORM/docs/introduction/orm"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2}],m={toc:s};function l(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"index"},"Index"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Introduction"),(0,n.kt)("p",{parentName:"li"},"1.1. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/introduction/orm"},"What is an ORM")),(0,n.kt)("p",{parentName:"li"},"1.2. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/introduction/async"},"Async Programming in Rust")),(0,n.kt)("p",{parentName:"li"},"1.3. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/introduction/sea-orm"},"SeaORM Concepts")),(0,n.kt)("p",{parentName:"li"},"1.4. ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/introduction/tutorial"},"Tutorial & Examples")))),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,n.kt)("p",{parentName:"li"},"2.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,n.kt)("p",{parentName:"li"},"2.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/install-and-config/connection"},"Connection Pool")),(0,n.kt)("p",{parentName:"li"},"2.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/install-and-config/debug-log"},"Debug Log"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migration"),(0,n.kt)("p",{parentName:"li"},"3.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/migration/setting-up-migration"},"Setting Up Migration")),(0,n.kt)("p",{parentName:"li"},"3.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/migration/writing-migration"},"Writing Migration")),(0,n.kt)("p",{parentName:"li"},"3.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/migration/running-migration"},"Running Migration")),(0,n.kt)("p",{parentName:"li"},"3.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/migration/seeding-data"},"Seeding Data"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generating Entities"),(0,n.kt)("p",{parentName:"li"},"4.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/generate-entity/sea-orm-cli"},"Using ",(0,n.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,n.kt)("p",{parentName:"li"},"4.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/generate-entity/entity-structure"},"Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,n.kt)("p",{parentName:"li"},"4.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/generate-entity/enumeration"},"Enumeration"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Basic CRUD"),(0,n.kt)("p",{parentName:"li"},"5.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/basic-schema"},"Basic Schema")),(0,n.kt)("p",{parentName:"li"},"5.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,n.kt)("p",{parentName:"li"},"5.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,n.kt)("p",{parentName:"li"},"5.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/update"},"UPDATE: find & save, update many")),(0,n.kt)("p",{parentName:"li"},"5.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/save"},"SAVE: insert or update")),(0,n.kt)("p",{parentName:"li"},"5.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/delete"},"DELETE: delete one & delete many")),(0,n.kt)("p",{parentName:"li"},"5.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/json"},"JSON")),(0,n.kt)("p",{parentName:"li"},"5.8 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/basic-crud/raw-sql"},"Raw SQL query")))),(0,n.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Relations"),(0,n.kt)("p",{parentName:"li"},"6.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/one-to-one"},"One to One")),(0,n.kt)("p",{parentName:"li"},"6.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/one-to-many"},"One to Many")),(0,n.kt)("p",{parentName:"li"},"6.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/many-to-many"},"Many to Many")),(0,n.kt)("p",{parentName:"li"},"6.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/chained-relations"},"Chained Relations")),(0,n.kt)("p",{parentName:"li"},"6.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/self-referencing"},"Self Referencing")),(0,n.kt)("p",{parentName:"li"},"6.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/custom-join-condition"},"Custom Join Condition")),(0,n.kt)("p",{parentName:"li"},"6.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/data-loader"},"Data Loader")),(0,n.kt)("p",{parentName:"li"},"6.8 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/relation/bakery-schema"},"Bakery Schema"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Writing Tests"),(0,n.kt)("p",{parentName:"li"},"7.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/write-test/testing"},"Robust & Correct")),(0,n.kt)("p",{parentName:"li"},"7.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/write-test/mock"},"Mock Interface")),(0,n.kt)("p",{parentName:"li"},"7.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/write-test/sqlite"},"Using SQLite"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Advanced Queries"),(0,n.kt)("p",{parentName:"li"},"8.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/custom-select"},"Custom select")),(0,n.kt)("p",{parentName:"li"},"8.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/conditional-expression"},"Conditional expressions")),(0,n.kt)("p",{parentName:"li"},"8.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/aggregate-function"},"Aggregate functions")),(0,n.kt)("p",{parentName:"li"},"8.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/custom-joins"},"Custom Joins")),(0,n.kt)("p",{parentName:"li"},"8.5 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/subquery"},"Sub Query")),(0,n.kt)("p",{parentName:"li"},"8.6 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/transaction"},"Transaction")),(0,n.kt)("p",{parentName:"li"},"8.7 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/streaming"},"Streaming")),(0,n.kt)("p",{parentName:"li"},"8.8 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/custom-active-model"},"Custom Active Model")),(0,n.kt)("p",{parentName:"li"},"8.9 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/advanced-query/error-handling"},"Error Handling"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Schema Statement"),(0,n.kt)("p",{parentName:"li"},"9.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/schema-statement/create-table"},"Create Table")),(0,n.kt)("p",{parentName:"li"},"9.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/schema-statement/create-enum"},"Create Enum")),(0,n.kt)("p",{parentName:"li"},"9.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/schema-statement/create-index"},"Create Index"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Internal Design"),(0,n.kt)("p",{parentName:"li"},"10.1 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/internal-design/trait-and-type"},"Traits and Types")),(0,n.kt)("p",{parentName:"li"},"10.2 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/internal-design/derive-macro"},"Derive Macros")),(0,n.kt)("p",{parentName:"li"},"10.3 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/internal-design/diesel"},"Compare with Diesel")),(0,n.kt)("p",{parentName:"li"},"10.4 ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1/SeaORM/docs/internal-design/architecture"},"Architecture")))))}l.isMDXComponent=!0}}]);