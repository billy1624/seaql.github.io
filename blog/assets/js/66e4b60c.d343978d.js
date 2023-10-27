"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[9660],{9680:(a,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>h});var o=e(6687);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,o)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function n(a,t){if(null==a)return{};var e,o,r=function(a,t){if(null==a)return{};var e,o,r={},s=Object.keys(a);for(o=0;o<s.length;o++)e=s[o],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(o=0;o<s.length;o++)e=s[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var l=o.createContext({}),c=function(a){var t=o.useContext(l),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},m=function(a){var t=c(a.components);return o.createElement(l.Provider,{value:t},a.children)},v={inlineCode:"code",wrapper:function(a){var t=a.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,l=a.parentName,m=n(a,["components","mdxType","originalType","parentName"]),p=c(e),h=r,u=p["".concat(l,".").concat(h)]||p[h]||v[h]||s;return e?o.createElement(u,i(i({ref:t},m),{},{components:e})):o.createElement(u,i({ref:t},m))}));function h(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,i=new Array(s);i[0]=p;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=a,n.mdxType="string"==typeof a?a:r,i[1]=n;for(var c=2;c<s;c++)i[c]=e[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},4949:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var o=e(1308),r=(e(6687),e(9680));const s={slug:"2022-07-17-whats-new-in-0.9.0",title:"What's new in SeaORM 0.9.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,n={permalink:"/blog/2022-07-17-whats-new-in-0.9.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2022-07-17-whats-new-in-0.9.0.md",source:"@site/blog/2022-07-17-whats-new-in-0.9.0.md",title:"What's new in SeaORM 0.9.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.9.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:10.01,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2022-07-17-whats-new-in-0.9.0",title:"What's new in SeaORM 0.9.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"Engineering at SeaQL.org",permalink:"/blog/2022-07-30-engineering"},nextItem:{title:"Welcome Summer of Code 2022 Contributors",permalink:"/blog/2022-06-02-summer-of-code-2022-intro"}},l={authorsImageUrls:[void 0]},c=[{value:"Dependency Upgrades",id:"dependency-upgrades",level:2},{value:"Cursor Pagination",id:"cursor-pagination",level:2},{value:"Insert On Conflict",id:"insert-on-conflict",level:2},{value:"Join Table with Custom Conditions and Table Alias",id:"join-table-with-custom-conditions-and-table-alias",level:2},{value:"(de)serialize Custom JSON Type",id:"deserialize-custom-json-type",level:2},{value:"Derived Migration Name",id:"derived-migration-name",level:2},{value:"SeaORM CLI Improvements",id:"seaorm-cli-improvements",level:2},{value:"Miscellaneous Enhancements",id:"miscellaneous-enhancements",level:2},{value:"Integration Examples",id:"integration-examples",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2}],m={toc:c};function v(a){let{components:t,...e}=a;return(0,r.kt)("wrapper",(0,o.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.9.0"},(0,r.kt)("inlineCode",{parentName:"a"},"0.9.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,r.kt)("h2",{id:"dependency-upgrades"},"Dependency Upgrades"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/834"},"#834"),"] We have upgraded a few major dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/launchbadge/sqlx"},(0,r.kt)("inlineCode",{parentName:"a"},"sqlx"))," to 0.6"),(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/time-rs/time"},(0,r.kt)("inlineCode",{parentName:"a"},"time"))," to 0.3"),(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/uuid-rs/uuid"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid"))," to 1.0"),(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-query"},(0,r.kt)("inlineCode",{parentName:"a"},"sea-query"))," to 0.26"),(0,r.kt)("li",{parentName:"ul"},"Upgrade ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-schema"},(0,r.kt)("inlineCode",{parentName:"a"},"sea-schema"))," to 0.9")),(0,r.kt)("p",null,"Note that you might need to upgrade the corresponding dependency on your application as well."),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--8 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/D1plo1d"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/145184?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Rob Gilson")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/boraarslan"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/44371603?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"boraarslan")))))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))))),(0,r.kt)("h2",{id:"cursor-pagination"},"Cursor Pagination"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/822"},"#822"),"] Paginate models based on column(s) such as the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Create a cursor that order by `cake`.`id`\nlet mut cursor = cake::Entity::find().cursor_by(cake::Column::Id);\n\n// Filter paginated result by `cake`.`id` > 1 AND `cake`.`id` < 100\ncursor.after(1).before(100);\n\n// Get first 10 rows (order by `cake`.`id` ASC)\nlet rows: Vec<cake::Model> = cursor.first(10).all(db).await?;\n\n// Get last 10 rows (order by `cake`.`id` DESC but rows are returned in ascending order)\nlet rows: Vec<cake::Model> = cursor.last(10).all(db).await?;\n")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/lberezy"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/5207383?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Lucas Berezy")))))),(0,r.kt)("div",{class:"col col--8 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))))),(0,r.kt)("h2",{id:"insert-on-conflict"},"Insert On Conflict"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/791"},"#791"),"] Insert an active model with on conflict behaviour."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let orange = cake::ActiveModel {\n    id: ActiveValue::set(2),\n    name: ActiveValue::set("Orange".to_owned()),\n};\n\n// On conflict do nothing: \n//   - INSERT INTO "cake" ("id", "name") VALUES (2, \'Orange\') ON CONFLICT ("name") DO NOTHING\ncake::Entity::insert(orange.clone())\n    .on_conflict(\n        sea_query::OnConflict::column(cake::Column::Name)\n            .do_nothing()\n            .to_owned()\n    )\n    .exec(db)\n    .await?;\n\n// On conflict do update:\n//   - INSERT INTO "cake" ("id", "name") VALUES (2, \'Orange\') ON CONFLICT ("name") DO UPDATE SET "name" = "excluded"."name"\ncake::Entity::insert(orange)\n    .on_conflict(\n        sea_query::OnConflict::column(cake::Column::Name)\n            .update_column(cake::Column::Name)\n            .to_owned()\n    )\n    .exec(db)\n    .await?;\n')),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/baoyachi"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/10433001?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"baoyachi. Aka Rust Hairy crabs")))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/liberwang1013"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/16575148?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"liberwang1013"))))))),(0,r.kt)("h2",{id:"join-table-with-custom-conditions-and-table-alias"},"Join Table with Custom Conditions and Table Alias"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/793"},"#793"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/852"},"#852"),"] Click ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/next/relation/custom-join-condition"},"Custom Join Conditions")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/next/advanced-query/custom-joins"},"Custom Joins")," to learn more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .column_as(\n            Expr::tbl(Alias::new("fruit_alias"), fruit::Column::Name).into_simple_expr(),\n            "fruit_name"\n        )\n        .join_as(\n            JoinType::LeftJoin,\n            cake::Relation::Fruit\n                .def()\n                .on_condition(|_left, right| {\n                    Expr::tbl(right, fruit::Column::Name)\n                        .like("%tropical%")\n                        .into_condition()\n                }),\n            Alias::new("fruit_alias")\n        )\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id`, `cake`.`name`, `fruit_alias`.`name` AS `fruit_name` FROM `cake`",\n        "LEFT JOIN `fruit` AS `fruit_alias` ON `cake`.`id` = `fruit_alias`.`cake_id` AND `fruit_alias`.`name` LIKE \'%tropical%\'",\n    ]\n    .join(" ")\n);\n')),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Tuetuopay"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/4009336?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Tuetuopay")))),(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nag763"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/55486724?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Lo\xefc")))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan")))),(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MattGson"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/20088009?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Matt")))),(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/liberwang1013"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/16575148?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"liberwang1013"))))))),(0,r.kt)("h2",{id:"deserialize-custom-json-type"},"(de)serialize Custom JSON Type"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/794"},"#794"),"] JSON stored in the database could be deserialized into custom struct in Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "json_struct")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // JSON column defined in `serde_json::Value`\n    pub json: Json,\n    // JSON column defined in custom struct\n    pub json_value: KeyValue,\n    pub json_value_opt: Option<KeyValue>,\n}\n\n// The custom struct must derive `FromJsonQueryResult`, `Serialize` and `Deserialize`\n#[derive(Clone, Debug, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]\npub struct KeyValue {\n    pub id: i32,\n    pub name: String,\n    pub price: f32,\n    pub notes: Option<String>,\n}\n')),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/mara214"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/37018485?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Mara Schulke")))),(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Chris Tsang")))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))))),(0,r.kt)("h2",{id:"derived-migration-name"},"Derived Migration Name"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/736"},"#736"),"] Introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveMigrationName")," procedural macros to infer migration name from the file name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm_migration::prelude::*;\n\n// Used to be...\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220120_000001_create_post_table"\n    }\n}\n\n// Now... derive `DeriveMigrationName`,\n// no longer have to specify the migration name explicitly\n#[derive(DeriveMigrationName)]\npub struct Migration;\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n')),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Chris Tsang")))))),(0,r.kt)("div",{class:"col col--8 margin-bottom--md"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Contributed by:")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/smonv"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/8962973?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"smonv")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/inf0rm4tik3r"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/9355833?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Lukas Potthast")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan"))))))),(0,r.kt)("h2",{id:"seaorm-cli-improvements"},"SeaORM CLI Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/735"},"#735"),"] Improve logging of generate entity command"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/588"},"#588"),"] Generate enum with numeric like variants"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/755"},"#755"),"] Allow old pending migration to be applied"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/837"},"#837"),"] Skip generating entity for ignored tables"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/724"},"#724"),"] Generate code for ",(0,r.kt)("inlineCode",{parentName:"li"},"time")," crate"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/850"},"#850"),"] Add various blob column types"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/422"},"#422"),"] Generate entity files with Postgres's schema name"),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/851"},"#851"),"] Skip checking connection string for credentials")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed & Contributed by:"),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/ttys3"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/41882455?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"ttys3")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kyoto7250"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/50972773?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"kyoto7250")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/yb3616"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/8839021?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"yb3616")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/cemoktra"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/15634263?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Bastian")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nahuakang"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/18533347?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Nahua")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/hunjixin"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/41407352?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Mike")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/frankhorv"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/6849119?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Frank Horvath")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/maikelwever"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1009019?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Maikel Wever"))))),(0,r.kt)("h2",{id:"miscellaneous-enhancements"},"Miscellaneous Enhancements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/800"},"#800"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"sqlx_logging_level")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectOptions")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/768"},"#768"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"num_items_and_pages")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Paginator")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/849"},"#849"),"] Added ",(0,r.kt)("inlineCode",{parentName:"li"},"TryFromU64")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"time")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/853"},"#853"),"] Include column name in ",(0,r.kt)("inlineCode",{parentName:"li"},"TryGetError::Null")),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/pull/778"},"#778"),"] Refactor stream metrics")),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--12 margin-bottom--md"},"Proposed & Contributed by:"),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/SandaruKasa"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/50824690?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"SandaruKasa")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/fistons"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/972209?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Eric")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/dinhani"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/1139781?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Renato Dinhani")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/kyoto7250"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/50972773?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"kyoto7250")))),(0,r.kt)("div",{class:"col col--4 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nappa85"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/7566389?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Marco Napetti"))))),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("p",null,"SeaORM plays well with the other crates in the async ecosystem. We maintain an array of example projects for building REST, GraphQL and gRPC services. More examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/269"},"wanted"),"!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix v4 Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix3_example"},"Actix v3 Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/graphql_example"},"GraphQL Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/jsonrpsee_example"},"jsonrpsee Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"Poem Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/salvo_example"},"Salvo Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/tonic_example"},"Tonic Example"))),(0,r.kt)("h2",{id:"sponsor"},"Sponsor"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,r.kt)("p",null,"A big shout out to our sponsors \ud83d\ude07:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/Sytten"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/2366731?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"\xc9mile Fugulin")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/deansheather"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/11241812?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Dean Sheather")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sakti"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/196178?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Sakti Dwi Cahyono")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,r.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Unnamed Sponsor")))),(0,r.kt)("div",{class:"col col--6 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,r.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,r.kt)("p",null,"Here is the roadmap for SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/10"},(0,r.kt)("inlineCode",{parentName:"a"},"0.10.x")),"."))}v.isMDXComponent=!0}}]);