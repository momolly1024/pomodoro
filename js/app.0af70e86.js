(function(t){function e(e){for(var s,r,i=e[0],c=e[1],u=e[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},a=[];function r(t){return i.p+"js/"+({historys:"historys",list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{historys:"24330f3f",list:"7ab1eb2f",notfound:"5894703e",settings:"8cc97a78"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=o[t]=[e,s]}));e.push(n[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",u.name="ChunkLoadError",u.type=s,u.request=a,n[1](u)}o[t]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2506:function(t,e,n){t.exports=n.p+"img/working.57f396a0.svg"},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=a,t.exports=o,o.id="4678"},"49f9":function(t,e,n){t.exports=n.p+"img/break.5309e894.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var s=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");s["default"].use(o["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container justify-content-center",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-btn-group",{staticClass:"fixed-bottom"},[n("router-link",{attrs:{to:"/"}},[n("b-button",{staticClass:"menubtn"},[n("font-awesome-icon",{attrs:{icon:["fas","clock"]}}),t._v(" 首頁 ")],1)],1),n("router-link",{attrs:{to:"/list"}},[n("b-button",{staticClass:"menubtn",attrs:{"b-button":""}},[n("font-awesome-icon",{attrs:{icon:["fas","list-ul"]}}),t._v(" 待辦 ")],1)],1),n("router-link",{attrs:{to:"/historys"}},[n("b-button",{staticClass:"menubtn",attrs:{"b-button":""}},[n("font-awesome-icon",{attrs:{icon:["fas","history"]}}),t._v(" 紀錄 ")],1)],1),n("router-link",{attrs:{to:"/settings"}},[n("b-button",{staticClass:"menubtn",attrs:{"b-button":""}},[n("font-awesome-icon",{attrs:{icon:["fas","cog"]}}),t._v(" 設定 ")],1)],1)],1)],1),n("keep-alive",[n("vue-page-transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)},r=[],i=n("2877"),c={},u=Object(i["a"])(c,a,r,!1,null,null,null),d=u.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var l=n("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("h3",{staticClass:"mt-1"},[s("button",{staticStyle:{background:"none",border:"none",color:"#4f4f4f"},on:{click:t.showpomodoro}},[s("img",{staticStyle:{width:"50px",height:"45px",filter:"drop-shadow(1px 1px 3px black)"},attrs:{src:n("7c8c")}}),t._v(" 番茄鐘 Pomodoro")])]),s("hr"),s("div",{attrs:{id:"animate"}},[1!=t.status?s("img",{staticStyle:{width:"180px",height:"180px"},attrs:{src:n("49f9")}}):t._e(),1==t.status?s("img",{staticStyle:{width:"180px",height:"180px"},attrs:{src:n("2506")}}):t._e()]),s("div",{staticClass:"saysomthing ",staticStyle:{position:"absolute",top:"8rem",left:"0%"}},[s("p",{staticStyle:{"writing-mode":"vertical-rl","text-orientation":"upright"}},[t._v(t._s(t.savesaysomthing)+"加油加油再撐一下，你可以的❤❤❤❤❤❤❤")])]),s("h4",[t._v(t._s(t.currentText))]),s("div",{staticClass:"timetext"},[s("h2",[s("img",{staticStyle:{width:"70px",height:"70px",filter:"drop-shadow(4px 4px 5px black)"},attrs:{src:n("667b")}}),t._v(t._s(t.timetext))])]),t.sound?t._e():s("b-btn",{staticClass:"text-danger mt-3",attrs:{variant:"link"},on:{click:t.muted}},[s("font-awesome-icon",{staticStyle:{color:"#8E8E8E"},attrs:{size:"lg",icon:["fas","bell"]}})],1),t.sound?s("b-btn",{staticClass:"text-danger mt-3",attrs:{variant:"link"},on:{click:t.Nomuted}},[s("font-awesome-icon",{staticStyle:{color:"#8E8E8E"},attrs:{size:"lg",icon:["fas","bell-slash"]}})],1):t._e(),1!=t.status?s("b-btn",{staticClass:"btn",attrs:{variant:"outline-info"},on:{click:t.start}},[s("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?s("b-btn",{staticClass:"btn",attrs:{variant:"outline-danger"},on:{click:t.pause}},[s("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0||t.todos.length>0?s("b-btn",{staticClass:"btn",attrs:{variant:"outline-success"},on:{click:function(e){return t.finish(!0)}}},[s("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e(),t._v(" "+t._s(t.nextTodo())+" "),s("p",[t._v("下一件事 : "+t._s(t.next))]),s("div",{staticClass:"time"},[0==t.timeshow?s("button",{attrs:{size:"sm",id:"btn1"},on:{click:t.timenow}},[t._v("顯示時間")]):t._e(),1==t.timeshow?s("button",{attrs:{size:"sm",id:"btn2"},on:{click:t.timehide}},[t._v("隱藏時間")]):t._e(),s("br"),1==t.timeshow?s("h5",{attrs:{id:"now"}},[t._v(t._s(t.nowdate))]):t._e(),1==t.timeshow?s("h5",[t._v(t._s(t.time))]):t._e()])],1)},b=[],h=(n("99af"),n("3d20")),j=n.n(h),p=new Audio,g={data:function(){return{status:0,timer:0,nowdate:"",time:"",timeshow:!1,hidetime:"",sound:!1}},computed:{currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"":"快去新增待辦事項"},timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)},alarm:function(){return this.$store.getters.alarm},timeleft:function(){return this.$store.getters.timeleft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos},next:function(){return this.$store.getters.next},saysomething:function(){return this.$store.getters.saysomething}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():setTimeout((function(){j.a.fire("恭喜，都完成囉~~~~")}),10)},pause:function(){clearInterval(this.timer),this.status=2},timenow:function(){var t=this;setInterval((function(){var e=(new Date).getMonth()+1,n=(new Date).getDate(),s=(new Date).getHours(),o=(new Date).getMinutes(),a=(new Date).getSeconds();t.nowdate="".concat(e,"月").concat(n,"日"),t.time="".concat(s,"：").concat(o,"：").concat(a)}),1e3),this.timeshow=!0},timehide:function(){this.timeshow=!1,this.nowdate="",this.time=this.hidetime},muted:function(){p.muted=!0,this.sound=!0},Nomuted:function(){p.muted=!1,this.sound=!1},nextTodo:function(){this.$store.commit("nextTodo")},showpomodoro:function(){j.a.fire({title:"番茄鐘工作法：\n每次專注結束搭配一次休息，多次專注結束搭配一次長休息。\n勞逸結合，有助於提高工作效率。",showConfirmButton:!1,timer:3e3})}}},v=g,w=Object(i["a"])(v,m,b,!1,null,null,null),y=w.exports;s["default"].use(l["a"]);var k=[{path:"/",name:"Home",component:y,meta:{title:"番茄鐘"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/historys",name:"Historys",component:function(){return n.e("historys").then(n.bind(null,"7e19"))},meta:{title:"番茄鐘 | 歷史紀錄"}},{path:"*",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 | 404"}}],x=new l["a"]({routes:k}),_=x;x.afterEach((function(t,e){document.title=t.meta.title}));n("a434"),n("b0c0");var z=n("2f62"),C=n("0e44"),T=n("c1df"),O=n.n(T);s["default"].use(z["a"]);var S=parseInt("1500"),E=parseInt("300"),$=O()().format("YYYY年MM月DD日"),B=new z["a"].Store({state:{todos:[],historys:[],rehistorys:[],timeleft:S,alarm:"alarm2.mp3",current:"",isBreak:!1,next:"",saysomething:""},getters:{alarm:function(t){return t.alarm},todos:function(t){return t.todos},timeleft:function(t){return t.timeleft},current:function(t){return t.current},isBreak:function(t){return t.isBreak},historys:function(t){return t.historys},nextTodo:function(t){t.todos.length>0?t.next=t.todos[0].name:t.next="沒有下一筆"},next:function(t){return t.next}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){e.length<=0?j.a.fire({title:"請輸入待辦事項",showConfirmButton:!1,timer:800}):(t.todos.push({name:e,edit:!1,model:e,time:$}),j.a.fire({icon:"success",title:"新增成功",showConfirmButton:!1,timer:800}))},dragTodo:function(t,e){t.todos=e},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},start:function(t){t.isBreak?t.current="休息一下":t.isBreak||(t.current=t.todos[0].name,t.historys.push(t.todos[0]),t.todos.splice(0,1))},countdown:function(t){t.timeleft--},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.timeleft=t.isBreak?E:S},delHistory:function(t,e){t.historys.splice(t.historys.length-e-1,1)},nextTodo:function(t){t.todos.length>0?t.next=t.todos[0].name:t.next="沒有下一筆"}},actions:{},modules:{},plugins:[Object(C["a"])()]}),M=(n("df2d"),n("ecb2"),n("cc73"),n("6cf9")),D=n("ecee"),P=n("ad3d"),A=n("c074"),N=n("310e"),I=n.n(N),q=n("f0eb"),F=n("dad5"),H=n.n(F),L=n("a584");s["default"].use(L["a"],{config:{id:"UA-168244762-1"}}),s["default"].use(M["a"]),s["default"].use(H.a),s["default"].use(q["default"]),D["c"].add(A["c"],A["i"],A["m"],A["o"],A["k"],A["j"],A["h"],A["l"],A["n"],A["e"],A["g"],A["d"],A["f"],A["b"],A["a"]),s["default"].component("font-awesome-icon",P["a"]),s["default"].component("draggable",I.a),s["default"].config.productionTip=!1;var Y='\n<div>\n  <vue-loaders-ball-beat color="red" scale="1"></vue-loaders-ball-beat>\n  <hr/>\n  <vue-loaders name="ball-beat" color="red" scale="1"></vue-loaders>\n</div>\n';new s["default"]({router:_,store:B,template:Y,render:function(t){return t(d)}}).$mount("#app")},"667b":function(t,e,n){t.exports=n.p+"img/time.e16a4c52.svg"},"7c8c":function(t,e,n){t.exports=n.p+"img/tomato.a267f01c.svg"},df2d:function(t,e,n){}});
//# sourceMappingURL=app.0af70e86.js.map