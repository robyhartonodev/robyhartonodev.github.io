(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3a7c":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var o=e("2a19"),l=e("f508");function n(){function t(t){o["a"].create({color:"negative",textColor:"white",message:t,position:"top-right",icon:"close"})}function a(t){o["a"].create({color:"positive",textColor:"white",message:t,position:"top-right",icon:"check_circle"})}function e(t="Loading..."){l["a"].show({message:t}),setTimeout((()=>{l["a"].hide()}),1500)}return{successNotification:a,errorNotification:t,showLoading:e}}},"713b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"hhh lpR fFf"}},[e("q-header",{staticClass:"bg-transparent",attrs:{"height-hint":"98"}},[e("q-toolbar",{staticClass:"text-center q-py-md"},[e("q-toolbar-title",[e("q-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-bold",attrs:{color:t.avatarBgColor,"text-color":t.avatarTextColor,size:"5rem",clickable:""}},[t._v("\n          RH\n        ")])],1),e("q-btn",{staticClass:"animated slower slideInRight",attrs:{color:"warning",round:"",flat:"",icon:t.toggleIcon},on:{click:t.toggleDarkMode}},[e("q-tooltip",[t._v(t._s(t.$t("mainLayout.darkMode")))])],1),e("q-btn",{staticClass:"animated slower slideInRight text-bold",attrs:{round:"",label:t.language,color:t.avatarBgColor,"text-color":t.avatarTextColor},on:{click:t.toggleLanguage}})],1),e("q-tabs",{staticClass:"text-grey-5"},[e("q-route-tab",{attrs:{to:"/aboutme",label:t.$t("aboutMe.title"),icon:"fas fa-user-circle"}}),e("q-route-tab",{attrs:{to:"/education",label:t.$t("educationAndExperience.title"),icon:"fas fa-book"}}),e("q-route-tab",{attrs:{to:"/skillandframework",label:t.$t("skill.title"),icon:"fas fa-wrench"}}),e("q-route-tab",{attrs:{to:"/demoapp",label:t.$t("demo.title"),icon:"fas fa-code"}}),e("q-route-tab",{attrs:{to:"/contactme",label:t.$t("contactMe.title"),icon:"fas fa-mail-bulk"}})],1)],1),e("q-page-container",[e("router-view")],1)],1)},l=[],n=e("a6f4"),i=e("ff52"),r=e("3a7c"),c=e("4d91"),s=Object(n["b"])({name:"MainLayout",components:{},setup(t,a){const{showLoading:e}=Object(r["a"])(),o=Object(n["d"])(!1),l=Object(n["d"])("fas fa-sun"),s=Object(n["d"])("black"),u=Object(n["d"])("white"),b=Object(n["d"])("en-us");function d(){i["a"].isActive&&(l.value="fas fa-sun",s.value="black",u.value="white"),i["a"].isActive||(l.value="fas fa-moon",s.value="white",u.value="black"),i["a"].toggle()}function g(){var t;e(null===(t=a.parent)||void 0===t?void 0:t.$t("loading")),"en-us"===b.value?(b.value="de",c["b"].locale="de"):(b.value="en-us",c["b"].locale="en-us")}return{leftDrawerOpen:o,language:b,avatarBgColor:s,avatarTextColor:u,toggleDarkMode:d,toggleLanguage:g,toggleIcon:l}}}),u=s,b=e("2877"),d=e("4d5a"),g=e("e359"),f=e("65c6"),v=e("6ac5"),p=e("cb32"),h=e("9c40"),w=e("05c0"),m=e("429b"),k=e("7867"),q=e("09e3"),C=e("714f"),x=e("eebe"),Q=e.n(x),T=Object(b["a"])(u,o,l,!1,null,null,null);a["default"]=T.exports;Q()(T,"components",{QLayout:d["a"],QHeader:g["a"],QToolbar:f["a"],QToolbarTitle:v["a"],QAvatar:p["a"],QBtn:h["a"],QTooltip:w["a"],QTabs:m["a"],QRouteTab:k["a"],QPageContainer:q["a"]}),Q()(T,"directives",{Ripple:C["a"]})}}]);