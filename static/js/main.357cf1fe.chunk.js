(this.webpackJsonpking_of_mains=this.webpackJsonpking_of_mains||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n.n(a),d=n(9),r=n.n(d),o=(n(19),n(4)),s=(n(20),n(5)),l=n(6);function j(){var e=Object(s.a)(['\n  font-family: "Press Start 2P", cursive;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  h2,\n  p {\n    font-size: 40px;\n    background: linear-gradient(#c56121, #cac4b7);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n']);return j=function(){return e},e}function u(){var e=Object(s.a)(["\n  position: absolute;\n  left: 10%;\n  bottom: 3%;\n  z-index: -1;\n  font-size: 7vw;\n  line-height: 1.4em;\n  transform: perspective(4em) rotateX(24deg) skewX(-20deg);\n  transform-origin: 0 100%;\n  background: linear-gradient(#02041a, #060c9f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);return u=function(){return e},e}function b(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),a=e.getDate();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(h,{className:"title",children:["The",Object(i.jsx)("br",{}),"King",Object(i.jsx)("br",{}),"Of",Object(i.jsx)("br",{}),"Page Mains"]}),Object(i.jsxs)(f,{children:[Object(i.jsx)("h2",{children:"TIME"}),Object(i.jsxs)("p",{children:[t,n+1,a]})]})]})}var h=l.a.p(u()),f=l.a.div(j()),x=n(13),O=function(){var e=document.getElementById("selector"),t=document.body.querySelector(".container>ul>li");p(e,t)},m=function(){var e=document.getElementById("selector"),t=document.body.querySelector(".container>ul>li.active");p(e,t)},p=function(e,t){var n=t.offsetWidth,i=t.offsetHeight,a=t.offsetTop,c=t.offsetLeft;e.style.width="".concat(n,"px"),e.style.height="".concat(i,"px"),e.style.top="".concat(a,"px"),e.style.left="".concat(c,"px")},v=function(e){var t=document.querySelector("#modal"),n=Math.floor(Math.random()*g.length);t.classList.add("pop"),t.style.animationName=g[n],e(!1)},g=["pop0","pop1","pop2","pop3"],y={11:"https://nyangmeonggood.github.io/Animation/index.html",12:"https://blog.naver.com/bbeeeack/"};n(23),n(24);function k(){return Object(i.jsxs)("section",{className:"container",children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{id:"11",className:"active",children:"1"}),Object(i.jsx)("li",{id:"12","data-i":"1","data-j":"2",children:"2"}),Object(i.jsx)("li",{id:"13","data-i":"1","data-j":"3",children:"3"}),Object(i.jsx)("li",{id:"21","data-i":"2","data-j":"1",children:"4"}),Object(i.jsx)("li",{id:"22","data-i":"2","data-j":"2",children:"5"}),Object(i.jsx)("li",{id:"23","data-i":"2","data-j":"3",children:"6"}),Object(i.jsx)("li",{id:"31","data-i":"3","data-j":"1",children:"7"}),Object(i.jsx)("li",{id:"32","data-i":"3","data-j":"2",children:"8"}),Object(i.jsx)("li",{id:"33","data-i":"3","data-j":"3",children:"9"})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{id:"14","data-i":"1","data-j":"4",children:"1"}),Object(i.jsx)("li",{id:"15","data-i":"1","data-j":"5",children:"2"}),Object(i.jsx)("li",{id:"16","data-i":"1","data-j":"6",children:"3"}),Object(i.jsx)("li",{id:"24","data-i":"2","data-j":"4",children:"4"}),Object(i.jsx)("li",{id:"25","data-i":"2","data-j":"5",children:"5"}),Object(i.jsx)("li",{id:"26","data-i":"2","data-j":"6",children:"6"}),Object(i.jsx)("li",{id:"34","data-i":"3","data-j":"4",children:"7"}),Object(i.jsx)("li",{id:"35","data-i":"3","data-j":"5",children:"8"}),Object(i.jsx)("li",{id:"36","data-i":"3","data-j":"6",children:"9"})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{id:"17","data-i":"1","data-j":"7",children:"1"}),Object(i.jsx)("li",{id:"18","data-i":"1","data-j":"8",children:"2"}),Object(i.jsx)("li",{id:"19","data-i":"1","data-j":"9",children:"3"}),Object(i.jsx)("li",{id:"27","data-i":"2","data-j":"7",children:"4"}),Object(i.jsx)("li",{id:"28","data-i":"2","data-j":"8",children:"5"}),Object(i.jsx)("li",{id:"29","data-i":"2","data-j":"9",children:"6"}),Object(i.jsx)("li",{id:"37","data-i":"3","data-j":"7",children:"7"}),Object(i.jsx)("li",{id:"38","data-i":"3","data-j":"8",children:"8"}),Object(i.jsx)("li",{id:"39","data-i":"3","data-j":"9",children:"9"})]}),Object(i.jsx)("div",{id:"selector"})]})}function w(e){var t=e.modalNumber,n=e.setModalNumber,c=Object(a.useState)(!0),d=Object(o.a)(c,2),r=d[0],s=d[1];return Object(a.useEffect)((function(){return O(),window.addEventListener("resize",(function(){O(),m()})),function(e,t,n,i){for(var a=0;a<3;a++)Object.values(document.querySelector(".container").children[a].children).map((function(a){return a.addEventListener("click",(function(){n(i),v(e),t(parseInt(10*a.dataset.i)+parseInt(a.dataset.j))}))}))}(s,n,N,S),function(){return window.removeEventListener("resize",(function(){O(),m()}))}})),Object(a.useEffect)((function(){var e=1,t=1,i=function(){e>3&&(e=1),e<1&&(e=3),t<1&&(t=9),t>9&&(t=1);for(var n=0;n<3;n++)Object.values(document.querySelector(".container").children[n].children).map((function(e){return e.classList.remove("active")}));document.body.querySelector('[id="'.concat(10*e+t,'"]')).classList.add("active"),document.querySelector("#preview").src=10*e+t},a=function(a){r&&37===a.keyCode&&(N(E),t--,i()),r&&38===a.keyCode&&(N(E),e--,i()),r&&39===a.keyCode&&(N(E),t++,i()),r&&40===a.keyCode&&(N(E),e++,i()),r&&13===a.keyCode&&(N(S),v(s),n(10*e+t)),r||27!==a.keyCode||(N(S),document.querySelector("#modal").className="",s(!0)),m()};return document.addEventListener("keydown",a),function(){return document.removeEventListener("keydown",a)}})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{}),Object(i.jsx)("img",{src:undefined,id:"preview"}),Object(i.jsxs)("section",{id:"modal",children:[!r&&y[t]&&Object(i.jsx)(x.a,{url:y[t]}),!r&&!y[t]&&Object(i.jsx)("div",{children:"Sorry, There isn't contents :("})]})]})}var E=new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/kick.mp3"),S=new Audio("https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/rim.mp3"),N=function(e){e.load(),e.play()};var M=function(){var e=Object(a.useState)(11),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{modalNumber:n,setModalNumber:c}),Object(i.jsx)(b,{})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.357cf1fe.chunk.js.map