(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"0072":function(t,e,s){"use strict";(function(t){s("c5e3"),s("921b");i(s("66fd"));var e=i(s("ecd1"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},"6f7b":function(t,e,s){},"826b":function(t,e,s){"use strict";s.r(e);var i=s("e64b"),n=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"9d36":function(t,e,s){"use strict";var i=s("6f7b"),n=s.n(i);n.a},cf53:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n})},e64b:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{version:"1.0.0",storageSize:.3,sizeClass:"KB",isNetDown:{checked:!1},isInfoPush:{checked:!0},allowObj:{},pushtObj:{}}},methods:{network:function(e){var s=this,i=e.target.value,n=this;this.$set(this.isNetDown,"checked",i),e.detail.value?t.showModal({title:"",content:"温馨提示：开启后，运营商网络缓存可能会产生超额流量，确认开启？",showCancel:!0,cancelText:"取消",confirmText:"开启",success:function(t){t.confirm?(s.allowObj.status=1,n.$set(n.isNetDown,"checked",!0),s.$store.commit("allowDown",s.allowObj)):(s.allowObj.status=0,n.$set(n.isNetDown,"checked",!1),s.$store.commit("allowDown",s.allowObj))}}):(this.allowObj.status=0,this.$store.commit("allowDown",this.allowObj))},infoPush:function(e){var s=this,i=e.target.value,n=this;this.$set(this.isInfoPush,"checked",i),e.detail.value?(this.pushtObj.status=1,this.$store.commit("allowPush",this.pushtObj)):t.showModal({title:"",content:"温馨提示：关闭后将无法及时接收到新消息推送，确认关闭？",showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(t){t.confirm?(s.pushtObj.status=0,n.$set(n.isInfoPush,"checked",!1),s.$store.commit("allowPush",s.pushtObj)):(s.pushtObj.status=1,n.$set(n.isInfoPush,"checked",!0),s.$store.commit("allowPush",s.pushtObj))}})},toCode:function(){t.navigateTo({url:"/pages/inviteCode/inviteCode",animationType:"slide-in-right"})},toSecurity:function(){this.$store.state.isLogin?t.navigateTo({url:"/pages/security/security",animationType:"slide-in-right"}):t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},clearStorage:function(){this.storageSize="缓存已清除",this.sizeClass="",t.showToast({title:"清除成功"}),setTimeout(function(){t.hideToast()},600)}},onShow:function(){this.version=plus.runtime.version;var e=t.getStorageInfoSync();this.storageSize=e.currentSize,this.$set(this.isNetDown,"checked",this.$store.state.isDown),this.$set(this.isInfoPush,"checked",this.$store.state.isPush)}};e.default=s}).call(this,s("6e42")["default"])},ecd1:function(t,e,s){"use strict";s.r(e);var i=s("cf53"),n=s("826b");for(var o in n)"default"!==o&&function(t){s.d(e,t,function(){return n[t]})}(o);s("9d36");var a=s("2877"),c=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["0072","common/runtime","common/vendor"]]]);