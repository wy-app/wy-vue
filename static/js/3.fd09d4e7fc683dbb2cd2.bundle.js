(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{40:function(t,e,n){"use strict";n.r(e);var s=n(41),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);e.default=i.a},41:function(t,e,n){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=s(n(0)),a=n(2),c=s(n(3)),o=n(20);e.default=i.default.extend({name:"Special",data:function(){return{title:"",specialID:"",host_port:"http://"+c.default.dev.host+":"+c.default.dev.servePort,dataList:[],currentUrl:"",allLoaded:!1}},watch:{},created:function(){var t=this.$route.query;this.specialID=t.specialID,this.currentUrl="http://c.m.163.com/nc/special/"+this.specialID+".html",this.getData()},mounted:function(){var t=this,e=document.getElementById("app");e&&(e.onscroll=o.debounce(this.loadImg,300)),this.$nextTick((function(){t.loadImg()}))},updated:function(){this.loadImg()},methods:{getData:function(){var t=this;a.Indicator.open({text:"加载中...",spinnerType:"snake"}),this.$http.jsonp(this.host_port+"?key=wy&url="+this.currentUrl).then((function(e){a.Indicator.close();try{var n=JSON.parse(JSON.parse(e.body));t.dataList=n[t.specialID],console.log(["专题数据",t.currentUrl,t.dataList])}catch(e){console.log(e),a.MessageBox({title:"提示",message:"网络错误，请刷新重试！",confirmButtonText:"刷新"}).then((function(){t.getData()}))}}),(function(t){console.log(t)}))},toDetail:function(t){t.specialID?this.$router.push({name:"special",query:{specialID:t.specialID}}):this.$router.push({name:"newsDetail",query:{postid:t.postid,skipID:t.skipID,docid:t.docid,photosetID:t.photosetID,setid:t.setid}})},toAnchor:function(t){var e=document.getElementById(t).offsetTop;document.getElementById("app").scrollTop=e},loadImg:function(){var t=document.getElementById("app");if(t)for(var e=document.querySelectorAll("#specialWrap img"),n=t.scrollTop,s=document.documentElement.clientHeight,i=0;i<e.length;i++){if(n+s>e[i].offsetTop-200){if(e[i].src)continue;var a=e[i].getAttribute("data-src");a&&(e[i].src=a)}}}}})},51:function(t,e,n){},64:function(t,e,n){"use strict";n(51)},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"specialWrap"}},[n("mt-header",{staticStyle:{"z-index":"5"},attrs:{fixed:""}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("\n      返回\n    ")])],1),t._v(" "),n("header",[t.dataList.banner?n("img",{staticClass:"banner",attrs:{src:t.dataList.banner,alt:"banner图片"}}):t._e(),t._v(" "),n("div",{staticClass:"cellWrap"},t._l(t.dataList.topics,(function(e,s){return n("div",{key:s,staticClass:"cell",on:{click:function(e){return t.toAnchor(s)}}},[t._v("\n        "+t._s(e.shortname||e.tname)+"\n      ")])})),0)]),t._v(" "),t._l(t.dataList.topics,(function(e,s){return n("div",{key:s},[n("div",{staticClass:"newsItem-title",attrs:{id:s}},[t._v("\n      "+t._s(++s+"/"+t.dataList.topics.length)+" "+t._s(e.tname)+"\n    ")]),t._v(" "),t._l(e.docs,(function(e,s){return n("div",{key:s,staticClass:"newsItem",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"left"},[n("h3",{staticClass:"title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"detial"},[n("span",{staticClass:"source"},[t._v(t._s(e.source))]),t._v(" "),n("span",{staticClass:"pubTime"},[t._v(t._s(e.ptime.slice(5,-3)))]),t._v(" "),n("span",{staticClass:"reply"},[t._v(t._s(e.replyCount)+"跟帖")])])]),t._v(" "),n("div",{staticClass:"right"},[n("img",{staticClass:"newsImg",attrs:{"data-src":e.imgsrc,alt:""}})])])}))],2)}))],2)},i=[];s._withStripped=!0},74:function(t,e,n){"use strict";n.r(e);var s=n(72),i=n(40);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(64);var c=n(1),o=Object(c.a)(i.default,s.a,s.b,!1,null,"b3b51226",null);o.options.__file="src/components/news/Special.vue",e.default=o.exports}}]);