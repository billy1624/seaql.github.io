"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),f=s(n),c=o,d=f["".concat(p,".").concat(c)]||f[c]||u[c]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={},r="One to Many",l={unversionedId:"relation/one-to-many",id:"relation/one-to-many",title:"One to Many",description:'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a Cake entity has at most one Fruit topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a Cake entity that might have many Fruit toppings.',source:"@site/docs/06-relation/02-one-to-many.md",sourceDirName:"06-relation",slug:"/relation/one-to-many",permalink:"/SeaORM/docs/next/relation/one-to-many",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-relation/02-one-to-many.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677053267,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"One to One",permalink:"/SeaORM/docs/next/relation/one-to-one"},next:{title:"Many to Many",permalink:"/SeaORM/docs/next/relation/many-to-many"}},p={},s=[{value:"Defining the Relation",id:"defining-the-relation",level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"one-to-many"},"One to Many"),(0,o.kt)("p",null,'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a ',(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit"),' topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a ',(0,o.kt)("inlineCode",{parentName:"p"},"Cake")," entity that might have many ",(0,o.kt)("inlineCode",{parentName:"p"},"Fruit")," toppings."),(0,o.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,o.kt)("p",null,"This is almost identical to defining a one-to-one relation; the only difference is that we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity::has_many()")," method here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,o.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\n// `Related` trait has to be implemented by hand\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n')),(0,o.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,o.kt)("p",null,"It is the same as defining the one-to-one inverse relation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,o.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following eliminates the need for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RelationTrait")," implementation above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n\n// `Related` trait has to be implemented by hand\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n')))}u.isMDXComponent=!0}}]);