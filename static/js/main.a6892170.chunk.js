(this["webpackJsonpcreate-react-website-v2"]=this["webpackJsonpcreate-react-website-v2"]||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),c=a.n(r),i=(a(27),a(2)),o=a(3),s=a(15),m=a(8),u=a(11),E=(a(28),["btn--primary","btn--outline"]),b=["btn--medium","btn--large","btn--mobile","btn--wide"],d=["primary","blue","red","green"],g=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.bottonStyle,c=e.buttonSize,i=e.buttonColor,o=E.includes(r)?r:E[0],s=b.includes(c)?c:b[0],m=d.includes(i)?i:null;return l.a.createElement("button",{className:"btn ".concat(o," ").concat(s," ").concat(m),onClick:n,type:a},t)},h=(a(29),a(0));var p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),E=o[0],b=o[1],d=function(){return r(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?b(!1):b(!0)})),l.a.createElement(l.a.Fragment,null,l.a.createElement(h.b.Provider,{value:{color:"#fff"}},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:d},l.a.createElement(u.b,{className:"navbar-icon"}),"ANEESH"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},a?l.a.createElement(m.f,null):l.a.createElement(m.a,null)),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/",className:"nav-links",onClick:d},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/services",className:"nav-links",onClick:d},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{to:"/products",className:"nav-links",onClick:d},"Products")),l.a.createElement("li",{className:"nav-btn"},E?l.a.createElement(i.b,{to:"/sign-up",className:"btn-link",onClick:d},l.a.createElement(g,{bottonStyle:"btn--outline"},"SIGN UP")):l.a.createElement(i.b,{to:"/sign-up",className:"btn-link"},l.a.createElement(g,{bottonStyle:"btn--outline",buttonSize:"btn--mobile"},"SIGN UP"))))))))};a(35);var v=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,r=e.lightTextDesc,c=e.headLine,o=e.description,s=e.buttonLabel,m=e.img,u=e.alt,E=e.imgStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t?"home__hero-section":"home__hero-section darkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===E?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"}," ",a),l.a.createElement("h1",{className:n?"heading":"heading dark"},c),l.a.createElement("p",{className:r?"home__hero-subtitle":"home__hero-subtitle dark"},o),l.a.createElement(i.b,{to:"/sign-up"},l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"blue"},s)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{src:m,alt:u,className:"home__hero-img"})))))))},N=a(20),f=a(21);a(36);var w=function(){return l.a.createElement(h.b.Provider,{value:{color:"#fff",size:64}},l.a.createElement("div",null,l.a.createElement("div",{className:"pricing__section"},l.a.createElement("div",{className:"pricing__wrapper"},l.a.createElement("h1",{className:"pricing__heading"},"Pricing"),l.a.createElement("div",{className:"pricing__container"},l.a.createElement(i.b,{to:"/",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-card-info"},l.a.createElement("div",{className:"icon"},l.a.createElement(m.c,null)),l.a.createElement("h3",null,"Starter"),l.a.createElement("h4",null,"$8.97"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-feature"},l.a.createElement("li",null,"100 Transactions"),l.a.createElement("li",null,"2% Cash Back"),l.a.createElement("li",null,"$10,000 Limit")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))),l.a.createElement(i.b,{to:"/",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-card-info"},l.a.createElement("div",{className:"icon"},l.a.createElement(N.a,null)),l.a.createElement("h3",null,"Starter"),l.a.createElement("h4",null,"$8.97"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-feature"},l.a.createElement("li",null,"100 Transactions"),l.a.createElement("li",null,"2% Cash Back"),l.a.createElement("li",null,"$10,000 Limit")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"blue"},"Choose Plan"))),l.a.createElement(i.b,{to:"/",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-card-info"},l.a.createElement("div",{className:"icon"},l.a.createElement(f.a,null)),l.a.createElement("h3",null,"Starter"),l.a.createElement("h4",null,"$8.97"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-feature"},l.a.createElement("li",null,"100 Transactions"),l.a.createElement("li",null,"2% Cash Back"),l.a.createElement("li",null,"$10,000 Limit")),l.a.createElement(g,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))))))))},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headLine:'"Everything begins with an idea."',description:"The problem is that the people with the most ridiculous ideas are always the people who are most certain of them.",buttonLabel:"Get Started",imgStart:"",img:"images/thought.svg",alt:"Credit Card"},_={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headLine:"For safety is not a gadget but a state of mind",description:"You don\u2019t need to know the whole alphabet of Safety. The A, B, C of it will save you if you follow it: Always Be Careful.",buttonLabel:"Learn More",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},k={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headLine:"\u201cThe mind of man is capable of anything.\u201d ",description:"It's perfectly okay to make a decision and then change your mind. Being able to change your mind is the best way to find out you still have one.",buttonLabel:"Start Now",imgStart:"start",img:"images/idea.svg",alt:"Vault"},y={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headLine:"I am still learning.",description:"A plant needs roots in order to grow. With man it is the other way around: only when he grows does he have roots and feels at home in the world.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,S),l.a.createElement(v,k),l.a.createElement(v,_),l.a.createElement(v,y),l.a.createElement(w,null))},C={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headLine:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,C),l.a.createElement(w,null))},x={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headLine:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"images/svg-7.svg",alt:"Vault"};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,x),l.a.createElement(w,null))};a(37);var B=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news and trends"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(g,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(i.b,{to:"/sign-up"},"How it works"),l.a.createElement(i.b,{to:"/"},"Testimonials"),l.a.createElement(i.b,{to:"/"},"Careers"),l.a.createElement(i.b,{to:"/"},"Investors"),l.a.createElement(i.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(i.b,{to:"/"},"Contact"),l.a.createElement(i.b,{to:"/"},"Support"),l.a.createElement(i.b,{to:"/"},"Destinations"),l.a.createElement(i.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(i.b,{to:"/"},"Submit Video"),l.a.createElement(i.b,{to:"/"},"Ambassadors"),l.a.createElement(i.b,{to:"/"},"Agency"),l.a.createElement(i.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(i.b,{to:"/"},"Instagram"),l.a.createElement(i.b,{to:"/"},"Facebook"),l.a.createElement(i.b,{to:"/"},"Youtube"),l.a.createElement(i.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(i.b,{to:"/",className:"social-logo"},l.a.createElement(u.a,{className:"navbar-icon"}),"ANEESH")),l.a.createElement("small",{className:"website-rights"},"ANEESH \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement(m.b,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement(m.d,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"//www.youtube.comr",target:"_blank","aria-label":"Youtube"},l.a.createElement(m.h,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(m.g,null)),l.a.createElement(i.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(m.e,null))))))};var I=function(){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:T}),l.a.createElement(o.a,{path:"/services",exact:!0,component:L}),l.a.createElement(o.a,{path:"/products",exact:!0,component:A})),l.a.createElement(B,null)))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a6892170.chunk.js.map