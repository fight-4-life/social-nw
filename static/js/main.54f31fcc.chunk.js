(this["webpackJsonpedu-app-1"]=this["webpackJsonpedu-app-1"]||[]).push([[0],{102:function(e,t,n){e.exports={header:"Header_header__1VCKf",login:"Header_login__3V3Qa",logoutButton:"Header_logoutButton__21mWM"}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return S}));var a=n(10),r=n.n(a),c=n(21),u=n(54),o=n(2),i=n(51),s=n(16),l=function(e){return s.b.get("profile/".concat(e)).then((function(e){return e.data}))},m=function(e){return s.b.get("profile/status/".concat(e)).then((function(e){return e.data}))},f=function(e){return s.b.put("profile/status",{status:e}).then((function(e){return e.data}))},p=function(e){var t=new FormData;return t.append("image",e),s.b.put("profile/photo",t).then((function(e){return e.data}))},d=function(e){return s.b.put("profile",e).then((function(e){return e.data}))},E="profile/ADD-POST",b={addNewPostActionCreator:function(e){return{type:E,newPostText:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"profile/SET_STATUS",status:e}},deletePost:function(e){return{type:"profile/DELETE_POST",id:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}}},g={posts:[{id:1,post:"Hey you there!",likesCount:4},{id:2,post:"Bro.. nice 2 meet u",likesCount:46},{id:3,post:":O:O:O:O",likesCount:12}],profile:null,status:""},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n(b.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:a=t.sent,n(b.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:0===t.sent.resultCode&&n(b.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===(a=t.sent).resultCode&&n(b.savePhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.id,t.next=3,d(e);case 3:if(0!==(u=t.sent).resultCode){t.next=8;break}n(h(c)),t.next=10;break;case 8:return n(Object(i.a)("editProfile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[{id:4,post:t.newPostText,likesCount:0}])});case"profile/SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"profile/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"profile/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"profile/SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},138:function(e,t,n){e.exports=n.p+"static/media/mrrobot.97f0a69e.png"},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(54),r=n(2),c={dialogs:[{id:1,name:"Vavan"},{id:2,name:"Iren"},{id:3,name:"Bieven"},{id:4,name:"Kama"},{id:5,name:"Maga"},{id:6,name:"Konek"}],messages:[{id:1,message:"Hello"},{id:2,message:"What do we get for 10 dollars?"},{id:3,message:"Everything"},{id:4,message:"Ok alright"}]},u={sendMessageActionCreator:function(e){return{type:"dialogs/ADD-MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:n}])});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var a,r=n(165),c=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"8b8490ba-4ac0-44fd-a386-a1e6ec25d08c"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},175:function(e,t,n){e.exports=n.p+"static/media/eye.16969707.png"},176:function(e,t,n){e.exports={loginPage:"Login_loginPage__-UEgp"}},178:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},179:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2WupE"}},207:function(e,t,n){e.exports=n(338)},212:function(e,t,n){},213:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Nav_nav__3gICw",item:"Nav_item__96rLj",activeLink:"Nav_activeLink__GsTVR"}},338:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),u=n.n(c),o=(n(212),n(88)),i=n(89),s=n(94),l=n(93),m=(n(213),n(23)),f=n.n(m),p=n(22),d=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("ul",null,r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/dialogs"},"Messages")),r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/users"},"Users")),r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/photos"},"Photos")),r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/music"},"Music")),r.a.createElement("li",{className:f.a.item},r.a.createElement(p.b,{activeClassName:f.a.activeLink,to:"/settings"},"Settings"))))},E=function(){return r.a.createElement("div",null,"Photos")},b=function(){return r.a.createElement("div",null,"Music")},g=function(){return r.a.createElement("div",null,"Settings")},h=n(13),v=n(11),O=n(2),_=n(164),S=Object(_.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),j=function(e){return e.usersPage.pageSize},w=function(e){return e.usersPage.totalUsersCount},y=function(e){return e.usersPage.currentPage},C=function(e){return e.usersPage.isFetching},P=function(e){return e.usersPage.followingInProgress},T=function(e){return e.usersPage.filter},N=n(95),k=n(87),x=n(60),U=n.n(x),I=n(12),L=n.n(I),A=function(e){for(var t=e.pageSize,n=e.totalItemsCount,c=e.currentPage,u=e.onPageChange,o=e.portionSize,i=void 0===o?10:o,s=Math.ceil(n/t),l=[],m=1;m<=s;m++)l.push(m);var f=Math.ceil(s/i),p=Object(a.useState)(1),d=Object(k.a)(p,2),E=d[0],b=d[1],g=(E-1)*(i+1),h=E*i;return r.a.createElement("div",{className:U.a.paginator},E>1&&r.a.createElement("button",{className:U.a.portionButton,onClick:function(){b(E-1)}},"PREV"),l.filter((function(e){return e>=g&&e<=h})).map((function(e){return r.a.createElement("span",{className:L()(Object(N.a)({},U.a.selectedPage,c===e),U.a.pageNumber),key:e,onClick:function(){u(e)}},e)})),f>E&&r.a.createElement("button",{className:U.a.portionButton,onClick:function(){b(E+1)}},"NEXT"))},F=n(10),R=n.n(F),B=n(21),G=n(54),D=n(16),z=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return D.b.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},M=function(e){return D.b.post("follow/".concat(e)).then((function(e){return e.data}))},H=function(e){return D.b.delete("follow/".concat(e)).then((function(e){return e.data}))},V="users/FOLLOW",W={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},q=function(e){return{type:V,userId:e}},K=function(e){return{type:"users/UNFOLLOW",userId:e}},X=function(e){return{type:"users/SET_USERS",users:e}},J=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},Q=function(e){return{type:"SET_FILTER",payload:e}},Z=function(e){return{type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:e}},$=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},Y=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},ee=function(e,t,n){return function(){var a=Object(B.a)(R.a.mark((function a(r,c){var u;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r($(!0)),r(J(e)),r(Q(n)),a.next=5,z(e,t,n.term,n.friend);case 5:u=a.sent,r($(!1)),r(X(u.items)),r(Z(u.totalCount));case 9:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case"users/UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case"users/SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING":return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(G.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SET_FILTER":return Object(O.a)(Object(O.a)({},e),{},{filter:t.payload});default:return e}},ne=n(78),ae=function(e){return{}},re=r.a.memo((function(e){var t=Object(v.d)(T);return r.a.createElement("div",null,r.a.createElement(ne.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:t.friend},validate:ae,onSubmit:function(t,n){var a=n.setSubmitting,r={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(r),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(ne.b,null,r.a.createElement(ne.a,{type:"text",name:"term"}),r.a.createElement(ne.a,{name:"friend",as:"select"},r.a.createElement("option",{value:"null"},"All"),r.a.createElement("option",{value:"true"},"Followed only"),r.a.createElement("option",{value:"false"},"Unollowed only")),r.a.createElement("button",{type:"submit",disabled:t},"Search"))})))})),ce=n(138),ue=n.n(ce),oe=n(343),ie=n(77),se=n.n(ie),le=n(122),me=r.a.memo((function(e){var t=Object(v.d)(j),n=Object(v.d)(w),c=Object(v.d)(y),u=Object(v.d)(S),o=Object(v.d)(P),i=Object(v.d)(T),s=Object(v.c)(),l=Object(h.g)();Object(a.useEffect)((function(){var e=le.parse(l.location.search.substr(1)),n=c,a=i;switch(e.page&&(n=Number(e.page)),e.term&&(a=Object(O.a)(Object(O.a)({},a),{},{term:e.term})),e.friend){case"null":a=Object(O.a)(Object(O.a)({},a),{},{friend:null});break;case"true":a=Object(O.a)(Object(O.a)({},a),{},{friend:!0});break;case"false":a=Object(O.a)(Object(O.a)({},a),{},{friend:!1})}s(ee(n,t,a))}),[]),Object(a.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==c&&(e.page=String(c)),l.push({pathname:"/users",search:le.stringify(e)})}),[i,c]);var m=function(e){s(function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n,a){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Y(!0,e)),t.next=3,M(e);case 3:0===t.sent.resultCode&&n(q(e)),n(Y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(e))},f=function(e){s(function(e){return function(){var t=Object(B.a)(R.a.mark((function t(n,a){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Y(!0,e)),t.next=3,H(e);case 3:0===t.sent.resultCode&&n(K(e)),n(Y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",{className:se.a.usersPage},r.a.createElement(re,{onFilterChanged:function(e){s(ee(1,t,e))}}),r.a.createElement(A,{currentPage:c,onPageChange:function(e){s(ee(e,t,i))},totalItemsCount:n,pageSize:t}),u.map((function(e){return r.a.createElement("div",{className:se.a.userInList,key:e.id},r.a.createElement("span",null,r.a.createElement("div",{className:se.a.userName},e.name),r.a.createElement("span",null,r.a.createElement("div",null,"Country: "),r.a.createElement("div",null,"City: ")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/".concat(e.id)},r.a.createElement("img",{className:se.a.userPic,alt:"small userpic",src:null!=e.photos.small?e.photos.small:ue.a}))),r.a.createElement("div",null,e.followed?r.a.createElement(oe.a,{type:"primary",size:"small",danger:!0,disabled:o.some((function(t){return t===e.id})),onClick:function(){f(e.id)}},"unfollow"):r.a.createElement(oe.a,{type:"primary",size:"small",disabled:o.some((function(t){return t===e.id})),onClick:function(){m(e.id)}},"follow ",r.a.createElement("b",null," ",e.name)))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,e.status))))})))})),fe=n(90),pe=function(e){var t=Object(v.d)(C);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.pageTitle),t?r.a.createElement(fe.a,null):null,r.a.createElement(me,null))},de=n(102),Ee=n.n(de),be=n(175),ge=n.n(be),he=function(e){return r.a.createElement("header",{className:Ee.a.header},r.a.createElement("img",{src:ge.a,alt:"logo"}),r.a.createElement("div",{className:Ee.a.login},e.isAuth?r.a.createElement("div",null," ",e.login," ",r.a.createElement("button",{className:Ee.a.logoutButton,onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"},"L O G I N",r.a.createElement(h.a,{to:"/login"}))))},ve=n(51),Oe=function(){return D.b.get("auth/me").then((function(e){return e.data}))},_e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return D.b.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},Se=function(){return D.b.delete("auth/login")},je=function(){return D.b.get("security/get-captcha-url").then((function(e){return e.data}))},we={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},ye=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,login:t,email:n,isAuth:a}}},Ce=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Pe=function(){return function(){var e=Object(B.a)(R.a.mark((function e(t){var n,a,r,c,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:n=e.sent,a=n.data,r=a.id,c=a.login,u=a.email,n.resultCode===D.a.Success&&t(ye(r,c,u,!0));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Te=function(){return function(){var e=Object(B.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:n=e.sent,a=n.url,t(Ce(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},ke=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(he,this.props)}}]),n}(r.a.Component),xe=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se();case 2:0===e.sent.data.resultCode&&t(ye(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ke),Ue=n(160),Ie=n(161),Le=n(65),Ae=n(91),Fe=n(55),Re=n.n(Fe),Be=n(176),Ge=n.n(Be),De=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Ue.a,{placeholder:"Email",name:"email",component:Le.a,validate:[Ae.b]})),r.a.createElement("div",null,r.a.createElement(Ue.a,{placeholder:"Password",name:"password",component:Le.a,validate:[Ae.b],type:"password"})),r.a.createElement("div",null,"Remember me ",r.a.createElement(Ue.a,{type:"checkbox",name:"rememberMe",component:Le.a})),a&&r.a.createElement("img",{src:a,alt:"captcha"}),a&&r.a.createElement(Ue.a,{placeholder:"Enter the symbols from image",name:"captcha",component:Le.a,validate:[Ae.b]}),n&&r.a.createElement("div",{className:Re.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",{className:Re.a.loginButton},"Login")))})),ze=function(){var e=Object(v.d)((function(e){return e.auth.captchaUrl})),t=Object(v.d)((function(e){return e.auth.isAuth})),n=Object(v.c)();return t?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:Ge.a.loginPage},r.a.createElement("h1",null,"Login page"),r.a.createElement("p",null,"Please enter your login and password"),r.a.createElement(De,{onSubmit:function(e){var t,a,r,c;n((t=e.email,a=e.password,r=e.rememberMe,c=e.captcha,function(){var e=Object(B.a)(R.a.mark((function e(n){var u,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e(t,a,r,c);case 2:(u=e.sent).resultCode===D.a.Success?n(Pe()):(u.resultCode===D.a.CaptchaIsRequired&&n(Te()),o=u.messages.length>0?u.messages[0]:"Some error!",n(Object(ve.a)("login",{_error:o})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e}))},Me={initialized:!1},He=function(){return{type:"app/INITIALIZED_SUCCESS"}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},We=n(178),qe=n.n(We),Ke=r.a.useState,Xe=r.a.useEffect,Je=function(){var e=Ke((new Date).toLocaleString()),t=Object(k.a)(e,2),n=t[0],a=t[1];return Xe((function(){var e=setInterval((function(){return a((new Date).toLocaleString())}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("p",null,"Now time is ",n,".")},Qe=function(){return r.a.createElement("div",{className:qe.a.footer},":\\ Pet Project by Vladimir L.",r.a.createElement(Je,null))},Ze=n(179),$e=n.n(Ze),Ye=function(){return r.a.createElement("div",{className:$e.a.sidebar})},et=(n(337),n(342)),tt=function(){return r.a.createElement(et.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:r.a.createElement(oe.a,{type:"primary",href:"/"},"Back Profile")})},nt=r.a.lazy((function(){return n.e(4).then(n.bind(null,351))})),at=r.a.lazy((function(){return n.e(3).then(n.bind(null,350))})),rt=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(p.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(xe,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(h.a,{to:"/profile"}))}}),r.a.createElement(h.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(nt,null))}}),r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(at,null))}}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(pe,{pageTitle:"Devs"})}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(h.b,{path:"/photos",component:E}),r.a.createElement(h.b,{path:"/music",component:b}),r.a.createElement(h.b,{path:"/settings",component:g}),r.a.createElement(h.b,{path:"*",component:tt}))),r.a.createElement(Ye,null),r.a.createElement(Qe,null))):r.a.createElement(fe.a,null)}}]),n}(r.a.Component),ct=Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Pe()).then((function(){e(He())}))}}})(rt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ut=n(128),ot=n(159),it=n(162),st=n(180),lt=n(17),mt=lt.createStore,ft=lt.combineReducers,pt=lt.applyMiddleware,dt=lt.compose,Et=mt(ft({profilePage:ut.b,dialogsPage:ot.b,usersPage:te,auth:Ne,form:it.a,app:Ve}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||dt)(pt(st.a)));window._store_=Et;var bt=Et;u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{store:bt},r.a.createElement(ct,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",formSummaryError:"FormsControls_formSummaryError__1F2-S",saveButton:"FormsControls_saveButton__3VGCw",loginButton:"FormsControls_loginButton__3wK0r"}},60:function(e,t,n){e.exports={paginator:"Pagination_paginator__1TXwA",pageNumber:"Pagination_pageNumber__1r7yr",selectedPage:"Pagination_selectedPage__zdDHb",portionButton:"Pagination_portionButton__12LKm"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(118),r=n(0),c=n.n(r),u=n(55),o=n.n(u),i=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,i=Object(a.a)(e,["input","meta"]),s=r&&u;return c.a.createElement("div",{className:s?o.a.formControl:""},c.a.createElement("textarea",Object.assign({},t,i)),c.a.createElement("div",null,s&&c.a.createElement("span",null,u)))},s=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,i=Object(a.a)(e,["input","meta"]),s=r&&u;return c.a.createElement("div",{className:s?o.a.formControl:""},c.a.createElement("input",Object.assign({},t,i)),c.a.createElement("div",null,s&&c.a.createElement("span",null,u)))}},77:function(e,t,n){e.exports={usersPage:"Users_usersPage__3xdAn",userPic:"Users_userPic__1_BqH",selectedPage:"Users_selectedPage__J63sh",userInList:"Users_userInList__OVJXd",userName:"Users_userName__1mt5V",unfollowButton:"Users_unfollowButton__3QsTy",followButton:"Users_followButton__2xwHU"}},90:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(339);t.a=function(){return r.a.createElement(c.a,{size:"large"})}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Required field"},r=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}}},[[207,1,2]]]);
//# sourceMappingURL=main.54f31fcc.chunk.js.map