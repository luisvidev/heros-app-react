(this["webpackJsonpheros-app"]=this["webpackJsonpheros-app"]||[]).push([[0],{46:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(1),s=r(21),n=r.n(s),i=r(10),l=r(5),o=r(2),h=Object(c.createContext)(),j="[auth] login",u="[auth] logout",d=function(e){var a=e.history,r=Object(c.useContext)(h).dispatch;return Object(t.jsxs)("div",{className:"container mt-5",children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("hr",{}),Object(t.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:j,payload:{name:"Luis"}}),a.replace(e)},children:"Login"})]})},b=r(4),m=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],p=function(e){var a=e.id,r=e.superhero,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(t.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(t.jsxs)("div",{className:"row no-gutters",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(t.jsx)("div",{className:"col-md-8",children:Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:r}),Object(t.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(t.jsx)("p",{className:"card-text",children:n}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{className:"text-muted",children:s})}),Object(t.jsx)(l.b,{to:"/hero/".concat(a),children:"M\xe1s..."})]})})]})})},O=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return m.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(t.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(t.jsx)(p,Object(b.a)({},e),e.id)}))})},v=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"DC Screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(O,{publisher:"DC Comics"})]})},x=function(e){var a=e.history,r=Object(o.i)().heroId,s=Object(c.useMemo)((function(){return e=r,m.find((function(a){return a.id===e}));var e}),[r]);if(!s)return Object(t.jsx)(o.a,{to:"/"});var n=s.superhero,i=s.publisher,l=s.alter_ego,h=s.first_appearance,j=s.characters;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeInRightBig",alt:n})}),Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("h3",{children:n}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" Alter ego:"})," ",l]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" Publisher:"})," ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:" First Appe."})," ",h]})]}),Object(t.jsx)("h5",{children:"Characters"}),Object(t.jsx)("p",{children:j}),Object(t.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},f=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Marvel"}),Object(t.jsx)("hr",{}),Object(t.jsx)(O,{publisher:"Marvel Comics"})]})},g=r(23),C=r.n(g),_=r(12),N=function(e){var a=e.history,r=Object(o.h)().search,s=Object(c.useMemo)((function(){return C.a.parse(r)}),[r]).q,n=void 0===s?"":s,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(i.a)(a,2),t=r[0],s=r[1];return[t,function(e){var a=e.target;s(Object(b.a)(Object(b.a)({},t),{},Object(_.a)({},a.name,a.value)))},function(){s(e)}]}({searchTex:n}),h=Object(i.a)(l,2),j=h[0],u=h[1],d=j.searchTex,O=Object(c.useMemo)((function(){return""===(e=n)?[]:(e=e.toLowerCase(),m.filter((function(a){return a.superhero.toLowerCase().includes(e)})));var e}),[n]);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Search Page"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-5",children:[Object(t.jsx)("h4",{children:"Search Form"}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))},children:[Object(t.jsx)("input",{type:"text",className:"form-control",placeholder:"Find your hero",name:"searchTex",value:d,onChange:u}),Object(t.jsx)("button",{type:"submit",className:"btn btn-outline-primary m-1 btn-block",children:"Search"})]})]}),Object(t.jsxs)("div",{className:"col-7",children:[Object(t.jsx)("h4",{children:"Results"}),Object(t.jsx)("hr",{}),""===n&&Object(t.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==n&&0===O.length&&Object(t.jsxs)("div",{className:"alert alert-danger",children:["there is not a hero with ",n]}),O.map((function(e){return Object(t.jsx)(p,Object(b.a)({},e),e.id)}))]})]})]})},y=function(){var e=Object(c.useContext)(h),a=e.user.name,r=e.dispatch,s=Object(o.g)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(t.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Hero App"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(t.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:u}),s.replace("/login")},children:"Logout"})]})})]})},M=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(y,{}),Object(t.jsx)("div",{className:"container mt-2",children:Object(t.jsxs)(o.d,{children:[Object(t.jsx)(o.b,{exact:!0,path:"/marvel",component:f}),Object(t.jsx)(o.b,{exact:!0,path:"/hero/:heroId",component:x}),Object(t.jsx)(o.b,{exact:!0,path:"/dc",component:v}),Object(t.jsx)(o.b,{exact:!0,path:"/search",component:N}),Object(t.jsx)(o.a,{to:"/marvel"})]})})]})},k=r(13),S=function(e){var a=e.isAuthenticated,r=e.component,c=Object(k.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(o.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return a?Object(t.jsx)(r,Object(b.a)({},e)):Object(t.jsx)(o.a,{to:"/login"})}}))},D=function(e){var a=e.isAuthenticated,r=e.component,c=Object(k.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(o.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return a?Object(t.jsx)(o.a,{to:"/"}):Object(t.jsx)(r,Object(b.a)({},e))}}))},w=function(){var e=Object(c.useContext)(h).user.logged;return Object(t.jsx)(l.a,{basename:"/..",children:Object(t.jsx)("div",{children:Object(t.jsxs)(o.d,{children:[Object(t.jsx)(D,{isAuthenticated:e,exact:!0,path:"/login",component:d}),Object(t.jsx)(S,{path:"/",component:M,isAuthenticated:e})]})})})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return Object(b.a)(Object(b.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(c.useReducer)(A,{},B),a=Object(i.a)(e,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(t.jsx)(h.Provider,{value:{user:r,dispatch:s},children:Object(t.jsx)(w,{})})};n.a.render(Object(t.jsx)(J,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4ef8c129.chunk.js.map