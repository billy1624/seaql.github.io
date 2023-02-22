"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3931],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=m(a),u=r,d=g["".concat(p,".").concat(u)]||g[u]||c[u]||i;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},16319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},o="Running Migration",l={unversionedId:"migration/running-migration",id:"version-0.9.x/migration/running-migration",title:"Running Migration",description:"After you have defined the migrations, you can apply or revert migrations in the terminal or on application startup.",source:"@site/versioned_docs/version-0.9.x/03-migration/03-running-migration.md",sourceDirName:"03-migration",slug:"/migration/running-migration",permalink:"/pr-preview/pr-2/SeaORM/docs/0.9.x/migration/running-migration",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.9.x/03-migration/03-running-migration.md",tags:[],version:"0.9.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677058706,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Migration",permalink:"/pr-preview/pr-2/SeaORM/docs/0.9.x/migration/writing-migration"},next:{title:"Seeding Data",permalink:"/pr-preview/pr-2/SeaORM/docs/0.9.x/migration/seeding-data"}},p={},m=[{value:"Command Line Interface (CLI)",id:"command-line-interface-cli",level:2},{value:"Via <code>sea-orm-cli</code>",id:"via-sea-orm-cli",level:3},{value:"Via SeaSchema Migrator CLI",id:"via-seaschema-migrator-cli",level:3},{value:"Migrating Programmatically",id:"migrating-programmatically",level:2}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-migration"},"Running Migration"),(0,r.kt)("p",null,"After you have defined the migrations, you can apply or revert migrations in the terminal or on application startup."),(0,r.kt)("h2",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,r.kt)("p",null,"Migrations can be run manually in the terminal. ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," must be set in your environment, follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-2/SeaORM/docs/0.9.x/generate-entity/sea-orm-cli#configure-environment"},"here")," to configure it."),(0,r.kt)("p",null,"Supported commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"init"),": Initialize migration directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generate"),": Generate a new migration file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"up"),": Apply all pending migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"up -n 10"),": Apply 10 pending migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"down"),": Rollback last applied migration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"down -n 10"),": Rollback last 10 applied migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": Check the status of all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fresh"),": Drop all tables from the database, then reapply all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh"),": Rollback all applied migrations, then reapply all migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reset"),": Rollback all applied migrations")),(0,r.kt)("h3",{id:"via-sea-orm-cli"},"Via ",(0,r.kt)("inlineCode",{parentName:"h3"},"sea-orm-cli")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," will execute ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo run --manifest-path ./migration/Cargo.toml -- COMMAND")," under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND\n")),(0,r.kt)("p",null,"You can customize the manifest path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sea-orm-cli migrate COMMAND -d ./other/migration/dir\n")),(0,r.kt)("h3",{id:"via-seaschema-migrator-cli"},"Via SeaSchema Migrator CLI"),(0,r.kt)("p",null,"Run the migrator CLI defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"migration/main.rs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd migration\n$ cargo run -- COMMAND\n")),(0,r.kt)("h2",{id:"migrating-programmatically"},"Migrating Programmatically"),(0,r.kt)("p",null,"You can perform migration on application startup with ",(0,r.kt)("inlineCode",{parentName:"p"},"Migrator"),", which implements the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm-migration/0.9/sea_orm_migration/migrator/trait.MigratorTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"MigratorTrait")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use migration::{Migrator, MigratorTrait};\n\n/// Apply all pending migrations\nMigrator::up(db, None).await?;\n\n/// Apply 10 pending migrations\nMigrator::up(db, Some(10)).await?;\n\n/// Rollback last applied migrations\nMigrator::down(db, None).await?;\n\n/// Rollback last 10 applied migrations\nMigrator::down(db, Some(10)).await?;\n\n/// Check the status of all migrations\nMigrator::status(db).await?;\n\n/// Drop all tables from the database, then reapply all migrations\nMigrator::fresh(db).await?;\n\n/// Rollback all applied migrations, then reapply all migrations\nMigrator::refresh(db).await?;\n\n/// Rollback all applied migrations\nMigrator::reset(db).await?;\n")))}c.isMDXComponent=!0}}]);