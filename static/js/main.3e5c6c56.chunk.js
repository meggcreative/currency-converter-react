(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(9),n(2)),i=(n(10),n(0)),l=function(e){return Object(i.jsx)("header",{className:"header",children:e.title})},u=(n(12),function(e){return Object(i.jsx)("main",{className:"container",children:e.children})}),j=(n(13),function(e){var t=e.legendContent,n=e.fieldsetBody;return Object(i.jsxs)("fieldset",{className:"form__fieldset",children:[Object(i.jsx)("legend",{className:"form__legend",children:t}),Object(i.jsx)("p",{children:n})]})}),d=[{short:"EUR",label:"Euro",rate:4.5},{short:"USD",label:"Dolar Ameryka\u0144ski",rate:3.78},{short:"GBP",label:"Funt Brytyjski",rate:5.25}],b=function(e){var t=e.result;return Object(i.jsx)("p",{className:"form__converter",children:void 0!==t&&Object(i.jsxs)(i.Fragment,{children:[t.givenAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(i.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},f=function(e){var t=e.calculateResult,n=e.result,r=Object(c.useState)(),a=Object(o.a)(r,2),s=a[0],l=a[1],u=Object(c.useState)(d[0].short),f=Object(o.a)(u,2),m=f[0],h=f[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,m)},className:"form",children:[Object(i.jsx)(j,{legendContent:"Na jak\u0105 walut\u0119, kt\xf3r\u0105 chcesz zamieni\u0107 PLN?",fieldsetBody:Object(i.jsx)("label",{className:"form__label",children:Object(i.jsx)("select",{className:"form__amount",value:m,onChange:function(e){return h(e.target.value)},children:d.map((function(e){return Object(i.jsx)("option",{value:e.short,children:e.label},e.short)}))})})}),Object(i.jsx)(j,{legendContent:"Kwota kt\xf3r\u0105 chcesz przeliczy\u0107 ?",fieldsetBody:Object(i.jsxs)(i.Fragment,{children:["Podaj kwot\u0119 w PLN:",Object(i.jsx)("input",{value:s,onChange:function(e){var t=e.target;return l(t.value)},className:" form__amount",name:"amount",type:"number",step:"0.01",required:!0})]})}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{className:"form__button",children:"Przelicz"})}),Object(i.jsx)(b,{result:n})]})},m=(n(14),function(){var e=Object(c.useState)(new Date),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(i.jsxs)("div",{className:"clock",children:["Dzisiaj jest:"," ",n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})]})});var h=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{title:"KALKULATOR WALUT"}),Object(i.jsxs)(u,{children:[Object(i.jsx)(m,{}),Object(i.jsx)(f,{calculateResult:function(e,t){var n=d.find((function(e){return e.short===t})).rate;r({givenAmount:+e,targetAmount:e/n,currency:t})},result:n})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),O()}],[[15,1,2]]]);
//# sourceMappingURL=main.3e5c6c56.chunk.js.map