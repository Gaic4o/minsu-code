"use strict";(self.webpackChunkminsucode_front=self.webpackChunkminsucode_front||[]).push([[319],{6319:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(7294),l=n(8678),r=n(3046),c=n(9669),o=n.n(c),u=n(8575),i=n(3564),s=n(5977);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);c=!0);}catch(e){o=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const p=function(){var e=(0,u.ZP)("/api/users",i.Z),t=e.data,n=(e.error,e.revalidate,m((0,a.useState)(!1),2)),c=n[0],d=n[1],p=m((0,a.useState)(!1),2),f=p[0],E=p[1],v=m((0,a.useState)(!1),2),h=v[0],y=v[1],b=m((0,l.Z)(""),2),g=b[0],w=b[1],k=m((0,l.Z)(""),2),C=k[0],I=k[1],_=m((0,l.Z)(""),3),j=_[0],S=_[2],A=m((0,l.Z)(""),3),Z=A[0],x=A[2],M=(0,a.useCallback)((function(e){S(e.target.value),y(Z!==e.target.value)}),[Z]),O=(0,a.useCallback)((function(e){x(e.target.value),y(j!==e.target.value)}),[j]),z=(0,a.useCallback)((function(e){e.preventDefault(),C&&C.trim()&&!h&&C&&(console.log("서버로 회원가입하기"),d(!1),E(!1),o().post("/api/users",{email:g,nickname:C,password:j}).then((function(e){console.log(e),E(!0)})).catch((function(e){console.log(e.response),d(e.response.data)})).finally((function(){})))}),[g,C,j,Z,h]);return void 0===t?a.createElement("div",null,"로딩 중..."):t?a.createElement(s.l_,{to:"/workspace/MinsuCode/channel/일반"}):a.createElement("div",{id:"container"},a.createElement(r.h4,null,"민수 코드"),a.createElement(r.l0,{onSubmit:z},a.createElement(r.__,{id:"email-label"},a.createElement("span",null,"이메일 주소"),a.createElement("div",null,a.createElement(r.II,{type:"email",id:"email",name:"email",value:g,onChange:w}))),a.createElement(r.__,{id:"nickname-label"},a.createElement("span",null,"닉네임"),a.createElement("div",null,a.createElement(r.II,{type:"text",id:"nickname",name:"nickname",value:C,onChange:I}))),a.createElement(r.__,{id:"password-label"},a.createElement("span",null,"비밀번호"),a.createElement("div",null,a.createElement(r.II,{type:"password",id:"password",name:"password",value:j,onChange:M}))),a.createElement(r.__,{id:"password-check-label"},a.createElement("span",null,"비밀번호 확인"),a.createElement("div",null,a.createElement(r.II,{type:"password",id:"password-check",name:"password-check",value:Z,onChange:O}))),h&&a.createElement(r.jj,null,"비밀번호가 일치하지 않습니다."),!C&&a.createElement(r.jj,null,"닉네임을 입력해주세요."),c&&a.createElement(r.jj,null,"이미 가입된 이메일입니다."),f&&a.createElement(r.fB,null,"회원가입되었습니다! 로그인해주세요."),a.createElement(r.zx,{type:"submit"},"회원가입")),a.createElement(r.Ji,null,"이미 회원이신가요? ",a.createElement("a",{href:"/login"},"로그인 하러가기")))}}}]);