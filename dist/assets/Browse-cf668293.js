import{a as w,S as y}from"./axios-269a2690.js";import{H as v}from"./HorizontalItemList-ecc8e8cf.js";import{d as k,r as u,o as B,c as d,a as S,b as f,F as x,e as C,f as r,g as D,u as F,h as H,_ as L}from"./index-f38adb51.js";const M={key:1,class:"list-container"},R={class:"showList"},V=k({__name:"Browse",setup(b){const _=["Drama","Science-Fiction","Action","Horror","Romance","Mystery","Fantasy","Anime","Comedy","Sports"],i=u(),n=u(new Map),l=u(!1);H();const p=F(),g=t=>t.map(e=>{var a,s;return{id:e.id,name:e.name,genres:e.genres,rating:(a=e.rating)==null?void 0:a.average,image:((s=e.image)==null?void 0:s.original)??void 0,siteUrl:e.officialSite}}).filter(e=>e.rating).sort((e,a)=>a.rating-e.rating),h=async()=>{l.value=!0;var t=[];try{for(var e=0;e<=10;){const{data:o}=await w.get(`https://api.tvmaze.com/shows?page=${e}`);t=t.concat(o),e++}if(t){i.value=g(t),n.value.set("general",i.value.slice(0,10));for(var a of _){var s=[];for(var c of i.value)if(c.genres.includes(a)&&s.push(c),s.length===10)break;n.value.set(a,s)}}}catch(o){console.log(o)}finally{l.value=!1}},m=t=>{p.push({name:"detail",params:{id:t}})};return B(()=>{h()}),(t,e)=>{var a;return r(),d("div",null,[l.value?(r(),S(y,{key:0})):(r(),d("div",M,[f(v,{title:"Top rated TV shows",items:(a=n.value)==null?void 0:a.get("general"),onClick:m},null,8,["items"]),(r(),d(x,null,C(_,(s,c)=>{var o;return D("div",R,[f(v,{title:s,items:(o=n.value)==null?void 0:o.get(s),onClick:m},null,8,["title","items"])])}),64))]))])}}});const N=L(V,[["__scopeId","data-v-783ae254"]]);export{N as default};