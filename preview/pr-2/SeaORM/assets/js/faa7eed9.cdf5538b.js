"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,y=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="Select",l={unversionedId:"basic-crud/select",id:"basic-crud/select",title:"Select",description:"Once you have defined the entity, you are ready to retrieve data from the database. Each row of data in the database corresponds to a Model.",source:"@site/docs/05-basic-crud/02-select.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/select",permalink:"/preview/pr-2/SeaORM/docs/next/basic-crud/select",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/05-basic-crud/02-select.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677059982,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Schema",permalink:"/preview/pr-2/SeaORM/docs/next/basic-crud/basic-schema"},next:{title:"Insert",permalink:"/preview/pr-2/SeaORM/docs/next/basic-crud/insert"}},d={},s=[{value:"Find by Primary Key",id:"find-by-primary-key",level:2},{value:"Find with Conditions and Orders",id:"find-with-conditions-and-orders",level:2},{value:"Find Related Models",id:"find-related-models",level:2},{value:"Lazy Loading",id:"lazy-loading",level:3},{value:"Eager Loading",id:"eager-loading",level:3},{value:"One to One",id:"one-to-one",level:4},{value:"One to Many / Many to Many",id:"one-to-many--many-to-many",level:4},{value:"Batch Loading",id:"batch-loading",level:3},{value:"One to One",id:"one-to-one-1",level:4},{value:"One to Many",id:"one-to-many",level:4},{value:"Many to Many",id:"many-to-many",level:4},{value:"Paginate Result",id:"paginate-result",level:2},{value:"Cursor Pagination",id:"cursor-pagination",level:2},{value:"Select custom",id:"select-custom",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select"},"Select"),(0,r.kt)("p",null,"Once you have defined the entity, you are ready to retrieve data from the database. Each row of data in the database corresponds to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,r.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," enum."),(0,r.kt)("h2",{id:"find-by-primary-key"},"Find by Primary Key"),(0,r.kt)("p",null,"Find a model by its primary key, it can be a single key or composite key. We start by calling ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find_by_id"},(0,r.kt)("inlineCode",{parentName:"a"},"find_by_id"))," on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))," which helps you construct the select query and condition automatically. Then, fetch a single model from the database with the ",(0,r.kt)("inlineCode",{parentName:"p"},"one")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use super::cake::Entity as Cake;\nuse super::cake_filling::Entity as CakeFilling;\n\n// Find by primary key\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// Find by composite primary keys\nlet vanilla: Option<cake_filling::Model> = CakeFilling::find_by_id((6, 8)).one(db).await?;\n")),(0,r.kt)("h2",{id:"find-with-conditions-and-orders"},"Find with Conditions and Orders"),(0,r.kt)("p",null,"In addition to retrieving a model by primary key, you can also retrieve one or more models matching specific conditions in a certain order. The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find"},(0,r.kt)("inlineCode",{parentName:"a"},"find"))," method gives you access to the query builder in SeaORM. It supports the construction of all common select expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"order by"),". They can be constructed using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.QueryFilter.html#method.filter"},(0,r.kt)("inlineCode",{parentName:"a"},"filter"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.QueryOrder.html#method.order_by"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by_*"))," methods respectively."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-2/SeaORM/docs/next/advanced-query/conditional-expression"},"conditional expression"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .all(db)\n    .await?;\n')),(0,r.kt)("h2",{id:"find-related-models"},"Find Related Models"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more on the ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-2/SeaORM/docs/next/relation/one-to-one"},"Relation")," chapter.")),(0,r.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_related"},(0,r.kt)("inlineCode",{parentName:"a"},"find_related"))," method."),(0,r.kt)("p",null,"Related models are loaded on demand when you ask for them, preferable if you want to load related models based on some application logic. Note that lazy loading will increase database round trips compared to eager loading."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// Find a cake model first\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// Then, find all related fruits of this cake\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n")),(0,r.kt)("h3",{id:"eager-loading"},"Eager Loading"),(0,r.kt)("p",null,"All related models are loaded at once. This provides minimum database round trips compared to lazy loading."),(0,r.kt)("h4",{id:"one-to-one"},"One to One"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_also_related"},(0,r.kt)("inlineCode",{parentName:"a"},"find_also_related"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let fruits_and_cakes: Vec<(fruit::Model, Option<cake::Model>)> = Fruit::find().find_also_related(Cake).all(db).await?;\n")),(0,r.kt)("h4",{id:"one-to-many--many-to-many"},"One to Many / Many to Many"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_with_related"},(0,r.kt)("inlineCode",{parentName:"a"},"find_with_related"))," method, the related models will be grouped by the parent models. To achieve this, the query is ordered by Cake's primary key. This method handles both 1-N and M-N cases, and will perform 2 joins when there is a junction table involved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,r.kt)("h3",{id:"batch-loading"},"Batch Loading"),(0,r.kt)("p",null,"Since 0.11, we introduced a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html"},"LoaderTrait")," to load related entities in batches."),(0,r.kt)("p",null,"Compared to eager loading, it saves bandwidth (consider the one to many case, the one side rows may duplicate) at the cost of one (or two, in the case of many to many) more database roundtrip."),(0,r.kt)("h4",{id:"one-to-one-1"},"One to One"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_one"},"load_one")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let fruits: Vec<fruit::Model> = Fruit::find().all(db).await?;\nlet cakes: Vec<Option<cake::Model>> = fruits.load_one(Cake, db).await?;\n")),(0,r.kt)("h4",{id:"one-to-many"},"One to Many"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_many"},"load_many")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;\n")),(0,r.kt)("h4",{id:"many-to-many"},"Many to Many"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html#tymethod.load_many_to_many"},"load_many_to_many")," method. You have to provide the junction Entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let cakes: Vec<cake::Model> = Cake::find().all(db).await?;\nlet fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;\n")),(0,r.kt)("h2",{id:"paginate-result"},"Paginate Result"),(0,r.kt)("p",null,"Convert any SeaORM select into a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Paginator.html"},"paginator")," with custom page size."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake};\nlet mut cake_pages = cake::Entity::find()\n    .order_by_asc(cake::Column::Id)\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<cake::Model>\n}\n")),(0,r.kt)("h2",{id:"cursor-pagination"},"Cursor Pagination"),(0,r.kt)("p",null,"Use cursor pagination If you want to paginate rows based on column(s) such as the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake};\n// Create a cursor that order by `cake`.`id`\nlet mut cursor = cake::Entity::find().cursor_by(cake::Column::Id);\n\n// Filter paginated result by `cake`.`id` > 1 AND `cake`.`id` < 100\ncursor.after(1).before(100);\n\n// Get first 10 rows (order by `cake`.`id` ASC)\nfor cake in cursor.first(10).all(db).await? {\n    // Do something on cake: cake::Model\n}\n\n// Get last 10 rows (order by `cake`.`id` DESC but rows are returned in ascending order)\nfor cake in cursor.last(10).all(db).await? {\n    // Do something on cake: cake::Model\n}\n")),(0,r.kt)("p",null,"Paginate rows based on a composite primary key is also available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake_filling};\nlet rows = cake_filling::Entity::find()\n    .cursor_by((cake_filling::Column::CakeId, cake_filling::Column::FillingId))\n    .after((0, 1))\n    .before((10, 11))\n    .first(3)\n    .all(&db)\n    .await?,\n")),(0,r.kt)("h2",{id:"select-custom"},"Select custom"),(0,r.kt)("p",null,"If you want to select custom columns and expressions, read the ",(0,r.kt)("a",{parentName:"p",href:"/preview/pr-2/SeaORM/docs/next/advanced-query/custom-select"},"custom select")," section."))}m.isMDXComponent=!0}}]);