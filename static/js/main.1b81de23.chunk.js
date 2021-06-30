(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,c,o,a,i,d,s,l=t(1),u=t.n(l),b=t(9),j=t.n(b),x=(t(17),t(4)),g=t(2),p=t(3),h=p.a.header(r||(r=Object(g.a)(["\n    padding: 20px;\n    margin: 0 auto;\n    max-width: 600px;\n    text-align: center;\n    font-size: 40px;\n    color: rgb(94, 77, 77);\n    font-weight: bold;\n"]))),O=t(0),f=function(n){return Object(O.jsx)(h,{children:n.title})},m=function(n){return Object(O.jsx)("main",{children:n.children})},v=p.a.fieldset(c||(c=Object(g.a)(["\n    padding: 20px;\n    margin: 20px auto;\n    border: 5px solid rgb(116, 177, 134);\n    border-radius: 10%;\n    background-color: #20445B;\n    position: relative;\n    box-shadow: 5px -15px 70px 42px #65858E;\n    color: rgb(188, 209, 212);\n    font-size: 20px;\n    max-width: 500px;\n"]))),w=p.a.select(o||(o=Object(g.a)(["\n    border: 1px solid #ccc;\n    padding: 5px;\n    max-width: 250px;\n    width: 100%;\n    border-radius: 3%;\n    font-size: 20px;\n    background-color: rgb(221, 240, 236);\n"]))),k=p.a.button(a||(a=Object(g.a)(["\n    margin: 15px auto;\n    padding: 10px;\n    background-color: rgb(116, 177, 134);\n    width: 100%;\n    border: 6px solid #20445B;\n    border-radius: 5%;\n    font-size: 20px;\n    color: rgb(48, 46, 46);\n    font-weight: bold;\n\n    &:active {\n        background-color: rgb(63, 129, 82);\n    }\n"]))),y=p.a.legend(i||(i=Object(g.a)(["\n    border: 3px solid rgb(116, 177, 134);\n    padding: 10px;\n    font-size: 15px;\n    background-color: rgb(196, 203, 207);\n    color: rgb(44, 43, 43);\n    font-weight: bold;\n"]))),z=p.a.p(d||(d=Object(g.a)(["\n    padding: 10px;\n    margin: 10px auto;\n    border: 5px solid rgb(116, 177, 134);\n    border-radius: 10%;\n    background-color: #20445B;\n    position: relative;\n    color: rgb(188, 209, 212);\n    font-size: 25px;\n    max-width: 400px;\n"]))),B=function(n){var e=n.legendContent,t=n.fieldsetBody;return Object(O.jsxs)(v,{children:[Object(O.jsx)(y,{children:e}),Object(O.jsx)("p",{children:t})]})},F=[{short:"EUR",label:"Euro",rate:4.5},{short:"USD",label:"Dolar Ameryka\u0144ski",rate:3.78},{short:"GBP",label:"Funt Brytyjski",rate:5.25}],L=function(n){var e=n.result;return Object(O.jsx)(z,{children:void 0!==e&&Object(O.jsxs)(O.Fragment,{children:[e.givenAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(O.jsxs)("strong",{children:[e.targetAmount.toFixed(2),"\xa0",e.currency]})]})})},S=function(n){var e=n.calculateResult,t=n.result,r=Object(l.useState)(),c=Object(x.a)(r,2),o=c[0],a=c[1],i=Object(l.useState)(F[0].short),d=Object(x.a)(i,2),s=d[0],u=d[1];return Object(O.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(o,s)},children:[Object(O.jsx)(B,{legendContent:"Na jak\u0105 walut\u0119, kt\xf3r\u0105 chcesz zamieni\u0107 PLN?",fieldsetBody:Object(O.jsx)("label",{children:Object(O.jsx)(w,{value:s,onChange:function(n){return u(n.target.value)},children:F.map((function(n){return Object(O.jsx)("option",{value:n.short,children:n.label},n.short)}))})})}),Object(O.jsx)(B,{legendContent:"Kwota kt\xf3r\u0105 chcesz przeliczy\u0107 ?",fieldsetBody:Object(O.jsxs)(O.Fragment,{children:["Podaj kwot\u0119 w PLN:",Object(O.jsx)(w,{as:"input",value:o,onChange:function(n){var e=n.target;return a(e.value)},name:"amount",type:"number",step:"0.01",required:!0})]})}),Object(O.jsx)("p",{children:Object(O.jsx)(k,{children:"Przelicz"})}),Object(O.jsx)(L,{result:t})]})},A=p.a.div(s||(s=Object(g.a)(["\n    text-align: center;\n    font-family: monospace;\n    color: rgb(37, 36, 36);\n    padding: 20px;\n"]))),C=function(){var n=Object(l.useState)(new Date),e=Object(x.a)(n,2),t=e[0],r=e[1];return Object(l.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),Object(O.jsxs)(A,{children:["Dzisiaj jest:"," ",t.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})]})};var P=function(){var n=Object(l.useState)(),e=Object(x.a)(n,2),t=e[0],r=e[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{title:"KALKULATOR WALUT"}),Object(O.jsxs)(m,{children:[Object(O.jsx)(C,{}),Object(O.jsx)(S,{calculateResult:function(n,e){var t=F.find((function(n){return n.short===e})).rate;r({givenAmount:+n,targetAmount:n/t,currency:e})},result:t})]})]})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};j.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),D()}},[[21,1,2]]]);
//# sourceMappingURL=main.1b81de23.chunk.js.map