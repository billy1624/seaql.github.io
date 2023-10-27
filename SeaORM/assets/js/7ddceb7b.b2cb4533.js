"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[95966],{48859:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(76687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(31308),r=(n(76687),n(48859));const i={},l="Insert",o={unversionedId:"basic-crud/insert",id:"version-0.8.x/basic-crud/insert",title:"Insert",description:"Before diving into SeaORM insert we have to introduce ActiveValue and ActiveModel.",source:"@site/versioned_docs/version-0.8.x/05-basic-crud/02-insert.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/insert",permalink:"/SeaORM/docs/0.8.x/basic-crud/insert",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/05-basic-crud/02-insert.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1698391232,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Select",permalink:"/SeaORM/docs/0.8.x/basic-crud/select"},next:{title:"Update",permalink:"/SeaORM/docs/0.8.x/basic-crud/update"}},s={},d=[{value:"ActiveValue",id:"activevalue",level:2},{value:"Model &amp; ActiveModel",id:"model--activemodel",level:2},{value:"Set ActiveModel from JSON Value",id:"set-activemodel-from-json-value",level:3},{value:"Checking if an ActiveModel is changed",id:"checking-if-an-activemodel-is-changed",level:3},{value:"Insert One",id:"insert-one",level:2},{value:"Insert Many",id:"insert-many",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert"},"Insert"),(0,r.kt)("p",null,"Before diving into SeaORM insert we have to introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,r.kt)("h2",{id:"activevalue"},"ActiveValue"),(0,r.kt)("p",null,"A wrapper struct to capture the changes made to ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::ActiveValue::NotSet;\n\n// Set value\nlet _: ActiveValue<i32> = Set(10);\n\n// NotSet value\nlet _: ActiveValue<i32> = NotSet;\n")),(0,r.kt)("h2",{id:"model--activemodel"},"Model & ActiveModel"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," has all the attributes of ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveValue"),"."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," to insert a row with a subset of columns set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// Get Model\nlet model: cake::Model = cheese.unwrap();\nassert_eq!(model.name, "Cheese Cake".to_owned());\n\n// Into ActiveModel\nlet active_model: cake::ActiveModel = model.into();\nassert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));\n')),(0,r.kt)("h3",{id:"set-activemodel-from-json-value"},"Set ActiveModel from JSON Value"),(0,r.kt)("p",null,"If you want to save user input into the database you can easily convert JSON value into ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel"),". Note that you might want to ",(0,r.kt)("a",{parentName:"p",href:"https://serde.rs/attr-skip-serializing.html"},"skip deserializing")," JSON's primary key attribute, you can config that as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]\n#[sea_orm(table_name = "fruit")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    #[serde(skip_deserializing)] // Skip deserializing\n    pub id: i32,\n    pub name: String,\n    pub cake_id: Option<i32>,\n}\n')),(0,r.kt)("p",null,"Set the attributes in ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"set_from_json")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// A ActiveModel with primary key set\nlet mut fruit = fruit::ActiveModel {\n    id: ActiveValue::Set(1),\n    name: ActiveValue::NotSet,\n    cake_id: ActiveValue::NotSet,\n};\n\n// Note that this method will not alter the primary key values in ActiveModel\nfruit.set_from_json(json!({\n    "id": 8,\n    "name": "Apple",\n    "cake_id": 1,\n}))?;\n\nassert_eq!(\n    fruit,\n    fruit::ActiveModel {\n        id: ActiveValue::Set(1),\n        name: ActiveValue::Set("Apple".to_owned()),\n        cake_id: ActiveValue::Set(Some(1)),\n    }\n);\n')),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," from JSON value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"from_json")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let fruit = fruit::ActiveModel::from_json(json!({\n    "name": "Apple",\n}))?;\n\nassert_eq!(\n    fruit,\n    fruit::ActiveModel {\n        id: ActiveValue::NotSet,\n        name: ActiveValue::Set("Apple".to_owned()),\n        cake_id: ActiveValue::NotSet,\n    }\n);\n')),(0,r.kt)("h3",{id:"checking-if-an-activemodel-is-changed"},"Checking if an ActiveModel is changed"),(0,r.kt)("p",null,"You can check whether any field in an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/entity/prelude/trait.ActiveModelTrait.html#method.is_changed"},(0,r.kt)("inlineCode",{parentName:"a"},"is_changed"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mut fruit: fruit::ActiveModel = Default::default();\nassert!(!fruit.is_changed());\n\nfruit.set(fruit::Column::Name, "apple".into());\nassert!(fruit.is_changed());\n')),(0,r.kt)("h2",{id:"insert-one"},"Insert One"),(0,r.kt)("p",null,"Insert an active model and get back a fresh ",(0,r.kt)("inlineCode",{parentName:"p"},"Model"),". Its value is retrieved from database, so any auto-generated fields will be populated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\nlet pear: fruit::Model = pear.insert(db).await?;\n')),(0,r.kt)("p",null,"Insert an active model and get back the last insert id. Its type matches the model's primary key type, so it could be a tuple if the model has a composite primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\nlet res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;\nassert_eq!(res.last_insert_id, 28)\n')),(0,r.kt)("h2",{id:"insert-many"},"Insert Many"),(0,r.kt)("p",null,"Insert many active models and get back the last insert id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default()\n};\n\nlet orange = fruit::ActiveModel {\n    name: Set("Orange".to_owned()),\n    ..Default::default()\n};\n\nlet res: InsertResult = Fruit::insert_many(vec![apple, orange]).exec(db).await?;\nassert_eq!(res.last_insert_id, 30)\n')))}u.isMDXComponent=!0}}]);