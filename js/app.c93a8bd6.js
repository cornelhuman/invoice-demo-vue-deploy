(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)o=c[u],n[o]&&f.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4c45aa77"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=n[t]=[e,i]});e.push(a[2]=i);var s,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=o(t),s=function(e){r.onerror=r.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");o.type=i,o.request=s,a[1](o)}n[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:r})},12e4);r.onerror=r.onload=s,document.head.appendChild(r)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var i=a("64a9"),n=a.n(i);n.a},"1dcc":function(t,e,a){"use strict";var i=a("c3de"),n=a.n(i);n.a},"5c65":function(t,e,a){"use strict";var i=a("d537"),n=a.n(i);n.a},"64a9":function(t,e,a){},"7cef":function(t,e,a){"use strict";var i=a("a1cc"),n=a.n(i);n.a},a1cc:function(t,e,a){},a6c4:function(t,e,a){},bcd3:function(t,e,a){"use strict";var i=a("d573"),n=a.n(i);n.a},c3de:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},s=[],o=a("d225"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),d=a("60a3"),f=a("65d9"),b=a.n(f),v=(a("f9e3"),a("2dd8"),function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]));v=u["a"]([b.a],v);var p=v,h=p,m=(a("034f"),a("2877")),g=Object(m["a"])(h,n,s,!1,null,null,null),y=g.exports,x=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Invoice")],1)},O=[],C=a("b0b4"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"element",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.text)}})},_=[],k=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"mounted",value:function(){var t=this;this.$refs.element.innerHTML=this.text,this.$refs.element.addEventListener("keydown",function(e){13===e.keyCode&&t.$refs.element.blur()}),this.$refs.element.addEventListener("blur",function(){t.$emit("blur",t.$refs.element.innerText)}),this.$refs.element.addEventListener("focus",function(){t.$emit("focus")})}}]),e}(d["c"]);u["a"]([Object(d["b"])(String)],k.prototype,"text",void 0),k=u["a"]([d["a"]],k);var E=k,$=E,S=Object(m["a"])($,w,_,!1,null,"31cc48cc",null),D=S.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{ref:"element",staticStyle:{"overflow-wrap":"normal"},attrs:{contenteditable:"true"},domProps:{textContent:t._s(t.amount)}})},L=[],A=(a("c5f6"),a("59ad")),I=a.n(A),P=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"mounted",value:function(){var t=this;this.$refs.element.innerHTML=this.amount.toFixed(2),this.$refs.element.addEventListener("keydown",function(e){13===e.keyCode&&t.$refs.element.blur()}),this.$refs.element.addEventListener("blur",function(){var e=I()(t.$refs.element.innerText).toFixed(2);t.$emit("blur",I()(e))}),this.$refs.element.addEventListener("focus",function(){t.$emit("focus")})}}]),e}(d["c"]);u["a"]([Object(d["b"])(Number)],P.prototype,"amount",void 0),P=u["a"]([d["a"]],P);var F=P,B=F,z=Object(m["a"])(B,T,L,!1,null,"4b1a08e5",null),M=z.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"file-drag-drop"}},[a("div",{ref:"fileform"},[t.uploadedImage?[a("img",{staticStyle:{height:"125px"},attrs:{src:t.uploadedImage}})]:[a("div",{staticClass:"dragdropstyle"},[a("div",{staticClass:"drop-files pt-4"},[t._v(t._s(t.getMsg))]),a("div",{staticClass:"pt-4"},[a("progress",{attrs:{max:"100"},domProps:{value:t.uploadPercentage}})])])]],2)])},H=[],N=(a("7f7f"),a("8aa5")),U=a.n(N),q=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.files=[],t.percentage=0,t.progress=0,t.dragAndDropCapable=!1,t}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"mounted",value:function(){var t=this;this.dragAndDropCapable=this.dragDropCapable();var e=["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"];this.dragAndDropCapable&&(e.forEach(function(e){t.$refs.fileform.addEventListener(e,function(t){t.preventDefault(),t.stopPropagation()})}),t.$refs.fileform.addEventListener("drop",function(e){if(e.dataTransfer&&e.dataTransfer.files)for(var a=e.dataTransfer.files,i=0;i<a.length;i++)t.files.push(a[i]);t.submitFiles()}))}},{key:"submitFiles",value:function(){var t=this,e=U.a.storage().ref(this.files[0].name),a=this,i=e.put(this.files[0]);i.on("state_changed",function(e){switch(a.percentage=e.bytesTransferred/e.totalBytes*100,console.log("Upload is "+a.uploadPercentage+"% done"),e.state){case U.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case U.a.storage.TaskState.RUNNING:var i="Uploading ("+a.uploadPercentage+")";t.$emit("progress",i),console.log("Upload is running");break}},function(t){console.log(t)},function(){i.snapshot.ref.getDownloadURL().then(function(t){a.$emit("change",t),console.log("File available at",t)})})}},{key:"dragDropCapable",value:function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window}},{key:"fileList",get:function(){return this.files}},{key:"getMsg",get:function(){return this.msg}},{key:"uploadedImage",get:function(){return this.src}},{key:"uploadPercentage",get:function(){return this.percentage}}]),e}(d["c"]);u["a"]([Object(d["b"])(String)],q.prototype,"src",void 0),u["a"]([Object(d["b"])(String)],q.prototype,"msg",void 0),q=u["a"]([d["a"]],q);var Q=q,G=Q,W=(a("1dcc"),Object(m["a"])(G,R,H,!1,null,"3b34e94e",null)),Z=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["Standard"===t.layoutType?a("div",[a("InvoiceStandard")],1):t._e()])},V=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{on:{click:t.LogDetails}},[t._v("Log Details")]),a("div",{staticClass:"border container my-1 rounded invoice-border"},[a("div",{staticClass:"p-4"},[a("div",{staticClass:"row",staticStyle:{"background-color":"white"}},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("DragDropLogo",{attrs:{src:t.business.logo,msg:t.uploadmsg},on:{change:function(e){t.business.logo=e},progress:function(e){t.uploadmsg=e}}})],1)])]),a("div",{staticClass:"col-md-6 text-right",staticStyle:{"font-size":"1em"}},[a("div",{staticClass:"mr-4"},[a("BusinessDetails",{attrs:{business:t.business},on:{change:function(e){t.business=e}}})],1)])]),a("div",{staticClass:"row text-left"},[a("div",{staticClass:"col-md-12"},[a("h2",[a("Editable",{attrs:{"data-text":"Invoice Title",text:t.invoice.invoicetitle},on:{blur:function(e){t.invoice.invoicetitle=e}}})],1)])]),a("div",{staticClass:"row",staticStyle:{}},[a("div",{staticClass:"col-6 p-3 text-left"},[a("ContactDetails",{attrs:{contact:t.contact},on:{change:function(e){t.contact=e}}})],1),a("div",{staticClass:"col-6 text-right",staticStyle:{}})]),a("hr"),a("InvoiceDetails",{attrs:{invoice:t.invoice},on:{change:function(e){t.invoice=e}}}),a("hr"),a("p",[t._v("$bankdetails$")])],1)])])},K=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Editable",{attrs:{"data-text":"Business Name",text:t.businessdata.name},on:{blur:function(e){t.businessdata.name=e}}}),a("Editable",{attrs:{"data-text":"Business Address 1",text:t.businessdata.address1},on:{blur:function(e){t.businessdata.address1=e}}}),a("Editable",{attrs:{"data-text":"Business Address 2",text:t.businessdata.address2},on:{blur:function(e){t.businessdata.address2=e}}}),a("Editable",{attrs:{"data-text":"Business City",text:t.businessdata.city},on:{blur:function(e){t.businessdata.city=e}}}),a("Editable",{attrs:{"data-text":"Business Country",text:t.businessdata.country},on:{blur:function(e){t.businessdata.country=e}}}),a("Editable",{attrs:{"data-text":"Business Zip",text:t.businessdata.zip},on:{blur:function(e){t.businessdata.zip=e}}}),a("Editable",{attrs:{"data-text":"Business Tel",text:t.businessdata.tel},on:{blur:function(e){t.businessdata.tel=e}}})],1)},tt=[],et=function t(){Object(o["a"])(this,t),this.logo="",this.name="",this.address1="",this.address2="",this.city="",this.country="",this.zip="",this.email="",this.tel="",this.invoicenumber=1e3,this.taxname="VAT",this.taxpercentage=15},at=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"watchBusiness",value:function(t){this.$emit("change",t)}},{key:"businessdata",get:function(){return this.business}}]),e}(d["c"]);u["a"]([Object(d["b"])(et)],at.prototype,"business",void 0),u["a"]([Object(d["d"])("businessdata",{deep:!0})],at.prototype,"watchBusiness",null),at=u["a"]([b()({components:{Editable:D}})],at);var it=at,nt=it,st=(a("7cef"),Object(m["a"])(nt,X,tt,!1,null,"587b8c33",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex"},[a("div",[a("editable",{attrs:{"data-text":"FirstName",text:t.contact.firstname},on:{blur:function(e){t.contact.firstname=e}}})],1),a("div",{staticStyle:{"margin-left":"5px"}},[a("editable",{attrs:{"data-text":"LastName",text:t.contactdata.lastname},on:{blur:function(e){t.contactdata.lastname=e}}})],1)]),a("div",[a("editable",{attrs:{"data-text":"Address1",text:t.contactdata.address1},on:{blur:function(e){t.contactdata.address1=e}}})],1),a("div",[a("editable",{attrs:{"data-text":"Address2",text:t.contactdata.address2},on:{blur:function(e){t.contactdata.address2=e}}})],1),a("div",[a("editable",{attrs:{"data-text":"Suburb / City",text:t.contactdata.city},on:{blur:function(e){t.contactdata.city=e}}})],1),a("div",[a("editable",{attrs:{"data-text":"Zip",text:t.contactdata.zip},on:{blur:function(e){t.contactdata.zip=e}}})],1),a("div",[a("editable",{attrs:{"data-text":"Cell / Tell",text:t.contactdata.cell},on:{blur:function(e){t.contactdata.cell=e}}})],1),a("div",[a("editable",{attrs:{"data-text":"Email",text:t.contactdata.email},on:{blur:function(e){t.contactdata.email=e}}})],1)])},rt=[],lt=function t(){Object(o["a"])(this,t),this.firstname="",this.lastname="",this.address1="",this.address2="",this.city="",this.country="",this.zip="",this.email="",this.cell=""},ut=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"watchContact",value:function(t){this.$emit("change",t)}},{key:"contactdata",get:function(){return this.contact}}]),e}(d["c"]);u["a"]([Object(d["b"])(lt)],ut.prototype,"contact",void 0),u["a"]([Object(d["d"])("contactdata",{deep:!0})],ut.prototype,"watchContact",null),ut=u["a"]([b()({components:{Editable:D}})],ut);var dt=ut,ft=dt,bt=(a("bcd3"),Object(m["a"])(ft,ct,rt,!1,null,"454ff7a9",null)),vt=bt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._l(t.invoicedata.items,function(e,i){return a("div",{key:e.id,staticClass:"row text-left"},[a("div",{staticClass:"col-2"},[a("Editable",{attrs:{"data-text":"Category of Item",text:e.category},on:{blur:function(t){e.category=t}}})],1),a("div",{staticClass:"col-4"},[a("Editable",{attrs:{"data-text":"Descrition on Service or Goods",text:e.description},on:{blur:function(t){e.description=t}}})],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 quantity"},[a("EditableAmount",{attrs:{"data-text":"Quantiry",amount:e.quantity},on:{blur:function(t){e.quantity=t}}})],1),a("div",{staticClass:"col-8 price"},[a("EditableAmount",{attrs:{"data-text":"Price",amount:parseFloat(e.price.toFixed(2))},on:{blur:function(t){e.price=t}}})],1)])]),a("div",{staticClass:"col-2 text-right price"},[t._v(t._s(e.total.toFixed(2)))]),t.showEditElements?a("div",{staticClass:"col-1 text-right"},[a("span",{on:{click:function(e){return t.removeRow(i)}}},[a("i",{staticClass:"fas fa-times pt-1",staticStyle:{"font-size":"18px",color:"gray"}})])]):t._e()])}),t.showEditElements?a("div",{staticClass:"row font-weight-bold border-bottom pb-2 mb-2"},[a("div",{staticClass:"col-6"},[a("span",{staticClass:"text-primary",staticStyle:{"font-size":"18pt",outline:"none","margin-top":"2px"},on:{click:t.addInvoiceRow}},[a("i",{staticClass:"fas fa-plus-circle"})])])]):t._e(),a("div",{staticClass:"row pt-3"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 text-right font-weight-bold"},[t._v("Sub Total")]),a("div",{staticClass:"col-4 font-weight-bold text-right price"},[t._v(t._s(t.invoicedata.subtotal.toFixed(2)))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 text-right font-weight-bold"},[t._v("Tax")]),a("div",{staticClass:"col-4 font-weight-bold text-right price"},[t._v(t._s(t.invoicedata.tax.toFixed(2)))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 text-right font-weight-bold"},[t._v("Total")]),a("div",{staticClass:"col-4 font-weight-bold text-right price"},[t._v(t._s(t.invoicedata.total.toFixed(2)))])])])])],2)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row font-weight-bold border-bottom pb-2 mb-2 text-left"},[a("div",{staticClass:"col-2"},[t._v("Category")]),a("div",{staticClass:"col-4"},[t._v("Description")]),a("div",{staticClass:"col-3"},[t._v("Quantity x Price")]),a("div",{staticClass:"col-2 text-right"},[t._v("Total")])])}],mt=function t(e,a,i,n,s){Object(o["a"])(this,t),this.id=e,this.category=a,this.description=i,this.quantity=n,this.price=s,this.total=n*s},gt=function(){function t(e,a){Object(o["a"])(this,t),this.items=new Array,this.invoicenumber=e,this.invoicedate=(new Date).toLocaleDateString(),this.invoicetitle=a,this.subtotal=0,this.tax=0,this.total=0}return Object(C["a"])(t,[{key:"addItem",value:function(t,e,a,i,n){var s=new mt(t,e,a,i,n);this.items.push(s)}}]),t}(),yt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.showEditElements=!0,t}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"watchContact",value:function(t){this.$emit("change",t)}},{key:"addInvoiceRow",value:function(){console.log("Add a row to the invoice")}},{key:"removeRow",value:function(){console.log("Remove Row")}},{key:"invoicedata",get:function(){return this.invoice}}]),e}(d["c"]);u["a"]([Object(d["b"])(gt)],yt.prototype,"invoice",void 0),u["a"]([Object(d["d"])("invoicedata",{deep:!0})],yt.prototype,"watchContact",null),yt=u["a"]([b()({components:{Editable:D,EditableAmount:M}})],yt);var xt=yt,jt=xt,Ot=(a("5c65"),Object(m["a"])(jt,pt,ht,!1,null,"299f2595",null)),Ct=Ot.exports,wt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.layoutType="Standard",t.uploadmsg="Drag and Drop Logo Here",t.business=new et,t.contact=new lt,t.invoice=new gt(1e3,"New Invoice"),t}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"LogDetails",value:function(){console.log(this.business)}},{key:"created",value:function(){this.business.invoicenumber=1e3,this.invoice.addItem(1,"Hardware","Dell XPS 17 Laptop",1,2300),this.invoice.addItem(2,"Software","Windows 10 Profesional",2,450.45)}},{key:"mounted",value:function(){}}]),e}(d["c"]);u["a"]([Object(d["b"])(String)],wt.prototype,"msg",void 0),wt=u["a"]([b()({components:{Editable:D,EditableAmount:M,DragDropLogo:Z,BusinessDetails:ot,ContactDetails:vt,InvoiceDetails:Ct}})],wt);var _t=wt,kt=_t,Et=(a("f78a"),Object(m["a"])(kt,Y,K,!1,null,"0e09c0f9",null)),$t=Et.exports,St=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.layoutType="Standard",t}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"mounted",value:function(){}}]),e}(d["c"]);u["a"]([Object(d["b"])(String)],St.prototype,"msg",void 0),St=u["a"]([Object(d["a"])({components:{InvoiceStandard:$t}})],St);var Dt=St,Tt=Dt,Lt=Object(m["a"])(Tt,J,V,!1,null,"1ab42042",null),At=Lt.exports,It=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.mytext="Hello World",t.amount=100.15,t.logo="",t.uploadmsg="Drag and Drop Files Here",t}return Object(l["a"])(e,t),Object(C["a"])(e,[{key:"test",value:function(t){console.log(t)}},{key:"logValue",value:function(){this.mytext="kkk",this.amount=50.99}}]),e}(d["c"]);It=u["a"]([b()({components:{Editable:D,EditableAmount:M,DragDropLogo:Z,Invoice:At}})],It);var Pt=It,Ft=Pt,Bt=Object(m["a"])(Ft,j,O,!1,null,null,null),zt=Bt.exports;i["default"].use(x["a"]);var Mt=new x["a"]({routes:[{path:"/",name:"home",component:zt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Rt=a("2f62");i["default"].use(Rt["a"]);var Ht=new Rt["a"].Store({state:{},mutations:{},actions:{}}),Nt=a("9f7b"),Ut=a.n(Nt);i["default"].use(Ut.a);var qt={apiKey:"AIzaSyAjB53WmwCMf3hOHeYQiG-ZpY26xCFQl3s",authDomain:"skillsdemo-2e3d6.firebaseapp.com",databaseURL:"https://skillsdemo-2e3d6.firebaseio.com",projectId:"skillsdemo-2e3d6",storageBucket:"skillsdemo-2e3d6.appspot.com",messagingSenderId:"378463088653"};U.a.initializeApp(qt),i["default"].config.productionTip=!1,new i["default"]({router:Mt,store:Ht,render:function(t){return t(y)}}).$mount("#app")},d537:function(t,e,a){},d573:function(t,e,a){},f78a:function(t,e,a){"use strict";var i=a("a6c4"),n=a.n(i);n.a}});
//# sourceMappingURL=app.c93a8bd6.js.map