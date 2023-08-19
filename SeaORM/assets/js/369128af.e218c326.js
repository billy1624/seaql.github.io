"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[98436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Schema Management",l={unversionedId:"install-and-config/schema",id:"version-0.4.x/install-and-config/schema",title:"Schema Management",description:"If you already have a database with tables and data, you can skip this section.",source:"@site/versioned_docs/version-0.4.x/02-install-and-config/02-schema.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/schema",permalink:"/SeaORM/docs/0.4.x/install-and-config/schema",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/02-install-and-config/02-schema.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1692424838,formattedLastUpdatedAt:"Aug 19, 2023",sidebarPosition:2,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/0.4.x/install-and-config/database-and-async-runtime"},next:{title:"Connection Pool",permalink:"/SeaORM/docs/0.4.x/install-and-config/connection"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schema-management"},"Schema Management"),(0,r.kt)("p",null,"If you already have a database with tables and data, you can skip this section."),(0,r.kt)("p",null,"If you are starting from a fresh database, it's actually better to version control your database schema with a migration tool."),(0,r.kt)("p",null,"We are still developing SeaORM's schema management utility, so for now you can use SQLx's ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/sqlx-cli"},(0,r.kt)("inlineCode",{parentName:"a"},"sqlx-cli")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cargo install sqlx-cli\n")),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in your environment, or create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your project root. Specify your database connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"DATABASE_URL=protocol://username:password@localhost/database\n")),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".sql")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sqlx migrate add <name>\n")),(0,r.kt)("p",null,"Run migrations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sqlx migrate run\n")))}u.isMDXComponent=!0}}]);