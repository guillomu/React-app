(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),l=a(1),o=a(2),c=a(4),m=a(3),u=a(5),d=a(10),h=a.n(d),b=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{src:h.a,alt:"logo",className:"logo mb-4"}))}}]),t}(r.a.Component)),p=a(11),f=a(6);function g(e){var t="user";return"admin"===e.role&&(t+=" admin"),"guest"===e.role&&(t+=" guest"),r.a.createElement("li",{className:t},e.firstname," ",e.lastname," - ",e.age,"ans - ",e.email,r.a.createElement("span",{className:"superuser"},e.isAdmin?" (Admin)":""),!e.active&&r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:e.handleLogin},"Login as"))}a(18);var v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={users:[{firstname:"Thomas",lastname:"Dupont",age:25,email:"thomas@email.com",isAdmin:!1,role:"guest",active:!1},{firstname:"Xavier",lastname:"Martin",age:28,email:"xavier@email.com",isAdmin:!0,role:"admin",active:!1},{firstname:"Paul",lastname:"Moulin",age:19,email:"paul@email.com",isAdmin:!0,role:"admin",active:!1},{firstname:"Michel",lastname:"Michel",age:32,email:"michel@email.com",isAdmin:!1,role:"guest",active:!1}]},a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.firstname){var t=this.state.users.map(function(t){return t.firstname===e.props.firstname&&(t.active=!0),t});this.setState({users:t})}}},{key:"handleLogin",value:function(e){var t=this.state.users.map(function(t){return t.active=!1,t.email===e.email&&(t.active=!0),t});this.setState({users:t})}},{key:"render",value:function(){var e=this,t=this.state.users.map(function(t,a){return r.a.createElement(g,{key:"user-"+a,number:a,firstname:t.firstname,lastname:t.lastname,email:t.email,age:t.age,isAdmin:t.isAdmin,role:t.role,active:t.active,handleLogin:function(){return e.handleLogin(t)}})}),a=(t.slice(0,this.state.users.length/2),t.slice(this.state.users.length/2),this.state.users.find(function(e){return e.isAdmin}),t.filter(function(e){return"guest"===e.props.role})),n=t.filter(function(e){return"admin"===e.props.role}),s=t.find(function(e){return e.props.active});return console.log(s),r.a.createElement("div",null,s&&r.a.createElement("div",{className:"currentUser"},r.a.createElement("h4",null,"Current User"),r.a.createElement("ul",null,s)),r.a.createElement("br",null),r.a.createElement("h3",null,"Guest Users"),r.a.createElement("ul",null,a),r.a.createElement("h3",null,"Admin Users"),r.a.createElement("ul",null,n))}}]),t}(r.a.Component),E=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",loading:!1,submitted:!1,error:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n)),this.setState({submitted:!1}),console.log(a,n)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.username,r=a.password;n&&r&&(e.target.username.value="",e.target.password.value="",this.setState({loading:!0}),setTimeout(function(){t.setState({username:n,password:r,loading:!1,submitted:!0})},2e3))}},{key:"onLogout",value:function(){this.setState({submitted:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"text-center"},!this.state.submitted&&r.a.createElement("form",{name:"form",onSubmit:function(t){return e.handleSubmit(t)},className:"loginForm"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Login"),r.a.createElement("label",{htmlFor:"username",className:"sr-only"},"Username"),r.a.createElement("input",{className:"form-control mb-3",name:"username",type:"text",value:this.state.username,onChange:function(t){return e.handleChange(t)},placeholder:"Username",required:!0,autoFocus:!0}),r.a.createElement("label",{htmlFor:"password",className:"sr-only"},"Password"),r.a.createElement("input",{className:"form-control mb-3",name:"password",type:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password",required:!0}),r.a.createElement("div",{className:"checkbox mb-3"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),!this.state.loading&&r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block"},"Sign up"),this.state.loading&&r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"button",disabled:!0},r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Loading...")),this.state.submitted&&r.a.createElement("div",null,r.a.createElement(v,{firstname:this.state.username}),r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:function(){return e.onLogout()}},"Logout")))}}]),t}(r.a.Component)),j=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"All rights reserved - \xa9 2019"))}}]),t}(r.a.Component)),O=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(j,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22),a(23);i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.6557360e.chunk.js.map