(this["webpackJsonpuseful-tools"]=this["webpackJsonpuseful-tools"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(5),s=a.n(n),o=(a(10),a(11),a(12),a(2)),i=a(0);function l(){return Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"pt-3",children:Object(i.jsxs)("strong",{children:["Love this tool ? ",Object(i.jsx)("a",{href:"https://www.buymeacoffee.com/vanpariyar",children:"Support"})]})})})}function j(){var e=Object(c.useState)(Date.now()),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(Date.now()),s=Object(o.a)(n,2),j=s[0],d=s[1],b=Object(c.useState)(0),u=Object(o.a)(b,2),m=u[0],h=u[1],x=864e5,O=10368e5;return Object(c.useEffect)((function(){h((function(){var e=new Date(a)-new Date(j).getTime(),t=Math.floor(e/315576e5);return{year:t,month:Math.floor(e/O),days:Math.floor(e/x),total:"".concat(t," years")}}))}),[j,a,O,x]),Object(i.jsxs)("div",{className:"card mb-5",children:[Object(i.jsx)("h5",{className:"card-header bg-primary text-white",children:"Age Diffrece Calculator"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"titleBox1",children:"Current Date"}),Object(i.jsx)("input",{type:"date",className:"form-control",id:"titleBox1",placeholder:"Enter Text / string to sanitize",defaultValue:a,onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"titleBox",children:"Birth Date"}),Object(i.jsx)("input",{type:"date",className:"form-control",id:"titleBox",placeholder:"Enter Text / string to sanitize",defaultValue:j,onChange:function(e){return d(e.target.value)}})]}),Object(i.jsxs)("p",{children:["Diffrence Total ",m.total," "]}),Object(i.jsxs)("p",{children:["Diffrence in Year ",m.year," "]}),Object(i.jsxs)("p",{children:["Diffrence in months ",m.month," "]}),Object(i.jsxs)("p",{children:["Diffrence in Days ",m.days," "]}),Object(i.jsx)(l,{})]})]})}function d(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(i.jsx)("a",{href:"./",className:"navbar-brand",children:"Useful Tools"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){return r(!a)},children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:a?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)("a",{href:"#home",className:"nav-link",children:["Home ",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"https://github.com/vanpariyar/useful-tools/",className:"nav-link",children:"Features"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"https://vanpariyar.github.io/about/",target:"_blank",rel:"noopener noreferrer",className:"nav-link",children:"Contact"})})]})})]})}var b,u,m=a(3);function h(){var e,t=Object(c.useState)(""),a=Object(o.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)("sanitize"),j=Object(o.a)(s,2),d=j[0],h=j[1];return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h5",{className:"card-header bg-primary text-white",children:"Santize Title"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"titleBox",children:"Add String / Text to sanitize"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"titleBox",placeholder:"Enter Text / string to sanitize",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"sanitize-mode-select",children:"Select Tool:"}),Object(i.jsxs)("select",{className:"form-control",id:"sanitize-mode-select",value:d,onChange:function(e){return h(e.target.value)},children:[Object(i.jsx)("option",{value:"sanitize",children:"sanitize-tool"}),Object(i.jsx)("option",{value:"camelcase",children:"CamelCaseTool"})]})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Your Text"}),Object(i.jsx)("textarea",{value:(e=r,"sanitize"===d?function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\u011b\u0161\u010d\u0159\u017e\xfd\xfa\u016f\u010f\u0165\u0148\xb7/_,:;",a=0,c=t.length;a<c;a++)e=e.replace(new RegExp(t.charAt(a),"g"),"aaaaeeeeiiiioooouuuuncescrzyuudtn------".charAt(a));return e.replace(".","-").replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/\//g,"")}(e):function(e){var t=e.match(/[a-z]+|\d+/gi);return t?t.map((function(e,t){var a=e.toLowerCase();return 0!==t&&(a=a.split("").map((function(e,t){return 0===t?e.toUpperCase():e})).join(u||(u=Object(m.a)([""])))),a})).join(b||(b=Object(m.a)([""]))):""}(e)),onChange:function(e){return"nothing"},className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(i.jsx)(l,{})]})]})}function x(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)("div",{className:"card mt-5 mb-5",children:[Object(i.jsx)("h5",{className:"card-header bg-primary text-white",children:"Speech Recognition Tool"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Your Text"}),Object(i.jsx)("textarea",{defaultValue:a,className:"form-control",id:"exampleFormControlTextarea1",rows:"3",onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition);e.lang="en-US",e.interimResults=!1,e.maxAlternatives=5,e.start(),e.onresult=function(e){r(a+" "+e.results[0][0].transcript)}},children:"Click To Listen Text"}),Object(i.jsx)("button",{className:"btn btn-info ml-2",onClick:function(){return navigator.clipboard.writeText(a)},children:"Copy Text"}),Object(i.jsx)(l,{})]})]})]})}function O(){var e=Object(c.useState)("10:20 \n 0:30 10:20"),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)("Add Recap Text"),s=Object(o.a)(n,2),j=s[0],d=s[1];return Object(c.useEffect)((function(){var e;e=(e=a.match(/\d{1,}:\d{2}/g))?e.reduce((function(e,t){return function(e,t){for(var a=[0,0,0],c=a.length,r=(e||"").split(":"),n=(t||"").split(":"),s=0;s<c;s++)r[s]=isNaN(parseInt(r[s]))?0:parseInt(r[s]),n[s]=isNaN(parseInt(n[s]))?0:parseInt(n[s]);for(s=0;s<c;s++)a[s]=r[s]+n[s];var o=a[0],i=a[1],l=a[2];if(l>=60){var j=l/60<<0;i+=j,l-=60*j}if(i>=60){var d=i/60<<0;o+=d,i-=60*d}return("0"+o).slice(-2)+":"+("0"+i).slice(-2)+":"+("0"+l).slice(-2)}(e,t)})):e,d(e)}),[a]),Object(i.jsxs)("div",{className:"card mt-5 mb-5",children:[Object(i.jsx)("h5",{className:"card-header bg-primary text-white",children:"Recap Text To Total Time Converter"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Your Text"}),Object(i.jsx)("textarea",{defaultValue:a,className:"form-control",id:"exampleFormControlTextarea1",rows:"3",onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:["Your Total Time \xa0",Object(i.jsx)("strong",{children:j})]})}),Object(i.jsx)("button",{className:"btn btn-info ml-2",onClick:function(){return navigator.clipboard.writeText(j)},children:"Copy Time"}),Object(i.jsx)(l,{})]})]})]})}var p=function(){return Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-sm-3"}),Object(i.jsxs)("div",{className:"col-sm-6 mt-5",children:[Object(i.jsx)(h,{}),Object(i.jsx)(x,{}),Object(i.jsx)(O,{}),Object(i.jsx)(j,{})]}),Object(i.jsx)("div",{className:"col-sm-3"})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.fd654f00.chunk.js.map