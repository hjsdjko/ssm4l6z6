(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"04df":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],u=e.getStorageSync("loginTable"),n.tableName=u,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.yonghuzhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("用户账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.yonghuxingming||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 6:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=12;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.yonghushouji||e.$validate.isMobile(e.ruleForm.yonghushouji)){n.next=15;break}return e.$utils.msg("用户手机应输入手机格式"),n.abrupt("return");case 15:return n.next=17,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},4042:function(e,n,t){"use strict";t.r(n);var r=t("cfde"),u=t("86b1");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("f791"),t("d1a4");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"399a52a8",null,!1,r["a"],i);n["default"]=c.exports},"4f97":function(e,n,t){"use strict";(function(e){t("c3c6");r(t("66fd"));var n=r(t("4042"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"713f":function(e,n,t){},"86b1":function(e,n,t){"use strict";t.r(n);var r=t("04df"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},b3d2:function(e,n,t){},cfde:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},d1a4:function(e,n,t){"use strict";var r=t("713f"),u=t.n(r);u.a},f791:function(e,n,t){"use strict";var r=t("b3d2"),u=t.n(r);u.a}},[["4f97","common/runtime","common/vendor"]]]);