(this["webpackJsonpedu-app-1"]=this["webpackJsonpedu-app-1"]||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/mrrobot.97f0a69e.png"},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(40),r=n(4),o=function(e){return{type:"dialogs/ADD-MESSAGE",newMessageText:e}},u={dialogs:[{id:1,name:"Vavan"},{id:2,name:"Iren"},{id:3,name:"Bieven"},{id:4,name:"Kama"},{id:5,name:"Maga"},{id:6,name:"Konek"}],messages:[{id:1,message:"Hello"},{id:2,message:"What do we get for 10 dollars?"},{id:3,message:"Everything"},{id:4,message:"Ok alright"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var a=n(133),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"8b8490ba-4ac0-44fd-a386-a1e6ec25d08c"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},u={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t)},saveProfile:function(e){return r.put("profile",e)}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},135:function(e,t,n){e.exports=n.p+"static/media/preloader.7f8e1b53.gif"},137:function(e,t,n){e.exports=n.p+"static/media/eye.16969707.png"},138:function(e,t,n){e.exports={loginPage:"Login_loginPage__-UEgp"}},140:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},141:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2WupE"}},168:function(e,t,n){e.exports=n(294)},17:function(e,t,n){e.exports={nav:"Nav_nav__3gICw",item:"Nav_item__96rLj",activeLink:"Nav_activeLink__GsTVR"}},173:function(e,t,n){},174:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),u=n.n(o),c=(n(173),n(35)),s=n(36),i=n(38),l=n(37),p=(n(174),n(17)),f=n.n(p),m=n(15);var d=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("ul",null,r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/dialogs"},"Messages")),r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/users"},"Users")),r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/photos"},"Photos")),r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/music"},"Music")),r.a.createElement("li",{className:f.a.item},r.a.createElement(m.b,{activeClassName:f.a.activeLink,to:"/settings"},"Settings"))))};var g=function(){return r.a.createElement("div",null,"Photos")};var h=function(){return r.a.createElement("div",null,"Music")};var E=function(){return r.a.createElement("div",null,"Settings")},b=n(9),v=n(14),_=n(8),O=n.n(_),w=n(12),S=n(40),C=n(4),P=n(13),j="users/FOLLOW",y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:j,userId:e}},U=function(e){return{type:"users/UNFOLLOW",userId:e}},T=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},k=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},x=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(C.a)(Object(C.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(C.a)(Object(C.a)({},e),{},{followed:!0}):e}))});case"users/UNFOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(C.a)(Object(C.a)({},e),{},{followed:!1}):e}))});case"users/SET_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING":return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},L=n(57),A=n(32),F=n.n(A),B=n(107),R=n.n(B),z=n(41),G=n(96),M=n(46),D=n.n(M),H=n(134),V=n.n(H),W=function(e){for(var t=e.pageSize,n=e.totalItemsCount,o=e.currentPage,u=e.onPageChange,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(n/t),l=[],p=1;p<=i;p++)l.push(p);var f=Math.ceil(i/s),m=Object(a.useState)(1),d=Object(G.a)(m,2),g=d[0],h=d[1],E=(g-1)*(s+1),b=g*s;return r.a.createElement("div",{className:D.a.paginator},g>1&&r.a.createElement("button",{className:D.a.portionButton,onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=b})).map((function(e){return r.a.createElement("span",{className:V()(Object(z.a)({},D.a.selectedPage,o===e),D.a.pageNumber),key:e,onClick:function(){u(e)}},e)})),f>g&&r.a.createElement("button",{className:D.a.portionButton,onClick:function(){h(g+1)}},"NEXT"))},K=function(e){var t=e.currentPage,n=e.onPageChange,a=e.totalUsersCount,o=e.pageSize,u=e.users,c=Object(L.a)(e,["currentPage","onPageChange","totalUsersCount","pageSize","users"]);return r.a.createElement("div",{className:F.a.usersPage},r.a.createElement(W,{currentPage:t,onPageChange:n,totalItemsCount:a,pageSize:o}),u.map((function(e){return r.a.createElement("div",{className:F.a.userInList,key:e.id},r.a.createElement("span",null,r.a.createElement("div",{className:F.a.userName},e.name),r.a.createElement("span",null,r.a.createElement("div",null,"Country: "),r.a.createElement("div",null,"City: ")),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/profile/".concat(e.id)},r.a.createElement("img",{className:F.a.userPic,alt:"small userpic",src:null!=e.photos.small?e.photos.small:R.a}))),r.a.createElement("div",null,e.followed?r.a.createElement("button",{className:F.a.unfollowButton,disabled:c.followingInProgress.some((function(t){return t===e.id})),onClick:function(){c.unfollow(e.id)}},"unfollow"):r.a.createElement("button",{className:F.a.followButton,disabled:c.followingInProgress.some((function(t){return t===e.id})),onClick:function(){c.follow(e.id)}},"follow ",r.a.createElement("b",null,e.name)))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,e.status))))})))},X=n(67),J=n(10),q=n(136),Q=Object(q.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Z=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.totalUsersCount},Y=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,this.props.pageTitle),this.props.isFetching?r.a.createElement(X.a,null):null,r.a.createElement(K,{currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize}))}}]),n}(r.a.Component),ae=Object(J.compose)(Object(v.b)((function(e){return{users:Q(e),pageSize:Z(e),totalUsersCount:$(e),currentPage:Y(e),isFetching:ee(e),followingInProgress:te(e)}}),{follow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,P.d.follow(e);case 3:0===t.sent.data.resultCode&&n(N(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark((function t(n,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x(!0,e)),t.next=3,P.d.unfollow(e);case 3:0===t.sent.data.resultCode&&n(U(e)),n(x(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setCurrentPage:T,getUsers:function(e,t){return function(){var n=Object(w.a)(O.a.mark((function n(a,r){var o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(k(!0)),a(T(e)),n.next=4,P.d.getUsers(e,t);case 4:o=n.sent,a(k(!1)),a({type:"users/SET_USERS",users:o.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:o.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(ne),re=n(72),oe=n.n(re),ue=n(137),ce=n.n(ue);var se=function(e){return r.a.createElement("header",{className:oe.a.header},r.a.createElement("img",{src:ce.a,alt:"logo"}),r.a.createElement("div",{className:oe.a.login},e.isAuth?r.a.createElement("div",null," ",e.login," ",r.a.createElement("button",{className:oe.a.logoutButton,onClick:e.logout},"Logout")):r.a.createElement(m.b,{to:"/login"},"L O G I N",r.a.createElement(b.a,{to:"/login"}))))},ie=n(33),le={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},pe=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,login:t,email:n,isAuth:a}}},fe=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},me=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var n,a,r,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:n=e.sent,a=n.data.data,r=a.id,o=a.login,u=a.email,0===n.data.resultCode&&t(pe(r,o,u,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(fe(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(C.a)(Object(C.a)({},e),t.payload);default:return e}},he=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(se,this.props)}}]),n}(r.a.Component),Ee=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(w.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(he),be=n(129),ve=n(130),_e=n(49),Oe=n(68),we=n(42),Se=n.n(we),Ce=n(138),Pe=n.n(Ce),je=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(be.a,{placeholder:"Email",name:"email",component:_e.a,validate:[Oe.b]})),r.a.createElement("div",null,r.a.createElement(be.a,{placeholder:"Password",name:"password",component:_e.a,validate:[Oe.b],type:"password"})),r.a.createElement("div",null,"Remember me ",r.a.createElement(be.a,{type:"checkbox",name:"rememberMe",component:_e.a})),a&&r.a.createElement("img",{src:a,alt:"captcha"}),a&&r.a.createElement(be.a,{placeholder:"Enter the symbols from image",name:"captcha",component:_e.a,validate:[Oe.b]}),n&&r.a.createElement("div",{className:Se.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",{className:Se.a.loginButton},"Login")))})),ye=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(w.a)(O.a.mark((function r(o){var u,c;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n,a);case 2:0===(u=r.sent).data.resultCode?o(me()):(10===u.data.resultCode&&o(de()),c=u.data.messages.length>0?u.data.messages[0]:"Some error!",o(Object(ie.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",{className:Pe.a.loginPage},r.a.createElement("h1",null,"Login page"),r.a.createElement("p",null,"Please enter your login and password"),r.a.createElement(je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Ne={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},Te=n(140),ke=n.n(Te),xe=function(e){return r.a.createElement("div",{className:ke.a.footer},":\\")},Ie=n(141),Le=n.n(Ie),Ae=function(){return r.a.createElement("div",{className:Le.a.sidebar})},Fe=r.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Be=r.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Re=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(m.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ee,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(b.a,{to:"/profile"}))}}),r.a.createElement(b.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(Fe,null))}}),r.a.createElement(b.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(Be,null))}}),r.a.createElement(b.b,{path:"/users",render:function(){return r.a.createElement(ae,{pageTitle:"All users"})}}),r.a.createElement(b.b,{path:"/login",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(b.b,{path:"/photos",component:g}),r.a.createElement(b.b,{path:"/music",component:h}),r.a.createElement(b.b,{path:"/settings",component:E}),r.a.createElement(b.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))),r.a.createElement(Ae,null),r.a.createElement(xe,null))):r.a.createElement(X.a,null)}}]),n}(r.a.Component),ze=Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(me()).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}})(Re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(95),Me=n(128),De=n(131),He=n(142),Ve=n(10),We=Ve.createStore,Ke=Ve.combineReducers,Xe=Ve.applyMiddleware,Je=Ve.compose,qe=We(Ke({profilePage:Ge.b,dialogsPage:Me.a,usersPage:I,auth:ge,form:De.a,app:Ue}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je)(Xe(He.a)));window._store_=qe;var Qe=qe;u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:Qe},r.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={usersPage:"Users_usersPage__3xdAn",userPic:"Users_userPic__1_BqH",selectedPage:"Users_selectedPage__J63sh",userInList:"Users_userInList__OVJXd",userName:"Users_userName__1mt5V",unfollowButton:"Users_unfollowButton__3QsTy",followButton:"Users_followButton__2xwHU"}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",formSummaryError:"FormsControls_formSummaryError__1F2-S",saveButton:"FormsControls_saveButton__3VGCw",loginButton:"FormsControls_loginButton__3wK0r"}},46:function(e,t,n){e.exports={paginator:"Pagination_paginator__1TXwA",pageNumber:"Pagination_pageNumber__1r7yr",selectedPage:"Pagination_selectedPage__zdDHb",portionButton:"Pagination_portionButton__12LKm"}},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(57),r=n(0),o=n.n(r),u=n(42),c=n.n(u),s=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,s=Object(a.a)(e,["input","meta"]),i=r&&u;return o.a.createElement("div",{className:i?c.a.formControl:""},o.a.createElement("textarea",Object.assign({},t,s)),o.a.createElement("div",null,i&&o.a.createElement("span",null,u)))},i=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,s=Object(a.a)(e,["input","meta"]),i=r&&u;return o.a.createElement("div",{className:i?c.a.formControl:""},o.a.createElement("input",Object.assign({},t,s)),o.a.createElement("div",null,i&&o.a.createElement("span",null,u)))}},67:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(135),u=n.n(o);t.a=function(){return r.a.createElement("img",{src:u.a,alt:"preloader"})}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Required field"},r=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={header:"Header_header__1VCKf",login:"Header_login__3V3Qa",logoutButton:"Header_logoutButton__21mWM"}},95:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E})),n.d(t,"a",(function(){return b}));var a=n(41),r=n(8),o=n.n(r),u=n(12),c=n(40),s=n(4),i=n(13),l=n(33),p="profile/ADD-POST",f={posts:[{id:1,post:"Hey you there!",likesCount:4},{id:2,post:"Bro.. nice 2 meet u",likesCount:46},{id:3,post:":O:O:O:O",likesCount:12}],profile:null,status:""},m=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:a=t.sent,n(v(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(_(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(_(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n(O(a.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,r){var u,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=r().auth.id,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(m(u)),t.next=11;break;case 8:return s=c.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase(),n(Object(l.a)("editProfile",{contacts:Object(a.a)({},s,c.data.messages[0])})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},b=function(e){return{type:p,newPostText:e}},v=function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},_=function(e){return{type:"profile/SET_STATUS",status:e}},O=function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:4,post:t.newPostText,likesCount:0}])});case"profile/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"profile/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"profile/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"profile/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[168,1,2]]]);
//# sourceMappingURL=main.74ed1fb1.chunk.js.map