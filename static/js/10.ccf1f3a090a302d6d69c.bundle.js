(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{53:function(s,t,e){},67:function(s,t,e){"use strict";e(53)},83:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("div",{attrs:{id:"searchWrap"}},[e("mt-search",{staticClass:"searchHead",attrs:{"cancel-text":"取消",placeholder:"搜索"}}),s._v(" "),e("mt-loadmore",{ref:"loadmore",staticStyle:{"font-size":"0.3rem"},attrs:{id:"listWrap","bottom-method":s.loadMore,"bottom-all-loaded":s.allLoaded,autoFill:!1}},s._l(s.dataList,(function(t,a){return e("div",{key:a,staticClass:"searchItem",on:{click:function(e){return s.toDetail(t)}}},[null==t.skipType?e("div",{staticClass:"searchItem-wrap"},[t.hasImg?e("mt-swipe",{attrs:{auto:4e3}},[e("mt-swipe-item",[e("img",{staticClass:"newsImg",attrs:{src:t.imgsrc,alt:""}})])],1):s._e(),s._v(" "),t.hasImg?s._e():e("div",{staticClass:"left"},[e("h3",{staticClass:"title"},[s._v(s._s(t.title))]),s._v(" "),e("div",{staticClass:"detial"},[e("span",{staticClass:"source"},[s._v(s._s(t.source))]),s._v(" "),e("span",{staticClass:"pubTime"},[s._v(s._s(t.mtime.slice(5,-3)))]),s._v(" "),e("span",{staticClass:"reply"},[s._v(s._s(t.replyCount)+"跟帖")])])]),s._v(" "),t.hasImg?s._e():e("div",{staticClass:"right"},[e("img",{staticClass:"newsImg",attrs:{src:t.imgsrc,alt:""}})])],1):s._e()])})),0)],1)])};a._withStripped=!0;var n=e(2),i=e(3),o=e.n(i),r={name:"comment",data:()=>({host_port:"http://"+o.a.dev.host+":"+o.a.dev.servePort,currentUrl:"",dataList:[],allLoaded:!1}),created(){console.log(this.$route),this.currentUrl="http://c.m.163.com/search/comp2/Kg%3D%3D/20/6buE5rW35rOi.html?deviceId=uxGr11o3NAPfZGlyCllTkHr2kKvBJ%2Fpli9SInyoBygw%2FSoTJgjnVV7%2Ft0WxZ27gS&version=newsclient.37.2.android&channel=VDEzNDg2NDc5MDkxMDc%3D&canal=b3Bwb19zdG9yZTIwMTRfbmV3cw%3D%3D&dtype=0&tabname=zonghe&qId=MTYyMDA4NjIyMjQzMjUx&position=5pCc57Si5Y6G5Y%2By&ts=1529044030&lat=X%2Fnl%2BNAym6VpiFBmfD0QKQ%3D%3D&lon=NLt2AapSR2nOrohszqrfdg%3D%3D&sign=s%2FmCxjkFMQtF5JsD407FmZBDIGArZFbXmbjPk5Q%2FBtF48ErR02zJ6%2FKXOnxX046I&spever=FALSE&open=scheme_%E9%BB%98%E8%AE%A4&openpath=/doc/DKBLBTJ70517JVUJ",this.ajaxData({})},mounted:function(){setTimeout((function(){}),1e3)},watch:{},methods:{ajaxData(s){s.loadMore?this.currentUrl=this.transformUrl(this.currentUrl,"loadMore"):s.loadNew&&(this.currentUrl=this.transformUrl(this.currentUrl,"loadNew")),console.log(this.currentUrl),n.Indicator.open({text:"加载中...",spinnerType:"snake"}),this.$http.jsonp(this.host_port+"?key=wy&url="+encodeURIComponent(this.currentUrl)).then((s=>{n.Indicator.close();try{const t=(s=JSON.parse(JSON.parse(s.body))).commentIds,e=s.comments,a=[];for(let s=0;s<t.length;s++){const n=t[s].split(",");if(n.length>1){let s,t;for(let i=0;i<n.length;i++)i+1<n.length?(s=JSON.parse(JSON.stringify(e[n[i]])),t=JSON.parse(JSON.stringify(e[n[i+1]])),t.otherComment=s):a.push(t)}else a.push(e[n[0]])}const n="";for(let s=0;s<a.length;s++)a[s].otherComment?this.getDom(n,a[s],!0):this.getDom(n,a[s],!1);console.log(a),this.html_structure=n}catch(s){console.log(s)}finally{this.$refs.loadmore.onBottomLoaded(),42212===s.code&&(this.allLoaded=!0)}}),(s=>{console.log(s)}))},getDom(s,t,e){if(t.user.avatar=t.user.avatar?t.user.avatar:"http://img1.cache.netease.com/t/img/default80.png",e){if(t.otherComment&&e){const e=this.getDom(s,t.otherComment,!0);s+=`\n                     <div class="commentItem" style="border-bottom: 2px solid #eee;">\n                      <div class="user">\n                        <div class="avatarWrap">\n                          <img class="avatar" src="${t.user.avatar}" alt="">\n                        </div>\n                        <div class="userInfo">\n                          <p class="name">${t.user.nickname?t.user.nickname:"***"}<span class="sText fr gray" >${t.vote}<i class="icon zan_icon"></i></span></p>\n                          <p class="other sText">\n                            <span>${t.user.location}</span>\n                            <span>${t.deviceInfo.deviceName}</span>\n                            <span>${t.createTime.slice(0,-3)}</span>\n                          </p>\n                        </div>\n                      </div>\n                      <div class="content">\n                        <p>${t.content}</p>\n                         <div class="box" style="border: 1px solid #eee">${e}</div>\n                      </div>\n                    </div>`}else if(!t.otherComment&&e){return`\n                     <div class="commentItem" >\n                      <div class="user">\n                        <div class="avatarWrap">\n                          <img class="avatar" src="${t.user.avatar}" alt="">\n                        </div>\n                        <div class="userInfo">\n                          <p class="name">${t.user.nickname?t.user.nickname:"***"}<span class="sText fr gray" >${t.vote}<i class="icon zan_icon"></i></span></p>\n                          <p class="other sText">\n                            <span>${t.user.location}</span>\n                            <span>${t.deviceInfo.deviceName}</span>\n                            <span>${t.createTime.slice(0,-3)}</span>\n                          </p>\n                        </div>\n                      </div>\n                      <p class="content">${t.content}</p>\n                    </div>`}}else s+=`\n                     <div class="commentItem" style="border-bottom: 2px solid #eee;">\n                      <div class="user">\n                        <div class="avatarWrap">\n                          <img class="avatar" src="${t.user.avatar}" alt="">\n                        </div>\n                        <div class="userInfo">\n                          <p class="name">${t.user.nickname?t.user.nickname:"***"} <span class="sText fr gray" >${t.vote}<i class="icon zan_icon"></i></span></p>\n                          <p class="other sText">\n                            <span>${t.user.location}</span>\n                            <span>${t.deviceInfo.deviceName}</span>\n                            <span>${t.createTime.slice(0,-3)}</span>\n                          </p>\n                        </div>\n                      </div>\n                      <p class="content">${t.content}</p>\n                    </div>`},loadMore(){this.ajaxData({loadMore:!0})},toDetail:function(s){s.specialID?this.$router.push({name:"special",query:{specialID:s.specialID}}):this.$router.push({name:"newsDetail",query:{postid:s.postid,skipID:s.skipID,docid:s.docid,photosetID:s.photosetID,setid:s.setid,skipType:s.skipType}})},transformUrl:function(s,t){const e=s.split("?");let a=e[1];const n=a.split("&");for(let s=0;s<n.length;s++){const e=n[s].split("=");if("loadNew"===t){if("fn"===e[0]){let s=Number(e[1]);s+=1,e[1]=s}}else if("loadMore"===t&&"limit"===e[0]){let s=Number(e[1]);s+=10,e[1]=s}n[s]=e.join("=")}a=n.join("&"),e[1]=a;const i=e.join("?");return this.currentUrl=i,i}}},l=(e(67),e(1)),c=Object(l.a)(r,a,[],!1,null,null,null);c.options.__file="src/components/news/Search.vue";t.default=c.exports}}]);