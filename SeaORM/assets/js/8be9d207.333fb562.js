"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,y=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Expanded Entity Structure",o={unversionedId:"generate-entity/expanded-entity-structure",id:"version-0.12.x/generate-entity/expanded-entity-structure",title:"Expanded Entity Structure",description:"SeaORM is dynamic, which means you have the flexibility to configure things on runtime. If you are curious what DeriveEntityModel expands into, read along. Otherwise, you can skip this for now.",source:"@site/versioned_docs/version-0.12.x/04-generate-entity/03-expanded-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/expanded-entity-structure",permalink:"/SeaORM/docs/generate-entity/expanded-entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/04-generate-entity/03-expanded-entity-structure.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1692424838,formattedLastUpdatedAt:"Aug 19, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Structure",permalink:"/SeaORM/docs/generate-entity/entity-structure"},next:{title:"Enumeration",permalink:"/SeaORM/docs/generate-entity/enumeration"}},u={},s=[{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"Additional properties",id:"additional-properties",level:3},{value:"Cast Column Type on Select and Save",id:"cast-column-type-on-select-and-save",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"Model",id:"model",level:2},{value:"Nullable Attribute",id:"nullable-attribute",level:3},{value:"Active Model",id:"active-model",level:2},{value:"Relation",id:"relation",level:2},{value:"Related",id:"related",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expanded-entity-structure"},"Expanded Entity Structure"),(0,r.kt)("p",null,"SeaORM is dynamic, which means you have the flexibility to configure things on runtime. If you are curious what ",(0,r.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," expands into, read along. Otherwise, you can skip this for now."),(0,r.kt)("p",null,"The expanded entity format can be generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--expanded-format")," option."),(0,r.kt)("p",null,"Let's go through the sections of the expanded ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs"},"Cake")," entity."),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"By implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTrait")),", you can perform CRUD operations on the given table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Default, Debug, DeriveEntity)]\npub struct Entity;\n\nimpl EntityName for Entity {\n    fn schema_name(&self) -> Option<&str> {\n        None\n    }\n\n    fn table_name(&self) -> &str {\n        "cake"\n    }\n}\n')),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("p",null,"An enum representing all columns in this table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\npub enum Column {\n    Id,\n    Name,\n}\n\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Id => ColumnType::Integer.def(),\n            Self::Name => ColumnType::String(None).def(),\n        }\n    }\n}\n")),(0,r.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub enum Column {\n    Id,      // maps to "id" in SQL\n    Name,    // maps to "name" in SQL\n    #[sea_orm(column_name = "create_at")]\n    CreateAt // maps to "create_at" in SQL\n}\n')),(0,r.kt)("p",null,"To specify the datatype of each column, the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnType"))," enum can be used."),(0,r.kt)("h3",{id:"additional-properties"},"Additional properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default Value"),(0,r.kt)("li",{parentName:"ul"},"Unique"),(0,r.kt)("li",{parentName:"ul"},"Indexed"),(0,r.kt)("li",{parentName:"ul"},"Nullable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()\n')),(0,r.kt)("h3",{id:"cast-column-type-on-select-and-save"},"Cast Column Type on Select and Save"),(0,r.kt)("p",null,"If you need to select a column as one type but save it into the database as another, you can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"select_as")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"save_as")," methods to perform the casting. A typical use case is selecting a column of type ",(0,r.kt)("inlineCode",{parentName:"p"},"citext")," (case-insensitive text) as ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," in Rust and saving it into the database as ",(0,r.kt)("inlineCode",{parentName:"p"},"citext"),". One should override the ",(0,r.kt)("inlineCode",{parentName:"p"},"ColumnTrait"),"'s methods as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::sea_query::{Expr, SimpleExpr, Alias}\n\nimpl ColumnTrait for Column {\n    // Snipped...\n\n    /// Cast column expression used in select statement.\n    fn select_as(&self, expr: Expr) -> SimpleExpr {\n        Column::CaseInsensitiveText => expr.cast_as(Alias::new("text")),\n        _ => self.select_enum_as(expr),\n    }\n\n    /// Cast value of a column into the correct type for database storage.\n    fn save_as(&self, val: Expr) -> SimpleExpr {\n        Column::CaseInsensitiveText => val.cast_as(Alias::new("citext")),\n        _ => self.save_enum_as(val),\n    }\n}\n')),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"An enum representing the primary key of this table. A composite key is represented by an enum with multiple variants."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ValueType")," defines the type of last_insert_id in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.InsertResult.html"},(0,r.kt)("inlineCode",{parentName:"a"},"InsertResult")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"auto_increment")," defines whether the primary key has an auto-generated value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]\npub enum PrimaryKey {\n    #[sea_orm(column_name = "id")] // Override the default column name\n    Id,  // maps to "id" in SQL\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = i32;\n\n    fn auto_increment() -> bool {\n        true\n    }\n}\n')),(0,r.kt)("p",null,"Example composite key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum PrimaryKey {\n    CakeId,\n    FruitId,\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = (i32, i32);\n\n    fn auto_increment() -> bool {\n        false\n    }\n}\n")),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"The Rust struct for storing query results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq, Eq, DeriveModel, DeriveActiveModel)]\npub struct Model {\n    pub id: i32,\n    pub name: String,\n}\n")),(0,r.kt)("h3",{id:"nullable-attribute"},"Nullable Attribute"),(0,r.kt)("p",null,"If the table column is nullable, wrap it with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{3}","{3}":!0},"pub struct Model {\n    pub id: i32,\n    pub name: Option<String>,\n}\n")),(0,r.kt)("h2",{id:"active-model"},"Active Model"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveModel")," has all the attributes of its corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," but all attributes are wrapped in an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ActiveValue.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveValue")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq)]\npub struct ActiveModel {\n    pub id: ActiveValue<i32>,\n    pub name: ActiveValue<Option<String>>,\n}\n")),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"Specifying the relations with other entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("p",null,"Defining trait bounds to help you query related entities together, especially helpful in many-to-many relations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n\nimpl Related<super::filling::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")))}m.isMDXComponent=!0}}]);