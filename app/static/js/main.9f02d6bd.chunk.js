(this.webpackJsonpfrontend_ui=this.webpackJsonpfrontend_ui||[]).push([[0],{58:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var s=n(51),c=n.n(s),i=(n(58),n(5)),r=n(6),a=n(3),o=n(8),d=n(7),l=n(1),u=n.n(l),j=n(0),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).add=s.add.bind(Object(a.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container d-flex row gx-4",children:[Object(j.jsx)("div",{className:"col row",children:Object(j.jsx)("input",{className:"input-prompt border-curve-10",type:"text",id:"email"})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("button",{className:"btn btn-primary border-curve-10",onClick:this.add,children:"+"})})]})}},{key:"add",value:function(){this.props.addFriend(document.getElementById("email").value)}}]),n}(u.a.Component);var p=function(e){return Object(j.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent d-flex align-items-center",children:Object(j.jsx)(b,{addFriend:e.addFriend})})},m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={email:s.props.email,name:s.props.name},s.clickEvent=s.clickEvent.bind(Object(a.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"row gap-1 m-1 border-bottom border-top border-success border-curve-10 clickable",onClick:this.clickEvent,children:[Object(j.jsx)("div",{className:"col-9 d-flex align-items-center pt-1",children:Object(j.jsx)("h5",{children:this.props.name})}),Object(j.jsx)("div",{className:"col-1 d-flex align-items-center pt-1",children:Object(j.jsx)("h6",{children:this.props.message_count})})]})}},{key:"clickEvent",value:function(){this.props.changeCurrentRecipient({email:this.state.email,name:this.state.name})}}]),n}(u.a.Component),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"d-flex row h-80-percent-oflow",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{name:"friend 1",message_count:"4",changeCurrentRecipient:this.props.changeCurrentRecipient,email:"friend_1@gmail.com"}),Object(j.jsx)(m,{name:"friend 2",message_count:"4",changeCurrentRecipient:this.props.changeCurrentRecipient,email:"friend_2@gmail.com"}),Object(j.jsx)(m,{name:"friend 3",message_count:"4",changeCurrentRecipient:this.props.changeCurrentRecipient,email:"friend_3@gmail.com"})]})})}}]),n}(u.a.Component),O=n(2),g=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).logout=s.logout.bind(Object(a.a)(s)),s.state={pressed:!1},s}return Object(r.a)(n,[{key:"render",value:function(){return this.state.pressed?Object(j.jsx)(O.a,{to:"/login"}):Object(j.jsxs)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center justify-content-center",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("h6",{className:"d-flex justify-content-center",id:"account-name",children:this.props.account.name})}),Object(j.jsx)("div",{className:"col d-flex justify-content-center",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.logout,children:"Logout"})})]})}},{key:"logout",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.response&&e.setState({pressed:!0})})),t.open("GET","http://localhost:4000/logout"),t.send()}}]),n}(u.a.Component);var v=function(e){return Object(j.jsxs)("div",{className:"recipient-list col border-end border-success border-curve-10",children:[Object(j.jsx)(p,{addFriend:e.addFriend}),Object(j.jsx)(h,{changeCurrentRecipient:e.changeCurrentRecipient}),Object(j.jsx)(g,{account:e.account})]})};var x=function(e){return Object(j.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent d-flex align-items-center",children:Object(j.jsx)("div",{className:"p-4",children:Object(j.jsx)("h2",{children:e.recipientName})})})};var f=function(e){return e.data.type,Object(j.jsx)("div",{className:"row m-2 justify-content-end",children:Object(j.jsxs)("div",{className:"col-5 border-top border-bottom border-success border-curve-10",children:[Object(j.jsx)("div",{className:"p-1",children:e.data.message}),Object(j.jsx)("div",{className:"row justify-content-end message-time p-1",children:e.data.time})]})})},y=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e="";return void 0!==this.props.messages&&(e=this.props.messages.map((function(e,t){return Object(j.jsx)(f,{data:e},t)}))),Object(j.jsx)("div",{className:"h-80-percent-oflow",children:Object(j.jsx)("div",{children:e})})}}]),n}(u.a.Component),k=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).send=s.send.bind(Object(a.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container d-flex row gx-4",children:[Object(j.jsx)("div",{className:"col row",children:Object(j.jsx)("input",{className:"input-prompt border-curve-10",id:"message",type:"text"})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("button",{className:"btn btn-primary border-curve-10",onClick:this.send,children:"^"})})]})}},{key:"send",value:function(){this.props.sendMessage(document.getElementById("message").value)}}]),n}(u.a.Component);var N=function(e){return Object(j.jsx)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center",children:Object(j.jsx)(k,{sendMessage:e.sendMessage})})};var C=function(e){return Object(j.jsxs)("div",{className:"message-room col-8 border-start border-success border-curve-10",children:[Object(j.jsx)(x,{recipientName:e.recipientName}),Object(j.jsx)(y,{messages:e.messages}),Object(j.jsx)(N,{sendMessage:e.sendMessage})]})},w=n(53),E=n.n(w),R=n(18),_=n.n(R),L=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).sock=E()("http://localhost:5000",{query:{UID:_.a.load("UID")}}),void 0===_.a.load("UID")?s.state={account:{},loggedin:!1,current_recipient:{},messages:{"friend_1@gmail.com":{name:"",message:[]}}}:s.state={account:{},loggedin:!0,current_recipient:{},messages:{"friend_1@gmail.com":{email:"",name:"",message:[]}}},s.setCallbacks=s.setCallbacks.bind(Object(a.a)(s)),s.getAccountName=s.getAccountName.bind(Object(a.a)(s)),s.changeCurrentRecipient=s.changeCurrentRecipient.bind(Object(a.a)(s)),s.sendMessage=s.sendMessage.bind(Object(a.a)(s)),s.addFriend=s.addFriend.bind(Object(a.a)(s)),s.refreshRecipientList=s.refreshRecipientList.bind(Object(a.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return this.state.loggedin?Object(j.jsxs)("div",{className:"message-gallery border-curve-10 row",children:[Object(j.jsx)(v,{changeCurrentRecipient:this.changeCurrentRecipient,addFriend:this.addFriend,account:this.state.account}),Object(j.jsx)(C,{sendMessage:this.sendMessage,recipientName:this.state.current_recipient.name,messages:this.state.messages[this.state.current_recipient.email]})]}):Object(j.jsx)(O.a,{to:"/signup"})}},{key:"componentDidMount",value:function(){this.setCallbacks(),this.getAccountName(),this.refreshRecipientList()}},{key:"setCallbacks",value:function(){var e=this;this.sock.on("refresh_recipient_list",(function(t){e.refreshRecipientList()}))}},{key:"getAccountName",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){e.setState({account:JSON.parse(t.responseText)})})),t.open("GET","http://localhost:4000/account"),t.send()}},{key:"refreshRecipientList",value:function(){console.log("works");var e=new XMLHttpRequest;e.addEventListener("load",(function(){var t=JSON.parse(e.responseText);console.log(t);for(var n={},s=0;s<t.length;s++)n[t[s].email]=t[s],n[t[s].email].message=[];console.log(n)})),e.open("GET","http://localhost:4000/friend"),e.send()}},{key:"changeCurrentRecipient",value:function(e){this.setState({current_recipient:e})}},{key:"sendMessage",value:function(e){var t=new Date,n=t.getHours()+":"+t.getMinutes(),s={message:e,recipient:this.state.current_recipient.email,time:n,type:"outgoing"},c=this.state.messages;c[s.recipient].push(s),this.setState({messages:c}),this.sock.emit("message",s)}},{key:"addFriend",value:function(e){this.sock.emit("add_friend",{email:e})}}]),n}(u.a.Component),M=n(17),I=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).signup=s.signup.bind(Object(a.a)(s)),void 0!==_.a.load("UID")?s.state={redirect:"/"}:s.state={redirect:"default"},s}return Object(r.a)(n,[{key:"render",value:function(){return"login"===this.state.redirect?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(O.a,{to:"/login"})}):"/"===this.state.redirect?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(O.a,{to:"/"})}):Object(j.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(j.jsx)("input",{id:"email",type:"text"})," ",Object(j.jsx)("br",{}),"Enter name: ",Object(j.jsx)("input",{id:"name",type:"text"})," ",Object(j.jsx)("br",{}),"Enter Password: ",Object(j.jsx)("input",{id:"password",type:"password"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",onClick:this.signup})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{children:Object(j.jsx)(M.b,{to:"/login",children:"Have an account? Login"})})]})}},{key:"signup",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.responseText?e.setState({redirect:"login"}):window.alert("Perhaps the email is invalid or in use")})),t.open("POST","http://localhost:4000/signup"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,name:document.getElementById("name").value,password:document.getElementById("password").value}))}},{key:"componentWillUnmount",value:function(){delete this.state.redirect}}]),n}(u.a.Component),S=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).login=s.login.bind(Object(a.a)(s)),void 0!==_.a.load("UID")?s.state={login:!0}:s.state={login:!1},s}return Object(r.a)(n,[{key:"render",value:function(){return this.state.login?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(O.a,{to:"/"})}):Object(j.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(j.jsx)("input",{id:"email",type:"text"})," ",Object(j.jsx)("br",{}),"Enter Password: ",Object(j.jsx)("input",{id:"password",type:"password"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",onClick:this.login})," ",Object(j.jsx)("br",{})]})}},{key:"login",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.responseText?e.setState({login:!0}):window.alert("Enter proper credentials")})),t.open("POST","http://localhost:4000/login"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,password:document.getElementById("password").value}))}}]),n}(u.a.Component);var T=function(){return Object(j.jsx)(M.a,{children:Object(j.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(j.jsxs)(O.d,{children:[Object(j.jsx)(O.b,{exact:!0,path:"/",children:Object(j.jsx)(L,{})}),Object(j.jsx)(O.b,{path:"/signup",children:Object(j.jsx)(I,{})}),Object(j.jsx)(O.b,{path:"/login",children:Object(j.jsx)(S,{})})]})})})};c.a.render(Object(j.jsx)(T,{className:"root-div"}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.9f02d6bd.chunk.js.map