"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l="Raw SQL",i={unversionedId:"basic-crud/raw-sql",id:"version-0.10.x/basic-crud/raw-sql",title:"Raw SQL",description:"Query by raw SQL",source:"@site/versioned_docs/version-0.10.x/05-basic-crud/07-raw-sql.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/raw-sql",permalink:"/pr-preview/pr-2/SeaORM/docs/0.10.x/basic-crud/raw-sql",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/05-basic-crud/07-raw-sql.md",tags:[],version:"0.10.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677058706,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/pr-preview/pr-2/SeaORM/docs/0.10.x/basic-crud/json"},next:{title:"One to One",permalink:"/pr-preview/pr-2/SeaORM/docs/0.10.x/relation/one-to-one"}},s={},c=[{value:"Query by raw SQL",id:"query-by-raw-sql",level:2},{value:"Get raw SQL query",id:"get-raw-sql-query",level:2},{value:"Use Raw Query &amp; Execute Interface",id:"use-raw-query--execute-interface",level:2},{value:"Get Custom Result using <code>query_one</code> and <code>query_all</code> methods",id:"get-custom-result-using-query_one-and-query_all-methods",level:3},{value:"Execute Query using <code>execute</code> method",id:"execute-query-using-execute-method",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"raw-sql"},"Raw SQL"),(0,r.kt)("h2",{id:"query-by-raw-sql"},"Query by raw SQL"),(0,r.kt)("p",null,"You can select ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," from raw query, with appropriate syntax for binding parameters, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," for MySQL and SQLite, and ",(0,r.kt)("inlineCode",{parentName:"p"},"$N")," for PostgreSQL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .one(&db)\n    .await?;\n')),(0,r.kt)("p",null,"You can also select a custom model. Here, we select all unique names from cake."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, FromQueryResult)]\npub struct UniqueCake {\n    name: String,\n}\n\nlet unique: Vec<UniqueCake> = UniqueCake::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        vec![],\n    ))\n    .all(&db)\n    .await?;\n')),(0,r.kt)("p",null,"If you do not know what your model looks like beforehand, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonValue"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let unique: Vec<JsonValue> = JsonValue::find_by_statement(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,\n        vec![],\n    ))\n    .all(&db)\n    .await?;\n')),(0,r.kt)("p",null,"You can paginate ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.SelectorRaw.html"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectorRaw"))," and fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," in batch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut cake_pages = cake::Entity::find()\n    .from_raw_sql(Statement::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,\n        vec![1.into()],\n    ))\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<cake::Model>\n}\n')),(0,r.kt)("h2",{id:"get-raw-sql-query"},"Get raw SQL query"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"to_string")," methods on any CRUD operations to get the database-specific raw SQL for debugging purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::DatabaseBackend;\n\nassert_eq!(\n    cake_filling::Entity::find_by_id((6, 8))\n        .build(DatabaseBackend::MySql)\n        .to_string(),\n    vec![\n        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",\n        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",\n    ].join(" ")\n);\n')),(0,r.kt)("h2",{id:"use-raw-query--execute-interface"},"Use Raw Query & Execute Interface"),(0,r.kt)("p",null,"You can build SQL statements using ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query")," and query / execute it directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatabaseConnection")," interface inside SeaORM."),(0,r.kt)("h3",{id:"get-custom-result-using-query_one-and-query_all-methods"},"Get Custom Result using ",(0,r.kt)("inlineCode",{parentName:"h3"},"query_one")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"query_all")," methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let query_res: Option<QueryResult> = db\n    .query_one(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\nlet query_res = query_res.unwrap();\nlet id: i32 = query_res.try_get("", "id")?;\n\nlet query_res_vec: Vec<QueryResult> = db\n    .query_all(Statement::from_string(\n        DatabaseBackend::MySql,\n        "SELECT * FROM `cake`;".to_owned(),\n    ))\n    .await?;\n')),(0,r.kt)("h3",{id:"execute-query-using-execute-method"},"Execute Query using ",(0,r.kt)("inlineCode",{parentName:"h3"},"execute")," method"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let exec_res: ExecResult = db\n    .execute(Statement::from_string(\n        DatabaseBackend::MySql,\n        "DROP DATABASE IF EXISTS `sea`;".to_owned(),\n    ))\n    .await?;\nassert_eq!(exec_res.rows_affected(), 1);\n')))}d.isMDXComponent=!0}}]);