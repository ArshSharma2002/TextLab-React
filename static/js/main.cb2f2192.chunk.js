(this["webpackJsonptext-lab"]=this["webpackJsonptext-lab"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(4),l=c.n(r),s=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})}function b(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.AppName}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsx)("div",{onClick:e.colorChange,className:"colorPallets mx-3",children:Object(o.jsx)("input",{type:"color",id:"colorpicker"})}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.ModeLabel})]})]})]})})})}function d(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1],l=Object(a.useState)(0),i=Object(s.a)(l,2),b=i[0],d=i[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"UserText",style:{backgroundColor:"dark"===e.mode?"#212529":"white",color:"dark"===e.mode?"white":"black"},value:n,onChange:function(e){r(e.target.value),d(0)},rows:"9",placeholder:"Enter Text Here"})}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-outline-danger mx-3 my-3",onClick:function(){var t=n.toUpperCase();r(t),d(0),e.showAlert("Converted to uppercase !","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-outline-danger mx-3 my-3",onClick:function(){var t=n.toLowerCase();r(t),d(0),e.showAlert("Converted to lowercase !","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-outline-danger mx-3 my-3",onClick:function(){r(""),d(0),e.showAlert("Text Cleared !","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-outline-danger mx-3 my-3",onClick:function(){var e=prompt("Enter the alphabet to find Occurences"),t=n.split(""),c=0,a=0;for(a=0;a<t.length;a++)t[a]==="".concat(e)&&(c+=1);d(c)},children:"Character Occurences"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"All About Text"}),Object(o.jsxs)("p",{children:[Object(o.jsxs)("b",{children:[" ",n.trim().split("/s+/").filter((function(e){return 0!==e.length})).length," "]}),"Words AND",Object(o.jsxs)("b",{children:[" ",n.trim().length," "]}),"Characters"]}),Object(o.jsxs)("p",{children:["Character you searched for Comes ",Object(o.jsxs)("b",{children:[" ",b]})," Times"]}),Object(o.jsxs)("p",{children:["It will take about",Object(o.jsxs)("b",{children:[" ",.08*n.trim().split("/s+/").filter((function(e){return 0!==e.length})).length," "]}),"Minutes to read."]}),Object(o.jsx)("h3",{className:"my-3",children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Some Text Above To Preview It Here"})]})]})}b.defaultProps={AppName:"set app name here",AboutPage:"set about text here"};var h=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)("Enable Dark Mode"),l=Object(s.a)(r,2),h=l[0],j=l[1],u=Object(a.useState)(null),m=Object(s.a)(u,2),x=m[0],g=m[1],p=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{AppName:"TextLab",AboutPage:"About Us",mode:c,colorChange:function(){var e=document.getElementById("colorpicker").value;document.body.style.backgroundColor=e},toggleMode:function(){"light"===c?(n("dark"),j("Enable Light Mode"),document.body.style.backgroundColor="#212529",document.body.style.color="#fff",p("Dark mode has been enabled.","success"),document.title="TextLab | Dark Mode"):(n("light"),j("Enable Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black",p("Light mode has been enabled.","success"))},ModeLabel:h}),Object(o.jsx)(i,{alert:x}),Object(o.jsx)(d,{showAlert:p,heading:"Enter The Text Below",mode:c})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.cb2f2192.chunk.js.map