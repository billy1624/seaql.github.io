"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[1143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2190:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={slug:"2022-10-31-whats-new-in-seaquery-0.27.0",title:"What's new in SeaQuery 0.27.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},l=void 0,o={permalink:"/preview/pr-2/blog/2022-10-31-whats-new-in-seaquery-0.27.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-10-31-whats-new-in-seaquery-0.27.0.md",source:"@site/blog/2022-10-31-whats-new-in-seaquery-0.27.0.md",title:"What's new in SeaQuery 0.27.0",description:"\ud83c\udf89 We are pleased to release SeaQuery 0.27.0! Here are some feature highlights \ud83c\udf1f:",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[{label:"news",permalink:"/preview/pr-2/blog/tags/news"}],readingTime:4.26,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Ivan Krivosheev",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-10-31-whats-new-in-seaquery-0.27.0",title:"What's new in SeaQuery 0.27.0",author:"SeaQL Team",author_title:"Ivan Krivosheev",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Toggle Stacked Download Graph in crates.io",permalink:"/preview/pr-2/blog/2022-11-09-toggle-stacked-download-graph-in-crates-io"},nextItem:{title:"Getting Started with Seaography",permalink:"/preview/pr-2/blog/2022-09-27-getting-started-with-seaography"}},p={authorsImageUrls:[void 0]},s=[{value:"Dependency Upgrade",id:"dependency-upgrade",level:2},{value:"Drivers support",id:"drivers-support",level:2},{value:"Support sub-query operators: <code>EXISTS</code>, <code>ALL</code>, <code>ANY</code>, <code>SOME</code>",id:"support-sub-query-operators-exists-all-any-some",level:2},{value:"Support <code>ON CONFLICT WHERE</code>",id:"support-on-conflict-where",level:2},{value:"Changed cond_where chaining semantics",id:"changed-cond_where-chaining-semantics",level:2},{value:"Added <code>OnConflict::value</code> and <code>OnConflict::values</code>",id:"added-onconflictvalue-and-onconflictvalues",level:2},{value:"Improvement to <code>ColumnDef::default</code>",id:"improvement-to-columndefdefault",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Miscellaneous Enhancements",id:"miscellaneous-enhancements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Community",id:"community",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaQuery ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/releases/tag/0.27.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.27.0")),"! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"dependency-upgrade"},"Dependency Upgrade"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/356"},"#356"),"] We have upgraded a major dependency:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/launchbadge/sqlx"},(0,r.kt)("inlineCode",{parentName:"a"},"sqlx"))," to 0.6.1")),(0,r.kt)("p",null,"You might need to upgrade the corresponding dependency in your application as well."),(0,r.kt)("h2",{id:"drivers-support"},"Drivers support"),(0,r.kt)("p",null,"We have reworked the way drivers work in SeaQuery: priori to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.27.0"),", users have to invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"sea_query_driver_*")," macros. Now each driver ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"rusqlite")," has their own supporting crate, which integrates tightly with the corresponding libraries. Checkout our integration examples below for more details."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/383"},"#383"),"] Deprecate ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query-driver")," in favour of ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query-binder")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/422"},"#422"),"] Rusqlite support is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query-rusqlite")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/433"},"#433"),"] Postgres support is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-query-postgres")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// before\nsea_query::sea_query_driver_postgres!();\nuse sea_query_driver_postgres::{bind_query, bind_query_as};\n\nlet (sql, values) = Query::select()\n    .from(Character::Table)\n    .expr(Func::count(Expr::col(Character::Id)))\n    .build(PostgresQueryBuilder);\n\nlet row = bind_query(sqlx::query(&sql), &values)\n    .fetch_one(&mut pool)\n    .await\n    .unwrap();\n\n// now\nuse sea_query_binder::SqlxBinder;\n\nlet (sql, values) = Query::select()\n    .from(Character::Table)\n    .expr(Func::count(Expr::col(Character::Id)))\n    .build_sqlx(PostgresQueryBuilder);\n\nlet row = sqlx::query_with(&sql, values)\n    .fetch_one(&mut pool)\n    .await\n    .unwrap();\n\n// You can now make use of SQLx's `query_as_with` nicely:\nlet rows = sqlx::query_as_with::<_, StructWithFromRow, _>(&sql, values)\n    .fetch_all(&mut pool)\n    .await\n    .unwrap();\n")),(0,r.kt)("h2",{id:"support-sub-query-operators-exists-all-any-some"},"Support sub-query operators: ",(0,r.kt)("inlineCode",{parentName:"h2"},"EXISTS"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"ALL"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"ANY"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"SOME")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/118"},"#118"),"] Added sub-query operators: ",(0,r.kt)("inlineCode",{parentName:"p"},"EXISTS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ANY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SOME")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let query = Query::select()\n    .column(Char::Id)\n    .from(Char::Table)\n    .and_where(\n        Expr::col(Char::Id)\n            .eq(\n                Expr::any(\n                    Query::select().column(Char::Id).from(Char::Table).take()\n                )\n            )\n    )\n    .to_owned();\n\nassert_eq!(\n    query.to_string(MysqlQueryBuilder),\n    r#"SELECT `id` FROM `character` WHERE `id` = ANY(SELECT `id` FROM `character`)"#\n);\nassert_eq!(\n    query.to_string(PostgresQueryBuilder),\n    r#"SELECT "id" FROM "character" WHERE "id" = ANY(SELECT "id" FROM "character")"#\n);\n')),(0,r.kt)("h2",{id:"support-on-conflict-where"},"Support ",(0,r.kt)("inlineCode",{parentName:"h2"},"ON CONFLICT WHERE")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/366"},"#366"),"] Added support to ",(0,r.kt)("inlineCode",{parentName:"p"},"ON CONFLICT WHERE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let query = Query::insert()\n    .into_table(Glyph::Table)\n    .columns([Glyph::Aspect, Glyph::Image])\n    .values_panic(vec![\n        2.into(),\n        3.into(),\n    ])\n    .on_conflict(\n        OnConflict::column(Glyph::Id)\n            .update_expr((Glyph::Image, Expr::val(1).add(2)))\n            .target_and_where(Expr::tbl(Glyph::Table, Glyph::Aspect).is_null())\n            .to_owned()\n    )\n    .to_owned();\n\nassert_eq!(\n    query.to_string(MysqlQueryBuilder),\n    r#"INSERT INTO `glyph` (`aspect`, `image`) VALUES (2, 3) ON DUPLICATE KEY UPDATE `image` = 1 + 2"#\n);\nassert_eq!(\n    query.to_string(PostgresQueryBuilder),\n    r#"INSERT INTO "glyph" ("aspect", "image") VALUES (2, 3) ON CONFLICT ("id") WHERE "glyph"."aspect" IS NULL DO UPDATE SET "image" = 1 + 2"#\n);\nassert_eq!(\n    query.to_string(SqliteQueryBuilder),\n    r#"INSERT INTO "glyph" ("aspect", "image") VALUES (2, 3) ON CONFLICT ("id") WHERE "glyph"."aspect" IS NULL DO UPDATE SET "image" = 1 + 2"#\n);\n')),(0,r.kt)("h2",{id:"changed-cond_where-chaining-semantics"},"Changed cond_where chaining semantics"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/414"},"#414"),"] Changed cond_where chaining semantics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// Before: will extend current Condition\nassert_eq!(\n    Query::select()\n        .cond_where(any![Expr::col(Glyph::Id).eq(1), Expr::col(Glyph::Id).eq(2)])\n        .cond_where(Expr::col(Glyph::Id).eq(3))\n        .to_owned()\n        .to_string(PostgresQueryBuilder),\n    r#"SELECT WHERE "id" = 1 OR "id" = 2 OR "id" = 3"#\n);\n// Before: confusing, since it depends on the order of invocation:\nassert_eq!(\n    Query::select()\n        .cond_where(Expr::col(Glyph::Id).eq(3))\n        .cond_where(any![Expr::col(Glyph::Id).eq(1), Expr::col(Glyph::Id).eq(2)])\n        .to_owned()\n        .to_string(PostgresQueryBuilder),\n    r#"SELECT WHERE "id" = 3 AND ("id" = 1 OR "id" = 2)"#\n);\n// Now: will always conjoin with `AND`\nassert_eq!(\n    Query::select()\n        .cond_where(Expr::col(Glyph::Id).eq(1))\n        .cond_where(any![Expr::col(Glyph::Id).eq(2), Expr::col(Glyph::Id).eq(3)])\n        .to_owned()\n        .to_string(PostgresQueryBuilder),\n    r#"SELECT WHERE "id" = 1 AND ("id" = 2 OR "id" = 3)"#\n);\n// Now: so they are now equivalent\nassert_eq!(\n    Query::select()\n        .cond_where(any![Expr::col(Glyph::Id).eq(2), Expr::col(Glyph::Id).eq(3)])\n        .cond_where(Expr::col(Glyph::Id).eq(1))\n        .to_owned()\n        .to_string(PostgresQueryBuilder),\n    r#"SELECT WHERE ("id" = 2 OR "id" = 3) AND "id" = 1"#\n);\n')),(0,r.kt)("h2",{id:"added-onconflictvalue-and-onconflictvalues"},"Added ",(0,r.kt)("inlineCode",{parentName:"h2"},"OnConflict::value")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"OnConflict::values")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] Implementation ",(0,r.kt)("inlineCode",{parentName:"p"},"From<T>")," for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Into<Value>")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleExpr")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Before: notice the tuple\nOnConflict::column(Glyph::Id).update_expr((Glyph::Image, Expr::val(1).add(2)))\n// After: it accepts `Value` as well as `SimpleExpr`\nOnConflict::column(Glyph::Id).value(Glyph::Image, Expr::val(1).add(2))\n")),(0,r.kt)("h2",{id:"improvement-to-columndefdefault"},"Improvement to ",(0,r.kt)("inlineCode",{parentName:"h2"},"ColumnDef::default")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/issues/347"},"#347"),"] ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnDef::default")," now accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"Into<SimpleExpr>")," instead ",(0,r.kt)("inlineCode",{parentName:"p"},"Into<Value>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Now we can write:\nColumnDef::new(Char::FontId)\n    .timestamp()\n    .default(Expr::current_timestamp())\n")),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/386"},"#386"),"] Changed ",(0,r.kt)("inlineCode",{parentName:"li"},"in_tuples")," interface to accept ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoValueTuple")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/320"},"#320"),"] Removed deprecated methods"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/440"},"#440"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"CURRENT_TIMESTAMP")," changed from being a function to keyword"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/375"},"#375"),"] Update SQLite ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," type from ",(0,r.kt)("inlineCode",{parentName:"li"},"integer to "),"boolean`"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] Deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"OnConflict::update_value"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OnConflict::update_values"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OnConflict::update_expr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OnConflict::update_exprs")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] Deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"InsertStatement::exprs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"InsertStatement::exprs_panic")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] Deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStatement::col_expr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStatement::value_expr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStatement::exprs")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStatement::value")," now accept ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<Value>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/451"},"#451"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"Expr::case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CaseStatement::case")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"CaseStatement::finally")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Into<Expr>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/460"},"#460"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"InsertStatement::values"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStatement::values")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator<Item = SimpleExpr>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator<Item = Value>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/409"},"#409"),"] Use native api from SQLx for SQLite to work with time"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/435"},"#435"),"] Changed type of ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnType::Enum")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"(String, Vec<String>)")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Enum { name: DynIden, variants: Vec<DynIden>}"))),(0,r.kt)("h2",{id:"miscellaneous-enhancements"},"Miscellaneous Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/336"},"#336"),"] Added support one dimension Postgres array for SQLx"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/373"},"#373"),"] Support CROSS JOIN"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/457"},"#457"),"] Added support ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP COLUMN")," for SQLite"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/466"},"#466"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"YEAR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BIT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"VARBIT")," types"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/338"},"#338"),"] Handle Postgres schema name for schema statements"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/418"},"#418"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<<")," and ",(0,r.kt)("inlineCode",{parentName:"li"},">>")," binary operators"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/430"},"#329"),"] Added RAND function"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/425"},"#425"),"] Implements ",(0,r.kt)("inlineCode",{parentName:"li"},"Display")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/427"},"#427"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERSECT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EXCEPT")," to UnionType"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/448"},"#448"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"OrderedStatement::order_by_customs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OrderedStatement::order_by_columns"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OverStatement::partition_by_customs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OverStatement::partition_by_columns")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIterator<Item = T>")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Vec<T>")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/452"},"#452"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"TableAlterStatement::rename_column"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TableAlterStatement::drop_column"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnDef::new"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnDef::new_with_type")," now accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"IntoIden")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Iden")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/426"},"#426"),"] Cleanup ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexBuilder")," trait methods"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/436"},"#436"),"] Introduce ",(0,r.kt)("inlineCode",{parentName:"li"},"SqlWriter")," trait"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/448"},"#448"),"] Remove unneeded ",(0,r.kt)("inlineCode",{parentName:"li"},"vec!")," from examples")),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/449"},"#449"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"distinct_on")," properly handles ",(0,r.kt)("inlineCode",{parentName:"li"},"ColumnRef")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/461"},"#461"),"] Removed ",(0,r.kt)("inlineCode",{parentName:"li"},"ON")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"DROP INDEX")," for SQLite"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/pull/468"},"#468"),"] Change datetime string format to include microseconds"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/issues/452"},"#452"),"] ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER TABLE")," for PosgreSQL with ",(0,r.kt)("inlineCode",{parentName:"li"},"UNIQUE")," constraint")),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"SeaQuery plays well with the other crates in the rust ecosystem. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/postgres"},"Postgres Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/rusqlite"},"Rusqlite Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_any"},"SQLx Any Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_postgres"},"SQLx Postgres Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_mysql"},"SQLx MySql Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query/tree/master/examples/sqlx_sqlite"},"SQLx Sqlite Example"))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."))}m.isMDXComponent=!0}}]);