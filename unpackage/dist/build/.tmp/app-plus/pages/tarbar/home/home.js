(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/home/home"],{3307:function(t,e,a){"use strict";var o=a("6dab"),r=a.n(o);r.a},"3ddd":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return a.e("components/wuc-tab/wuc-tab").then(a.bind(null,"8cbf"))},n=function(){return a.e("components/uni-nav-bar-diy/uni-nav-bar-diy").then(a.bind(null,"a360"))},i=function(){return a.e("pages/home/home/home-module").then(a.bind(null,"54a2"))},s={data:function(){return{autoplay:!1,tabList:[],info:[],nums:0,module:[],moreArray:[],star:[],actor:[],hotMovie:[],moreFlag:!1,placeholder:"",loadMoreText:"加载中...",showLoadMore:!1,showFalg:!0,title:"",barFalg:!1}},methods:{tabChange:function(e){var a=this;this.barFalg=0!==e,this.$store.commit("changeTar",e),t.pageScrollTo({scrollTop:0,duration:0}),t.request({url:this.websiteUrl+"/api/home/title",method:"GET",data:{typeId:e},success:function(t){a.selectArray=t.data,a.info=a.selectArray.image,a.module=a.selectArray.modle,a.title=a.selectArray.searchTitle,a.selectArray.starMovie?a.star=a.selectArray.starMovie:a.star=[],a.selectArray.star?a.actor=a.selectArray.star:a.actor=[],a.selectArray.hotMovie?a.hotMovie=a.selectArray.hotMovie:a.hotMovie=[],a.nums=0,a.moreArray=[],a.moreFlag=!1,a.showFalg=!0},fail:function(){},complete:function(){}})},setDate:function(){var e=this,a=this.$store.state.deviceId;t.request({url:this.websiteUrl+"/api/home",method:"GET",data:{typeId:0,equipmentId:a},success:function(t){e.tabList=t.data.tablist,e.info=e.tabList[e.TabCur].image,e.module=e.tabList[e.TabCur].module,e.title=e.tabList[e.TabCur].searchTitle,e.tabList[e.TabCur].star?e.actor=e.tabList[e.TabCur].star:e.actor=[],e.tabList[e.TabCur].starMovie?e.star=e.tabList[e.TabCur].starMovie:e.star=[],e.tabList[e.TabCur].hotMovie?e.hotMovie=e.tabList[e.TabCur].hotMovie:e.hotMovie=[]},fail:function(){},complete:function(){}})},moreData:function(){var e=this;t.request({url:this.websiteUrl+"/api/home/reflesh",method:"GET",data:{typeId:this.$store.state.TarCur,currPage:this.nums},success:function(t){if(t.data.length>0){for(var a=[],o=0;o<t.data.length;o++)a.push(t.data[o]);e.moreArray=e.moreArray.concat(a),e.moreFlag=!0,e.nums++}else e.showFalg=!1},fail:function(){},complete:function(){}})},starChange:function(e){var a=this;t.request({url:this.websiteUrl+"/api/home/star",method:"GET",data:{actorId:e.id,currPage:e.index},success:function(t){a.star=t.data},fail:function(){},complete:function(){}})}},components:{WucTab:r,uniNavBar:n,homeModule:i},watch:{TabCur:function(t,e){this.tabChange(t)}},computed:{TabCur:{get:function(){return this.$store.state.TarCur},set:function(t){this.$store.commit("changeTar",t)}}},onLoad:function(){this.setDate()},onUnload:function(){this.data=[],this.showLoadMore=!1,this.showFalg=!0,this.moreFlag=!1,this.nums=0,this.autoplay=!1},onShow:function(){this.autoplay=!0},onHide:function(){this.autoplay=!1},onReachBottom:function(){var t=this;console.log(o("onReachBottom"," at pages\\tarbar\\home\\home.vue:237")),this.showFalg?(this.showLoadMore=!0,this.loadMoreText="加载中...",setTimeout(function(){t.moreData()},300)):this.loadMoreText="我是有底线的!"},onPullDownRefresh:function(){console.log(o("onPullDownRefresh"," at pages\\tarbar\\home\\home.vue:249")),this.initData()}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"48e1":function(t,e,a){"use strict";a.r(e);var o=a("5875"),r=a("f784");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("3307");var i=a("2877"),s=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},5875:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return r})},"6dab":function(t,e,a){},e656:function(t,e,a){"use strict";(function(t){a("c5e3"),a("921b");o(a("66fd"));var e=o(a("48e1"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},f784:function(t,e,a){"use strict";a.r(e);var o=a("3ddd"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=r.a}},[["e656","common/runtime","common/vendor"]]]);