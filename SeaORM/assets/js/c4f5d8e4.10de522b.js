"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[64195],{26826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(67294),l=a(54774),r=a(39960),o=a(52263);const i="heroBanner_qdFl",s="buttons_AeoN",c="homepageBanner_mBTI",m="homepageLogo_ewR0";var d=a(87462),u=a(86010);const p="features_xdhU";var g=a(68307);const E=[{title:"Async",icon:n.createElement(g.V5G,{size:26}),description:n.createElement(n.Fragment,null,"Relying on SQLx, SeaORM is a new library with async support from day 1.")},{title:"Dynamic",icon:n.createElement(g.Ktg,{size:26}),description:n.createElement(n.Fragment,null,"Built upon SeaQuery, SeaORM allows you to build complex dynamic queries.")},{title:"Testable",icon:n.createElement(g.ZSR,{size:26}),description:n.createElement(n.Fragment,null,"Use mock connections and/or SQLite to write tests for your application logic.")},{title:"Service Oriented",icon:n.createElement(g.x_i,{size:26}),description:n.createElement(n.Fragment,null,"Quickly build services that join, filter, sort and paginate data in REST, GraphQL and gRPC APIs.")}];function f(e){let{icon:t,title:a,description:l}=e;return n.createElement("div",{className:(0,u.Z)("col col--6")},n.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px"}},n.createElement("div",{style:{display:"flex"}},n.createElement("div",{style:{paddingRight:"22px"}},t),n.createElement("h3",{style:{fontSize:"20px",color:"var(--ifm-color-primary)"}},a)),n.createElement("p",null,l)))}function h(){return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",p)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--11 col--offset-1"},n.createElement("div",{className:"row"},E.map(((e,t)=>n.createElement(f,(0,d.Z)({key:t},e)))))))))}var y=a(74866),v=a(85162);const w="features_SiWs",N="seaography_BVQZ";var b=a(23746),_=a(92949),S=a(87410);(void 0!==a.g?a.g:window).Prism=S.Z,a(70767);const k=[{title:"Entity",code:'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}'},{title:"Select",code:'// find all models\nlet cakes: Vec<cake::Model> = Cake::find().all(db).await?;\n\n// find and filter\nlet chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .all(db)\n    .await?;\n\n// find one model\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// find related models (lazy)\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n\n// find related models (eager)\nlet cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> =\n    Cake::find().find_with_related(Fruit).all(db).await?;'},{title:"Insert",code:'let apple = fruit::ActiveModel {\n    name: Set("Apple".to_owned()),\n    ..Default::default() // no need to set primary key\n};\n\nlet pear = fruit::ActiveModel {\n    name: Set("Pear".to_owned()),\n    ..Default::default()\n};\n\n// insert one\nlet pear = pear.insert(db).await?;\n\n// insert many\nFruit::insert_many([apple, pear]).exec(db).await?;'},{title:"Update",code:'use sea_orm::sea_query::{Expr, Value};\n\nlet pear: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\npear.name = Set("Sweet pear".to_owned());\n\n// update one\nlet pear: fruit::Model = pear.update(db).await?;\n\n// update many: UPDATE "fruit" SET "cake_id" = NULL WHERE "fruit"."name" LIKE \'%Apple%\'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(Value::Int(None)))\n    .filter(fruit::Column::Name.contains("Apple"))\n    .exec(db)\n    .await?;'},{title:"Save",code:'let banana = fruit::ActiveModel {\n    id: NotSet,\n    name: Set("Banana".to_owned()),\n    ..Default::default()\n};\n\n// create, because primary key `id` is `NotSet`\nlet mut banana = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// update, because primary key `id` is `Set`\nlet banana = banana.save(db).await?;'},{title:"Delete",code:'// delete one\nlet orange: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\nfruit::Entity::delete(orange.into_active_model())\n    .exec(db)\n    .await?;\n\n// or simply\nlet orange: Option<fruit::Model> = Fruit::find_by_id(1).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\norange.delete(db).await?;\n\n// delete many: DELETE FROM "fruit" WHERE "fruit"."name" LIKE \'Orange\'\nfruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains("Orange"))\n    .exec(db)\n    .await?;'}];function x(){const{siteConfig:{themeConfig:{prism:e={}}}}=(0,o.Z)(),[t,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{a(!0)}),[]);const{colorMode:l}=(0,_.I)(),r=e.theme,i=e.darkTheme||r,s="dark"===l?i:r;return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",w)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,u.Z)("col col--12")},n.createElement("div",{className:"padding-horiz--md"},n.createElement("h2",{className:"text--center"},"A quick taste of SeaORM"),n.createElement(y.Z,{className:(0,u.Z)("aa"),defaultValue:k[0].title,values:k.map((e=>{let{title:t,code:a}=e;return{label:t,value:t}}))},k.map(((e,a)=>{let{title:l,code:r}=e;return n.createElement(v.Z,{key:a,value:l},n.createElement(b.ZP,(0,d.Z)({},b.lG,{code:r,key:t,theme:s,language:"rust"}),(e=>{let{className:t,tokens:a,getLineProps:l,getTokenProps:r}=e;return n.createElement("pre",{className:`${t}`,style:{backgroundColor:"#292d3e"}},a.map(((e,t)=>n.createElement("div",l({line:e,key:t}),e.map(((e,t)=>n.createElement("span",r({token:e,key:t}))))))))})))}))))))))}function M(){return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",w)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,u.Z)("col col--12")},n.createElement("h2",{className:"text--center"},"SeaORM \u2795 GraphQL = \ud83e\udded Seaography"),n.createElement("p",{className:"text--center"},"With ",n.createElement(r.Z,{to:"/docs/seaography/seaography-intro/"},"Seaography"),", you can easily launch a GraphQL server from SeaORM entities!"),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("img",{className:N,src:"/SeaORM/img/Seaography Screenshot.png"}))))))}var R=a(46066);const C="features_Em2x",Z="anchorNormalText_Wz4Z",O=[{url:"https://caido.io/",logo:"img/other/caido-logo.png",desc:"A lightweight web security auditing toolkit",logoClassName:null},{url:"https://mydatamyconsent.com/",logo:"img/other/mydatamyconsent-logo.png",desc:"Online data sharing simplified",logoClassName:"mydatamyconsentLogo_dng9"},{url:"https://prefix.dev/",logo:"img/other/prefixdev-logo.png",desc:"Rethinking Package Management",logoClassName:"prefixdevLogo_ARcE"},{url:"https://www.spyglass.fyi/",logo:"img/other/spyglass-logo.svg",desc:"A personal search engine",logoClassName:"spyglassLogo_DddV"},{url:"https://www.svix.com/",logo:"img/other/svix-logo.svg",desc:"The enterprise ready webhooks service",logoClassName:"svixLogo_ZdR9"},{url:"https://upvpn.app/",logo:"img/other/upvpn-logo.png",desc:"Serverless Pay as you go VPN",logoClassName:"upvpnLogo_kFbJ"}];function T(e){let{url:t,logo:a,desc:l,logoClassName:r}=e;return n.createElement("div",{style:{height:"180px"}},n.createElement("a",{href:t,target:"_blank",className:(0,u.Z)(Z)},n.createElement("div",{style:{paddingBottom:"20px",paddingTop:"20px",height:"100%",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"flex-end"}},n.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.createElement("img",{src:`${a}?t=${Date.now()}`,className:(0,u.Z)(r),style:{width:"250px"}})),n.createElement("p",{style:{margin:"0px",marginTop:"20px"}},l))))}const F={dots:!1,infinite:!0,pauseOnHover:!0,swipeToSlide:!0,slidesToShow:4,slidesToScroll:1,initialSlide:Math.floor(Math.random()*O.length),rows:1,autoplay:!0,speed:500,autoplaySpeed:3e3,responsive:[{breakpoint:1680,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:650,settings:{slidesToShow:1,rows:2}}]};function L(){return n.createElement("section",{id:"our-users",className:(0,u.Z)("home-section",C)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("h2",{className:"text--center"},"Who's using SeaORM?"),n.createElement("br",null),n.createElement("p",{className:"text--center"},"The following startups are using SeaORM:"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement(R.Z,F,O.map(((e,t)=>n.createElement(T,(0,d.Z)({key:t},e))))))),n.createElement("br",null),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("p",{className:"text--center"},"For more projects, see ",n.createElement("a",{href:"https://github.com/SeaQL/sea-orm/blob/master/COMMUNITY.md#built-with-seaorm",target:"_blank"},"Built with SeaORM"),".")))))}const A="features_nemC",D="mascot_Rqr3";function P(){return n.createElement("section",{className:(0,u.Z)("home-section","home-section-alt",A)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,u.Z)("col col--12")},n.createElement("h2",{className:"text--center"},"Meet Terres, our official mascot"),n.createElement("p",{className:"text--center"},"A friend of ",n.createElement("a",{href:"https://www.rustacean.net/"},"Ferris"),", Terres the hermit crab is a member of the Rustacean family."),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("img",{className:D,src:"/SeaORM/img/Terres.png"}))))))}function V(){const{siteConfig:e}=(0,o.Z)();return n.createElement("header",{className:i},n.createElement("div",{className:"container"},n.createElement("img",{className:m,width:"90%",src:"/SeaORM/img/SeaORM logo.png"}),n.createElement("img",{className:c,width:"90%",src:"/SeaORM/img/SeaORM banner.png"}),n.createElement("h2",{className:"hero__subtitle"},e.tagline),n.createElement("br",null),n.createElement("div",{className:s},n.createElement(r.Z,{className:"button button--primary button--lg",to:"/docs/index"},"Getting Started"))))}function z(){const{siteConfig:e}=(0,o.Z)();return n.createElement(l.Z,{description:e.tagline},n.createElement(V,null),n.createElement("main",null,n.createElement(h,null),n.createElement(x,null),n.createElement(M,null),n.createElement(L,null),n.createElement(P,null)))}}}]);