(self.webpackChunkminsucode_front=self.webpackChunkminsucode_front||[]).push([[55],{5692:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(1574),a=(0,r.Z)("div",{target:"e1k8ulv41"})({name:"3nqusf",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),o=(0,r.Z)("button",{target:"e1k8ulv40"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),l=n(7294);const c=function(e){var t=e.show,n=e.children,r=e.onCloseModal,c=(0,l.useCallback)((function(e){e.stopPropagation()}),[]);return t?l.createElement(a,{onClick:r},l.createElement("div",{onClick:c},l.createElement(o,{onClick:r},"×"),n)):null}},2951:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),a=n(6809),o=n.n(a),l={};const c=function(e){var t=(0,r.useCallback)((function(){e&&l[e]&&(l[e].disconnect(),delete l[e])}),[e]);return e?(l[e]||(l[e]=o().connect("".concat("https://minsucode.com","/ws-").concat(e),{transports:["websocket"]}),console.info("create socket",e,l[e])),[l[e],t]):[void 0,t]}},6547:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>pe});var r=n(3564),a=n(7294),o=n(5977),l=n(8575),c=n(1574),i=(0,c.Z)("button",{target:"e10g3ivw1"})("background:transparent;border:none;width:26px;height:26px;color:white;margin-left:10px;cursor:pointer;",(function(e){return e.collapse&&"\n    & i {\n      transform: none;\n    }\n  "}),";"),s=(0,c.Z)("span",{target:"e10g3ivw0"})({name:"1v20z6n",styles:"color:white;font-family:'Pretendard-Regular';margin-left:30px"}),u=n(3727);const p=function(e){var t=e.channel,n=(0,o.UO)().workspace,c=(0,o.TH)(),i=(0,l.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,s=localStorage.getItem("".concat(n,"-").concat(t.name))||0,p=(0,l.ZP)(i?"/api/workspaces/".concat(n,"/channels/").concat(t.name,"/unreads?after=").concat(s):null,r.Z),d=p.data,m=p.mutate;return(0,a.useEffect)((function(){c.pathname==="/workspace/".concat(n,"/channel/").concat(t.name)&&m(0)}),[m,c.pathname,n,t]),a.createElement(u.OL,{style:{textDecoration:"none"},key:t.name,activeClassName:"selected",to:"/workspace/".concat(n,"/channel/").concat(t.name)},a.createElement("span",{style:{color:"white",textDecoration:"none",marginLeft:"30px"},className:void 0!==d&&d>0?"bold":void 0},"# ",t.name),void 0!==d&&d>0&&a.createElement("span",{className:"count"},d))};var d=(0,c.Z)("span",{target:"e16bthkm1"})({name:"1v20z6n",styles:"color:white;font-family:'Pretendard-Regular';margin-left:30px"}),m=(0,c.Z)("div",{target:"e16bthkm0"})("");function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const b=function(){var e=(0,o.UO)().workspace,t=((0,o.TH)(),f((0,a.useState)(!1),2)),n=t[0],c=t[1],s=f((0,a.useState)({}),2),u=(s[0],s[1],(0,l.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data),h=(0,l.ZP)(u?"/api/workspaces/".concat(e,"/channels"):null,r.Z).data,b=(0,a.useCallback)((function(){c((function(e){return!e}))}),[]);return a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(i,{collapse:n,onClick:b},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement(d,null,"채널 목록")),a.createElement(m,null,!n&&(null==h?void 0:h.map((function(e){return a.createElement(p,{key:e.id,channel:e})})))))};var g=n(5692),v=n(8678),y=n(3046),k=n(9669),w=n.n(k),x=n(9249);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Z=function(e){var t,n,c=e.show,i=e.onCloseModal,s=e.setShowCreateChannelModal,u=(0,o.UO)().workspace,p=(t=(0,v.Z)(""),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=p[0],m=p[1],f=p[2],h=(0,l.ZP)("/api/users",r.Z).data,b=(0,l.ZP)(h?"/api/workspaces/".concat(u,"/channels"):null,r.Z).revalidate,k=(0,a.useCallback)((function(e){e.preventDefault(),d&&d.trim()&&w().post("/api/workspaces/".concat(u,"/channels"),{name:d}).then((function(){b(),s(!1),f("")})).catch((function(e){var t;console.dir(e),x.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[d]);return a.createElement(g.Z,{show:c,onCloseModal:i},a.createElement("form",{onSubmit:k},a.createElement(y.__,{id:"channel-label"},a.createElement("span",null,"채널 이름"),a.createElement(y.II,{id:"channel",value:d,onChange:m})),a.createElement(y.zx,null,"생성하기")))};var C=(0,c.Z)("div",{target:"e18bdlwn0"})("");const _=function(e){var t=e.member,n=e.isOnline,c=(0,o.UO)().workspace,i=(0,o.TH)(),s=(0,l.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,p=localStorage.getItem("".concat(c,"-").concat(t.id))||0,d=(0,l.ZP)(s?"/api/workspaces/".concat(c,"/dms/").concat(t.id,"/unreads?after=").concat(p):null,r.Z),m=d.data,f=d.mutate;return(0,a.useEffect)((function(){i.pathname==="/workspace/".concat(c,"/dm/").concat(t.id)&&f(0)}),[f,i.pathname,c,t]),a.createElement(u.OL,{style:{display:"flex",marginLeft:"30px",color:"white",textDecoration:"none"},key:t.id,activeClassName:"selected",to:"/workspace/".concat(c,"/dm/").concat(t.id)},a.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence ".concat(n?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),a.createElement(C,{className:m&&m>0?"bold":void 0},t.nickname),t.id===(null==s?void 0:s.id)&&a.createElement("span",null," (나)"),m&&m>0&&a.createElement("span",{className:"count"},m)||null)};var S=n(2951);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const M=function(){var e=(0,o.UO)().workspace,t=(0,l.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,n=(0,l.ZP)(t?"/api/workspaces/".concat(e,"/members"):null,r.Z).data,c=P((0,S.Z)(e),1)[0],u=P((0,a.useState)(!1),2),p=u[0],d=u[1],m=P((0,a.useState)([]),2),f=m[0],h=m[1],b=P((0,a.useState)({}),2),g=(b[0],b[1]),v=(0,a.useCallback)((function(){d((function(e){return!e}))}),[]);return(0,a.useCallback)((function(e){return function(){g((function(t){return A(A({},t),{},j({},e,0))}))}}),[]),(0,a.useEffect)((function(){console.log("DMList: workspace 바꼈다",e),h([]),g({})}),[e]),(0,a.useEffect)((function(){return null==c||c.on("onlineList",(function(e){h(e)})),function(){null==c||c.off("onlineList")}}),[c]),a.createElement(a.Fragment,null,a.createElement("h2",null,a.createElement(i,{collapse:p,onClick:v},a.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),a.createElement(s,null,"메시지")),a.createElement("div",null,!p&&(null==n?void 0:n.map((function(e){var t=f.includes(e.id);return a.createElement(_,{key:e.id,member:e,isOnline:t})})))))};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const U=function(e){var t,n,c=e.show,i=e.onCloseModal,s=e.setShowInviteWorkspaceModal,u=(0,o.UO)().workspace,p=(t=(0,v.Z)(""),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=p[0],m=p[1],f=p[2],h=(0,l.ZP)("/api/users",r.Z).data,b=(0,l.ZP)(h?"/api/workspaces/".concat(u,"/members"):null,r.Z).revalidate,k=(0,a.useCallback)((function(e){e.preventDefault(),d&&d.trim()&&w().post("/api/workspaces/".concat(u,"/members"),{email:d}).then((function(){b(),s(!1),f("")})).catch((function(e){var t;console.dir(e),x.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[u,d]);return a.createElement(g.Z,{show:c,onCloseModal:i},a.createElement("form",{onSubmit:k},a.createElement(y.__,{id:"member-label"},a.createElement("span",null,"이메일"),a.createElement(y.II,{id:"member",type:"email",value:d,onChange:m})),a.createElement(y.zx,{type:"submit"},"초대하기")))};var q=(0,c.Z)("div",{target:"eayxtnb1"})({name:"grs0h9",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;background:white;border-radius:6px;min-width:200px;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),D=(0,c.Z)("button",{target:"eayxtnb0"})({name:"i8hi2e",styles:"position:absolute;right:10px;background:transparent;border:none;cursor:pointer"});const N=function(e){var t=e.children,n=e.style,r=e.show,o=e.onCloseModal,l=e.closeButton,c=(0,a.useCallback)((function(e){e.stopPropagation()}),[]);return r?a.createElement(q,{onClick:o},a.createElement("div",{style:n,onClick:c},l&&a.createElement(D,{onClick:o},"×"),t)):null};var T=n(3810),L=n(6182),F=n.n(L),W=(0,c.Z)("section",{target:"e5vu1tc19"})({name:"se5ttb",styles:"display:flex;height:100vh"}),$=(0,c.Z)("nav",{target:"e5vu1tc18"})({name:"388v8b",styles:"flex:1;display:flex;background-color:blue"}),H=(0,c.Z)("div",{target:"e5vu1tc17"})({name:"h0fyji",styles:"flex:0.5;background:red"}),R=(0,c.Z)("div",{target:"e5vu1tc16"})({name:"w3r7vh",styles:"flex:1;background:#2F3136"}),B=(0,c.Z)("main",{target:"e5vu1tc15"})({name:"ei6nr4",styles:"flex:5"}),G=(0,c.Z)("section",{target:"e5vu1tc14"})({name:"zjik7",styles:"display:flex"}),J=(0,c.Z)("header",{target:"e5vu1tc13"})({name:"1k915dn",styles:"background-color:#36393F;color:#fff;height:60px"}),K=(0,c.Z)("article",{target:"e5vu1tc12"})({name:"1ye7qse",styles:"flex:4;height:calc(100vh - 40px);background-color:#36393F"}),Q=(0,c.Z)("aside",{target:"e5vu1tc11"})({name:"1hxkjj1",styles:"flex:1;height:calc(100vh - 40px);background-color:#2F3136"}),V=((0,c.Z)("footer",{target:"e5vu1tc10"})({name:"1x35pja",styles:"background-color:gray;color:#fff;height:100px"}),(0,c.Z)("div",{target:"e5vu1tc9"})({name:"lukph5",styles:"padding-top:15px;background:#202225;height:100%;display:flex;flex-direction:column;align-items:center"})),X=(0,c.Z)("button",{target:"e5vu1tc8"})({name:"niceko",styles:"display:inline-block;width:45px;height:45px;border-radius:20px;background:white;border:3px solid white;margin-bottom:20px;font-size:28px;font-weight:700;color:black;cursor:pointer;&:hover{width:50px;border-radius:10px;transition:0.6s;}"}),Y=(0,c.Z)("button",{target:"e5vu1tc7"})({name:"niceko",styles:"display:inline-block;width:45px;height:45px;border-radius:20px;background:white;border:3px solid white;margin-bottom:20px;font-size:28px;font-weight:700;color:black;cursor:pointer;&:hover{width:50px;border-radius:10px;transition:0.6s;}"}),ee=(0,c.Z)("button",{target:"e5vu1tc6"})({name:"u47tpr",styles:"height:70px;border:none;width:100%;font-size:24px;background:transparent;color:white;cursor:pointer"}),te=(0,c.Z)("div",{target:"e5vu1tc5"})({name:"1146j5j",styles:"height:calc(100vh - 102px);overflow-y:auto"}),ne=(0,c.Z)("div",{target:"e5vu1tc4"})({name:"mtr292",styles:"padding:10px 0 0;&>h2{padding-left:20px;}&>button{width:100%;height:28px;padding:4px;border:none;background:transparent;border-top:1px solid rgb(28, 29, 28);cursor:pointer;&:last-of-type{border-bottom:1px solid rgb(28, 29, 28);}}"}),re=(0,c.Z)("div",{target:"e5vu1tc3"})({name:"tjo4qw",styles:"float:right"}),ae=(0,c.Z)("img",{target:"e5vu1tc2"})({name:"72c4qq",styles:"width:30px;height:30px;position:absolute;top:5px;right:16px"}),oe=(0,c.Z)("div",{target:"e5vu1tc1"})({name:"47px7v",styles:"display:flex;padding:20px;& img{display:flex;}&>div{display:flex;flex-direction:column;margin-left:10px;}& #profile-name{font-weight:bold;display:inline-flex;}& #profile-active{font-size:13px;display:inline-flex;}"}),le=(0,c.Z)("button",{target:"e5vu1tc0"})({name:"bl1q1k",styles:"border:none;width:100%;border-top:1px solid rgb(29, 28, 29);background:transparent;display:block;height:33px;padding:5px 20px 5px;outline:none;cursor:pointer"});function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var se=(0,T.ZP)((function(){return Promise.all([n.e(554),n.e(410),n.e(591)]).then(n.bind(n,8591))})),ue=(0,T.ZP)((function(){return Promise.all([n.e(554),n.e(410),n.e(474)]).then(n.bind(n,3474))}));const pe=function(){var e=ce((0,a.useState)(!1),2),t=e[0],n=e[1],c=ce((0,a.useState)(!1),2),i=c[0],s=c[1],p=ce((0,a.useState)(!1),2),d=p[0],m=p[1],f=ce((0,a.useState)(!1),2),h=f[0],k=f[1],E=ce((0,a.useState)(!1),2),C=(E[0],E[1]),_=ce((0,a.useState)(!1),2),O=_[0],A=_[1],j=ce((0,v.Z)(""),3),P=j[0],I=j[1],z=j[2],q=ce((0,v.Z)(""),3),D=q[0],T=q[1],L=q[2],ie=(0,l.ZP)("/api/users",r.Z,{dedupingInterval:1e3}),pe=ie.data,de=(ie.error,ie.revalidate),me=ie.mutate,fe=(0,o.UO)().workspace,he=(0,l.ZP)(pe?"/api/workspaces/".concat(fe,"/channels"):null,r.Z).data,be=((0,l.ZP)(pe?"/api/workspaces/".concat(fe,"/members"):null,r.Z).data,ce((0,S.Z)(fe),2)),ge=be[0],ve=be[1];(0,a.useEffect)((function(){he&&pe&&(console.info("로그인하자",ge),null==ge||ge.emit("login",{id:null==pe?void 0:pe.id,channels:he.map((function(e){return e.id}))}))}),[ge,he,pe]),(0,a.useEffect)((function(){return function(){ve()}}),[fe,ve]);var ye=(0,a.useCallback)((function(){w().post("/api/users/logout",null,{withCredentials:!0}).then((function(){me(!1)}))}),[]),ke=(0,a.useCallback)((function(e){e.preventDefault(),P&&P.trim()&&D&&D.trim()&&w().post("/api/workspaces",{workspace:P,url:D},{withCredentials:!0}).then((function(){de(),s(!1),z(""),L("")})).catch((function(e){var t;console.dir(e),x.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[P,D]),we=(0,a.useCallback)((function(){s(!1),A(!1),k(!1),C(!1)}),[]),xe=(0,a.useCallback)((function(){n((function(e){return!e}))}),[]),Ee=(0,a.useCallback)((function(){m((function(e){return!e}))}),[]),Ze=(0,a.useCallback)((function(){s(!0)}),[]),Ce=(0,a.useCallback)((function(){A(!0)}),[]),_e=(0,a.useCallback)((function(e){e.stopPropagation(),n(!1)}),[]),Se=(0,a.useCallback)((function(){k(!0)}),[]);return pe?a.createElement(W,null,a.createElement($,null,a.createElement(H,null,a.createElement(V,null,pe.Workspaces.map((function(e){return a.createElement(u.rU,{key:e.id,to:"/workspace/".concat(e.url,"/channel/일반")},a.createElement(X,null,e.name.slice(0,1).toUpperCase()))})),a.createElement(Y,{onClick:Ze},"+"))),a.createElement(R,null,a.createElement(ee,{onClick:Ee},"민수코드"),a.createElement(te,null,a.createElement(N,{show:d,onCloseModal:Ee,style:{top:95,left:80}},a.createElement(ne,null,a.createElement("h2",null,"민수코드"),a.createElement("button",{onClick:Se},"워크스페이스에 사용자 초대"),a.createElement("button",{onClick:Ce},"채널 만들기"),a.createElement("button",{onClick:ye},"로그아웃"))),a.createElement(b,null)))),a.createElement(B,null,a.createElement(J,null,a.createElement(re,null,a.createElement("span",{onClick:xe},a.createElement(ae,{src:F().url(pe.email,{s:"28px",d:"monsterid"}),alt:pe.email}),t&&a.createElement(N,{style:{right:0,top:38},show:t,onCloseModal:_e},a.createElement(oe,null,a.createElement("img",{src:F().url(pe.email,{s:"36px",d:"monsterid"}),alt:pe.email}),a.createElement("div",null,a.createElement("span",{id:"profile-name"},pe.email),a.createElement("span",{id:"profile-active"},"Active"))),a.createElement(le,{onClick:ye},"로그아웃"))))),a.createElement(G,null,a.createElement(K,null,a.createElement(o.rs,null,a.createElement(o.AW,{path:"/workspace/:workspace/channel/:channel",component:se}),a.createElement(o.AW,{path:"/workspace/:workspace/dm/:id",component:ue}))),a.createElement(Q,null,a.createElement(M,null)))),a.createElement(g.Z,{show:i,onCloseModal:we},a.createElement("form",{onSubmit:ke},a.createElement(y.__,{id:"workspace-label"},a.createElement("span",null,"워크스페이스 이름"),a.createElement(y.II,{id:"workspace",value:P,onChange:I})),a.createElement(y.__,{id:"workspace-url-label"},a.createElement("span",null,"워크스페이스 url"),a.createElement(y.II,{id:"workspace",value:D,onChange:T})),a.createElement(y.zx,{type:"submit"},"생성하기"))),a.createElement(Z,{show:O,onCloseModal:we,setShowCreateChannelModal:A}),a.createElement(U,{show:h,onCloseModal:we,setShowInviteWorkspaceModal:k})):a.createElement(o.l_,{to:"/login"})}},7020:()=>{}}]);