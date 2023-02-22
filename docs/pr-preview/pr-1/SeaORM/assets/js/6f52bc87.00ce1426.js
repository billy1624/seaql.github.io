"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=d(t),m=a,u=f["".concat(s,".").concat(m)]||f[m]||p[m]||l;return t?i.createElement(u,r(r({ref:n},c),{},{components:t})):i.createElement(u,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const l={},r="Chained Relations",o={unversionedId:"relation/chained-relations",id:"version-0.8.x/relation/chained-relations",title:"Chained Relations",description:"The Related trait is a representation of the arrows (1-1, 1-N, M-N) we draw on Entity Relationship Diagrams. A Linked is composed of a chain of relations, and is useful when:",source:"@site/versioned_docs/version-0.8.x/07-relation/04-chained-relations.md",sourceDirName:"07-relation",slug:"/relation/chained-relations",permalink:"/SeaORM/docs/0.8.x/relation/chained-relations",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.8.x/07-relation/04-chained-relations.md",tags:[],version:"0.8.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1677053267,formattedLastUpdatedAt:"Feb 22, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Many to Many",permalink:"/SeaORM/docs/0.8.x/relation/many-to-many"},next:{title:"Self Referencing",permalink:"/SeaORM/docs/0.8.x/relation/self-referencing"}},s={},d=[{value:"Lazy Loading",id:"lazy-loading",level:3},{value:"Eager Loading",id:"eager-loading",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chained-relations"},"Chained Relations"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Related")," trait is a representation of the arrows (1-1, 1-N, M-N) we draw on Entity Relationship Diagrams. A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/entity/trait.Linked.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Linked"))," is composed of a chain of relations, and is useful when:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"there exist multiple join paths between a pair of entities"),(0,a.kt)("li",{parentName:"ol"},"joining across multiple entities in a relational query")),(0,a.kt)("p",null,"Take ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"this")," as a simple example, where we join cake and filling via an intermediate ",(0,a.kt)("inlineCode",{parentName:"p"},"cake_filling")," table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Relation::Filling.def(),\n        ]\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RelationDef")," can be defined on the fly, where the following is equivalent to the above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Entity::belongs_to(filling::Entity)\n                .from(cake_filling::Column::FillingId)\n                .to(filling::Column::Id)\n                .into(),\n        ]\n    }\n}\n")),(0,a.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,a.kt)("p",null,"Find fillings that can be filled into a cake with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked"},(0,a.kt)("inlineCode",{parentName:"a"},"find_linked"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let cake_model = cake::Model {\n    id: 12,\n    name: "".to_owned(),\n};\n\nassert_eq!(\n    cake_model\n        .find_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        r#"SELECT `filling`.`id`, `filling`.`name`"#,\n        r#"FROM `filling`"#,\n        r#"INNER JOIN `cake_filling` ON `cake_filling`.`filling_id` = `filling`.`id`"#,\n        r#"INNER JOIN `cake` ON `cake`.`id` = `cake_filling`.`cake_id`"#,\n        r#"WHERE `cake`.`id` = 12"#,\n    ]\n    .join(" ")\n);\n')),(0,a.kt)("h3",{id:"eager-loading"},"Eager Loading"),(0,a.kt)("p",null,"Find all pairs of cake and filling together in a single select with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.8/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked"},(0,a.kt)("inlineCode",{parentName:"a"},"find_also_linked"))," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",\n        "`filling`.`id` AS `B_id`, `filling`.`name` AS `B_name`",\n        "FROM `cake`",\n        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id`",\n        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n    ]\n    .join(" ")\n);\n')))}p.isMDXComponent=!0}}]);