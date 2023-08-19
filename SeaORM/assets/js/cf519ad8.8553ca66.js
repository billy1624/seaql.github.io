"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[70476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,_=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(_,l(l({ref:t},m),{},{components:n})):a.createElement(_,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Create Table",c={unversionedId:"schema-statement/create-table",id:"schema-statement/create-table",title:"Create Table",description:"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our SeaQL Community Survey? This is essential for the continued development and maintenance of SeaORM.",source:"@site/docs/09-schema-statement/01-create-table.md",sourceDirName:"09-schema-statement",slug:"/schema-statement/create-table",permalink:"/SeaORM/docs/next/schema-statement/create-table",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/09-schema-statement/01-create-table.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1692391252,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/SeaORM/docs/next/advanced-query/error-handling"},next:{title:"Create Enum",permalink:"/SeaORM/docs/next/schema-statement/create-enum"}},o={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-table"},"Create Table"),(0,r.kt)("admonition",{title:"We need your help! \ud83d\udcdd",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Thank you for reading this documentation. While we have you, would you spare a few minutes into completing our ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/community-survey"},"SeaQL Community Survey"),"? This is essential for the continued development and maintenance of SeaORM.")),(0,r.kt)("p",null,"To create tables in database instead of writing ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCreateStatement"))," manually, you can derive it from ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity")),". This method will help you create a database table including all the columns and foreign key constraints defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.kt)("p",null,"Below we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_filling_price.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"CakeFillingPrice"))," entity to demo its generated SQL statement. You can construct the same statement with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCreateStatement")),"."),(0,r.kt)("p",null,"Note that since version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7.0"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," no longer create indexes. If you need to create indexes in database please check ",(0,r.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/schema-statement/create-index"},"here")," for details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query::*, tests_cfg::*, EntityName, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    builder.build(\n        &Table::create()\n            .table(CakeFillingPrice.table_ref())\n            .col(\n                ColumnDef::new(cake_filling_price::Column::CakeId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::FillingId)\n                    .integer()\n                    .not_null(),\n            )\n            .col(\n                ColumnDef::new(cake_filling_price::Column::Price)\n                    .decimal()\n                    .not_null(),\n            )\n            .primary_key(\n                Index::create()\n                    .name("pk-cake_filling_price")\n                    .col(cake_filling_price::Column::CakeId)\n                    .col(cake_filling_price::Column::FillingId)\n                    .primary(),\n            )\n            .foreign_key(\n                ForeignKeyCreateStatement::new()\n                    .name("fk-cake_filling_price-cake_id-filling_id")\n                    .from_tbl(CakeFillingPrice)\n                    .from_col(cake_filling_price::Column::CakeId)\n                    .from_col(cake_filling_price::Column::FillingId)\n                    .to_tbl(CakeFilling)\n                    .to_col(cake_filling::Column::CakeId)\n                    .to_col(cake_filling::Column::FillingId),\n            )\n            .to_owned()\n    )\n);\n')),(0,r.kt)("p",null,"To further illustrate it, we will show the SQL statement as string below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PostgreSQL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_postgres,\n        [\n            r#"CREATE TABLE "public"."cake_filling_price" ("#,\n            r#""cake_id" integer NOT NULL,"#,\n            r#""filling_id" integer NOT NULL,"#,\n            r#""price" decimal NOT NULL,"#,\n            r#"CONSTRAINT "pk-cake_filling_price" PRIMARY KEY ("cake_id", "filling_id"),"#,\n            r#"CONSTRAINT "fk-cake_filling_price-cake_id-filling_id" FOREIGN KEY ("cake_id", "filling_id") REFERENCES "cake_filling" ("cake_id", "filling_id")"#,\n            r#")"#,\n        ]\n        .join(" ")\n    )\n);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_mysql,\n        [\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` int NOT NULL,",\n            "`filling_id` int NOT NULL,",\n            "`price` decimal NOT NULL,",\n            "PRIMARY KEY `pk-cake_filling_price` (`cake_id`, `filling_id`),",\n            "CONSTRAINT `fk-cake_filling_price-cake_id-filling_id` FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQLite"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_table_from_entity(CakeFillingPrice)),\n    Statement::from_string(\n        db_sqlite,\n        [\n            "CREATE TABLE `cake_filling_price` (",\n            "`cake_id` integer NOT NULL,",\n            "`filling_id` integer NOT NULL,",\n            "`price` real NOT NULL,",\n            "CONSTRAINT `pk-cake_filling_price`PRIMARY KEY (`cake_id`, `filling_id`),",\n            "FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",\n            ")",\n        ]\n        .join(" ")\n    )\n);\n')))))}d.isMDXComponent=!0}}]);