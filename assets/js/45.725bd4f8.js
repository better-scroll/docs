(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{390:function(t,n,s){},471:function(t,n,s){"use strict";s(390)},623:function(t,n,s){"use strict";s.r(n);var c=s(346),i={data:function(){return{nums1:30,nums2:60,switcher:!1}},mounted:function(){this.init()},beforeDestroy:function(){this.bs.destroy()},methods:{handleClick:function(){var t=this;this.switcher=!this.switcher,this.$nextTick((function(){t.bs.refresh()}))},init:function(){this.bs=new c.a(this.$refs.scroll,{probeType:3}),this.bs.on("contentChanged",(function(t){console.log("--- newContent ---"),console.log(t)})),this.bs.on("scroll",(function(){console.log("scrolling-")})),this.bs.on("scrollEnd",(function(){console.log("scrollingEnd")}))}}},o=(s(471),s(30)),e=Object(o.a)(i,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"core-dynamic-content-container"},[s("div",{ref:"scroll",staticClass:"scroll-wrapper"},[t.switcher?s("div",{key:"2",staticClass:"scroll-content c2"},t._l(t.nums2,(function(n){return s("div",{key:n,staticClass:"scroll-item"},[t._v(t._s(t.nums2-n+1))])})),0):s("div",{key:"1",staticClass:"scroll-content c1"},t._l(t.nums1,(function(n){return s("div",{key:n,staticClass:"scroll-item"},[t._v(t._s(n))])})),0)]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.handleClick}},[t._v("switch content element")])])}),[],!1,null,"0dba1936",null);n.default=e.exports}}]);