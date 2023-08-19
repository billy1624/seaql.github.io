"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[57860],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return t?i.createElement(c,r(r({ref:n},m),{},{components:t})):i.createElement(c,r({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={},r="Many to Many",o={unversionedId:"relation/many-to-many",id:"version-0.12.x/relation/many-to-many",title:"Many to Many",description:"A many-to-many relation is formed by three tables, where two tables are related via a junction table. As an example, a Cake has many Filling and Filling are shared by many Cake via an intermediate entity CakeFilling.",source:"@site/versioned_docs/version-0.12.x/06-relation/03-many-to-many.md",sourceDirName:"06-relation",slug:"/relation/many-to-many",permalink:"/SeaORM/docs/relation/many-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/06-relation/03-many-to-many.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1692424838,formattedLastUpdatedAt:"Aug 19, 2023",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"One to Many",permalink:"/SeaORM/docs/relation/one-to-many"},next:{title:"Chained Relations",permalink:"/SeaORM/docs/relation/chained-relations"}},s={},p=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"many-to-many"},"Many to Many"),(0,a.kt)("p",null,"A many-to-many relation is formed by three tables, where two tables are related via a junction table. As an example, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," has many ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," are shared by many ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," via an intermediate entity ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling"),"."),(0,a.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Related<filling::Entity>")," trait."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Relation")," in SeaORM is an arrow: it has ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," defines ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling -> Cake"),". Calling ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.RelationDef.html#method.rev"},(0,a.kt)("inlineCode",{parentName:"a"},"rev"))," reverses it into ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake -> CakeFilling"),"."),(0,a.kt)("p",null,"Chaining this with ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," which defines ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling -> Filling")," resulting in ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake -> CakeFilling -> Filling"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{4,10} title="entity/cake.rs"',"{4,10}":!0,title:'"entity/cake.rs"'},"impl Related<super::filling::Entity> for Entity {\n    // The final relation is Cake -> CakeFilling -> Filling\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Filling.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        // The original relation is CakeFilling -> Cake,\n        // after `rev` it becomes Cake -> CakeFilling\n        Some(super::cake_filling::Relation::Cake.def().rev())\n    }\n}\n")),(0,a.kt)("p",null,"Similarly, on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," entity, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Related<cake::Entity>")," trait. First, join with intermediate table ",(0,a.kt)("inlineCode",{parentName:"p"},"via")," the inverse of ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Filling")," relation, then join ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity  with ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling::Relation::Cake")," relation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,7} title="entity/filling.rs"',"{3,7}":!0,title:'"entity/filling.rs"'},"impl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        super::cake_filling::Relation::Cake.def()\n    }\n\n    fn via() -> Option<RelationDef> {\n        Some(super::cake_filling::Relation::Filling.def().rev())\n    }\n}\n")),(0,a.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"CakeFilling")," entity, its ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_id")," attribute is referencing the primary key of ",(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity, and its ",(0,a.kt)("inlineCode",{parentName:"p"},"filling_id")," attribute is referencing the primary key of ",(0,a.kt)("inlineCode",{parentName:"p"},"Filling")," entity."),(0,a.kt)("p",null,"To define the inverse relation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add two new variants ",(0,a.kt)("inlineCode",{parentName:"li"},"Cake")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Filling")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Relation")," enum."),(0,a.kt)("li",{parentName:"ol"},"Define both relations with ",(0,a.kt)("inlineCode",{parentName:"li"},"Entity::belongs_to()"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/cake_filling.rs"',title:'"entity/cake_filling.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n    Filling,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n            Self::Filling => Entity::belongs_to(super::filling::Entity)\n                .from(Column::FillingId)\n                .to(super::filling::Column::Id)\n                .into(),\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro, where the following eliminates the need for the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n    #[sea_orm(\n        belongs_to = "super::filling::Entity",\n        from = "Column::FillingId",\n        to = "super::filling::Column::Id"\n    )]\n    Filling,\n}\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Note that the implementation of `Related` with `via` and `to` methods will not be generated if there exists multiple paths via an intermediate table."),(0,a.kt)("p",null,"For example, in the schema defined below, there are two paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Path 1. ",(0,a.kt)("inlineCode",{parentName:"li"},"users <-> users_votes <-> bills")),(0,a.kt)("li",{parentName:"ul"},"Path 2. ",(0,a.kt)("inlineCode",{parentName:"li"},"users <-> users_saved_bills <-> bills"))),(0,a.kt)("p",null,"Therefore, the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Related<R>")," will not be generated"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users\n(\n  id uuid  PRIMARY KEY  DEFAULT uuid_generate_v1mc(),\n  email TEXT UNIQUE NOT NULL,\n  ...\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bills\n(\n  id uuid  PRIMARY KEY  DEFAULT uuid_generate_v1mc(),\n  ...\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users_votes\n(\n  user_id uuid REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  bill_id uuid REFERENCES bills (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  vote boolean NOT NULL,\n  CONSTRAINT users_bills_pkey PRIMARY KEY (user_id, bill_id)\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE users_saved_bills\n(\n  user_id uuid REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  bill_id uuid REFERENCES bills (id) ON UPDATE CASCADE ON DELETE CASCADE,\n  CONSTRAINT users_saved_bills_pkey PRIMARY KEY (user_id, bill_id)\n);\n"))))}d.isMDXComponent=!0}}]);