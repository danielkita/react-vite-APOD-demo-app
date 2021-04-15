import{r as e}from"./vendor.d3c319eb.js";import{q as t,u as a,B as r,a as n}from"./use-get-photo.1d4dca3d.js";import{L as l}from"./index.0b7dff2d.js";const d=t.div`
  width: 200px;
  height: 200px;
  border: 1px solid #e5e5e5;
  padding: 10px;
  background-image: url("${e=>e.url}");
  background-size: cover;
  display: inline-block;
`,i=({url:t})=>e.createElement(d,{url:t}),m=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: grid;
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,o=t.div`
  display: inline-block;
  margin-bottom: 25px;
  text-align: center;
`,c=t.div`
  font-size: 12px;
`,p=({date:t})=>{const{fetch:r,data:n}=a();return e.useEffect((()=>{r({date:t})}),[]),n?e.createElement(o,null,e.createElement(i,{url:n.url}),e.createElement(c,null,n.date),e.createElement(c,null,n.title)):null},s=({dates:t})=>e.createElement(e.Fragment,null,e.createElement(m,null,t.filter(Boolean).map((t=>e.createElement(p,{date:t,key:t})))),e.createElement("footer",null,e.createElement(l,{to:"/"},e.createElement(r,null,"Back"))));export default()=>{const t=n();return e.createElement(s,{dates:t})};
