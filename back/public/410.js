"use strict";(self.webpackChunkminsucode_front=self.webpackChunkminsucode_front||[]).push([[410],{2309:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),a=n(1574),o=n(2034),l=(0,a.Z)("div",{target:"e1ar8lj05"})({name:"t5ublx",styles:"display:flex;width:100%;padding:20px;padding-top:0;background:#72767D"}),i=(0,a.Z)("form",{target:"e1ar8lj04"})({name:"162b9t",styles:"font-size:15px;width:100%;border-radius:4px;border:1px solid rgb(29, 28, 29);background:#72767D"}),c=(0,a.Z)(o.r,{target:"e1ar8lj03"})({name:"1pim2y0",styles:"font-family:Slack-Lato,appleLogo,sans-serif;font-size:15px;padding:8px 9px;& strong{background:skyblue;}& textarea{height:44px;padding:9px 10px!important;outline:none!important;border-radius:4px!important;resize:none!important;line-height:22px;border:none;}& ul{border:1px solid lightgray;max-height:200px;overflow-y:auto;padding:9px 10px;background:white;border-radius:4px;width:150px;}"}),s=(0,a.Z)("div",{target:"e1ar8lj02"})({name:"1uspqdn",styles:"position:relative;background:rgb(248, 248, 248);height:41px;display:flex;background:#72767D"}),u=(0,a.Z)("button",{target:"e1ar8lj01"})({name:"xrrdm2",styles:"position:absolute;right:5px;top:5px"}),d=(0,a.Z)("button",{target:"e1ar8lj00"})("padding:4px 20px;background:transparent;border:none;display:flex;align-items:center;color:rgb(28, 29, 28);width:100%;& img{margin-right:5px;}",(function(e){return e.focus&&"\n    background: #1264a3;\n    color: white;\n  "}),";"),p=n(3682),m=n(8575),f=n(3564),g=n(5977),h=n(6182),x=n.n(h);const b=function(e){var t=e.chat,n=e.onSubmitForm,a=e.onChangeChat,h=e.placeholder,b=(0,g.UO)().workspace,y=(0,m.ZP)("/api/users",f.Z,{dedupingInterval:2e3}),v=y.data,w=(y.error,y.revalidate,y.mutate,(0,m.ZP)(v?"/api/workspaces/".concat(b,"/members"):null,f.Z).data),k=(0,r.useRef)(null);(0,r.useEffect)((function(){k.current&&(0,p.Z)(k.current)}),[k.current]);var E=(0,r.useCallback)((function(e){console.log(e),"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),n(e)))}),[n]),Z=(0,r.useCallback)((function(e,t,n,a,o){return w?r.createElement(d,{focus:o},r.createElement("img",{src:x().url(w[a].email,{s:"20px",d:"monsterid"}),alt:w[a].nickname}),r.createElement("span",null,n)):null}),[w]);return r.createElement(l,null,r.createElement(i,{onSubmit:n},r.createElement(c,{id:"editor-chat",value:t,onChange:a,placeholder:h,onKeyPress:E,inputRef:k,allowSuggestionsAboveCursor:!0},r.createElement(o.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==w?void 0:w.map((function(e){return{id:e.id,display:e.nickname}})))||[],renderSuggestion:Z})),r.createElement(s,null,r.createElement(u,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=t&&t.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=t&&t.trim())},r.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))}},2545:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),a=n(1574),o=(0,a.Z)("div",{target:"e1ol48qx0"})({name:"7gzblo",styles:"display:flex;padding:8px 20px;font-family:'Pretendard-Regular';&:hover{background:#eee;}& .chat-img{display:flex;width:36px;margin-right:8px;& img{width:36px;height:36px;}}& .chat-text{display:flex;flex-wrap:wrap;flex:1;& p{flex:0 0 100%;margin:0;color:#ffffff;}}& .chat-user{display:flex;flex:0 0 100%;align-items:center;&>b{margin-right:5px;color:#FFFFFF;}&>span{font-size:12px;color:#FFFFFF;}}& a{text-decoration:none;color:deepskyblue;}"}),l=n(6182),i=n.n(l),c=n(7484),s=n.n(c),u=n(8817),d=n(3727),p=n(5977),m=function(e){var t=e.data,n=(0,p.UO)().workspace,a="Sender"in t?t.Sender:t.User,l=(0,r.useMemo)((function(){return t.content.startsWith("uploads\\")||t.content.startsWith("uploads/")?r.createElement("img",{src:"".concat("https://minsucode.com","/").concat(t.content),style:{maxHeight:200}}):(0,u.Z)({pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator:function(e,t){var a=e.match(/@\[(.+?)]\((\d+?)\)/);return a?r.createElement(d.rU,{key:e+t,to:"/workspace/".concat(n,"/dm/").concat(a[2])},"@",a[1]):r.createElement("br",{key:t})},input:t.content})}),[n,t.content]);return r.createElement(o,null,r.createElement("div",{className:"chat-img"},r.createElement("img",{src:i().url(a.email,{s:"36px",d:"monsterid"}),alt:a.nickname})),r.createElement("div",{className:"chat-text"},r.createElement("div",{className:"chat-user"},r.createElement("b",null,a.nickname),r.createElement("span",null,s()(t.createdAt).format("h:mm A"))),r.createElement("p",null,l)))};const f=(0,r.memo)(m);var g=(0,a.Z)("div",{target:"es7rrh02"})({name:"1op36e9",styles:"width:100%;display:flex;flex:1"}),h=(0,a.Z)("section",{target:"es7rrh01"})({name:"16hjzzy",styles:"margin-top:20px;border-top:1px solid #DCDDDE"}),x=(0,a.Z)("div",{target:"es7rrh00"})({name:"1hxuyk",styles:"display:flex;justify-content:center;flex:1;position:sticky;top:14px;& button{font-weight:bold;font-size:14px;line-height:27px;border-radius:24px;position:relative;top:-13px;border:none;outline:none;}"}),b=n(1298);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v=function(e){var t=e.chatSections,n=e.scrollRef,a=e.setSize,o=(e.isEmpty,e.isReachingEnd),l=(0,r.useCallback)((function(e){0!==e.scrollTop||o||(console.log("가장 위"),a((function(e){return e+1})).then((function(){var t,r;null!=n&&n.current&&(null===(t=n.current)||void 0===t||t.scrollTop((null===(r=n.current)||void 0===r?void 0:r.getScrollHeight())-e.scrollHeight))})))}),[]);return r.createElement(g,null,r.createElement(b.$B,{autoHide:!0,ref:n,onScrollFrame:l},Object.entries(t).map((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],l=a[1];return r.createElement(h,{className:"section-".concat(o),key:o},r.createElement(x,null,r.createElement("button",null,o)),l.map((function(e){return r.createElement(f,{key:e.id,data:e})})))}))))}},9732:(e,t,n)=>{n.d(t,{W2:()=>a,h4:()=>o,KW:()=>l});var r=n(1574),a=(0,r.Z)("div",{target:"ew1w0x92"})({name:"1a0r0eh",styles:"display:flex;flex-wrap:wrap;height:calc(100vh - 38px);flex-flow:column;position:relative"}),o=(0,r.Z)("header",{target:"ew1w0x91"})({name:"1thq1gs",styles:"height:64px;display:flex;width:100%;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 1px 0 var(--saf-0);padding:20px 16px 20px 20px;font-weight:bold;align-items:center"}),l=(0,r.Z)("div",{target:"ew1w0x90"})({name:"czjct4",styles:"position:absolute;top:64px;left:0;width:100%;height:calc(100% - 64px);background:white;opacity:0.7;display:flex;align-items:center;justify-content:center;font-size:40px"})},8667:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7484),a=n.n(r);function o(e){var t={};return e.forEach((function(e){var n=a()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[n])?t[n].push(e):t[n]=[e]})),t}}}]);