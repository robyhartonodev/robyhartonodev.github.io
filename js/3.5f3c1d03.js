(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3a7c":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var o=a("2a19"),i=a("f508");function r(){function t(t){o["a"].create({color:"negative",textColor:"white",message:t,position:"top-right",icon:"close"})}function e(t){o["a"].create({color:"positive",textColor:"white",message:t,position:"top-right",icon:"check_circle"})}function a(t="Loading..."){i["a"].show({message:t}),setTimeout((()=>{i["a"].hide()}),1500)}return{successNotification:e,errorNotification:t,showLoading:a}}},"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-layout",{attrs:{view:"hHh Lpr lff"}},[a("q-header",{class:t.headerColor,attrs:{reveal:""}},[a("q-toolbar",{staticClass:"q-py-sm q-ml-sm"},[a("q-btn",{staticClass:"q-mr-lg",attrs:{dense:"",flat:"",round:"",icon:"menu",color:"grey-5"},on:{click:function(e){t.drawer=!t.drawer}}}),a("q-toolbar-title",{staticClass:"text-center"},[a("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-bold shadow-1",attrs:{color:t.avatarBgColor,"text-color":t.avatarTextColor,size:"3rem",clickable:""}},[t._v("\n            RH\n          ")])],1),a("q-btn",{staticClass:"animated slower slideInRight",attrs:{color:"warning",round:"",flat:"",icon:t.toggleIcon},on:{click:t.toggleDarkMode}},[a("q-tooltip",[t._v(t._s(t.$t("mainLayout.darkMode")))])],1),a("q-btn",{staticClass:"animated slower slideInRight text-bold",attrs:{round:"",label:t.language,color:t.avatarBgColor,"text-color":t.avatarTextColor},on:{click:t.toggleLanguage}})],1)],1),a("q-drawer",{staticClass:"bg-transparent",attrs:{"show-if-above":"",mini:t.miniState,"mini-width":75,width:250,breakpoint:500},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},t._l(t.navigationItemList,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.scroll,staticClass:"text-grey-5",attrs:{clickable:""},on:{click:function(a){return t.scrollToElement(e.scroll)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"q-ma-md",attrs:{name:e.icon,size:"lg"}},[a("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n                  "+t._s(e.description)+"\n                ")])],1)],1),a("q-item-section",[t._v("\n              "+t._s(e.description)+"\n            ")])],1)})),1)],1)],1),a("q-page-container",[a("router-view")],1)],1)],1)},i=[],r=a("a6f4"),n=a("ff52"),l=a("3a7c"),c=a("4d91"),s=Object(r["b"])({name:"MainLayout",setup(t,e){const{showLoading:a}=Object(l["a"])(),o=Object(r["d"])(!1),i=Object(r["d"])(!1),s=Object(r["d"])(!0),d=Object(r["d"])("fas fa-sun"),u=Object(r["d"])("grey-8"),g=Object(r["d"])("white"),b=Object(r["d"])("bg-white"),v=Object(r["d"])("en"),f=Object(r["d"])([{icon:"fas fa-user-circle",scroll:"#about-me",description:c["b"].t("aboutMe.title")},{icon:"fas fa-book",scroll:"#education-and-experience",description:c["b"].t("educationAndExperience.title")},{icon:"fas fa-wrench",scroll:"#skill-list",description:c["b"].t("skill.title")},{icon:"fas fa-code",scroll:"#demo-component",description:c["b"].t("demo.title")},{icon:"fas fa-mail-bulk",scroll:"#contact-me",description:c["b"].t("contactMe.title")}]);function p(t){var e;null===(e=document.querySelector(t))||void 0===e||e.scrollIntoView({block:"start",behavior:"smooth"})}function m(){n["a"].isActive&&(d.value="fas fa-sun",u.value="grey-5",g.value="white",b.value="bg-white"),n["a"].isActive||(d.value="fas fa-moon",u.value="grey-5",g.value="black",b.value="bg-dark"),n["a"].toggle()}function w(){var t;a(null===(t=e.parent)||void 0===t?void 0:t.$t("loading")),"en"===v.value?(v.value="de",c["b"].locale="de"):(v.value="en",c["b"].locale="en-us")}return Object(r["c"])((()=>{v.value="de",c["b"].locale="de"})),{leftDrawerOpen:o,drawer:i,miniState:s,language:v,avatarBgColor:u,avatarTextColor:g,headerColor:b,toggleDarkMode:m,toggleLanguage:w,toggleIcon:d,scrollToElement:p,navigationItemList:f}}}),d=s,u=a("2877"),g=a("4d5a"),b=a("e359"),v=a("65c6"),f=a("9c40"),p=a("6ac5"),m=a("cb32"),w=a("05c0"),h=a("9404"),q=a("4983"),k=a("1c1c"),C=a("66e5"),x=a("4074"),O=a("0016"),Q=a("09e3"),j=a("714f"),y=a("eebe"),L=a.n(y),_=Object(u["a"])(d,o,i,!1,null,null,null);e["default"]=_.exports;L()(_,"components",{QLayout:g["a"],QHeader:b["a"],QToolbar:v["a"],QBtn:f["a"],QToolbarTitle:p["a"],QAvatar:m["a"],QTooltip:w["a"],QDrawer:h["a"],QScrollArea:q["a"],QList:k["a"],QItem:C["a"],QItemSection:x["a"],QIcon:O["a"],QPageContainer:Q["a"]}),L()(_,"directives",{Ripple:j["a"]})}}]);