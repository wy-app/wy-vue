(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{48:function(t,c,e){},60:function(t,c,e){"use strict";e(48)},80:function(t,c,e){"use strict";e.r(c);var l=function(){var t=this,c=t.$createElement;return(t._self._c||c)("div",{staticClass:"videoWrap"},[t._v("直播")])};l._withStripped=!0;var i={name:"Video",data:()=>({urlArray:{head:"http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html",recommend:"http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html",entertainment:"http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html",car:"http://c.m.163.com/nc/auto/list/5bmz6aG25bGx/0-20.html",sports:"http://c.3g.163.com/nc/article/list/T1348649079062/0-20.html",pds:"http://c.3g.163.com/nc/article/local/5bmz6aG25bGx/0-20.html",cartoon:"http://c.m.163.com/nc/article/list/T1444270454635/0-20.html",more:"http://c.m.163.com/nc/article/list/T1444270454635/20-20.html"},list:[]}),created:function(){var t=this;this.$http.jsonp("http://localhost:9999?key=wy&url="+this.urlArray.head).then((c=>{var e=JSON.parse(JSON.parse(c.body));t.list=e.T1348647853363,console.log(t.list)}),(t=>{console.log(t)}))}},o=(e(60),e(1)),n=Object(o.a)(i,l,[],!1,null,"01e2fe22",null);n.options.__file="src/components/live/Live.vue";c.default=n.exports}}]);