import{r as e}from"./vendor.d3c319eb.js";import{q as t,u as a,B as l,a as r}from"./use-get-photo.b8016a4e.js";import{L as n}from"./index.def145fa.js";const d=t.div`
  width: 200px;
  height: 200px;
  border: 1px solid #e5e5e5;
  padding: 10px;
  background-image: url("${e=>e.url}");
  background-size: cover;
  display: inline-block;
`,i=({url:t})=>e.createElement(d,{url:t}),o=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`,m=t.div`
  display: inline-block;
  margin-bottom: 25px;
  text-align: center;
`,c=t.div`
  font-size: 12px;
`,u=({date:t})=>{const{fetch:l,data:r}=a();return e.useEffect((()=>{l({date:t})}),[]),r?e.createElement(m,null,e.createElement(i,{url:r.url}),e.createElement(c,null,r.date),e.createElement(c,null,r.title)):null},p=({dates:t})=>e.createElement(e.Fragment,null,e.createElement(o,null,t.map((t=>e.createElement(u,{date:t,key:t})))),e.createElement("footer",null,e.createElement(n,{to:"/"},e.createElement(l,null,"Back"))));export default()=>{const t=r();return e.createElement(p,{dates:t})};