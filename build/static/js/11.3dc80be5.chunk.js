(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[11],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(151),s=a(185),o=a(337),i=a(58),c=a(538),l=s.a.useBreakpoint,u=function(e){var t=e.sideContent,a=e.sideContentWidth,n=void 0===a?250:a,m=e.border;return r.a.createElement("div",{className:"side-content ".concat(m?"with-border":""),style:{width:"".concat(n,"px")}},t)},p=function(e){var t=e.sideContent,a=e.visible,n=e.onSideContentClose;return r.a.createElement(o.a,{width:320,placement:"left",closable:!1,onClose:n,visible:a,bodyStyle:{paddingLeft:0,paddingRight:0}},r.a.createElement("div",{className:"h-100"},t))},g=function(e){var t=e.mainContent,a=e.pageHeader,s=e.sideContentGutter,o=void 0===s||s,g=!i.a.getBreakPoint(l()).includes("lg"),d=Object(n.useState)(!1),v=Object(m.a)(d,2),f=v[0],h=v[1];return r.a.createElement("div",{className:"inner-app-layout"},g?r.a.createElement(p,Object.assign({visible:f,onSideContentClose:function(e){h(!1)}},e)):r.a.createElement(u,e),r.a.createElement("div",{className:"main-content ".concat(a?"has-page-header":""," ").concat(o?"gutter":"no-gutter")},g?r.a.createElement("div",{className:"font-size-lg mb-3 ".concat(o?"":"pt-3 px-3")},r.a.createElement(c.a,{onClick:function(){h(!0)}})):null,t))},d=a(217),v=a(221);t.default=function(e){return r.a.createElement("div",{className:"chat"},r.a.createElement(g,{sideContent:r.a.createElement(v.default,e),mainContent:r.a.createElement(d.default,e),sideContentWidth:450,sideContentGutter:!1,border:!0}))}},213:function(e,t,a){"use strict";a.r(t);var n=a(353),r=a(82),m=a(83),s=a(117),o=a(116),i=a(0),c=a.n(i),l=a(382),u=a(329),p=a(338),g=a(404),d=a(383),v=a(535),f=a(108),h=a(398),y=a(443),x=a(384),b=a(444),E=a(445),T=a(399),C=a(433),k=a(115),N=a(98),w=a(330),j=a(407),I=function(e){return c.a.createElement(w.a,{overlay:e.menu,placement:e.placement,trigger:["click"]},c.a.createElement("div",{className:"ellipsis-dropdown"},c.a.createElement(j.a,null)))};I.defaultProps={trigger:"click",placement:"bottomRight",menu:c.a.createElement(u.a,null)};var O=I;a.d(t,"Conversation",(function(){return S}));var M=function(){return c.a.createElement(u.a,null,c.a.createElement(u.a.Item,{key:"0"},c.a.createElement(h.a,null),c.a.createElement("span",null,"User Info")),c.a.createElement(u.a.Item,{key:"1"},c.a.createElement(y.a,null),c.a.createElement("span",null,"Mute Chat")),c.a.createElement(u.a.Divider,null),c.a.createElement(u.a.Item,{key:"3"},c.a.createElement(x.a,null),c.a.createElement("span",null,"Delete Chat")))},S=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var m=arguments.length,s=new Array(m),o=0;o<m;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).formRef=c.a.createRef(),e.chatBodyRef=c.a.createRef(),e.state={info:{},msgList:[]},e.getConversation=function(t){var a=l.filter((function(e){return e.id===t}));e.setState({info:a[0],msgList:a[0].msg})},e.getMsgType=function(e){switch(e.msgType){case"text":return c.a.createElement("span",null,e.text);case"image":return c.a.createElement("img",{src:e.text,alt:e.text});case"file":return c.a.createElement(N.a,{alignItems:"center",className:"msg-file"},c.a.createElement(b.a,{className:"font-size-md"}),c.a.createElement("span",{className:"ml-2 font-weight-semibold text-link pointer"},c.a.createElement("u",null,e.text)));default:return null}},e.scrollToBottom=function(){e.chatBodyRef.current.scrollToBottom()},e.onSend=function(t){if(t.newMsg){var a={avatar:"",from:"me",msgType:"text",text:t.newMsg,time:""};e.formRef.current.setFieldsValue({newMsg:""}),e.setState({msgList:[].concat(Object(n.a)(e.state.msgList),[a])})}},e.emptyClick=function(e){e.preventDefault()},e.chatContentHeader=function(e){return c.a.createElement("div",{className:"chat-content-header"},c.a.createElement("h4",{className:"mb-0"},e),c.a.createElement("div",null,c.a.createElement(O,{menu:M})))},e.chatContentBody=function(t,a){return c.a.createElement("div",{className:"chat-content-body"},c.a.createElement(k.Scrollbars,{ref:e.chatBodyRef,autoHide:!0},t.map((function(t,n){return c.a.createElement("div",{key:"msg-".concat(a,"-").concat(n),className:"msg ".concat("date"===t.msgType?"datetime":""," ").concat("opposite"===t.from?"msg-recipient":"me"===t.from?"msg-sent":"")},t.avatar?c.a.createElement("div",{className:"mr-2"},c.a.createElement(p.a,{src:t.avatar})):null,t.text?c.a.createElement("div",{className:"bubble ".concat(t.avatar?"":"ml-5")},c.a.createElement("div",{className:"bubble-wrapper"},e.getMsgType(t))):null,"date"===t.msgType?c.a.createElement(g.a,null,t.time):null)}))))},e.chatContentFooter=function(){return c.a.createElement("div",{className:"chat-content-footer"},c.a.createElement(d.a,{name:"msgInput",ref:e.formRef,onFinish:e.onSend,className:"w-100"},c.a.createElement(d.a.Item,{name:"newMsg",className:"mb-0"},c.a.createElement(v.a,{autoComplete:"off",placeholder:"Type a message...",suffix:c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:e.emptyClick},c.a.createElement(E.a,null)),c.a.createElement("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:e.emptyClick},c.a.createElement(T.a,null)),c.a.createElement(f.a,{shape:"circle",type:"primary",size:"small",onClick:e.onSend,htmlType:"submit"},c.a.createElement(C.a,null)))}))))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getConversation(this.getUserId())}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&this.getConversation(this.getUserId()),this.scrollToBottom()}},{key:"getUserId",value:function(){var e=this.props.match.params.id;return parseInt(parseInt(e))}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state,a=t.info,n=t.msgList;return c.a.createElement("div",{className:"chat-content"},this.chatContentHeader(a.name),this.chatContentBody(n,e),this.chatContentFooter())}}]),a}(c.a.Component);t.default=S},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(25),s=a(213),o=function(){return r.a.createElement("div",{className:"chat-content-empty"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:"/img/others/img-11.png",alt:"Start a Conversation"}),r.a.createElement("h1",{className:"font-weight-light"},"Start a conversation")))};t.default=function(e){var t=e.match;return r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"".concat(t.url,"/:id"),component:s.default}),r.a.createElement(m.b,{path:"".concat(t.url),component:o}))}},221:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a(0),m=a.n(r),s=a(382),o=a(535),i=a(431),c=a(395),l=a(22),u=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],p={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(u),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},g=(Object(l.a)({},p),[].concat(u),[].concat(u),a(408)),d=a(25);t.default=function(e){e.match;var t=e.location,a=Object(r.useState)(s),l=Object(n.a)(a,2),u=l[0],p=l[1],v=(Object(d.g)(),parseInt(t.pathname.match(/\/([^/]+)\/?$/)[1]));return m.a.createElement("div",{className:"chat-menu"},m.a.createElement("div",{className:"chat-menu-toolbar"},m.a.createElement(o.a,{placeholder:"Search",onChange:function(e){var t=e.target.value,a=s.filter((function(e){return""===t?e:e.name.toLowerCase().includes(t)}));p(a)},prefix:m.a.createElement(g.a,{className:"font-size-lg mr-2"})})),m.a.createElement("div",{className:"chat-menu-list"},u.map((function(e,t){return m.a.createElement("div",{key:"chat-item-".concat(e.id),onClick:function(){return function(e){var t=u.map((function(t){return t.id===e&&(t.unread=0),t}));p(t)}(e.id)},className:"chat-menu-list-item ".concat(t===u.length-1?"last":""," ").concat(e.id===v?"selected":"")},m.a.createElement(c.a,{src:e.avatar,name:e.name,subTitle:e.msg[e.msg.length-1].text}),m.a.createElement("div",{className:"text-right"},m.a.createElement("div",{className:"chat-menu-list-item-time"},e.time),0===e.unread?m.a.createElement("span",null):m.a.createElement(i.a,{count:e.unread,style:{backgroundColor:"#3e82f7"}})))}))))}},382:function(e){e.exports=JSON.parse('[{"id":1,"name":"Eileen Horton","avatar":"/img/avatars/thumb-1.jpg","unread":3,"time":"4:16PM","msg":[{"avatar":"/img/avatars/thumb-1.jpg","text":"Hey, Bro...","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hey","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Did you check out our latest product?","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Its awesome!","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"You would probably love it","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Wow, that was cool!","from":"me","time":"","msgType":"text"}]},{"id":2,"name":"Terrance Moreno","avatar":"/img/avatars/thumb-2.jpg","time":"18/04/2020","unread":2,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Hello Jason ","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hello, how are you ","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Remember our previous discussion?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Yeah, sure!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"This is the finalize version.","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Application-United.pdf","from":"opposite","time":"","msgType":"file"},{"avatar":"","text":"Okay! Thank you","from":"me","time":"","msgType":"text"}]},{"id":3,"name":"Ron Vargas","avatar":"/img/avatars/thumb-3.jpg","time":"17/04/2020","unread":5,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Your great aunt just passed away. LOL","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why is that funny?","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Its not funny at all","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why do you think funny?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"LOL mean laughing out loud","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:59PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"OMG! I send that to everyone","from":"opposite","time":"","msgType":"text"}]},{"id":4,"name":"Luke Cook","avatar":"/img/avatars/thumb-4.jpg","time":"14/04/2020","unread":0,"msg":[{"avatar":"","text":"","from":"","time":"8:08PM","msgType":"date"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Dude are you ready to party?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Umm who are you","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Oh sorry wrong chat","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Bye","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"...but I wan to party","from":"me","time":"","msgType":"text"}]},{"id":5,"name":"Tara Fletcher","avatar":"/img/avatars/thumb-7.jpg","time":"21/03/2020","unread":0,"msg":[{"avatar":"/img/avatars/thumb-7.jpg","text":"Oh yeah? well I enjoy a nice steak. how about you?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"We\u2019 d have steak and ice cream three times every day!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"I eat all the steak and chicken too, even bacon","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"That was great!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yeah you said that already","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Dynamic structure can absorb shock.","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yes it can. I know about that as a bodybuilder","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"The strongest man in the world is blowing up a hot water bottle.","from":"me","time":"","msgType":"text"}]}]')},395:function(e,t,a){"use strict";var n=a(0),r=a.n(n),m=a(338);t.a=function(e){var t=e.name,a=e.suffix,n=e.subTitle,s=e.id,o=e.type,i=e.src,c=e.icon,l=e.size,u=e.shape,p=e.gap,g=e.text,d=e.onNameClick;return r.a.createElement("div",{className:"avatar-status d-flex align-items-center"},function(e){return r.a.createElement(m.a,Object.assign({},e,{className:"ant-avatar-".concat(e.type)}),e.text)}({icon:c,src:i,type:o,size:l,shape:u,gap:p,text:g}),r.a.createElement("div",{className:"ml-2"},r.a.createElement("div",null,d?r.a.createElement("div",{onClick:function(){return d({name:t,subTitle:n,src:i,id:s})},className:"avatar-status-name clickable"},t):r.a.createElement("div",{className:"avatar-status-name"},t),r.a.createElement("span",null,a)),r.a.createElement("div",{className:"text-muted avatar-status-subtitle"},n)))}}}]);
//# sourceMappingURL=11.3dc80be5.chunk.js.map