(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/task/task"],{"11f7":function(t,n,a){"use strict";a.r(n);var e=a("bc15"),i=a("6317");for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);a("19f2");var o=a("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},"175a":function(t,n,a){"use strict";(function(t){a("c5e3"),a("921b");e(a("66fd"));var n=e(a("11f7"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},"19f2":function(t,n,a){"use strict";var e=a("8e93"),i=a.n(e);i.a},6317:function(t,n,a){"use strict";a.r(n);var e=a("895a"),i=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);n["default"]=i.a},"895a":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return a.e("pages/task/taskItem").then(a.bind(null,"5e81"))},i={components:{taskItem:e},data:function(){return{taskShow:!0,task_basic_data:{msg:"success",shareCount:0,userPoints:"10",code:0,sign:"0  ",coutinueMark:"0"},task_list:[{list_title:"今日签到",list_award:"+10金币/个",content:"每次点击签到奖励10个",btn:"去签到",id:0},{list_title:"邀请用户注册",list_award:"+100金币/个",content:"邀请一位好友注册奖励100个",btn:"去完成",id:1},{list_title:"分享专题",list_award:"+5金币/个",content:"每次首次分享专题奖励5个",btn:"去分享",id:5}]}},onShow:function(n){var a=this,e="";this.$store.state.userInfo.userId&&(e=this.$store.state.userInfo.userId),t.request({url:this.websiteUrl+"/api/task/list?userId="+e,success:function(t){0==t.data.status&&(a.task_basic_data=t.data,a.taskShow=!1,a.$nextTick(function(){a.taskShow=!0}))}})},methods:{gotoMyInvitation:function(){t.navigateTo({url:"../../../pages/task/my_invitation"})},gotoMyExchange:function(){t.navigateTo({url:"../../../pages/task/my_exchange"})},gotoMyCoinList:function(){t.navigateTo({url:"../../../pages/task/my_coin"})},toChangData:function(t){this.task_basic_data.continueMark=t.coutinueMark,this.task_basic_data.point=t.userPoints},toPrize:function(){t.navigateTo({url:"/pages/luckDraw/luckDraw",animationType:"slide-in-right",animationDuration:300})}}};n.default=i}).call(this,a("6e42")["default"])},"8e93":function(t,n,a){},bc15:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})}},[["175a","common/runtime","common/vendor"]]]);