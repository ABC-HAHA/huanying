(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab/wuc-tab"],{2588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,e){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};e.default=u},"43de":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},"5d46":function(t,e,n){},"7e4f":function(t,e,n){"use strict";n.r(e);var u=n("2588"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},"8cbf":function(t,e,n){"use strict";n.r(e);var u=n("43de"),r=n("7e4f");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("bedf");var f=n("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},bedf:function(t,e,n){"use strict";var u=n("5d46"),r=n.n(u);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab/wuc-tab-create-component',
    {
        'components/wuc-tab/wuc-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8cbf"))
        })
    },
    [['components/wuc-tab/wuc-tab-create-component']]
]);                
