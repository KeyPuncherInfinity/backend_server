(this.webpackJsonpfrontend_ui=this.webpackJsonpfrontend_ui||[]).push([[0],{58:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var s=n(51),c=n.n(s),r=(n(58),n(11)),o=n(12),l=n(15),i=n(14),a=n(1),j=n.n(a),d=n(0);var b=function(){return Object(d.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent"})};var u=function(){return Object(d.jsx)("div",{className:"container h-80-percent-oflow"})},O=n(13),p=n(30),h=n.n(p),x=n(2),m=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).logout=s.logout.bind(Object(O.a)(s)),s.state={pressed:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.pressed?Object(d.jsx)(x.a,{to:"/login"}):Object(d.jsx)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center justify-content-center",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:this.logout,children:"Logout"})})}},{key:"logout",value:function(){var e=this,t=new XMLHttpRequest;t.on("load",(function(){"ok"==t.response&&e.setState({pressed:!0})})),t.open("GET","localhost:4000/logout"),t.send()}}]),n}(j.a.Component);var v=function(){return Object(d.jsxs)("div",{className:"recipient-list col border-end border-success border-curve-10",children:[Object(d.jsx)(b,{}),Object(d.jsx)(u,{}),Object(d.jsx)(m,{})]})};var g=function(){return Object(d.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent"})};var f=function(){return Object(d.jsxs)("div",{className:"container h-80-percent-oflow",children:[Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"}),Object(d.jsx)("h1",{children:"Hello Hello Hello Hello Hello Hello"})]})},H=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).send=s.send.bind(Object(O.a)(s)),s.sock=e.sock,s}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container d-flex row gx-4",children:[Object(d.jsx)("div",{className:"col row",children:Object(d.jsx)("input",{className:"input-prompt border-curve-10",id:"message",type:"text"})}),Object(d.jsx)("div",{className:"col-1",children:Object(d.jsx)("button",{className:"btn btn-primary border-curve-10",onClick:this.send,children:"^"})})]})}},{key:"send",value:function(){console.log(this.sock),this.sock.emit("message",document.getElementById("message").value)}}]),n}(j.a.Component);var y=function(e){return Object(d.jsx)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center",children:Object(d.jsx)(H,{sock:e.sock})})};var k=function(e){return Object(d.jsxs)("div",{className:"message-room col-8 border-start border-success border-curve-10",children:[Object(d.jsx)(g,{}),Object(d.jsx)(f,{}),Object(d.jsx)(y,{sock:e.sock})]})},w=n(53),N=n.n(w),E=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).sock=N()("http://localhost:5000",{query:{rememberme:h.a.load("rememberme")}}),s}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"message-gallery border-curve-10 row",children:[Object(d.jsx)(v,{}),Object(d.jsx)(k,{sock:this.sock})]})}}]),n}(j.a.Component),C=n(19),L=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).signup=s.signup.bind(Object(O.a)(s)),s.state={redirect:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(d.jsx)("div",{id:"signup-info",children:Object(d.jsx)(x.a,{to:"/messenger"})}):Object(d.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(d.jsx)("input",{id:"email",type:"text"})," ",Object(d.jsx)("br",{}),"Enter Password: ",Object(d.jsx)("input",{id:"password",type:"password"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",onClick:this.signup})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:Object(d.jsx)(C.b,{to:"/login",children:"Have an account? Login"})})]})}},{key:"signup",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"==t.responseText&&e.setState({redirect:!0})})),t.open("POST","http://localhost:4000/signup"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,password:document.getElementById("password").value}))}}]),n}(j.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).login=s.login.bind(Object(O.a)(s)),s.state={login:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.login?Object(d.jsx)("div",{id:"signup-info",children:Object(d.jsx)(x.a,{to:"/messenger"})}):Object(d.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(d.jsx)("input",{id:"email",type:"text"})," ",Object(d.jsx)("br",{}),"Enter Password: ",Object(d.jsx)("input",{id:"password",type:"password"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",onClick:this.login})," ",Object(d.jsx)("br",{})]})}},{key:"login",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"==t.responseText?e.setState({login:!0}):window.alert("Enter proper credentials")})),t.open("POST","http://localhost:4000/login"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,password:document.getElementById("password").value}))}}]),n}(j.a.Component);var T=function(){return Object(d.jsx)(C.a,{children:Object(d.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(d.jsxs)(x.d,{children:[Object(d.jsx)(x.b,{exact:!0,path:"/",children:Object(d.jsx)(L,{})}),Object(d.jsx)(x.b,{path:"/login",children:Object(d.jsx)(S,{})}),Object(d.jsx)(x.b,{path:"/messenger",children:Object(d.jsx)(E,{})})]})})})};c.a.render(Object(d.jsx)(T,{className:"root-div"}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.2adbb997.chunk.js.map