(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,f=[];c<s.length;c++)i=s[c],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f75c452f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"1dcc":function(e,t,n){"use strict";var r=n("c3de"),a=n.n(r);a.a},"64a9":function(e,t,n){},c3de:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,c=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("input",{attrs:{type:"number"},domProps:{value:e.amount}}),e._v(">\n  "),n("button",{on:{click:e.logValue}},[e._v("Log Value")]),n("div",[n("Editable",{attrs:{text:e.mytext},on:{blur:function(t){e.mytext=t}}})],1),e._v("I\n  "),n("div",[n("EditableAmount",{attrs:{amount:e.amount},on:{blur:function(t){e.amount=t}}})],1),n("DragDropLogo",{attrs:{src:e.logo,msg:e.uploadmsg},on:{change:function(t){e.logo=t},progress:function(t){e.uploadmsg=t}}})],1)},f=[],p=n("d225"),m=n("b0b4"),b=n("308d"),g=n("6bb5"),v=n("4e2b"),h=n("9ab4"),y=n("60a3"),j=n("65d9"),O=n.n(j),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"element",attrs:{contenteditable:"true"},domProps:{innerHTML:e._s(e.text)}})},w=[],x=function(e){function t(){return Object(p["a"])(this,t),Object(b["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=this;this.$refs.element.innerHTML=this.text,this.$refs.element.addEventListener("keydown",function(t){13===t.keyCode&&e.$refs.element.blur()}),this.$refs.element.addEventListener("blur",function(){e.$emit("blur",e.$refs.element.innerText)}),this.$refs.element.addEventListener("focus",function(){e.$emit("focus")})}}]),t}(y["c"]);h["a"]([Object(y["b"])(String)],x.prototype,"text",void 0),x=h["a"]([y["a"]],x);var _=x,$=_,E=Object(i["a"])($,k,w,!1,null,"31cc48cc",null),L=E.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"element",staticStyle:{"overflow-wrap":"normal"},attrs:{contenteditable:"true"},domProps:{textContent:e._s(e.amount)}})},D=[],S=(n("c5f6"),n("59ad")),T=n.n(S),C=function(e){function t(){return Object(p["a"])(this,t),Object(b["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=this;this.$refs.element.innerHTML=this.amount.toFixed(2),this.$refs.element.addEventListener("keydown",function(t){13===t.keyCode&&e.$refs.element.blur()}),this.$refs.element.addEventListener("blur",function(){var t=T()(e.$refs.element.innerText).toFixed(2);e.$emit("blur",T()(t))}),this.$refs.element.addEventListener("focus",function(){e.$emit("focus")})}}]),t}(y["c"]);h["a"]([Object(y["b"])(Number)],C.prototype,"amount",void 0),C=h["a"]([y["a"]],C);var A=C,M=A,F=Object(i["a"])(M,P,D,!1,null,"5d7ceef2",null),I=F.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"file-drag-drop"}},[n("div",{ref:"fileform"},[e.uploadedImage?[n("img",{staticStyle:{height:"125px"},attrs:{src:e.uploadedImage}})]:[n("div",{staticClass:"dragdropstyle"},[n("div",{staticClass:"drop-files pt-4"},[e._v(e._s(e.getMsg))]),n("div",{staticClass:"pt-4"},[n("progress",{attrs:{max:"100"},domProps:{value:e.uploadPercentage}})])])]],2)])},H=[],N=(n("7f7f"),n("8aa5")),R=n.n(N),B=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(b["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.files=[],e.percentage=0,e.progress=0,e.dragAndDropCapable=!1,e}return Object(v["a"])(t,e),Object(m["a"])(t,[{key:"mounted",value:function(){var e=this;this.dragAndDropCapable=this.dragDropCapable();var t=["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"];this.dragAndDropCapable&&(t.forEach(function(t){e.$refs.fileform.addEventListener(t,function(e){e.preventDefault(),e.stopPropagation()})}),e.$refs.fileform.addEventListener("drop",function(t){if(t.dataTransfer&&t.dataTransfer.files)for(var n=t.dataTransfer.files,r=0;r<n.length;r++)e.files.push(n[r]);e.submitFiles()}))}},{key:"submitFiles",value:function(){var e=this,t=R.a.storage().ref(this.files[0].name),n=this,r=t.put(this.files[0]);r.on("state_changed",function(t){switch(n.percentage=t.bytesTransferred/t.totalBytes*100,console.log("Upload is "+n.uploadPercentage+"% done"),t.state){case R.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case R.a.storage.TaskState.RUNNING:var r="Uploading ("+n.uploadPercentage+")";e.$emit("progress",r),console.log("Upload is running");break}},function(e){console.log(e)},function(){r.snapshot.ref.getDownloadURL().then(function(e){n.$emit("change",e),console.log("File available at",e)})})}},{key:"dragDropCapable",value:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window}},{key:"fileList",get:function(){return this.files}},{key:"getMsg",get:function(){return this.msg}},{key:"uploadedImage",get:function(){return this.src}},{key:"uploadPercentage",get:function(){return this.percentage}}]),t}(y["c"]);h["a"]([Object(y["b"])(String)],B.prototype,"src",void 0),h["a"]([Object(y["b"])(String)],B.prototype,"msg",void 0),B=h["a"]([y["a"]],B);var V=B,z=V,G=(n("1dcc"),Object(i["a"])(z,U,H,!1,null,"3b34e94e",null)),J=G.exports,Q=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(b["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.mytext="Hello World",e.amount=100.15,e.logo="",e.uploadmsg="Drag and Drop Files Here",e}return Object(v["a"])(t,e),Object(m["a"])(t,[{key:"test",value:function(e){console.log(e)}},{key:"logValue",value:function(){this.mytext="kkk",this.amount=50.99}}]),t}(y["c"]);Q=h["a"]([O()({components:{Editable:L,EditableAmount:I,DragDropLogo:J}})],Q);var W=Q,Y=W,q=Object(i["a"])(Y,d,f,!1,null,null,null),K=q.exports;r["default"].use(c["a"]);var Z=new c["a"]({routes:[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),X=n("2f62");r["default"].use(X["a"]);var ee=new X["a"].Store({state:{},mutations:{},actions:{}}),te={apiKey:"AIzaSyAjB53WmwCMf3hOHeYQiG-ZpY26xCFQl3s",authDomain:"skillsdemo-2e3d6.firebaseapp.com",databaseURL:"https://skillsdemo-2e3d6.firebaseio.com",projectId:"skillsdemo-2e3d6",storageBucket:"skillsdemo-2e3d6.appspot.com",messagingSenderId:"378463088653"};R.a.initializeApp(te),r["default"].config.productionTip=!1,new r["default"]({router:Z,store:ee,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.547a58ff.js.map