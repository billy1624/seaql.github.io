"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7814],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={},i="Connection Pool",l={unversionedId:"install-and-config/connection",id:"install-and-config/connection",title:"Connection Pool",description:"To obtain a database connection, use the Database interface:",source:"@site/docs/02-install-and-config/02-connection.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/connection",permalink:"/SeaORM/docs/next/install-and-config/connection",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/02-install-and-config/02-connection.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677052747,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database & Async Runtime",permalink:"/SeaORM/docs/next/install-and-config/database-and-async-runtime"},next:{title:"Debug Log",permalink:"/SeaORM/docs/next/install-and-config/debug-log"}},c={},s=[{value:"Connect Options",id:"connect-options",level:2},{value:"Closing Connection",id:"closing-connection",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connection-pool"},"Connection Pool"),(0,a.kt)("p",null,"To obtain a database connection, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Database.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Database"))," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"protocol")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql:"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres:")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite:"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"host")," is usually ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a domain name or an IP address."),(0,a.kt)("p",null,"Under the hood, a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sqlx::Pool"))," is created and owned by ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),"."),(0,a.kt)("p",null,"Each time you call ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"query_one/all")," on it, a connection will be acquired and released from the pool."),(0,a.kt)("p",null,"Multiple queries will execute in parallel as you ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," on them."),(0,a.kt)("h2",{id:"connect-options"},"Connect Options"),(0,a.kt)("p",null,"To configure the connection, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectOptions"))," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());\nopt.max_connections(100)\n    .min_connections(5)\n    .connect_timeout(Duration::from_secs(8))\n    .acquire_timeout(Duration::from_secs(8))\n    .idle_timeout(Duration::from_secs(8))\n    .max_lifetime(Duration::from_secs(8))\n    .sqlx_logging(true)\n    .sqlx_logging_level(log::LevelFilter::Info)\n    .set_schema_search_path("my_schema".into()); // Setting default PostgreSQL schema\n\nlet db = Database::connect(opt).await?;\n')),(0,a.kt)("h2",{id:"closing-connection"},"Closing Connection"),(0,a.kt)("p",null,"The connection will be automatically closed on drop. To close the connection explicitly, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let db = Database::connect(url).await?;\n\n// Closing connection here\ndb.close().await?;\n")))}u.isMDXComponent=!0}}]);