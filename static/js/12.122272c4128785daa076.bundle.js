(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{46:function(e,t,a){},58:function(e,t,a){"use strict";a(46)},75:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"videoWrapper"},[a("VideoNav"),e._v(" "),a("transition",{attrs:{name:"slide"}},[a("router-view",{attrs:{name:"VideoList"}})],1),e._v(" "),a("router-view",{attrs:{name:"VideoDetail"}})],1)};i._withStripped=!0;var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mt-navbar",{attrs:{id:"navBar",fixed:""},model:{value:e.navSelected,callback:function(t){e.navSelected=t},expression:"navSelected"}},e._l(e.navBarList,(function(t,i){return a("mt-tab-item",{key:i,attrs:{id:t,href:"#"+t.link}},[e._v(e._s(t.title))])})),1)};n._withStripped=!0;var s=a(4),o=a.n(s),r=a(3),c=a.n(r),v={data:()=>({host_port:"http://"+c.a.dev.host+":"+c.a.dev.servePort,navBarList:[],navSelected:"推荐",videoNav_url:"http://c.m.163.com/recommend/video/tablist"}),created:function(){this.navSelected=this.$route.params.type?this.$route.params.type:this.navSelected,this.$http.jsonp(this.host_port+"?key=wy&url="+this.videoNav_url).then((e=>{try{e=JSON.parse(JSON.parse(e.body)),this.navBarList=[],e.forEach(function(e,t){this.navBarList.push({link:"/video/videoList/"+e.cname,title:e.cname}),o.a.videoUrl[e.cname]="http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab="+e.ename+"&size=10&offset=0&fn=1"}.bind(this)),console.log([this.navBarList,o.a])}catch(e){}}))}},d=a(1),l=Object(d.a)(v,n,[],!1,null,"3840ae3f",null);l.options.__file="src/components/videos/VideoNav.vue";var p={name:"Video",data:()=>({}),components:{VideoNav:l.exports},created:function(){}},u=(a(58),Object(d.a)(p,i,[],!1,null,"e8c27e18",null));u.options.__file="src/components/videos/Video.vue";t.default=u.exports}}]);