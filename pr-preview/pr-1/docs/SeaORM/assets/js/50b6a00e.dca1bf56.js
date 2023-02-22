"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Database & Async Runtime",s={unversionedId:"install-and-config/database-and-async-runtime",id:"version-0.4.x/install-and-config/database-and-async-runtime",title:"Database & Async Runtime",description:"First, add sea-orm to the [dependencies] section of your Cargo.toml.",source:"@site/versioned_docs/version-0.4.x/02-install-and-config/01-database-and-async-runtime.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/database-and-async-runtime",permalink:"/SeaORM/docs/0.4.x/install-and-config/database-and-async-runtime",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/02-install-and-config/01-database-and-async-runtime.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677052242,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"SeaORM Concepts",permalink:"/SeaORM/docs/0.4.x/introduction/sea-orm"},next:{title:"Schema Management",permalink:"/SeaORM/docs/0.4.x/install-and-config/schema"}},l={},p=[{value:"DATABASE_DRIVER",id:"database_driver",level:2},{value:"ASYNC_RUNTIME",id:"async_runtime",level:2},{value:"Extra features",id:"extra-features",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database--async-runtime"},"Database & Async Runtime"),(0,r.kt)("p",null,"First, add ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'sea-orm = { version = "^0.4", features = [ DATABASE_DRIVER, ASYNC_RUNTIME, "macros" ], default-features = false }\n')),(0,r.kt)("p",null,"You must choose a ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_DRIVER")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"ASYNC_RUNTIME"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"macros")," is needed if you use SeaORM's generated entities (most likely)."),(0,r.kt)("h2",{id:"database_driver"},"DATABASE_DRIVER"),(0,r.kt)("p",null,"You can choose one or more from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-mysql")," - SQLx MySQL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-postgres")," - SQLx Postgres"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqlx-sqlite")," - SQLx SQLite")),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/crate/sqlx/latest/features"},"SQLx docs"),"."),(0,r.kt)("h2",{id:"async_runtime"},"ASYNC_RUNTIME"),(0,r.kt)("p",null,"You have to choose one from:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime-actix-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-async-std-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-tokio-native-tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-actix-rustls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-async-std-rustls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-tokio-rustls")),(0,r.kt)("p",null,"Basically, they are in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime-ASYNC_RUNTIME-TLS_LIB"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASYNC_RUNTIME")," can be ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/actix"},(0,r.kt)("inlineCode",{parentName:"a"},"actix")),", ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/async-std"},(0,r.kt)("inlineCode",{parentName:"a"},"async-std"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/tokio"},(0,r.kt)("inlineCode",{parentName:"a"},"tokio"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TLS_LIB")," can either be ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/native-tls"},(0,r.kt)("inlineCode",{parentName:"a"},"native-tls"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/rustls"},(0,r.kt)("inlineCode",{parentName:"a"},"rustls")))),(0,r.kt)("p",null,"Tip 1: ",(0,r.kt)("a",{parentName:"p",href:"https://rocket.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"Rocket"))," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio"),", ",(0,r.kt)("a",{parentName:"p",href:"https://actix.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"Actix"))," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"actix"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/tide"},(0,r.kt)("inlineCode",{parentName:"a"},"Tide"))," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"async-std")),(0,r.kt)("p",null,"Tip 2: ",(0,r.kt)("inlineCode",{parentName:"p"},"native-tls")," uses platform's native security facilities, while ",(0,r.kt)("inlineCode",{parentName:"p"},"rustls")," is a pure Rust implementation"),(0,r.kt)("h2",{id:"extra-features"},"Extra features"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"debug-print")," - print every SQL statement to logger"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mock")," - mock interface for unit testing"))}d.isMDXComponent=!0}}]);