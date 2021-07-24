(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{23:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,s,u,d,l,b,j,x=t(1),g=t.n(x),p=t(10),f=t.n(p),h=t(3),m=t(2),O=t.p+"static/media/backgroundImage.f47a5167.png",v=Object(m.b)(r||(r=Object(h.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        background-color: rgb(221, 240, 240);\n        padding: 20px;\n        margin: 0 auto;\n        font-family: 'Open Sans', sans-serif;\n        background-size: cover;\n        background-image: url(\"",'");\n    }\n\n'])),O),w=m.c.header(c||(c=Object(h.a)(["\n    padding: 20px;\n    margin: 0 auto;\n    max-width: 600px;\n    text-align: center;\n    font-size: 40px;\n    color: ",";\n    font-weight: bold;\n"])),(function(e){return e.theme.color.donJuan})),y=t(0),k=function(e){return Object(y.jsx)(w,{children:e.title})},z=function(e){return Object(y.jsx)("main",{children:e.children})},L=t(4),C=t.p+"static/media/loading.bf4b180f.gif",F=m.c.fieldset(o||(o=Object(h.a)(["\n    padding: 20px;\n    margin: 20px auto;\n    border: 5px solid ",";\n    border-radius: 10%;\n    background-color:"," ;\n    position: relative;\n    box-shadow: 5px -15px 70px 42px #65858E;\n    color: rgb(188, 209, 212);\n    font-size: 20px;\n    max-width: 500px;\n"])),(function(e){return e.theme.color.bayLeaf}),(function(e){return e.theme.color.cello})),S=m.c.select(a||(a=Object(h.a)(["\n    border: 1px solid ",";\n    padding: 5px;\n    max-width: 250px;\n    width: 100%;\n    border-radius: 3%;\n    font-size: 20px;\n    background-color: rgb(221, 240, 236);\n"])),(function(e){return e.theme.color.silver})),B=m.c.button(i||(i=Object(h.a)(["\n    margin: 15px auto;\n    padding: 10px;\n    background-color: ",";\n    width: 100%;\n    border: 6px solid ",";\n    border-radius: 5%;\n    font-size: 20px;\n    color: rgb(48, 46, 46);\n    font-weight: bold;\n\n    &:active {\n        background-color: rgb(63, 129, 82);\n    }\n"])),(function(e){return e.theme.color.bayLeaf}),(function(e){return e.theme.color.cello})),A=m.c.legend(s||(s=Object(h.a)(["\n    border: 3px solid ",";\n    padding: 10px;\n    font-size: 15px;\n    background-color: rgb(196, 203, 207);\n    color: rgb(44, 43, 43);\n    font-weight: bold;\n"])),(function(e){return e.theme.color.bayLeaf})),D=m.c.p(u||(u=Object(h.a)(["\n    padding: 10px;\n    margin: 10px auto;\n    border: 5px solid ",";\n    border-radius: 10%;\n    background-color: ",";\n    position: relative;\n    color: rgb(188, 209, 212);\n    font-size: 25px;\n    max-width: auto;\n"])),(function(e){return e.theme.color.bayLeaf}),(function(e){return e.theme.color.cello})),E=m.c.p(d||(d=Object(h.a)(["\n    color: ",";\n"])),(function(e){return e.theme.color.parisWhite})),P=m.c.p(l||(l=Object(h.a)(["\n    color: ",";\n"])),(function(e){return e.theme.color.crimson})),T=m.c.img.attrs({src:C})(b||(b=Object(h.a)(["\n        width: 200px;\n        margin-left: 100px;\n        ;\n"]))),I=function(e){var n=e.legendContent,t=e.fieldsetBody;return Object(y.jsxs)(F,{children:[Object(y.jsx)(A,{children:n}),Object(y.jsx)("p",{children:t})]})},N=function(e){var n=e.result;return Object(y.jsx)(D,{children:void 0!==n&&Object(y.jsxs)(y.Fragment,{children:[n.givenAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(y.jsxs)("strong",{children:[n.targetAmount.toFixed(2),"\xa0",n.currency]})]})})},J=t(8),U=t.n(J),W=t(14),K=function(){var e=Object(x.useState)(),n=Object(L.a)(e,2),t=n[0],r=n[1],c=function(){var e=Object(x.useState)({state:"loading",date:null,rates:null}),n=Object(L.a)(e,2),t=n[0],r=n[1];return Object(x.useEffect)((function(){setTimeout(function(){var e=Object(W.a)(U.a.mark((function e(){var n,t,c,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangerate.host/latest?base=PLN");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:t=e.sent,c=t.rates,o=t.date,r({state:"success",rates:c,date:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r({state:"error"});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),1e3)}),[]),t}(),o=Object(x.useState)(),a=Object(L.a)(o,2),i=a[0],s=a[1],u=Object(x.useState)("EUR"),d=Object(L.a)(u,2),l=d[0],b=d[1];return Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,n){var t=c.rates[n];r({givenAmount:+e,targetAmount:e*t,currency:n})}(i,l)},children:"loading"===c.state?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(I,{legendContent:"Upsss...",fieldsetBody:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(E,{children:["Chwila moment... ",Object(y.jsx)("br",{})," \u0141adowanie kurs\xf3w walut z Europejskiego Banku Centralnego."]}),Object(y.jsx)(T,{})]})})}):"error"===c.state?Object(y.jsxs)(P,{children:["Wyst\u0105pi\u0142 b\u0142\u0105d! ",Object(y.jsx)("br",{})," Sprawd\u017a po\u0142\u0105czenie z internetem, je\u017celi masz, b\u0142\u0105d mo\u017ce by\u0107 po naszej stronie. Spr\xf3buj ponownie za jaki\u015b czas."]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(I,{legendContent:"Na jak\u0105 walut\u0119, kt\xf3r\u0105 chcesz zamieni\u0107 PLN?",fieldsetBody:Object(y.jsx)("label",{children:Object(y.jsx)(S,{value:l,onChange:function(e){return b(e.target.value)},children:!!c.rates&&Object.keys(c.rates).map((function(e){return Object(y.jsx)("option",{value:e,children:e},e)}))})})}),Object(y.jsx)(I,{legendContent:"Kwota kt\xf3r\u0105 chcesz przeliczy\u0107 ?",fieldsetBody:Object(y.jsxs)(y.Fragment,{children:["Podaj kwot\u0119 w PLN:",Object(y.jsx)(S,{as:"input",value:i,onChange:function(e){var n=e.target;return s(n.value)},name:"amount",type:"number",min:"0",step:"0.01",required:!0})]})}),Object(y.jsx)("p",{children:Object(y.jsx)(B,{children:"Przelicz"})}),Object(y.jsx)(N,{result:t})]})})},R=m.c.div(j||(j=Object(h.a)(["\n    text-align: center;\n    font-family: monospace;\n    color: rgb(37, 36, 36);\n    padding: 20px;\n"]))),q=function(){var e=function(){var e=Object(x.useState)(new Date),n=Object(L.a)(e,2),t=n[0],r=n[1];return Object(x.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return Object(y.jsxs)(R,{children:["Dzisiaj jest:"," ",e.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})]})};var M=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,{title:"KALKULATOR WALUT"}),Object(y.jsxs)(z,{children:[Object(y.jsx)(q,{}),Object(y.jsx)(K,{})]})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};f.a.render(Object(y.jsx)(g.a.StrictMode,{children:Object(y.jsxs)(m.a,{theme:{color:{silver:"#ccc",bayLeaf:"#74B186",cello:"#20445B",donJuan:"#5e4d4d",parisWhite:"#CADED7",crimson:"#DC143C"}},children:[Object(y.jsx)(v,{}),Object(y.jsx)(M,{})]})}),document.getElementById("root")),G()}},[[23,1,2]]]);
//# sourceMappingURL=main.80d99c08.chunk.js.map