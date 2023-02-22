"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5356],{85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(87462),a=r(67294),o=r(86010),l=r(76775),s=r(91980),i=r(67392),u=r(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:r,groupId:n}),[h,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=i??h;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var y=r(12466),v=r(72389);const m="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,y.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},23746:(e,t,r)=>{r.d(t,{ZP:()=>h,lG:()=>l});var n=r(87410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=r(67294),l={Prism:n.Z,theme:a};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},d=function(e,t){var r=e.plain,n=Object.create(null),a=e.styles.reduce((function(e,r){var n=r.languages,a=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=i({},e[t],a);e[t]=r})),e}),n);return a.root=r,a.plain=i({},r,{backgroundColor:null}),a};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}const h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?d(e.theme,e.language):void 0;return t.themeDict=r})),s(this,"getLineProps",(function(e){var r=e.key,n=e.className,a=e.style,o=i({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==r&&(o.key=r),n&&(o.className+=" "+n),o})),s(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,a=r.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===a&&!n)return o[r[0]];var l=n?{display:"inline-block"}:{},s=r.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var r=e.key,n=e.className,a=e.style,o=e.token,l=i({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?i({},l.style,a):a),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),s(this,"tokenize",(function(e,t,r,n){var a={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[r];return a({tokens:function(e){for(var t=[[]],r=[e],n=[0],a=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=n[l]++)<a[l];){var d=void 0,f=t[l],h=r[l][o];if("string"==typeof h?(f=l>0?f:["plain"],d=h):(f=p(f,h.type),h.alias&&(f=p(f,h.alias)),d=h.content),"string"==typeof d){var y=d.split(u),v=y.length;s.push({types:f,content:y[0]});for(var m=1;m<v;m++)c(s),i.push(s=[]),s.push({types:f,content:y[m]})}else l++,t.push(f),r.push(d),n.push(0),a.push(d.length)}l--,t.pop(),r.pop(),n.pop(),a.pop()}return c(s),i}(void 0!==l?this.tokenize(t,n,l,r):[n]),className:"prism-code language-"+r,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},68307:(e,t,r)=>{r.d(t,{ZSR:()=>p,x_i:()=>d,V5G:()=>f,Ktg:()=>h});var n=r(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),i(e.child))}}function c(e){var t=function(t){var r,a=e.attr,o=e.size,i=e.title,u=s(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}}]})(e)}function d(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"}}]})(e)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 2v11h3v9l7-12h-4l4-8z"}}]})(e)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.18 9"}},{tag:"path",attr:{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}}]})(e)}}}]);