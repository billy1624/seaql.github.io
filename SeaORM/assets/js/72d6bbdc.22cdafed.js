"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[11532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,f=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Expanded Entity Structure",o={unversionedId:"generate-entity/expanded-entity-structure",id:"version-0.10.x/generate-entity/expanded-entity-structure",title:"Expanded Entity Structure",description:"SeaORM is dynamic, which means you have the flexibility to configure things on runtime. If you are curious what DeriveEntityModel expands into, read along. Otherwise, you can skip this for now.",source:"@site/versioned_docs/version-0.10.x/04-generate-entity/03-expanded-entity-structure.md",sourceDirName:"04-generate-entity",slug:"/generate-entity/expanded-entity-structure",permalink:"/SeaORM/docs/0.10.x/generate-entity/expanded-entity-structure",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.10.x/04-generate-entity/03-expanded-entity-structure.md",tags:[],version:"0.10.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1692391252,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Structure",permalink:"/SeaORM/docs/0.10.x/generate-entity/entity-structure"},next:{title:"Enumeration",permalink:"/SeaORM/docs/0.10.x/generate-entity/enumeration"}},u={},p=[{value:"Entity",id:"entity",level:2},{value:"Column",id:"column",level:2},{value:"Additional properties",id:"additional-properties",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"Model",id:"model",level:2},{value:"Nullable Attribute",id:"nullable-attribute",level:3},{value:"Active Model",id:"active-model",level:2},{value:"Active Model Behavior",id:"active-model-behavior",level:3},{value:"Relation",id:"relation",level:2},{value:"Related",id:"related",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expanded-entity-structure"},"Expanded Entity Structure"),(0,a.kt)("p",null,"SeaORM is dynamic, which means you have the flexibility to configure things on runtime. If you are curious what ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," expands into, read along. Otherwise, you can skip this for now."),(0,a.kt)("p",null,"The expanded entity format can be generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"sea-orm-cli")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--expanded-format")," option."),(0,a.kt)("p",null,"Let's go through the sections of the expanded ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs"},"Cake")," entity."),(0,a.kt)("h2",{id:"entity"},"Entity"),(0,a.kt)("p",null,"By implementing the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityTrait")),", you can perform CRUD operations on the given table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Default, Debug, DeriveEntity)]\npub struct Entity;\n\nimpl EntityName for Entity {\n    fn schema_name(&self) -> Option<&str> {\n        None\n    }\n\n    fn table_name(&self) -> &str {\n        "cake"\n    }\n}\n')),(0,a.kt)("h2",{id:"column"},"Column"),(0,a.kt)("p",null,"An enum representing all columns in this table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\npub enum Column {\n    Id,\n    Name,\n}\n\nimpl ColumnTrait for Column {\n    type EntityName = Entity;\n\n    fn def(&self) -> ColumnDef {\n        match self {\n            Self::Id => ColumnType::Integer.def(),\n            Self::Name => ColumnType::String(None).def(),\n        }\n    }\n}\n")),(0,a.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub enum Column {\n    Id,      // maps to "id" in SQL\n    Name,    // maps to "name" in SQL\n    #[sea_orm(column_name = "create_at")]\n    CreateAt // maps to "create_at" in SQL\n}\n')),(0,a.kt)("p",null,"To specify the datatype of each column, the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ColumnType"))," enum can be used."),(0,a.kt)("h3",{id:"additional-properties"},"Additional properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default Value"),(0,a.kt)("li",{parentName:"ul"},"Unique"),(0,a.kt)("li",{parentName:"ul"},"Indexed"),(0,a.kt)("li",{parentName:"ul"},"Nullable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()\n')),(0,a.kt)("h2",{id:"primary-key"},"Primary Key"),(0,a.kt)("p",null,"An enum representing the primary key of this table. A composite key is represented by an enum with multiple variants."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ValueType")," defines the type of last_insert_id in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.InsertResult.html"},(0,a.kt)("inlineCode",{parentName:"a"},"InsertResult")),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"auto_increment")," defines whether the primary key has an auto-generated value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]\npub enum PrimaryKey {\n    #[sea_orm(column_name = "id")] // Override the default column name\n    Id,  // maps to "id" in SQL\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = i32;\n\n    fn auto_increment() -> bool {\n        true\n    }\n}\n')),(0,a.kt)("p",null,"Example composite key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum PrimaryKey {\n    CakeId,\n    FruitId,\n}\n\nimpl PrimaryKeyTrait for PrimaryKey {\n    type ValueType = (i32, i32);\n\n    fn auto_increment() -> bool {\n        false\n    }\n}\n")),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"The Rust struct for storing query results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel)]\npub struct Model {\n    pub id: i32,\n    pub name: String,\n}\n")),(0,a.kt)("h3",{id:"nullable-attribute"},"Nullable Attribute"),(0,a.kt)("p",null,"If the table column is nullable, wrap it with an ",(0,a.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{3}","{3}":!0},"pub struct Model {\n    pub id: i32,\n    pub name: Option<String>,\n}\n")),(0,a.kt)("h2",{id:"active-model"},"Active Model"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel")," has all the attributes of its corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," but all attributes are wrapped in an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/enum.ActiveValue.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ActiveValue")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug, PartialEq)]\npub struct ActiveModel {\n    pub id: ActiveValue<i32>,\n    pub name: ActiveValue<Option<String>>,\n}\n")),(0,a.kt)("h3",{id:"active-model-behavior"},"Active Model Behavior"),(0,a.kt)("p",null,"Handlers for different triggered actions on an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActiveModel"),". For example, you can perform custom validation logic, preventing a model from saving into database. You can abort an action even after it is done, if you are inside a transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'impl ActiveModelBehavior for ActiveModel {\n    /// Create a new ActiveModel with default values. Also used by `Default::default()`.\n    fn new() -> Self {\n        Self {\n            uuid: Set(Uuid::new_v4()),\n            ..ActiveModelTrait::default()\n        }\n    }\n\n    /// Will be triggered before insert / update\n    fn before_save(self, insert: bool) -> Result<Self, DbErr> {\n        if self.price.as_ref() <= &0.0 {\n            Err(DbErr::Custom(format!(\n                "[before_save] Invalid Price, insert: {}",\n                insert\n            )))\n        } else {\n            Ok(self)\n        }\n    }\n\n    /// Will be triggered after insert / update\n    fn after_save(model: Model, insert: bool) -> Result<Model, DbErr> {\n        Ok(model)\n    }\n\n    /// Will be triggered before delete\n    fn before_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n\n    /// Will be triggered after delete\n    fn after_delete(self) -> Result<Self, DbErr> {\n        Ok(self)\n    }\n}\n')),(0,a.kt)("p",null,"If no customization is needed, simply write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl ActiveModelBehavior for ActiveModel {}\n")),(0,a.kt)("h2",{id:"relation"},"Relation"),(0,a.kt)("p",null,"Specifying the relations with other entities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("p",null,"Defining trait bounds to help you query related entities together, especially helpful in many-to-many relations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n\nimpl Related<super::filling::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")))}d.isMDXComponent=!0}}]);