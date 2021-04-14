import{r as e}from"./vendor.d3c319eb.js";import{L as t}from"./index.7af97f47.js";import{q as a,A as o,B as r,u as n,g as i,s as l}from"./use-get-photo.1a65b272.js";const d=a.div`
  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  & {
    font-size: 10px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(64, 169, 255, 0.5);
    border-right: 1.1em solid rgba(64, 169, 255, 0.5);
    border-bottom: 1.1em solid rgba(64, 169, 255, 0.5);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`,s=a.div`
  padding: 15px;
  border: 1px solid #888;
  display: inline-block;
  position: relative;
  min-width: 150px;
  min-height: 150px;

  img {
    max-width: 500px;
    vertical-align: middle;
    transition: 0.2s ease-in-out;

    ${e=>e.loading&&o`
        background: #888;
        opacity: 0.2;
      `};
  }
`,m=({url:t,alt:a,loading:o,onLoad:r})=>e.createElement(s,{loading:o},o&&e.createElement(d,null),e.createElement("img",{src:t,alt:a,onLoad:r})),f=a.div`
  text-align: center;
`,g=a.div`
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
`,c=({date:a,loading:o,onLoad:n,onNext:i,onSave:l,title:d,url:s,saveState:c})=>e.createElement(f,null,e.createElement("p",null,a),e.createElement("p",null,d),e.createElement(m,{alt:d,url:s,onLoad:n,loading:o}),e.createElement(g,null,e.createElement(r,{big:!0,primary:!0,onClick:i,disabled:o},"Next"),e.createElement(r,{big:!0,onClick:l,disabled:c},c?"Saved":"Save")),e.createElement("div",null,e.createElement(t,{to:"/fav"},e.createElement(r,null,"Saved photos"))));export default()=>{const{fetch:t,data:a}=n(),[o,r]=e.useState(!0),[d,s]=e.useState(!1);return e.useEffect((()=>{t({date:i()})}),[]),e.createElement("div",null,a&&e.createElement(c,{date:a.date,loading:o,onLoad:()=>{r(!1),s(!1)},onNext:()=>{r(!0),t({date:i()})},onSave:()=>{(null==a?void 0:a.date)&&l(a.date),s(!0)},title:a.title,url:a.url,saveState:d}))};
