import{a as w,S}from"./axios-cc52fffe.js";import{H as x}from"./HorizontalItemList-c8622054.js";import{_ as p,f as s,c as l,p as k,j as q,g as v,d as I,r as _,w as D,o as B,a as i,h as N,u as C}from"./index-3dbc9039.js";const $={},f=t=>(k("data-v-4cec3a6e"),t=t(),q(),t),b={class:"no-data"},z=f(()=>v("span",{class:"bx bx-tv no-data__icon"},null,-1)),H=f(()=>v("span",{class:"no-data__text"},"No data found",-1)),R=[z,H];function j(t,n){return s(),l("div",b,R)}const E=p($,[["render",j],["__scopeId","data-v-4cec3a6e"]]),L={key:1,class:"list-container"},M=I({__name:"Search",setup(t){const n=N(),g=C(),c=_(),r=_(),d=_(!0),m=e=>e.map(a=>{var o,h;return{id:a.show.id,name:a.show.name??"-",genres:a.show.genres,rating:(o=a.show.rating)==null?void 0:o.average,image:((h=a.show.image)==null?void 0:h.original)??void 0,siteUrl:a.show.officialSite}}),u=async()=>{try{const{data:e}=await w.get(`https://api.tvmaze.com/search/shows?q=${c.value}`);e&&(r.value=m(e))}catch(e){console.log(e)}finally{d.value=!1}},y=e=>{g.push({name:"detail",params:{id:e}})};return D(()=>n.query.q,()=>{var e;c.value=(e=n.query.q)==null?void 0:e.toString(),u()}),B(()=>{var e;c.value=(e=n.query.q)==null?void 0:e.toString(),u()}),(e,a)=>{var o;return s(),l("div",null,[d.value?(s(),i(S,{key:0})):(s(),l("div",L,[((o=r.value)==null?void 0:o.length)!==0?(s(),i(x,{key:0,items:r.value,onClick:y,"is-search-page":!0},null,8,["items"])):(s(),i(E,{key:1}))]))])}}});const A=p(M,[["__scopeId","data-v-a5e01296"]]);export{A as default};
