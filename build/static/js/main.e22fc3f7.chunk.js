(this["webpackJsonpred-onion-restaurent"]=this["webpackJsonpred-onion-restaurent"]||[]).push([[0],{55:function(e,t,a){e.exports=a(85)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),m=(a(60),a(7)),s=(a(61),a(6)),i=a(9),o=(a(62),a(87)),u=a(91),d=function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),c=Object(m.a)(r,2),d=c[0],E=c[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),p=h[0],b=h[1],g=Object(n.useState)([]),N=Object(m.a)(g,2),v=N[0],w=N[1];Object(n.useEffect)((function(){fetch("https://red-onion-restaurant-sarwar.herokuapp.com/foodMenu").then((function(e){return e.json()})).then((function(e){E(e)})),fetch("https://red-onion-restaurant-sarwar.herokuapp.com/foodMenu").then((function(e){return e.json()})).then((function(e){b(e.filter((function(e){return"lunch"===e.category})))})),fetch("https://red-onion-restaurant-sarwar.herokuapp.com/cart").then((function(e){return e.json()})).then((function(e){w(e.filter((function(e){return e.email===a.email})))}))}),[]);var j=Object(n.useState)(d.filter((function(e){return"lunch"===e.category}))),y=Object(m.a)(j,2),x=y[0],O=y[1],k=Object(n.useState)("lunch"),C=Object(m.a)(k,2),S=C[0],q=C[1],P=Object(i.g)(),R=function(e){q(e);var t=d.filter((function(t){return t.category===e}));O(t)},A=function(){P.push("/placeOrder")};return l.a.createElement(o.a,{fluid:!0},l.a.createElement(o.a,null,l.a.createElement(u.a,{className:"justify-content-center font-weight-bold p-5",activeKey:"/home"},l.a.createElement(u.a.Item,null,l.a.createElement(s.b,{className:"breakfast"===S?"active mr-3":"navLink mr-3",to:"",onClick:function(){R("breakfast")}},"Breakfast")),l.a.createElement(u.a.Item,null,l.a.createElement(s.b,{className:"lunch"===S?"active mr-3":"navLink mr-3",to:"",onClick:function(){R("lunch")}},"Lunch")),l.a.createElement(u.a.Item,null,l.a.createElement(s.b,{className:"dinner"===S?"active mr-3":"navLink mr-3",to:"",onClick:function(){R("dinner")}},"Dinner"))),l.a.createElement("div",{className:"row p-4"},0===x.length?p.map((function(e){return l.a.createElement("div",{className:"col-md-4 p-3 items",key:e._id},l.a.createElement(s.b,{to:"/itemDetails/".concat(e._id)},l.a.createElement("img",{src:e.image,className:"w-50",alt:""}),l.a.createElement("h5",{className:"text-dark"},e.title),l.a.createElement("p",{className:"text-muted"},e.info),l.a.createElement("h2",{className:"text-dark"},"$",e.price)))})):x.map((function(e){return l.a.createElement("div",{className:"col-md-4 p-3 items",key:e._id},l.a.createElement(s.b,{to:"/itemDetails/".concat(e._id)},l.a.createElement("img",{src:e.image,className:"w-50",alt:""}),l.a.createElement("h5",{className:"text-dark"},e.title),l.a.createElement("p",{className:"text-muted"},e.info),l.a.createElement("h2",{className:"text-dark"},"$",e.price)))}))),v.length?l.a.createElement("button",{onClick:function(){return A()},className:"bg-danger btn text-white rounded pl-5 pr-5 m-5"},"Checkout Your Food"):l.a.createElement("button",{onClick:function(){return A()},className:"bg-secondary btn text-white rounded pl-5 pr-5 m-5",disabled:!0},"Checkout Your Food")))},E=a(90),f=(a(68),function(){return l.a.createElement(o.a,{fluid:!0,className:"footer"},l.a.createElement(o.a,null,l.a.createElement(E.a,{expand:"lg p-4"},l.a.createElement(E.a.Brand,{href:"#home"},l.a.createElement("img",{src:"https://iili.io/27MLNa.png",width:"100",className:"d-inline-block align-top",alt:""})),l.a.createElement(u.a,{className:"ml-auto"},l.a.createElement("ul",{className:"d-flex flex-column p-3 mr-5"},l.a.createElement(s.b,{to:"",className:"text-white"},"Get help"),l.a.createElement(s.b,{to:"",className:"text-white"},"Read FAQs"),l.a.createElement(s.b,{to:"",className:"text-white"},"View all cities"),l.a.createElement(s.b,{to:"",className:"text-white"},"Restaurants near me")),l.a.createElement("ul",{className:"d-flex flex-column p-3"},l.a.createElement(s.b,{to:"",className:"text-white"},"Get help"),l.a.createElement(s.b,{to:"",className:"text-white"},"Read FAQs"),l.a.createElement(s.b,{to:"",className:"text-white"},"View all cities"),l.a.createElement(s.b,{to:"",className:"text-white"},"Restaurants near me")))),l.a.createElement(E.a,{expand:"lg p-3"},l.a.createElement(u.a,null,l.a.createElement("p",{className:"text-muted"},"Copyright \xa9 2020 Online food")),l.a.createElement(u.a,{className:"ml-auto"},l.a.createElement(s.b,{to:"",className:"mr-5 text-white"},"Privacy Policy."),l.a.createElement(s.b,{to:"",className:"mr-5 text-white"},"Terms of Use"),l.a.createElement(s.b,{to:"",className:"text-white"},"Pricing")))))}),h=a(30),p=(a(69),function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),d=i[0],f=i[1];return Object(n.useEffect)((function(){fetch("https://red-onion-restaurant-sarwar.herokuapp.com/cart").then((function(e){return e.json()})).then((function(e){f(e.filter((function(e){return e.email===a.email})))}))}),[]),l.a.createElement(o.a,{fluid:!0},l.a.createElement(o.a,null,l.a.createElement(E.a,{expand:"lg",className:"fixed"},l.a.createElement(E.a.Brand,null,l.a.createElement(s.b,{to:"/home"},l.a.createElement("img",{src:"https://iili.io/27JGwB.png",style:{width:150},className:"d-inline-block align-top",alt:""}))),l.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(u.a,{className:"ml-auto"},l.a.createElement(s.b,{className:"navLink",to:"/placeOrder",bg:"dark"},l.a.createElement(h.a,null),l.a.createElement("span",{className:"text-danger"},d.length)),a.isSiggnedIn?l.a.createElement(s.b,{to:"",className:"navLink font-weight-bold"},a.name):l.a.createElement(s.b,{to:"/login",className:"navLink font-weight-bold"},"Login"),a.isSiggnedIn?l.a.createElement(s.b,{to:"",onClick:function(){return r({})},className:"signUpButton"},"Sign out"):l.a.createElement(s.b,{to:"/login",className:"signUpButton"},"Sign up"))))))}),b=(a(70),a(52)),g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://red-onion-restaurant-sarwar.herokuapp.com/services").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),l.a.createElement(o.a,{fluid:!0},l.a.createElement(o.a,null,l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h1",{className:"p-2"},"Why you choose us"),l.a.createElement("p",null,"Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperious increasing surrounded.")),l.a.createElement("div",{className:"row"},a.map((function(e){return l.a.createElement("div",{className:"col-md-4 servicesContent p-5 mb-5",key:e._id},l.a.createElement("div",null,l.a.createElement("img",{className:"w-100 h-50 mb-4",src:e.image,alt:""})),l.a.createElement("div",{className:"d-flex p-3"},l.a.createElement("div",null,l.a.createElement("img",{src:e.icon,alt:""})),l.a.createElement("div",null,l.a.createElement("h4",{className:"p-2"},e.title),l.a.createElement("p",{className:"text-muted"},e.body),l.a.createElement(s.b,{to:"/",className:"font-weight-bold p-2"},"See more"),l.a.createElement("span",null,l.a.createElement(s.b,{to:"/"},l.a.createElement(b.a,{className:"circle bg-success text-white rounded-circle p-1"}))))))})))))},N=a(89),v=a(88),w=a(53),j=(a(71),function(){return l.a.createElement("div",{className:"topBanner"},l.a.createElement("div",{className:"bannerContent"},l.a.createElement("h1",null,"Best food waiting for your belly"),l.a.createElement(N.a,{inline:!0,className:"justify-content-center"},l.a.createElement(v.a,null,l.a.createElement(w.a,{type:"text",placeholder:"Search food items",style:{borderRadius:20}}),l.a.createElement(v.a.Append,null,l.a.createElement("button",{className:"btn btn-danger",style:{borderRadius:20,marginLeft:-30,zIndex:1}},"Search"))))))}),y=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(j,null),l.a.createElement(d,null),l.a.createElement(g,null),l.a.createElement(f,null))},x=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("h1",{style:{textAlign:"center",height:"100vh"}},"Page Not Found 404"),l.a.createElement(f,null))},O=(a(72),a(24)),k=a(25),C=function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),c=Object(m.a)(r,2),s=c[0],u=c[1],d=Object(i.i)().id;Object(n.useEffect)((function(){fetch("https://red-onion-restaurant-sarwar.herokuapp.com/foodMenu").then((function(e){return e.json()})).then((function(e){u(e.find((function(e){return e._id===d})))}))}),[]);var E=Object(n.useState)(1),b=Object(m.a)(E,2),g=b[0],N=b[1],v=Object(i.g)();return l.a.createElement(o.a,{fluid:!0},l.a.createElement(p,null),l.a.createElement(o.a,null,l.a.createElement("div",{className:"row p-5"},l.a.createElement("div",{className:"col-md-6 p-5"},l.a.createElement("h2",null,s.title),l.a.createElement("p",{className:"text-muted"},"Gay one the what walk the she. Demesne mention promise you justice arrived way. Amazing foods are Or and icreasing to in especially inquieted companions acceptance admiration. Outweight it families distance wandered ye."),l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",{className:"ml-auto p-3"},"$",s.price*g)," ",l.a.createElement("h4",{className:"mr-auto p-3 font-weight-bold"},l.a.createElement(O.a,{onClick:function(){return N(g-1)},icon:k.b})," ",g," ",l.a.createElement(O.a,{onClick:function(){return N(g+1)},icon:k.d}))),l.a.createElement("button",{onClick:function(){return function(){var e=s;e.quantity=g,e.email=a.email,fetch("https://red-onion-restaurant-sarwar.herokuapp.com/addCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("Item successfully added to cart."),v.push("/home")}()},className:"cartBtn"},l.a.createElement(h.a,{className:"m-2"})," Add")),l.a.createElement("div",{className:"col-md-6 p-3"},l.a.createElement("img",{className:"w-75",src:s.image,alt:""})))),l.a.createElement(f,null))},S=(a(76),a(31)),q=function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(S.a)()),c=r.register,s=r.handleSubmit,u=r.errors,d=Object(n.useState)(!1),E=Object(m.a)(d,2),h=E[0],b=E[1],g=Object(n.useState)([]),N=Object(m.a)(g,2),v=N[0],w=N[1],j=Object(n.useState)(0),y=Object(m.a)(j,2),x=y[0],C=y[1],q=Object(i.g)();Object(n.useEffect)((function(){fetch("https://red-onion-restaurant-sarwar.herokuapp.com/cart").then((function(e){return e.json()})).then((function(e){w(e.filter((function(e){return e.email===a.email})))}))}),[]);var P=function(){q.push("/deliveryInfo")};return l.a.createElement(o.a,{fluid:!0},l.a.createElement(p,null),l.a.createElement(o.a,null,l.a.createElement("div",{className:"placeOuderContainer row p-5"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("form",{onSubmit:s((function(e){b(!0),console.log(e)}))},l.a.createElement("h4",null,"Edit Delivery Details"),l.a.createElement("hr",null),l.a.createElement("input",{name:"address",className:"form-control bg-light",defaultValue:"",ref:c({required:!0}),placeholder:"Address"}),u.address&&l.a.createElement("span",{className:"error"},"Address is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"roadNo",className:"form-control bg-light",defaultValue:"",ref:c({required:!0}),placeholder:"Road No"}),u.roadNo&&l.a.createElement("span",{className:"error"},"Road No is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"flat",className:"form-control bg-light",defaultValue:"",ref:c({required:!0}),placeholder:"Flat, suite or floor"}),u.flat&&l.a.createElement("span",{className:"error"},"Flat, suite or floor is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"businessName",className:"form-control bg-light",defaultValue:"",ref:c({required:!0}),placeholder:"Business Name"}),u.businessName&&l.a.createElement("span",{className:"error"},"Business Name is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"instructor",className:"form-control bg-light",defaultValue:"",ref:c({required:!0}),placeholder:"Add delivery instructor"}),u.instructor&&l.a.createElement("span",{className:"error"},"Delivery instructor is required"),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-danger text-white"},"Save & Continue"))),l.a.createElement("div",{className:"col-md-5 p-5 font-weight-bold",style:{textAlign:"left"}},l.a.createElement("div",{className:"p-3"},l.a.createElement("h6",null,"From ",l.a.createElement("strong",null,"Gulshan Plaza Restaurent GPR")),l.a.createElement("p",null,"Arriving in 20-30 min"),l.a.createElement("p",null,"107 Rd No 8")),l.a.createElement("div",null,v.map((function(e){return l.a.createElement("div",{style:{borderRadius:20},className:"row bg-light p-2 mb-2",key:e._id},l.a.createElement("div",{className:"col-3"},l.a.createElement("img",{src:e.image,className:"img-fluid",alt:""})),l.a.createElement("div",{className:"col-6"},l.a.createElement("h6",null,e.title),l.a.createElement("h6",{className:"text-danger"},"$",e.price*(e.quantity+x)),l.a.createElement("h6",{className:"text-muted"},"Delivery free")),l.a.createElement("div",{className:"col-3"},l.a.createElement(O.a,{icon:k.a,onClick:function(){C(x-1)}})," ",l.a.createElement("h6",null,e.quantity+x),l.a.createElement(O.a,{icon:k.c,onClick:function(){C(x+1)}})))}))),l.a.createElement("div",{className:"p-5"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("p",null,"Subtotal: 4 item"),l.a.createElement("p",{className:"ml-auto"},"$320")),l.a.createElement("div",{className:"d-flex"},l.a.createElement("p",null,"Tax"),l.a.createElement("p",{className:"ml-auto"},"$5.00")),l.a.createElement("div",{className:"d-flex"},l.a.createElement("p",null,"Delivery fee"),l.a.createElement("p",{className:"ml-auto"},"$2.00")),l.a.createElement("div",{className:"d-flex"},l.a.createElement("h6",null,"Total"),l.a.createElement("h6",{className:"ml-auto"},l.a.createElement("strong",null,"$327"))),h?l.a.createElement("button",{onClick:function(){return P()},className:"bg-danger btn text-white rounded pl-5 pr-5 m-5"},"Place Order"):l.a.createElement("button",{onClick:function(){return P()},className:"bg-secondary btn text-white rounded pl-5 pr-5 m-5",disabled:!0},"Place Order"))))),l.a.createElement(f,null))},P=(a(78),function(){return l.a.createElement(o.a,{fluid:!0},l.a.createElement(p,null),l.a.createElement(o.a,null,l.a.createElement("div",{className:"row p-5"},l.a.createElement("div",{className:"col-md-8 p-5"},l.a.createElement("img",{src:"https://www.jquery-az.com/wp-content/uploads/2016/08/95.0_1-jquery-map.jpg",alt:"",className:"rounded img-fluid",style:{borderRadius:20}})),l.a.createElement("div",{className:"col-md-4 p-5 rounded"},l.a.createElement("div",{className:"bg-light p-3",style:{borderRadius:20,textAlign:"left"}},l.a.createElement("div",null,l.a.createElement("img",{src:"https://iili.io/2vJOzb.png",alt:"",className:"w-25"})),l.a.createElement("div",{className:"bg-white rounded p-2"},l.a.createElement("h6",null,"Your Location"),l.a.createElement("p",null,l.a.createElement("small",{className:"text-muted"},"107 Rd No 8")),l.a.createElement("h6",null,"Shop Address"),l.a.createElement("p",null,l.a.createElement("small",{className:"text-muted"},"Gulshan Plaza Restaura GPR"))),l.a.createElement("div",null,l.a.createElement("h3",null,"09:30"),l.a.createElement("p",null,l.a.createElement("small",{className:"text-muted"},"Estimated delivery time"))),l.a.createElement("div",null),l.a.createElement("button",{className:"bg-danger btn text-white rounded"},"Contact"))))),l.a.createElement(f,null))}),R=(a(79),a(28)),A=(a(82),{apiKey:"AIzaSyDmndfnUrKsaEmRFjKnEK22ez2XyzonF4s",authDomain:"red-onion-restaurent-sarwar.firebaseapp.com",databaseURL:"https://red-onion-restaurent-sarwar.firebaseio.com",projectId:"red-onion-restaurent-sarwar",storageBucket:"red-onion-restaurent-sarwar.appspot.com",messagingSenderId:"1010951283050",appId:"1:1010951283050:web:90c5de1ec7c275a2ddc513"}),B=function(){var e=Object(n.useContext)(D),t=Object(m.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)({isSiggnedIn:!1,name:"",email:"",photo:""}),c=Object(m.a)(r,2),o=(c[0],c[1]),u=Object(i.g)(),d=(Object(i.h)().state||{from:{pathname:"/"}}).from,E=Object(S.a)(),f=E.register,h=E.handleSubmit,p=E.errors,b=Object(n.useState)(!1),g=Object(m.a)(b,2),N=g[0],v=g[1];0===R.apps.length&&R.initializeApp(A);return l.a.createElement("div",{className:"container-fluid loginContainer"},l.a.createElement("div",{className:"container w-md-50 mx-auto"},l.a.createElement("div",{className:"p-5"},l.a.createElement(s.b,{to:"/home"},l.a.createElement("img",{src:"https://iili.io/27JGwB.png",style:{width:200},className:"d-inline-block align-top",alt:""}))),l.a.createElement("div",{className:"p-5 col-md-6 mx-auto"},l.a.createElement("form",{onSubmit:h((function(e){console.log(e)}))},N&&l.a.createElement("input",{name:"name",className:"form-control bg-light",defaultValue:"",ref:f({required:!0}),placeholder:"Name"}),p.name&&l.a.createElement("span",{className:"error"},"Name is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"email",type:"email",className:"form-control bg-light",defaultValue:"",ref:f({required:!0}),placeholder:"Email"}),p.email&&l.a.createElement("span",{className:"error"},"Email is required"),l.a.createElement("br",null),l.a.createElement("input",{name:"password",type:"password",className:"form-control bg-light",defaultValue:"",ref:f({required:!0}),placeholder:"Password"}),p.password&&l.a.createElement("span",{className:"error"},"Password is required"),l.a.createElement("br",null),N&&l.a.createElement("input",{name:"confirmPassword",type:"password",className:"form-control bg-light",defaultValue:"",ref:f({required:!0}),placeholder:"Confirm Password"}),p.confirmPassword&&l.a.createElement("span",{className:"error"},"Confirm Password is required"),l.a.createElement("br",null),N?l.a.createElement("button",{type:"submit",className:"btn btn-danger text-white"},"Sign up"):l.a.createElement("button",{type:"submit",className:"btn btn-danger text-white"},"Sign in"),l.a.createElement("br",null),N?l.a.createElement(s.b,{to:"/login",onClick:function(){return v(!N)},className:"text-danger"},"Already have an account"):l.a.createElement(s.b,{to:"/login",onClick:function(){return v(!N)},className:"text-danger"},"Create an account")),l.a.createElement("div",{className:""},l.a.createElement("h6",null,"or ",l.a.createElement("hr",null)),l.a.createElement("div",{className:"border rounded p-1 pl-5 pr-5 "},l.a.createElement("button",{onClick:function(){var e=new R.auth.GoogleAuthProvider;R.auth().signInWithPopup(e).then((function(e){var t=e.user,n={isSiggnedIn:!0,name:t.displayName,email:t.email,photo:t.photoURL};o(n),a(n),u.replace(d)})).catch((function(e){var t=e.code,a=e.message;console.log(t,a)}))},className:"btn font-weight-bold text-dark"},l.a.createElement("span",null,l.a.createElement("img",{src:"https://iili.io/2xw5TQ.png",alt:"",className:"m-1",style:{width:16}})),"Continue with Google"))))))},I=a(54),L=function(e){var t=e.children,a=Object(I.a)(e,["children"]),r=Object(n.useContext)(D),c=Object(m.a)(r,2),s=c[0];c[1];return l.a.createElement(i.b,Object.assign({},a,{render:function(e){var a=e.location;return s.email?t:l.a.createElement(i.a,{to:{pathname:"/login",state:{from:a}}})}}))},D=Object(n.createContext)();var G=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(D.Provider,{value:[a,r]},l.a.createElement(s.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/home"},l.a.createElement(y,null)),l.a.createElement(i.b,{path:"/foodMenu"},l.a.createElement(d,null)),l.a.createElement(L,{path:"/itemDetails/:id"},l.a.createElement(C,null)),l.a.createElement(i.b,{path:"/login"},l.a.createElement(B,null)),l.a.createElement(L,{path:"/placeOrder"},l.a.createElement(q,null)),l.a.createElement(L,{path:"/deliveryInfo"},l.a.createElement(P,null)),l.a.createElement(i.b,{exact:!0,path:"/"},l.a.createElement(y,null)),l.a.createElement(i.b,{path:"*"},l.a.createElement(x,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.e22fc3f7.chunk.js.map