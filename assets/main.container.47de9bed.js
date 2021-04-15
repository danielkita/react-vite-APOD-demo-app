import{r as e}from"./vendor.d3c319eb.js";import{L as t}from"./index.0b7dff2d.js";import{q as a,A as r,B as o,u as n,g as d,s as i}from"./use-get-photo.1d4dca3d.js";const l=a.div`
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
`,m=a.div`
  padding: 15px;
  border: 1px solid #888;
  display: inline-block;
  position: relative;
  min-width: 150px;
  min-height: 150px;

  img {
    vertical-align: middle;
    transition: 0.2s ease-in-out;
    max-width: 100%;

    @media screen and (min-width: 600px) {
      max-width: 500px;
    }

    ${e=>e.loading&&r`
        background: #888;
        opacity: 0.2;
      `};
  }
`,s=({url:t,alt:a,loading:r,onLoad:o})=>e.createElement(m,{loading:r},r&&e.createElement(l,null),e.createElement("img",{src:t,alt:a,onLoad:o})),g=a.div`
  text-align: center;
  padding: 0 10px;
`,f=a.div`
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
`,c=({date:a,loading:r,onLoad:n,onNext:d,onSave:i,title:l,url:m,saveState:c})=>e.createElement(g,null,e.createElement("p",null,a),e.createElement("p",null,l),e.createElement(s,{alt:l,url:m,onLoad:n,loading:r}),e.createElement(f,null,e.createElement(o,{big:!0,primary:!0,onClick:d,disabled:r},"Next"),e.createElement(o,{big:!0,onClick:i,disabled:c},c?"Saved":"Save")),e.createElement("div",null,e.createElement(t,{to:"/fav"},e.createElement(o,null,"Saved photos"))));export default()=>{const{fetch:t,data:a}=n(),[r,o]=e.useState(!0),[l,m]=e.useState(!1);return e.useEffect((()=>{t({date:d()})}),[]),e.createElement("div",null,a&&e.createElement(c,{date:a.date,loading:r,onLoad:()=>{o(!1),m(!1)},onNext:()=>{o(!0),t({date:d()})},onSave:()=>{(null==a?void 0:a.date)&&i(a.date),m(!0)},title:a.title,url:a.url,saveState:l}))};
