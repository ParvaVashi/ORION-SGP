"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{6794:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var i=t(6355),s=t(3495),r=t(1087),c=t(184),l=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("footer",{children:[(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsxs)("div",{className:"footer-links",children:[(0,c.jsx)("h3",{children:"Links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/doctors",children:"Doctors"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/appointments",children:"Appointments"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/notifications",children:"Notifications"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.OL,{to:"/profile",children:"Profile"})})]})]}),(0,c.jsxs)("div",{className:"social",children:[(0,c.jsx)("h3",{children:"Social links"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{className:"facebook",children:(0,c.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(i.tBk,{})})}),(0,c.jsx)("li",{className:"youtube",children:(0,c.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(i.V2E,{})})}),(0,c.jsx)("li",{className:"instagram",children:(0,c.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,c.jsx)(i.Zf_,{})})})]})]})]}),(0,c.jsxs)("div",{className:"footer-bottom",children:["Copy Right \xa9 ",(new Date).getFullYear()]})]})})}},809:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(4165),s=t(5861),r=t(9439),c=t(2791),l=t(9434),o=t(3321),a=t(6794),d=t(4956),h=t(4971),x=t(5318),j=t(3200),u=(t(5108),t(184)),f=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],f=n[1],p=(0,c.useState)(1),m=(0,r.Z)(p,2),v=m[0],g=m[1],k=(0,l.I0)(),b=(0,l.v9)((function(e){return e.root})).loading,w=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k((0,x.K4)(!0)),e.next=4,(0,h.Z)("/notification/getallnotifs?page=".concat(v-1,"&limit=").concat(8));case 4:n=e.sent,k((0,x.K4)(!1)),f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching notifications:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){w()}),[v]);var N=Math.ceil(t.length/8),Z=t.slice(8*(v-1),8*v);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),b?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container notif-section",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),t.length>0?(0,u.jsxs)("div",{className:"notifications",children:[(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"S.No"}),(0,u.jsx)("th",{children:"Content"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"})]})}),(0,u.jsx)("tbody",{children:Z.map((function(e,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:8*(v-1)+n+1}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.content}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[0]}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]})]},null===e||void 0===e?void 0:e._id)}))})]}),(0,u.jsx)("div",{className:"pagination",children:function(){for(var e=[],n=function(n){e.push((0,u.jsx)("button",{onClick:function(){g(n)},children:n},n))},t=1;t<=N;t++)n(t);return e}()})]}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=809.d1607aef.chunk.js.map