webpackJsonp([1],{"/ynD":function(e,t){},"5AjW":function(e,t,s){"use strict";t.a={name:"MyDialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}}},Gl65:function(e,t){},IcnI:function(e,t,s){"use strict";var n=s("woOf"),i=s.n(n),r=s("NYxO"),a=s("7+uW"),o=s("SeUI"),u=s.n(o);s("ohTm"),s("dc6V");a.default.use(r.a),t.a=new r.a.Store({state:{selected:"profile",user:{id:"",username:""},resume:{config:[{field:"profile",icon:"jibenxinxi"},{field:"works",icon:"gongzuojingli"},{field:"education",icon:"huojiangjingli17"},{field:"projects",icon:"health"},{field:"contacts",icon:"lianxifangshi"}],profile:{name:"Richard",city:"ChongQing",birth:"2012"},works:{company:"Google",content:"none"},education:{school:"CQU",major:"CE",degree:"underdegree",awards:"none"},projects:{project:"note",content:"nodejs"},contacts:{qqnumber:"292829",weixin:"----",number:"----",email:"----"}}},mutations:{initState:function(e,t){i()(e,t)},switchTab:function(e,t){e.selected=t},setUser:function(e,t){i()(e.user,t),console.log(e.user)},removeUser:function(e){e.user.id=""},updateResume:function(e,t){var s=t.path,n=t.value;u.a.set(e.resume,s,n)},setResumeId:function(e,t){var s=t.id;e.resume.id=s}}})},KvDf:function(e,t,s){"use strict";function n(e){s("kmrT")}var i=s("fV88"),r=s("QzaV"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},M93x:function(e,t,s){"use strict";function n(e){s("q+G+")}var i=s("xJD8"),r=s("Tncx"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),i=s("M93x"),r=s("uMhA"),a=(s.n(r),s("NcP2")),o=(s.n(a),s("zL8q")),u=s.n(o),c=s("q8zI"),l=(s.n(c),s("NYxO"));n.default.use(u.a),n.default.use(l.a),n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App />",components:{App:i.a}})},NcP2:function(e,t){},OjAJ:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editor"}},[s("div",{attrs:{id:"items-selection"}},[s("ul",{attrs:{id:"items-selection"}},e._l(e.resume.config,function(t,n){return s("li",{class:{active:t.field===e.selected},on:{click:function(s){e.selected=t.field}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))]),e._v(" "),s("div",{attrs:{id:"panels"}},[s("transition-group",{attrs:{name:"fade",tag:"ul"}},e._l(e.resume.config,function(t,n){return t.field===e.selected?s("li",{key:n},[e._l(e.resume[t.field],function(n,i){return s("div",[s("label",[e._v(e._s(i))]),e._v(" "),s("el-input",{attrs:{value:n},nativeOn:{input:function(s){e.changeResumeField(t.field+"."+i,s.target.value)}}})],1)}),e._v("\n                "+e._s(1)+"\n                "+e._s(t.field)+"\n            ")],2):e._e()}))],1)])},i=[],r={render:n,staticRenderFns:i};t.a=r},QzaV:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"resumePreview"}},[s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.profile,expression:"resume.profile"}],attrs:{"data-name":"prefile"}},[s("h1",[e._v(e._s(e.resume.profile.name))]),e._v(" "),s("p",[s("small",[s("span",[e._v("居住地:")]),e._v(e._s(e.resume.profile.city)+" | "),s("span",[e._v("出生日期:")]),e._v(e._s(e.resume.profile.birth))])])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.works,expression:"resume.works"}],attrs:{"data-name":"works"}},[s("h2",[e._v("工作经历")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.works.company||"公司名称")+"\n    ")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.works.content||"工作内容")+"\n    ")])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education,expression:"resume.education"}],attrs:{"data-name":"education"}},[s("h2",[e._v("教育经历")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.education.school||"学校")+"\n    ")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.education.major||"专业")+"\n    ")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.education.degree||"学历")+"\n    ")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.education.awards||"获奖经历")+"\n    ")])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.projects,expression:"resume.projects"}],attrs:{"data-name":"projects"}},[s("h2",[e._v("项目经历")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.projects.project||"项目")+"\n    ")]),e._v(" "),s("div",[e._v("\n      "+e._s(e.resume.projects.content||"项目内容")+"\n    ")])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contacts,expression:"resume.contacts"}],attrs:{"data-name":"contacts"}},[s("h2",[e._v("联系方式")])])])},i=[],r={render:n,staticRenderFns:i};t.a=r},Tncx:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{previewMode:e.previewMode},attrs:{id:"app"}},[s("Topbar",{staticClass:"topbar",on:{preview:e.preview}}),e._v(" "),s("main",[s("Editor",{staticClass:"editor"}),e._v(" "),s("Preview",{staticClass:"preview"})],1),e._v(" "),s("el-button",{attrs:{id:"exitPreview"},on:{click:e.exitPreview}},[e._v("退出预览")])],1)},i=[],r={render:n,staticRenderFns:i};t.a=r},VW1S:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"topbar"}},[s("div",{staticClass:"logo"},[e._v("\n        Resume\n    ")]),e._v(" "),s("div",{staticClass:"actions"},[e.logined?s("div",{staticClass:"userActions"},[s("span",[e._v("Hello! "+e._s(e.user.username))]),e._v(" "),s("el-button",{on:{click:e.signOut}},[e._v("登出")]),e._v(" "),s("el-button",{on:{click:e.preview}},[e._v("预览")]),e._v(" "),s("el-button",{on:{click:e.saveResumeOrUpdateResume}},[e._v("保存")])],1):s("div",{staticClass:"userActions"},[s("el-button",{on:{click:function(t){e.signInDialogVisible=!0}}},[e._v("登陆")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signUpDialogVisible=!0}}},[e._v("注册")])],1)]),e._v(" "),s("Dia",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[s("SignUpForm",{on:{success:function(t){e.signIn(t)}}})],1),e._v(" "),s("Dia",{attrs:{title:"登陆",visible:e.signInDialogVisible},on:{close:function(t){e.signInDialogVisible=!1}}},[s("SignInForm",{on:{success:function(t){e.signIn(t)}}})],1)],1)},i=[],r={render:n,staticRenderFns:i};t.a=r},YMOo:function(e,t,s){"use strict";var n=s("ohTm"),i=s("hDS5"),r=s("dc6V");t.a={name:"signInForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},methods:{signIn:function(){var e=this,t=this.formData,a=t.username,o=t.password;n.a.User.logIn(a,o).then(function(){e.$emit("success",s.i(r.a)())},function(t){e.errorMessage=s.i(i.a)(t)})}}}},ZzzE:function(e,t,s){"use strict";function n(e){s("q6de")}var i=s("5AjW"),r=s("ezt6"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},"aek+":function(e,t,s){"use strict";function n(e){s("shhF")}var i=s("pIzI"),r=s("OjAJ"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},dc6V:function(e,t,s){"use strict";var n=s("ohTm");t.a=function(e){var t=e||n.a.User.current()||{attributes:{}},s=t.id,i=t.attributes.username;return{id:s||"",username:i||""}}},eCgV:function(e,t,s){"use strict";var n=s("mvHQ"),i=s.n(n),r=s("ZzzE"),a=s("vrL3"),o=s("vrPW"),u=s("ohTm"),c=s("dc6V");t.a={data:function(){return{signUpDialogVisible:!1,signInDialogVisible:!1}},computed:{user:function(){return this.$store.state.user},logined:function(){return this.$store.state.user.id}},components:{Dia:r.a,SignInForm:o.a,SignUpForm:a.a},methods:{preview:function(){console.log(1),this.$emit("preview")},PopDialog:function(){signUpDialogVisible=!0},signIn:function(e){this.signUpDialogVisible=!1,this.signInDialogVisible=!1,this.$store.commit("setUser",e),this.fetchResume()},signOut:function(){u.a.User.logOut(),this.$store.commit("removeUser"),window.location.reload()},saveResumeOrUpdateResume:function(){this.$store.state.resume.id?(this.updateResume(),console.log(this.$store.state.resume)):this.saveResume()},saveResume:function(){var e=this,t=i()(this.$store.state.resume),s=u.a.Object.extend("ResumeData"),n=new s,r=new u.a.ACL;r.setReadAccess(u.a.User.current(),!0),r.setWriteAccess(u.a.User.current(),!0),n.set("content",t),n.setACL(r),n.save().then(function(t){e.$store.state.resume.id=t.id,console.log(e.$store.state.resume.id),console.log("lean保存成功")},function(e){console.log("lean保存失败")}),console.log(this.$store.state.resume)},updateResume:function(){var e=i()(this.$store.state.resume);console.log(this.$store.state.resume);var t=u.a.Object.createWithoutData("ResumeData",this.$store.state.resume.id);t.set("content",e),t.save().then(function(){console.log("lean更新成功")})},fetchResume:function(){var e=this;if(this.$store.state.user){new u.a.Query("ResumeData").find().then(function(t){var s=t[0];console.log(s);var n=s.id;e.$store.state.resume=JSON.parse(s.attributes.content),e.$store.state.resume.id=n,console.log("fetching"),e.$emit("update:resume",e.resumeContent)},function(e){console.error(e)})}}},created:function(){console.log(12),this.$store.commit("setUser",s.i(c.a)()),this.fetchResume(),console.log(this.$store.state.resume.id),console.log(99)}}},ezt6:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"el-zoom-in-center"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"wrapper"},[s("div",{staticClass:"dialog"},[s("header",[e._v("\n                "+e._s(e.title)+"\n                "),s("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),s("main",[e._t("default")],2)])])])},i=[],r={render:n,staticRenderFns:i};t.a=r},fV88:function(e,t,s){"use strict";t.a={name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}}}},hDS5:function(e,t,s){"use strict";var n={202:"用户名已被占用",210:"用户和密码不匹配",211:"找不到该用户",217:"无效的用户名",unknown:"请求失败，请稍后再试"};t.a=function(e){var t=e.code;return n[t]||n.unknown}},kmrT:function(e,t){},nTQu:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signIn(t)}}},[s("div",{staticClass:"row"},[s("label",[e._v("用户")]),e._v(" "),s("el-input",{attrs:{type:"text",required:""},model:{value:e.formData.username,callback:function(t){e.formData.username=t},expression:"formData.username"}})],1),e._v(" "),s("div",{staticClass:"row"},[s("label",[e._v("密码")]),e._v(" "),s("el-input",{attrs:{type:"text",required:""},model:{value:e.formData.password,callback:function(t){e.formData.password=t},expression:"formData.password"}})],1),e._v(" "),s("div",{staticClass:"actions"},[s("input",{attrs:{type:"submit",value:"提交"}}),e._v(" "),s("span",[e._v(e._s(e.errorMessage))])])])])},i=[],r={render:n,staticRenderFns:i};t.a=r},ohTm:function(e,t,s){"use strict";var n=s("JnRc"),i=s.n(n);i.a.init({appId:"tAVNkTaWODRryW0qAr8HeOsF-gzGzoHsz",appKey:"qXzSR1yVxNhLFV1GRqJ9pqeR"}),t.a=i.a},pIzI:function(e,t,s){"use strict";t.a={name:"panels",computed:{count:function(){return this.$store.state.count},selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{changeResumeField:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}}}},"q+G+":function(e,t){},q6de:function(e,t){},q8zI:function(e,t){},rMNx:function(e,t){},shhF:function(e,t){},u8q4:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"row"},[s("label",[e._v("用户名")]),e._v(" "),s("el-input",{attrs:{type:"text",required:""},model:{value:e.formData.username,callback:function(t){e.formData.username=t},expression:"formData.username"}})],1),e._v(" "),s("div",{staticClass:"row"},[s("label",[e._v("密 码")]),e._v(" "),s("el-input",{attrs:{type:"text",required:""},model:{value:e.formData.password,callback:function(t){e.formData.password=t},expression:"formData.password"}})],1),e._v(" "),s("div",{staticClass:"actions"},[s("input",{attrs:{type:"submit",value:"提交"}}),e._v(" "),s("span",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))])])])])},i=[],r={render:n,staticRenderFns:i};t.a=r},uMhA:function(e,t){},v4YQ:function(e,t,s){"use strict";function n(e){s("rMNx")}var i=s("eCgV"),r=s("VW1S"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},vrL3:function(e,t,s){"use strict";function n(e){s("Gl65")}var i=s("zqVA"),r=s("u8q4"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},vrPW:function(e,t,s){"use strict";function n(e){s("/ynD")}var i=s("YMOo"),r=s("nTQu"),a=s("VU/8"),o=n,u=a(i.a,r.a,o,null,null);t.a=u.exports},xJD8:function(e,t,s){"use strict";var n=s("v4YQ"),i=s("aek+"),r=s("KvDf"),a=s("IcnI");s("ohTm"),s("dc6V");t.a={data:function(){return{previewMode:!1}},store:a.a,methods:{preview:function(){alert(1),this.previewMode=!0},exitPreview:function(){this.previewMode=!1},restoreResumeFromLocalStorage:function(){var e=localStorage.getItem("resume");e&&this.$store.commit("setResume",JSON.parse(e))}},components:{Topbar:n.a,Editor:i.a,Preview:r.a},created:function(){var e=localStorage.getItem("state");e&&(e=JSON.parse(e)),this.$store.commit("initState",e)}}},zqVA:function(e,t,s){"use strict";var n=s("ohTm"),i=s("hDS5"),r=s("dc6V");t.a={name:"SignUpForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},created:function(){},methods:{signUp:function(){var e=this,t=this.formData,a=t.username,o=t.password;console.log(a),console.log(o);var u=new n.a.User;u.setUsername(a),u.setPassword(o),u.signUp().then(function(){e.$emit("success",s.i(r.a)())},function(t){e.errorMessage=s.i(i.a)(t)})}}}}},["NHnr"]);
//# sourceMappingURL=app.c99d22007f9311d38b3d.js.map