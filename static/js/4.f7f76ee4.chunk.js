(this["webpackJsonpedu-app-1"]=this["webpackJsonpedu-app-1"]||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsList:"Dialogs_dialogsList__137kM",messagesList:"Dialogs_messagesList__3P5tp",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw"}},300:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(125),l=t(294),r=t.n(l),c=t(12),o=function(e){return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.b,{to:"/dialogs/"+e.id}," ",e.name,"  "))},u=function(e){return s.a.createElement("div",null,e.message)},m=t(126),g=t(127),d=t(73),p=t(63),b=Object(d.a)(50),f=Object(g.a)({form:"dialogsMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(m.a,{component:p.b,placeholder:"Type your message",name:"newMessageText",validate:[d.b,b]})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),E=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(o,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(u,{message:e.message,key:e.id})}));return s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsList},s.a.createElement("h3",null,"Dialogs"),t),s.a.createElement("div",null,s.a.createElement("div",{className:r.a.messagesList},s.a.createElement("h3",null,"Messages"),n,s.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageText)}}))))},v=t(11),h=t(32),_=t(33),j=t(35),O=t(34),k=t(8),M=function(e){return{isAuth:e.auth.isAuth}},y=t(9);a.default=Object(y.compose)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),(function(e){var a=function(a){Object(j.a)(n,a);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(k.a,{to:"/login"})}}]),n}(s.a.Component);return Object(v.b)(M)(a)}))(E)}}]);
//# sourceMappingURL=4.f7f76ee4.chunk.js.map