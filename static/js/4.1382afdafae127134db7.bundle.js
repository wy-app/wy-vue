(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(t,e,n){},65:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e,n,s){if(e.user.avatar=e.user.avatar?e.user.avatar:"http://img1.cache.netease.com/t/img/default80.png",n)if(null!=e.otherComment&&n){var a=t(e.otherComment,!0,s);s+='<div class="commentItem" >\n                    <div class="user">\n                        <div class="avatarWrap">\n                            <img class="avatar" src="'+e.user.avatar+'" alt="">\n                        </div>\n                        <div class="userInfo">\n                            <p class="name">'+(e.user.nickname?e.user.nickname:"***")+'\n                                <span class="sText fr gray" >'+e.vote+'<i class="icon zan_icon"></i></span>\n                            </p>\n                            <p class="other sText">\n                                <span>'+e.user.location+"</span>\n                                <span>"+e.deviceInfo.deviceName+"</span>\n                                <span>"+e.createTime.slice(0,-3)+'</span>\n                            </p>\n                        </div>\n                    </div>\n                    <div class="content">\n                        <p>'+e.content+'</p>\n                        <div class="box" >'+a+"</div>\n                    </div>\n                </div>"}else null==e.otherComment&&n&&(s+='<div class="commentItem" >\n                    <div class="user">\n                        <div class="avatarWrap">\n                            <img class="avatar" src="'+e.user.avatar+'" alt="">\n                        </div>\n                        <div class="userInfo">\n                            <div class="name">\n                                '+(e.user.nickname?e.user.nickname:"***")+'\n                                <span class="sText fr gray" >'+e.vote+'<i class="icon zan_icon"></i></span>\n                            </div>\n                            <div class="other sText">\n                                <span>'+e.user.location+"</span>\n                                <span>"+e.deviceInfo.deviceName+"</span>\n                                <span>"+e.createTime.slice(0,-3)+'</span>\n                            </div>\n                        </div>\n                    </div>\n                    <p class="content">'+e.content+"</p>\n                </div>");else s+='<div class="commentItem" >\n                    <div class="user">\n                        <div class="avatarWrap">\n                            <img class="avatar" src="'+e.user.avatar+'" alt="">\n                        </div>\n                        <div class="userInfo">\n                            <p class="name">\n                                '+(e.user.nickname?e.user.nickname:"***")+'\n                                <span class="sText fr gray" >'+e.vote+'<i class="icon zan_icon"></i></span>\n                            </p>\n                            <p class="other sText">\n                                <span>'+e.user.location+"</span>\n                                <span>"+e.deviceInfo.deviceName+"</span>\n                                <span>"+e.createTime.slice(0,-3)+'</span>\n                            </p>\n                        </div>\n                    </div>\n                    <p class="content">'+e.content+"</p>\n                </div>";return s}},66:function(t,e,n){"use strict";n(52)},82:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("div",{attrs:{id:"commentDetailWrap"}},[n("mt-header",{staticStyle:{"z-index":"5"},attrs:{fixed:""}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1),t._v(" "),n("mt-loadmore",{ref:"loadmore",staticStyle:{"font-size":"0.3rem"},attrs:{"bottom-method":t.loadMore,"bottom-all-loaded":t.allLoaded,autoFill:!1}},[n("div",{staticClass:"commentList",domProps:{innerHTML:t._s(t.html_structure)}})]),t._v(" "),n("div",{staticClass:"commentWrap"},[n("input",{staticClass:"comment-input",attrs:{type:"text",placeholder:"写跟帖"}})])],1)])};s._withStripped=!0;var a=n(3),r=n.n(a),o=n(65),i=n.n(o),l=n(10),c=n.n(l),m={name:"Comment",data:()=>({host_port:"http://"+r.a.dev.host+":"+r.a.dev.servePort,currentUrl:"",html_structure:"",allLoaded:!1,commentArr:[]}),created:function(){let t=this.$route.query.docid,e=this.$route.query.postid,n=t||e;this.currentUrl="http://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/"+n+"/app/comments/hotList?offset=0&limit=10",this.ajaxData({})},mounted:function(){setTimeout((function(){document.getElementById("commentDetailWrap").scrollTop=0}),1e3)},watch:{},methods:{ajaxData:function(t){t.loadMore?this.currentUrl=this.transformUrl(this.currentUrl,"loadMore"):t.loadNew&&(this.currentUrl=this.transformUrl(this.currentUrl,"loadNew")),c.a.showLoading(!0),this.$http.jsonp(this.host_port+"/?key=wy&url="+encodeURIComponent(this.currentUrl)).then((t=>{c.a.showLoading(!1);try{let e=(t=JSON.parse(JSON.parse(t.body))).commentIds,n=t.comments;for(let t=0;t<e.length;t++){let s=e[t].split(",");if(s.length>1){let t,e;for(let a=0;a<s.length;a++)a+1<s.length?(t=JSON.parse(JSON.stringify(n[s[a]])),e=JSON.parse(JSON.stringify(n[s[a+1]])),e.otherComment=t):this.commentArr.push(e)}else this.commentArr.push(n[s[0]])}let s="";for(let t=0;t<this.commentArr.length;t++)this.commentArr[t]&&(s=null==this.commentArr[t].otherComment?i()(this.commentArr[t],!1,s):i()(this.commentArr[t],!0,s));console.log([this.currentUrl,this.commentArr]),this.html_structure=s}catch(t){console.log(t)}finally{this.$refs.loadmore.onBottomLoaded(),42212==t.code&&(this.allLoaded=!0)}}),(t=>{console.log(t)}))},loadMore:function(){this.ajaxData({loadMore:!0})},transformUrl:function(t,e){let n=t.split("?"),s=n[1].split("&");for(var a=0;a<s.length;a++){let t=s[a].split("=");if("loadNew"==e){if("fn"==t[0]){let e=Number(t[1]);e+=1,t[1]=e}}else"loadMore"==e&&(t[1]=Number(t[1])+10);s[a]=t.join("=")}n[1]=s.join("&");let r=n.join("?");return this.currentUrl=r,r}}},d=(n(66),n(1)),p=Object(d.a)(m,s,[],!1,null,null,null);p.options.__file="src/components/news/CommentDetail.vue";e.default=p.exports}}]);