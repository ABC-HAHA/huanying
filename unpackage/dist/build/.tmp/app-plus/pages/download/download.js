(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/download/download"],{"128f":function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isCancel:!1,downVideo:[],index:0,timer:null,num:0,isSelect:!1,allSelect:"全选",selectedId:0,selectedArr:[]}},methods:{creatView:function(){var e=null;e=new plus.nativeObj.View("control",{top:"0px",left:"0px",height:"44px",width:"100%"},[{tag:"rect",id:"rect",position:{top:"0px",left:"0px",width:"100%",height:"44px"},rectStyles:{color:"rgba(0,0,0,0.5)"}},{tag:"img",id:"img",src:"static/fanhui.png",position:{top:"14px",left:"15px",width:"17px",height:"17px"}}]),e.show(),this.listenerEvent(e)},listenerEvent:function(t){t.setTouchEventRect({top:"0",left:"0",width:"87px",height:"44px"}),t.addEventListener("click",function(t){console.log(e("点击原生控件："+JSON.stringify(t)," at pages\\download\\download.vue:66"))},!1)},creatVideoPlay:function(e){var t=null;t=plus.video.createVideoPlayer("localVideo",{src:e,autoplay:"true","show-fullscreen-btn":"false",position:"absolute"}),t.requestFullScreen(-90),plus.webview.currentWebview().append(t),t.addEventListener("fullscreenchange",function(){t.close()},!1)},video:function(e){if(!this.isCancel){var t=plus.os.name.toUpperCase(),n=e.currentTarget.dataset.str,o=e.currentTarget.dataset.name,s=e.currentTarget.dataset.url,a=parseInt(e.currentTarget.dataset.index),l=parseInt(e.currentTarget.dataset.down),d=this;if(-1!=n.indexOf("个"))i.navigateTo({url:"/pages/download/video/video?name="+o,animationType:"slide-in-right"});else if(-1!=n.indexOf("%"))switch(t){case"ANDROID":if(1==l){var r=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(r,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[a],"percent","已暂停"),this.$set(this.downVideo[a],"down","0")}else{var c=plus.android.newObject("com.tjyz.video.download.TS");plus.android.invoke(c,"getTSFile","",o,""),this.timer=setInterval(function(){d.polling(a)},1500),this.$set(this.downVideo[a],"down","1")}break;case"IOS":break;default:break}else switch(t){case"ANDROID":this.creatVideoPlay(s);break;case"IOS":break;default:break}}},polling:function(e){var t=plus.os.name.toUpperCase(),i=this.downVideo[e].name,n="";switch(t){case"ANDROID":var o=plus.android.newObject("com.tjyz.video.download.VideoUtils"),s=plus.android.invoke(o,"getProgress",i,n);this.$set(this.downVideo[e],"percent",s),-1!=s.indexOf("B")&&(clearInterval(this.timer),this.$set(this.downVideo[e],"size",s));break;case"IOS":break;default:break}},checkboxChange:function(e){var t=this.downVideo,i=e.detail.value;this.num=i.length,this.selectedArr=i;for(var n=0,o=t.length;n<o;++n){var s=t[n],a=s.name;i.includes(a)?this.$set(s,"checked",!0):this.$set(s,"checked",!1)}this.num<t.length?this.allSelect="全选":this.allSelect="取消全选"},all_select:function(){var e=this.downVideo;if(this.isSelect){if(this.num<this.downVideo.length){this.num=this.downVideo.length,this.selectedArr=[];for(var t=0,i=e.length;t<i;++t){var n=e[t];this.$set(n,"checked",!0),this.selectedArr.push(n.name)}return void(this.allSelect="取消全选")}for(t=0,i=e.length;t<i;++t){var o=e[t];this.$set(o,"checked",!1)}this.num=0,this.isSelect=!1,this.allSelect="全选",this.selectedArr=[]}else{this.selectedArr=[];for(t=0,i=e.length;t<i;++t){var s=e[t];this.$set(s,"checked",!0),this.selectedArr.push(s.name)}this.num=e.length,this.isSelect=!0,this.allSelect="取消全选"}},deleteItem:function(){var e=plus.os.name.toUpperCase(),t=JSON.stringify(this.selectedArr),i="";switch(e){case"ANDROID":var n=plus.android.newObject("com.tjyz.video.download.VideoUtils");plus.android.invoke(n,"deleteFile",t,i);var o=plus.android.newObject("com.tjyz.video.download.VideoUtils"),s=plus.android.invoke(o,"downloadList");this.downVideo=JSON.parse(s);var a=this.$mp.page.$getAppWebview();a.setStyle({titleNView:{autoBackButton:!0}}),a.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1;break;case"IOS":break;default:break}}},onNavigationBarButtonTap:function(){var e=this.$mp.page.$getAppWebview(),t=plus.os.name.toUpperCase();if(this.isCancel){e.setStyle({titleNView:{autoBackButton:!0}}),e.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1,this.num=0,this.isSelect=!1,this.allSelect="全选";for(var i=0,n=this.downVideo.length;i<n;++i){var o=this.downVideo[i];this.$set(o,"checked",!1)}}else switch(e.setStyle({titleNView:{autoBackButton:!1}}),e.setTitleNViewButtonStyle(0,{text:"取消"}),this.isCancel=!0,t){case"ANDROID":for(var s=0;s<this.downVideo.length;s++)if(this.downVideo[s],1==this.downVideo[s].down){var a=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(a,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[s],"percent","已暂停"),this.$set(this.downVideo[s],"down","0")}break;case"IOS":break;default:break}},onShow:function(){var e=plus.os.name.toUpperCase(),t=this;if("ANDROID"===e){var i=plus.android.newObject("com.tjyz.video.download.VideoUtils"),n=plus.android.invoke(i,"downloadList");this.downVideo=JSON.parse(n);for(var o=0;o<this.downVideo.length;o++)if(1==this.downVideo[o].down){this.index=o,this.timer=setInterval(function(){t.polling(t.index)},1500);break}}else IOS},onUnload:function(){clearInterval(this.timer)},onHide:function(){clearInterval(this.timer)}};t.default=n}).call(this,i("0de9")["default"],i("6e42")["default"])},3548:function(e,t,i){"use strict";i.r(t);var n=i("128f"),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},4201:function(e,t,i){"use strict";(function(e){i("c5e3"),i("921b");n(i("66fd"));var t=n(i("8e4a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"8e4a":function(e,t,i){"use strict";i.r(t);var n=i("cf4f"),o=i("3548");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);i("e11a");var a=i("2877"),l=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},cf4f:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},e11a:function(e,t,i){"use strict";var n=i("eb76"),o=i.n(n);o.a},eb76:function(e,t,i){}},[["4201","common/runtime","common/vendor"]]]);