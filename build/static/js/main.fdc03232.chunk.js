(this.webpackJsonpvisionbox=this.webpackJsonpvisionbox||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(20),r=a.n(c),n=a(6),o=a(8),l=a(2),d=a(4),j=a(0),b=["component","layout"],m=function(e){var t=e.component,a=e.layout,i=Object(d.a)(e,b);return a=void 0===a?function(e){return Object(j.jsx)(j.Fragment,{children:e.children})}:a,Object(j.jsx)(n.a,Object(l.a)(Object(l.a)({},i),{},{render:function(e){return Object(j.jsx)(a,{children:Object(j.jsx)(t,Object(l.a)({},e))})}}))},h=a(12),u=a(5),v=a.n(u),O=a(18),p=s.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),s=Object(h.a)(a,2),c=s[0],r=s[1],n=Object(i.useState)([]),o=Object(h.a)(n,2),l=o[0],d=o[1],b=function(){return l.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},m=function(){if(!b())for(var e=function(e){var t=l[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=c-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<l.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof l&&l.length>0&&(b()||(window.addEventListener("scroll",v),window.addEventListener("resize",p)),m())}),[l]);var u=function(){b()&&(window.removeEventListener("scroll",v),window.removeEventListener("resize",p))},v=Object(O.throttle)((function(){u(),m()}),30),p=Object(O.throttle)((function(){r(window.innerHeight)}),30);return Object(i.useEffect)((function(){u(),m()}),[c]),Object(j.jsx)(j.Fragment,{children:e.children()})}));p.propTypes={children:v.a.func.isRequired};var x=p,f=a(14),g=a(3),N=a.n(g),C=a(11),w=["className","src","width","height","alt"],y=function(e){var t=e.className,a=e.src,s=e.width,c=e.height,r=e.alt,n=Object(d.a)(e,w),o=Object(i.useState)(!1),b=Object(h.a)(o,2),m=b[0],u=b[1],v=Object(i.useRef)(null);Object(i.useEffect)((function(){O(v.current)}),[]);var O=function(e){var t,a,i=document.createElement("img");m||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return Object(j.jsx)("img",Object(l.a)(Object(l.a)({},n),{},{ref:v,className:t,src:a,width:s,height:c,alt:r,onLoad:function(){u(!0)}}))};y.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=y,L=a.p+"static/media/visionbox_v.a4ea8394.svg",k=a.p+"static/media/visionbox_text.fd5648cb.svg",E=["className"],A=function(e){var t=e.className,a=Object(d.a)(e,E),i=N()("brand",t);return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},a),{},{className:i,children:Object(j.jsx)("h1",{className:"m-0",children:Object(j.jsxs)(C.a,{to:"/",children:[Object(j.jsx)(D,{src:L,alt:"Visionbox",style:{display:"block",marginLeft:"auto",marginRight:"auto"},width:48,height:48}),Object(j.jsx)("div",{style:{marginTop:12},children:Object(j.jsx)(D,{src:k,alt:"Open",width:72,height:72})})]})})}))},P=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],S=function(e){var t=e.className,a=e.navPosition,s=e.hideNav,c=e.hideSignin,r=e.bottomOuterDivider,n=e.bottomDivider,o=Object(d.a)(e,P),b=Object(i.useState)(!1),m=Object(h.a)(b,2),u=m[0],v=m[1],O=Object(i.useRef)(null),p=Object(i.useRef)(null);Object(i.useEffect)((function(){return u&&x(),document.addEventListener("keydown",g),document.addEventListener("click",w),function(){document.removeEventListener("keydown",g),document.removeEventListener("click",w),f()}}));var x=function(){document.body.classList.add("off-nav-is-active"),O.current.style.maxHeight=O.current.scrollHeight+"px",v(!0)},f=function(){document.body.classList.remove("off-nav-is-active"),O.current&&(O.current.style.maxHeight=null),v(!1)},g=function(e){u&&27===e.keyCode&&f()},w=function(e){O.current&&u&&!O.current.contains(e.target)&&e.target!==p.current&&f()},y=N()("site-header",r&&"has-bottom-divider",t);return Object(j.jsx)("header",Object(l.a)(Object(l.a)({},o),{},{className:y,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:N()("site-header-inner",n&&"has-bottom-divider"),children:[Object(j.jsx)(A,{}),!s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("button",{ref:p,className:"header-nav-toggle",onClick:u?f:x,children:[Object(j.jsx)("span",{className:"screen-reader",children:"Menu"}),Object(j.jsx)("span",{className:"hamburger",children:Object(j.jsx)("span",{className:"hamburger-inner"})})]}),Object(j.jsx)("nav",{ref:O,className:N()("header-nav",u&&"is-active"),children:Object(j.jsxs)("div",{className:"header-nav-inner",children:[Object(j.jsx)("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))}),!c&&Object(j.jsx)("ul",{className:"list-reset header-nav-right",children:Object(j.jsx)("li",{children:Object(j.jsx)(C.a,{to:"/contact-us",className:"button button-primary button-wide-mobile button-sm",onClick:f,children:"Let's talk"})})})]})})]})]})})}))};S.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var _=S,B=["className"],F=function(e){var t=e.className,a=Object(d.a)(e,B),i=N()("footer-nav",t);return Object(j.jsx)("nav",Object(l.a)(Object(l.a)({},a),{},{className:i,children:Object(j.jsxs)("ul",{className:"list-reset",children:[Object(j.jsx)("li",{children:Object(j.jsx)(C.a,{to:"/contact-us",children:"Contact"})}),Object(j.jsx)("li",{children:Object(j.jsx)(C.a,{to:"#0",children:"About us"})})]})}))},T=["className"],H=function(e){var t=e.className,a=Object(d.a)(e,T),i=N()("footer-social",t);return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},a),{},{className:i,children:Object(j.jsx)("ul",{className:"list-reset",children:Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://wa.me/17787232410",children:Object(j.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#5658DD",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0.0568848 24L1.74388 17.837C0.702885 16.033 0.155885 13.988 0.156885 11.891C0.159885 5.335 5.49488 0 12.0499 0C15.2309 0.001 18.2169 1.24 20.4629 3.488C22.7079 5.736 23.9439 8.724 23.9429 11.902C23.9399 18.459 18.6049 23.794 12.0499 23.794C10.0599 23.793 8.09888 23.294 6.36188 22.346L0.0568848 24V24ZM6.65388 20.193C8.32988 21.188 9.92988 21.784 12.0459 21.785C17.4939 21.785 21.9319 17.351 21.9349 11.9C21.9369 6.438 17.5199 2.01 12.0539 2.008C6.60188 2.008 2.16688 6.442 2.16488 11.892C2.16388 14.117 2.81588 15.783 3.91088 17.526L2.91188 21.174L6.65388 20.193V20.193ZM18.0409 14.729C17.9669 14.605 17.7689 14.531 17.4709 14.382C17.1739 14.233 15.7129 13.514 15.4399 13.415C15.1679 13.316 14.9699 13.266 14.7709 13.564C14.5729 13.861 14.0029 14.531 13.8299 14.729C13.6569 14.927 13.4829 14.952 13.1859 14.803C12.8889 14.654 11.9309 14.341 10.7959 13.328C9.91288 12.54 9.31588 11.567 9.14288 11.269C8.96988 10.972 9.12488 10.811 9.27288 10.663C9.40688 10.53 9.56988 10.316 9.71888 10.142C9.86988 9.97 9.91888 9.846 10.0189 9.647C10.1179 9.449 10.0689 9.275 9.99389 9.126C9.91889 8.978 9.32488 7.515 9.07788 6.92C8.83588 6.341 8.59088 6.419 8.40889 6.41L7.83888 6.4C7.64088 6.4 7.31888 6.474 7.04688 6.772C6.77488 7.07 6.00688 7.788 6.00688 9.251C6.00688 10.714 7.07188 12.127 7.21988 12.325C7.36888 12.523 9.31488 15.525 12.2959 16.812C13.0049 17.118 13.5589 17.301 13.9899 17.438C14.7019 17.664 15.3499 17.632 15.8619 17.556C16.4329 17.471 17.6199 16.837 17.8679 16.143C18.1159 15.448 18.1159 14.853 18.0409 14.729V14.729Z"})})})})})}))},M=["className","topOuterDivider","topDivider"],R=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,s=Object(d.a)(e,M),c=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return Object(j.jsx)("footer",Object(l.a)(Object(l.a)({},s),{},{className:c,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:N()("site-footer-inner",i&&"has-top-divider"),children:[Object(j.jsxs)("div",{className:"footer-top space-between text-xxs",children:[Object(j.jsx)(A,{}),Object(j.jsx)(H,{})]}),Object(j.jsxs)("div",{className:"footer-bottom space-between text-xxs invert-order-desktop",children:[Object(j.jsx)(F,{}),Object(j.jsx)("div",{className:"footer-copyright",children:"Copyright \xa9 2021 VisionBox Inc - All Rights Reserved. "})]})]})})}))};R.defaultProps={topOuterDivider:!1,topDivider:!1};var V=R,W=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{navPosition:"right",className:"reveal-from-bottom"}),Object(j.jsx)("main",{className:"site-content",children:t}),Object(j.jsx)(V,{})]})},z={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},I={types:Object(l.a)({},z.types),defaults:Object(l.a)({},z.defaults)},q=(Object(l.a)(Object(l.a)({},z.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),Object(l.a)(Object(l.a)({},z.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1}),{types:Object(l.a)(Object(l.a)({},z.types),{},{pushLeft:v.a.bool}),defaults:Object(l.a)(Object(l.a)({},z.defaults),{},{pushLeft:!1})}),Z=["className"],G=function(e){var t=e.className,a=Object(d.a)(e,Z),i=N()("button-group",t);return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},a),{},{className:i}))},U=["className","tag","color","size","loading","wide","wideMobile","disabled"],J=function(e){var t=e.className,a=e.tag,i=e.color,s=e.size,c=e.loading,r=e.wide,n=e.wideMobile,o=e.disabled,b=Object(d.a)(e,U),m=N()("button",i&&"button-".concat(i),s&&"button-".concat(s),c&&"is-loading",r&&"button-block",n&&"button-wide-mobile",t),h=a;return Object(j.jsx)(h,Object(l.a)(Object(l.a)({},b),{},{className:m,disabled:o}))};J.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var K=J,Y=["className","children","handleClose","show","closeHidden","video","videoTag"],$=function(e){var t=e.className,a=e.children,s=e.handleClose,c=e.show,r=e.closeHidden,n=e.video,o=e.videoTag,b=Object(d.a)(e,Y);Object(i.useEffect)((function(){return document.addEventListener("keydown",h),document.addEventListener("click",u),function(){document.removeEventListener("keydown",h),document.removeEventListener("click",u)}})),Object(i.useEffect)((function(){m()}),[b.show]);var m=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},h=function(e){27===e.keyCode&&s(e)},u=function(e){e.stopPropagation()},v=N()("modal",c&&"is-active",n&&"modal-video",t);return Object(j.jsx)(j.Fragment,{children:c&&Object(j.jsx)("div",Object(l.a)(Object(l.a)({},b),{},{className:v,onClick:s,children:Object(j.jsx)("div",{className:"modal-inner",onClick:u,children:n?Object(j.jsx)("div",{className:"responsive-video",children:"iframe"===o?Object(j.jsx)("iframe",{title:"video",src:n,frameBorder:"0",allowFullScreen:!0}):Object(j.jsx)("video",{"v-else":!0,controls:!0,src:n})}):Object(j.jsxs)(j.Fragment,{children:[!r&&Object(j.jsx)("button",{className:"modal-close","aria-label":"close",onClick:s}),Object(j.jsx)("div",{className:"modal-content",children:a})]})})}))})};$.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var Q=$,X=(a.p,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),ee=Object(l.a)({},I.defaults),te=function(e){var t=e.className,a=e.topOuterDivider,s=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,b=Object(d.a)(e,X),m=Object(i.useState)(!1),u=Object(h.a)(m,2),v=u[0],O=u[1],p=N()("hero section center-content",a&&"has-top-divider",s&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),x=N()("hero-inner section-inner",c&&"has-top-divider",r&&"has-bottom-divider");return Object(j.jsx)("section",Object(l.a)(Object(l.a)({},b),{},{className:p,children:Object(j.jsx)("div",{className:"container-sm",children:Object(j.jsxs)("div",{className:x,children:[Object(j.jsx)("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"}),Object(j.jsxs)("div",{className:"hero-content",children:[Object(j.jsxs)("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200",children:["Providing wings to your ",Object(j.jsx)("span",{className:"text-color-primary",children:"Vision"})]}),Object(j.jsxs)("div",{className:"container-xs",children:[Object(j.jsx)("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400",children:"We help companies drive amazing business outcomes by delivering meaningful results using Artificial Intelligence and Machine Learning strategies."}),Object(j.jsx)("div",{className:"reveal-from-bottom","data-reveal-delay":"600",children:Object(j.jsx)(G,{children:Object(j.jsx)(K,{tag:"a",color:"primary",wideMobile:!0,href:"/contact-us",children:"Let's talk"})})})]})]}),Object(j.jsx)(Q,{id:"video-modal",show:v,handleClose:function(e){e.preventDefault(),O(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"})]})})}))};te.defaultProps=ee;var ae=te,ie=["className","data","children","tag"],se=function(e){var t=e.className,a=e.data,i=e.children,s=e.tag,c=Object(d.a)(e,ie),r=N()("section-header",t),n=s;return Object(j.jsx)(j.Fragment,{children:(a.title||a.paragraph)&&Object(j.jsx)("div",Object(l.a)(Object(l.a)({},c),{},{className:r,children:Object(j.jsxs)("div",{className:"container-xs",children:[i,a.title&&Object(j.jsx)(n,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0"),children:a.title}),a.paragraph&&Object(j.jsx)("p",{className:"m-0",children:a.paragraph})]})}))})};se.defaultProps={children:null,tag:"h2"};var ce=se,re=[{image:"../../feature_images/cycle.svg",title:"Full-cycle Development",desc:"From concept to market research to planning to developing, you have got us. We will provide blueprint for your full software cycle development and help you get the best customer experience you need."},{image:"../../feature_images/technology_consultant.svg",title:"Technology Consulting",desc:"Raising your revenue quotient by finding the best technology for your business to reach your business goals quickly and strategically, we are here for you."},{image:"../../feature_images/machine_learning.svg",title:"Machine Learning",desc:"We provide Machine Learning services, a leading age technology to solve your complex business data problems and explore a world full of possibilities."},{image:"../../feature_images/big_data.svg",title:"Big Data/Data Science",desc:"Smarter business moves all by organizing, managing and analysing big data chunks that transform and predict scenarios to deliver best results."},{image:"../../feature_images/data_analytics.svg",title:"Data Analytics",desc:"We will help uncover, discover and extract what's hidden in your data to make right decisions that drive business performance and growth."},{image:"../../feature_images/computer_vision.svg",title:"Computer Vision",desc:"AI-powered Computer Vision technology to annotate, train and automate digital images and videos. Real time analysis to provide information based on user inputs and choices."},{image:"../../feature_images/nlp.svg",title:"Natural Language Processing",desc:"We will help you build solutions by collecting and annotating text and audio datasets for your projects and deliver faster results."},{image:"../../feature_images/robotics.svg",title:"Robotics",desc:"An advancing technology to handle your requests efficiently. Automated machine systems to execute specific tasks with little or no human intervention."}],ne=[{app:"AppName",name:"Person Name",review:"Daadasd"},{app:"AppName",name:"Person Name",review:"adsadad"},{app:"AppName",name:"Person Name",review:"adadauehnai"}],oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],le=Object(l.a)({},q.defaults),de=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=e.pushLeft,b=Object(d.a)(e,oe),m=N()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=N()("features-tiles-inner section-inner pt-0",s&&"has-top-divider",c&&"has-bottom-divider"),u=N()("tiles-wrap center-content",o&&"push-left");return Object(j.jsx)("section",Object(l.a)(Object(l.a)({},b),{},{className:m,children:Object(j.jsx)("div",{className:"container reveal-from-botto",children:Object(j.jsxs)("div",{className:h,children:[Object(j.jsx)(ce,{data:{title:"Our services",paragraph:"    "},className:"center-content"}),Object(j.jsx)("div",{className:u,children:re.map((function(e,t){return Object(j.jsx)("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":100+100*t,children:Object(j.jsxs)("div",{className:"tiles-item-inner",children:[Object(j.jsx)("div",{className:"features-tiles-item-header",children:Object(j.jsx)("div",{className:"features-tiles-item-image mb-16",children:Object(j.jsx)(D,{src:e.image,alt:"Features tile icon 01",width:64,height:64})})}),Object(j.jsxs)("div",{className:"features-tiles-item-content",children:[Object(j.jsx)("h4",{className:"mt-0 mb-8",children:e.title}),Object(j.jsx)("p",{className:"m-0 text-sm",children:e.desc})]})]})})}))})]})})}))};de.defaultProps=le;var je=de,be=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],me=Object(l.a)({},q.defaults),he=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=e.pushLeft,b=Object(d.a)(e,be),m=N()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=N()("testimonial-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider"),u=N()("tiles-wrap",o&&"push-left");return Object(j.jsx)("section",Object(l.a)(Object(l.a)({},b),{},{className:m,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:h,children:[Object(j.jsx)(ce,{data:{title:"Customer testimonials",paragraph:"A glance at what our customers think of us."},className:"center-content"}),Object(j.jsx)("div",{className:u,children:ne.map((function(e,t){return Object(j.jsx)("div",{className:"tiles-item reveal-from-right","data-reveal-delay":200+200*t,children:Object(j.jsxs)("div",{className:"tiles-item-inner",children:[Object(j.jsx)("div",{className:"testimonial-item-content",children:Object(j.jsxs)("p",{className:"text-sm mb-0",children:["\u2014 ",e.review]})}),Object(j.jsxs)("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider",children:[Object(j.jsx)("span",{className:"testimonial-item-name text-color-high",children:e.name}),Object(j.jsx)("span",{className:"text-color-low",children:" / "}),Object(j.jsx)("span",{className:"testimonial-item-link",children:Object(j.jsx)("a",{href:"#0",children:e.app})})]})]})})}))})]})})}))};he.defaultProps=me;var ue=he,ve=["className","children","labelHidden","id"],Oe=function(e){var t=e.className,a=e.children,i=e.labelHidden,s=e.id,c=Object(d.a)(e,ve),r=N()("form-label",i&&"screen-reader",t);return Object(j.jsx)("label",Object(l.a)(Object(l.a)({},c),{},{className:r,htmlFor:s,children:a}))};Oe.defaultProps={children:null,labelHidden:!1,id:null};var pe=Oe,xe=["children","className","status"],fe=function(e){var t=e.children,a=e.className,i=e.status,s=Object(d.a)(e,xe),c=N()("form-hint",i&&"text-color-".concat(i),a);return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},s),{},{className:c,children:t}))};fe.defaultProps={children:null,status:!1};var ge=fe,Ne=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],Ce=function(e){var t=e.className,a=e.children,i=e.label,s=e.labelHidden,c=e.type,r=e.name,n=e.status,o=e.disabled,b=e.value,m=e.formGroup,h=e.hasIcon,u=e.size,v=e.placeholder,O=e.rows,p=e.hint,x=Object(d.a)(e,Ne),f=N()(m&&""!==m&&("desktop"===m?"form-group-desktop":"form-group"),h&&""!==h&&"has-icon-"+h),g=N()("form-input",u&&"form-input-".concat(u),n&&"form-".concat(n),t),C="textarea"===c?"textarea":"input";return Object(j.jsxs)(j.Fragment,{children:[i&&Object(j.jsx)(pe,{labelHidden:s,id:x.id,children:i}),Object(j.jsxs)("div",{className:f,children:[Object(j.jsx)(C,Object(l.a)(Object(l.a)({},x),{},{type:"textarea"!==c?c:null,className:g,name:r,disabled:o,value:b,placeholder:v,rows:"textarea"===c?O:null})),a]}),p&&Object(j.jsx)(ge,{status:n,children:p})]})};Ce.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var we=Ce,ye=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],De=Object(l.a)(Object(l.a)({},I.defaults),{},{split:!1}),Le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,r=e.hasBgColor,n=e.invertColor,o=e.split,b=Object(d.a)(e,ye),m=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",n&&"invert-color",t),h=N()("cta-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider",o&&"cta-split");return Object(j.jsx)("section",Object(l.a)(Object(l.a)({},b),{},{className:m,children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:h,children:[Object(j.jsx)("div",{className:"cta-slogan",children:Object(j.jsx)("h3",{className:"m-0",children:"Stay updated on your email"})}),Object(j.jsx)("div",{className:"cta-action",onClick:function(){},children:Object(j.jsx)(we,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your email",children:Object(j.jsx)("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})})})})]})})}))};Le.defaultProps=De;var ke=Le,Ee=function(){return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ae,{className:"illustration-section-01"}),Object(j.jsx)(je,{invertMobile:!0,imageFill:!0,className:"illustration-section-02"}),Object(j.jsx)(ue,{topDivider:!0}),Object(j.jsx)(ke,{split:!0})]})},Ae=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],Pe=Object(l.a)({},q.defaults),Se=function(e){var t=e.className,a=e.topOuterDivider,s=e.bottomOuterDivider,c=e.topDivider,r=e.bottomDivider,n=e.hasBgColor,o=e.invertColor,b=e.pushLeft,m=Object(d.a)(e,Ae);Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]);var h=N()("features-tiles section",a&&"has-top-divider",s&&"has-bottom-divider",n&&"has-bg-color",o&&"invert-color",t),u=N()("features-tiles-inner section-inner pt-0",c&&"has-top-divider",r&&"has-bottom-divider"),v=N()("tiles-wrap center-content",b&&"push-left");return Object(j.jsx)("section",Object(l.a)(Object(l.a)({},m),{},{className:h,children:Object(j.jsx)("div",{className:"container reveal-from-botto",children:Object(j.jsxs)("div",{className:u,children:[Object(j.jsx)(ce,{data:{title:"Contact Us",paragraph:"    "},className:"center-content"}),Object(j.jsxs)("div",{className:v,children:[Object(j.jsx)("div",{className:"tiles-item reveal-from-bottom",children:Object(j.jsxs)("div",{className:"tiles-item-inner",children:[Object(j.jsx)("div",{className:"features-tiles-item-header",children:Object(j.jsx)("div",{className:"features-tiles-item-image mb-16"})}),Object(j.jsxs)("div",{className:"features-tiles-item-content",children:[Object(j.jsx)("h4",{className:"mt-0 mb-8",children:"Address"}),Object(j.jsx)("p",{className:"m-0 text-sm",children:"2025 Willingdon Avenue, Unit 900, Burnaby, BC, V5C 0J3"})]})]})}),Object(j.jsx)("div",{className:"tiles-item reveal-from-bottom",children:Object(j.jsxs)("div",{className:"tiles-item-inner",children:[Object(j.jsx)("div",{className:"features-tiles-item-header",children:Object(j.jsx)("div",{className:"features-tiles-item-image mb-16"})}),Object(j.jsxs)("div",{className:"features-tiles-item-content",children:[Object(j.jsx)("h4",{className:"mt-0 mb-8",children:"Whatsapp"}),Object(j.jsx)("p",{className:"m-0 text-sm",children:Object(j.jsx)("a",{href:"https://wa.me/17787232410",children:Object(j.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#5658DD",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0.0568848 24L1.74388 17.837C0.702885 16.033 0.155885 13.988 0.156885 11.891C0.159885 5.335 5.49488 0 12.0499 0C15.2309 0.001 18.2169 1.24 20.4629 3.488C22.7079 5.736 23.9439 8.724 23.9429 11.902C23.9399 18.459 18.6049 23.794 12.0499 23.794C10.0599 23.793 8.09888 23.294 6.36188 22.346L0.0568848 24V24ZM6.65388 20.193C8.32988 21.188 9.92988 21.784 12.0459 21.785C17.4939 21.785 21.9319 17.351 21.9349 11.9C21.9369 6.438 17.5199 2.01 12.0539 2.008C6.60188 2.008 2.16688 6.442 2.16488 11.892C2.16388 14.117 2.81588 15.783 3.91088 17.526L2.91188 21.174L6.65388 20.193V20.193ZM18.0409 14.729C17.9669 14.605 17.7689 14.531 17.4709 14.382C17.1739 14.233 15.7129 13.514 15.4399 13.415C15.1679 13.316 14.9699 13.266 14.7709 13.564C14.5729 13.861 14.0029 14.531 13.8299 14.729C13.6569 14.927 13.4829 14.952 13.1859 14.803C12.8889 14.654 11.9309 14.341 10.7959 13.328C9.91288 12.54 9.31588 11.567 9.14288 11.269C8.96988 10.972 9.12488 10.811 9.27288 10.663C9.40688 10.53 9.56988 10.316 9.71888 10.142C9.86988 9.97 9.91888 9.846 10.0189 9.647C10.1179 9.449 10.0689 9.275 9.99389 9.126C9.91889 8.978 9.32488 7.515 9.07788 6.92C8.83588 6.341 8.59088 6.419 8.40889 6.41L7.83888 6.4C7.64088 6.4 7.31888 6.474 7.04688 6.772C6.77488 7.07 6.00688 7.788 6.00688 9.251C6.00688 10.714 7.07188 12.127 7.21988 12.325C7.36888 12.523 9.31488 15.525 12.2959 16.812C13.0049 17.118 13.5589 17.301 13.9899 17.438C14.7019 17.664 15.3499 17.632 15.8619 17.556C16.4329 17.471 17.6199 16.837 17.8679 16.143C18.1159 15.448 18.1159 14.853 18.0409 14.729V14.729Z"})})})})]})]})}),Object(j.jsx)("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"0",children:Object(j.jsxs)("div",{className:"tiles-item-inner",children:[Object(j.jsx)("div",{className:"features-tiles-item-header",children:Object(j.jsx)("div",{className:"features-tiles-item-image mb-16"})}),Object(j.jsxs)("div",{className:"features-tiles-item-content",children:[Object(j.jsx)("h4",{className:"mt-0 mb-8",children:"Visit us"}),Object(j.jsx)("p",{className:"m-0 text-sm",children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Days"}),Object(j.jsx)("th",{children:"Open time"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Monday"}),Object(j.jsx)("td",{children:"09:00 a.m. \u2013 05:00 p.m."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Tuesday"}),Object(j.jsx)("td",{children:"09:00 a.m. \u2013 05:00 p.m."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Wednesday"}),Object(j.jsx)("td",{children:"09:00 a.m. \u2013 05:00 p.m."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Thursday"}),Object(j.jsx)("td",{children:"09:00 a.m. \u2013 05:00 p.m."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Friday"}),Object(j.jsx)("td",{children:"09:00 a.m. \u2013 05:00 p.m."})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Saturday"}),Object(j.jsx)("td",{children:"Closed"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Sunday"}),Object(j.jsx)("td",{children:"Closed"})]})]})})]})]})})]})]})})}))};Se.defaultProps=Pe;var _e=Se,Be=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_e,{invertMobile:!0,imageFill:!0,className:"illustration-section-02"}),Object(j.jsx)(ke,{split:!0})]})};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_CODE);var Fe=function(){var e=Object(i.useRef)(),t=Object(n.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),Object(j.jsx)(x,{ref:e,children:function(){return Object(j.jsxs)(n.c,{children:[Object(j.jsx)(m,{exact:!0,path:"/",component:Ee,layout:W}),Object(j.jsx)(m,{exact:!0,path:"/contact-us",component:Be,layout:W})]})}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);var Te=Object(o.a)();r.a.render(Object(j.jsx)(n.b,{history:Te,children:Object(j.jsx)(Fe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.fdc03232.chunk.js.map