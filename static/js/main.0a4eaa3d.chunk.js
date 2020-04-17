(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(81)},42:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/sun.fe4053b9.svg"},51:function(e,t,a){e.exports=a.p+"static/media/night.25e91ac6.svg"},58:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/profile_image.efad6a29.jpg"},71:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),c=(a(42),a(7)),i=a(14),s={body:"#EFF2F4",profileColor:"#363537",headerColor:"black",projectHeaderColor:"black",projectNameColor:"black",projectInfoColor:"rgb(74, 85, 104)",projectBorderColor:"",projectLiveColor:"black",aboutBackgroundColor:"#262626b3",blogTitleColor:"rgb(74,85,104)",blogContentColor:"rgb(74,85,104)",blogShowMoreColor:"rgb(74,85,104)"},m={body:"#15202B",profileColor:"white",headerColor:"white",projectHeaderColor:"white",projectNameColor:"#CF5050",projectInfoColor:"#718096",projectBorderColor:"",projectLiveColor:"white",aboutBackgroundColor:"#15202B",blogTitleColor:"#718096",blogContentColor:"#718096",blogShowMoreColor:"#718096"},u=a(13);function p(){var e=Object(u.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    margin: 0;\n    padding: 0;\n    transition: all 0.25s linear;\n  }\n  \n  .profile-info p{\n    color: ",";\n  }\n  \n  .header-item {\n    color: ",";\n  }\n  \n  .info h1 {\n    color: ",";\n  }\n\n  .project-name {\n    color: ",";\n  }\n\n  .project-detail {\n    color: ",";\n  }\n\n  .live-link-text {\n    color: ",";\n  }\n\n  .about-me div {\n    background: ",";\n  }\n\n  .blog-component {\n    .desc-area {\n      .title {\n        color: ","\n      }\n      .content {\n        color: ","\n      }\n      .show-more {\n        p {\n          color: ","\n        }\n      }\n    }\n  }\n  \n  "]);return p=function(){return e},e}var h=Object(i.b)(p(),function(e){return e.theme.body},function(e){return e.theme.profileColor},function(e){return e.theme.headerColor},function(e){return e.theme.projectHeaderColor},function(e){return e.theme.projectNameColor},function(e){return e.theme.projectInfoColor},function(e){return e.theme.projectLiveColor},function(e){return e.theme.aboutBackgroundColor},function(e){return e.theme.blogTitleColor},function(e){return e.theme.blogContentColor},function(e){return e.theme.blogShowMoreColor}),g=a(20),b=(a(45),function(e){var t=Object(g.f)(),o=Object(g.g)().pathname,l=Object(n.useState)("light"),i=Object(c.a)(l,2),s=i[0],m=i[1];Object(n.useEffect)(function(){var e=localStorage.getItem("theme");null===e?localStorage.setItem("theme","light"):m(e)},[s]);return r.a.createElement("div",{id:"header",className:"header-component"},r.a.createElement("div",{className:"header-list"},r.a.createElement("div",{className:"header-left-side"},r.a.createElement("li",{className:"header-item ".concat("/"===o?"active":""),onClick:function(){return t.push("/")}},"isagul")),r.a.createElement("div",{className:"header-right-side"},r.a.createElement("li",{className:"header-item ".concat("/about"===o?"active":""),onClick:function(){return t.push("/about")}},"about"),r.a.createElement("li",{className:"header-item ".concat("/blog"===o?"active":""),onClick:function(){return t.push("/blog")}},"blog"),r.a.createElement("li",{className:"header-item ".concat("/projects"===o?"active":""),onClick:function(){return t.push("/projects")}},"projects")),r.a.createElement("div",{className:"theme-icon",onClick:function(){e.toggleTheme(),m(localStorage.getItem("theme"))}},"light"===s?r.a.createElement("img",{src:a(50),width:"40",height:"40",alt:"Sun free icon",title:"Sun"}):r.a.createElement("img",{src:a(51),width:"40",height:"40",alt:"Moon free icon",title:"Moon"}))))}),d=a(31),f=a.n(d),E=(a(58),a(62),function(e){var t=Object(n.useState)("light"),a=Object(c.a)(t,2),o=a[0],l=a[1],u=Object(n.useRef)(!1);return Object(n.useEffect)(function(){var e=localStorage.getItem("theme");return u.current||(null===e?localStorage.setItem("theme","light"):l(e)),function(){u.current=!0}},[o]),r.a.createElement(i.a,{theme:"light"===o?s:m},r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"app"},r.a.createElement(b,{toggleTheme:function(){"light"===localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),l("dark")):(localStorage.setItem("theme","light"),l("light"))}}),r.a.createElement("div",{className:"content"},e.children),r.a.createElement(f.a,{targetId:"header",behavior:"smooth",buttonBackgroundColor:"#CF5050",iconType:"arrow-up",scrollSpeed:"0.5s",style:{fontSize:"16px",outline:"none"}}))))}),v=(a(64),function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"about-me"},r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("span",{className:"curly-braces"},"{ "),"Hi I'm ",r.a.createElement("span",{className:"my-name"},"Isa"),r.a.createElement("span",{className:"curly-braces"}," }")),r.a.createElement("p",null,"I live in Istanbul. I am a Front End developer building websites and web applications. I interested in JavaScript and have professional experience working with React and Angular."),r.a.createElement("p",null,"Also, I have used these technologies: Redux, RxJS, Sass/Less, Gulp, Webpack, ES6, NodeJS, MongoDB"))))}),k=(a(66),function(){var e=[{name:"nytimesbooks",github_url:"https://github.com/isagul/nytimesbooks",live_url:"https://app-nytimes.herokuapp.com/",detail:"A shopping cart project which lists books. It also allows you adding into basket and deleting item from basket by using hooks and context-api. Also, you can sign up and log in into this app anymore and you can add books to your cart permanently.",npm_link:null},{name:"react-scroll-component",github_url:"https://github.com/isagul/react-scroll-button",live_url:"https://isagul.github.io/react-scroll-button/",detail:"Show a scroll button when you scrolled the page.",npm_link:"https://www.npmjs.com/package/react-scroll-button"},{name:"periodic-table",github_url:"https://github.com/isagul/periodic-table",live_url:"https://app-periodic-table.netlify.com/",detail:"Periodic table with ReactJS.",npm_link:null},{name:"js-questions",github_url:"https://github.com/isagul/js-questions",live_url:"https://app-js-quiz.netlify.com/",detail:"A JavaScript quiz app about JavaScript questions.",npm_link:null},{name:"elevator",github_url:"https://github.com/isagul/elevator",live_url:"https://app-elevator.netlify.com/",detail:"Making an elevator app by using react.js.",npm_link:null},{name:"ng-pagination-component",github_url:"https://github.com/isagul/ng-pagination-component",live_url:"https://isagul.github.io/ng-pagination-component/",detail:"The lightest and simplest solution for pagination in Angular.",npm_link:"https://www.npmjs.com/package/ng-pagination-component"},{name:"react-weather-app",github_url:"https://github.com/isagul/react-weather-app",live_url:"https://isagul.github.io/react-weather-app/",detail:"Learn weather of city where you live in.",npm_link:null},{name:"react-webpack-starter-kit",github_url:"https://github.com/isagul/react-webpack-starter-kit",live_url:"",detail:"Simple starter kit using react and webpack.",npm_link:null}].map(function(e,t){return r.a.createElement("div",{className:"project",key:t},r.a.createElement("div",{className:"project-title"},r.a.createElement("a",{href:"".concat(e.github_url),target:"_blank",rel:"noopener noreferrer",className:"project-name-link"},r.a.createElement("p",{className:"project-name"},e.name)),e.live_url.length>0&&r.a.createElement("a",{href:"".concat(e.live_url),target:"_blank",rel:"noopener noreferrer",className:"project-live-link"},r.a.createElement("p",{className:"live-link-text"},"Live")),null!==e.npm_link&&r.a.createElement("a",{href:"".concat(e.npm_link),target:"_blank",rel:"noopener noreferrer",className:"project-npm-link"},r.a.createElement("i",{className:"fab fa-npm live-link-text"}))),r.a.createElement("p",{className:"project-detail"},e.detail))});return r.a.createElement(E,null,r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"My Open Source Projects"),r.a.createElement("p",null,"I am passionate about open source software and giving back to others.")),r.a.createElement("div",{className:"projects"},e))}),j=(a(68),function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("img",{src:a(70),alt:"isa_gul_profile_image"}),r.a.createElement("div",{className:"profile-info"},r.a.createElement("p",null,"\u0130sa G\xfcl"),r.a.createElement("p",null,"Front-End Developer"),r.a.createElement("p",null,'"I\'m gonna start a revolution from my bed"')))}),w=(a(71),function(){return r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://github.com/isagul",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github-square"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/isa-gul/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://medium.com/@isagul",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-medium"})),r.a.createElement("a",{href:"https://twitter.com/isamigul",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"https://www.npmjs.com/settings/isagul/profile",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-npm"})))}),N=(a(73),function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"home-component"},r.a.createElement(j,null),r.a.createElement(w,null)))}),C=a(33),_=a.n(C),y=a(22);a(79);function S(){var e=Object(u.a)(["\n        display: block;\n        margin: 0 auto;\n    "]);return S=function(){return e},e}var I=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),i=Object(c.a)(l,2),s=i[0],m=i[1],u=Object(y.css)(S());return Object(n.useEffect)(function(){fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isagul").then(function(e){return e.json()}).then(function(e){"ok"===e.status&&(o(e.items),m(!1))})},[]),r.a.createElement(E,null,r.a.createElement(_.a,{size:60,color:"#CF5050",loading:s,css:u}),r.a.createElement("div",{className:"blog-component"},a.map(function(e,t){var a=e.title,n=e.link,o=e.content,l=e.thumbnail,c=e.categories,i=document.createElement("div");return i.innerHTML=o,r.a.createElement("div",{key:t,className:"story-area"},!l.includes("stat")&&r.a.createElement("img",{className:"thumbnail",src:l,alt:c.join(" ")}),r.a.createElement("div",{className:"desc-area"},r.a.createElement("p",{className:"title"},a),r.a.createElement("p",{className:"content"},i.getElementsByTagName("p")[0].innerText,"..."),r.a.createElement("a",{className:"show-more",href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"More"))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(12),O=a(35),B=a(21);x.b.add(O.a),l.a.render(r.a.createElement(B.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:N}),r.a.createElement(g.a,{exact:!0,path:"/about",component:v}),r.a.createElement(g.a,{exact:!0,path:"/projects",component:k}),r.a.createElement(g.a,{exact:!0,path:"/blog",component:I}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.0a4eaa3d.chunk.js.map