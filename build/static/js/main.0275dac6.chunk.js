(window.webpackJsonpmihu=window.webpackJsonpmihu||[]).push([[0],{225:function(e,t,a){e.exports=a(347)},230:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(19),c=a.n(n),r=(a(230),a(72)),i=a(46),d=a(114),m=a(115),s=a(135),h=a(31),u=a(76),b=function(e){return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark container nav1"},o.a.createElement("div",{className:"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"},o.a.createElement("ul",{className:"navbar-nav mr-auto"})),o.a.createElement("div",{className:"mx-auto order-0"},o.a.createElement("a",{className:"navbar-brand mx-auto h-style nav2",href:"/"},"May I help you?"),o.a.createElement("button",{className:"navbar-toggler",type:"button",style:{border:"none"}},o.a.createElement("a",{style:{padding:"8px",color:"rgba(255,255,255,0.5)"},href:"/"},o.a.createElement("i",{className:"fa fa-home nav4"})),o.a.createElement("a",{style:{padding:"8px",color:"rgba(255,255,255,0.5)"}},o.a.createElement("i",{className:"fa fa-bell nav5"})))),o.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},o.a.createElement("ul",{className:"navbar-nav ml-auto nav3"},o.a.createElement("li",{className:"nav-item nav3"},o.a.createElement("a",{className:"nav-link",href:"/"},o.a.createElement("i",{className:"fa fa-home nav4"}))),o.a.createElement("li",{className:"nav-item nav3"},o.a.createElement("a",{className:"nav-link"},o.a.createElement("i",{className:"fa fa-bell nav5"}))))))},f=function(e){return o.a.createElement("div",{className:"footer1"},"Copyright 2019 CSA")},g=a(13),E=a(18),y=a.n(E);function S(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){y.a.get("http://localhost:5000/live").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"notification hide-notification container1"},o.a.createElement("div",{className:"notification-main"},o.a.createElement("h5",{style:{fontStyle:"normal"}},"Notifications"),o.a.createElement("div",{className:"row"},a.map((function(e){return o.a.createElement("div",{className:"col-xs-12 col-sm-6 p-4"},o.a.createElement("div",{className:"notification-section"},o.a.createElement("h6",null,o.a.createElement("i",{class:"fa fa-star","aria-hidden":"true",style:{fontSize:"1em",marginRight:"8px"}}),e.live)))})))))}var v=a(21),F=a.n(v);function p(){return o.a.createElement("div",{className:"container",style:{border:"none"}})}function w(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.useEffect)((function(){y.a.get("http://localhost:5000/live").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("marquee",{behavior:"scroll",direction:"left"},a.map((function(e){return o.a.createElement(o.a.Fragment,null,e.live,o.a.createElement(o.a.Fragment,null,"\xa0"),o.a.createElement(o.a.Fragment,null,"\xa0"),o.a.createElement(o.a.Fragment,null,"\xa0"),o.a.createElement(o.a.Fragment,null,"\xa0"))}))))}var k=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container1"},o.a.createElement(w,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6 thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/accommodation"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-building"}),o.a.createElement("h5",null,"Accommodation"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/darshan"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-users"}),o.a.createElement("h5",null,"Darshan"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/food"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-cutlery "}),o.a.createElement("h5",null,"Food"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/transportation"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-train"}),o.a.createElement("h5",null,"Transportation"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/emergency"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-ambulance"}),o.a.createElement("h5",null,"Emergency"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/coordinator"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-street-view"}),o.a.createElement("h5",null,"Coordinators"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/volunteer"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-male"}),o.a.createElement("h5",null,"Volunteers"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/maps"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-map"}),o.a.createElement("h5",null,"Map"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/info"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-info-circle"}),o.a.createElement("h5",null,"Schedule"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/VCC"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-handshake-o "}),o.a.createElement("h5",null,"VCC"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/ashram"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-user "}),o.a.createElement("h5",null,"Ashram"))))),o.a.createElement("div",{className:"col-xs-12 col-lg-4 col-sm-6  thumb outer-div"},o.a.createElement("div",{className:"middle zoom"},o.a.createElement(h.b,{to:"/faq"},o.a.createElement("div",{className:"center-vh c1"},o.a.createElement("i",{className:"fa fa-question-circle"}),o.a.createElement("h5",null,"FAQ")))))))}}]),t}(l.Component);function N(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/darshan").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Token Number",field:"token",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Date",field:"date",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Darshan Time",field:"darshanTime",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Token Location",field:"tokenLocation",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Token Time",field:"tokenTime",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:[{token:a.token,date:a.date,darshanTime:a.darshanTime,tokenLocation:a.tokenLocation,tokenTime:a.tokenTime}]}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Darshan Timings",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function x(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/accomodations").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Gender",field:"gender",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Area Name",field:"areaname",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Location",field:"locationOfAcc",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Category",field:"category",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Coordinator",field:"coord",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Status",field:"isFull",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}]}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Accommodation",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function O(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/food").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Meal",field:"meal",cellStyle:{background:"inherit",borderLeft:"none",color:"#FFF"},headerStyle:{color:"white"}},{title:"TIme",field:"time",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Location",field:"place",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Counter",field:"counter",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Food & Drinks",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}var j=a(16);function C(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/transportation").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=Object(l.useState)({columns:[{title:"Mode",field:"mode",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Bus No",field:"busno",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Departure",field:"froms",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Destination",field:"destination",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Departure Time",field:"deptime",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Parking",field:"parking",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Transportation",columns:i.columns,data:a,options:{headerStyle:Object(j.a)({borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},"color","white"),searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function T(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/staffvolunteer").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=Object(l.useState)({columns:[{title:"Name",field:"name",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Batch",field:"batch",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Campus",field:"campus",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Seva",field:"seva",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Coordinator Name",field:"cordname",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Coordinator Contact",field:"cordcontact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Student Volunteers",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function z(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/staffvolunteer").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=Object(l.useState)({columns:[{title:"Name",field:"name",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Department",field:"department",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Seva",field:"seva",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Staff Volunteers",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}var W=a(399),R=a(396);function D(){return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(W.a,{defaultActiveKey:"student",id:"uncontrolled-tab-example"},o.a.createElement(R.a,{eventKey:"staff",title:"Staff"},o.a.createElement(z,null)),o.a.createElement(R.a,{eventKey:"student",title:"Student"},o.a.createElement(T,null))))}function A(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in:/coordinator").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=Object(l.useState)({columns:[{title:"Name",field:"name",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Seva",field:"seva",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Department",field:"department",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"5px",border:"none"},title:"Coordinators",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function L(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/ashram").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Section",field:"section",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Seva Location",field:"sevaPlace",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Incharge",field:"incharge",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Ashram Volunteers",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function I(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/emergency").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Service",field:"service",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Name",field:"name",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Contact",field:"contact",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Emergency",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function q(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/vcc").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Food",field:"food",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"TIme",field:"time",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Place",field:"place",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Food & Drinks",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}function V(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/information").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=o.a.useState({columns:[{title:"Schedule",field:"message",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Date",field:"date",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}},{title:"Time",field:"time",cellStyle:{background:"inherit",color:"#FFF"},headerStyle:{color:"white"}}],data:a}),r=Object(g.a)(c,2),i=r[0];r[1];return o.a.createElement("div",{className:"container",style:{border:"none"}},o.a.createElement(F.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.6)",color:"white",borderRadius:"0px",border:"none"},title:"Information & Schedule",columns:i.columns,data:a,options:{headerStyle:{borderTop:"white solid 1px",background:"inherit",color:"white",fontSize:"0.9em",fontWeight:600},searchFieldStyle:{background:"inherit",color:"white",padding:"5px"}}}))}var B=a(395),M=a(400),P=a(397),K=a(398),J=a(150),G=a(206),Q=a.n(G);var $=function(){var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)((function(){y.a.get("https://mihu.amrita.ac.in/faq").then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}),[]);var c=Object(B.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}))();return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:c.root},a.map((function(e){return o.a.createElement(M.a,null,o.a.createElement(P.a,{expandIcon:o.a.createElement(Q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(J.a,{className:c.heading},o.a.createElement("h4",null,e.question))),o.a.createElement(K.a,null,o.a.createElement(J.a,null,o.a.createElement("h5",null,e.answer))))}))))},H=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(S,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:k}),o.a.createElement(u.a,{exact:!0,path:"/darshan",component:N}),o.a.createElement(u.a,{exact:!0,path:"/accommodation",component:x}),o.a.createElement(u.a,{exact:!0,path:"/food",component:O}),o.a.createElement(u.a,{exact:!0,path:"/transportation",component:C}),o.a.createElement(u.a,{exact:!0,path:"/emergency",component:I}),o.a.createElement(u.a,{exact:!0,path:"/ashram",component:L}),o.a.createElement(u.a,{exact:!0,path:"/volunteer",component:D}),o.a.createElement(u.a,{exact:!0,path:"/coordinator",component:A}),o.a.createElement(u.a,{exact:!0,path:"/vcc",component:q}),o.a.createElement(u.a,{exact:!0,path:"/info",component:V}),o.a.createElement(u.a,{exact:!0,path:"/maps",component:p}),o.a.createElement(u.a,{exact:!0,path:"/faq",component:$}),o.a.createElement(u.a,{exact:!0,path:"/staffvolunteer",component:z}),o.a.createElement(u.a,{render:function(){return o.a.createElement("h1",{className:"font-weight-bold text-center pagenotfound"},"404 Page Not Found!")}})),o.a.createElement(f,null)))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[225,1,2]]]);
//# sourceMappingURL=main.0275dac6.chunk.js.map