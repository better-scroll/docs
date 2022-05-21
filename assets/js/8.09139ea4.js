(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{355:function(o,t,e){"use strict";var s=e(345),r=[{key:"putAt",name:"putAt"}].map((function(o){return{key:o.key,sourceKey:"plugins.movable."+o.name}})),i=function(){function o(o){this.scroll=o,this.handleBScroll(),this.handleHooks()}return o.prototype.handleBScroll=function(){this.scroll.proxy(r)},o.prototype.handleHooks=function(){var o=this;this.hooksFn=[];var t=this.scroll.scroller,e=t.scrollBehaviorX,s=t.scrollBehaviorY,r=function(o,t){o.maxScrollPos>0&&(o.minScrollPos=t.wrapperSize-t.contentSize,o.maxScrollPos=0)};this.registerHooks(e.hooks,e.hooks.eventTypes.ignoreHasScroll,(function(){return!0})),this.registerHooks(e.hooks,e.hooks.eventTypes.computeBoundary,(function(o){r(o,e)})),this.registerHooks(s.hooks,s.hooks.eventTypes.ignoreHasScroll,(function(){return!0})),this.registerHooks(s.hooks,s.hooks.eventTypes.computeBoundary,(function(o){r(o,s)})),this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.destroy,(function(){o.destroy()}))},o.prototype.putAt=function(o,t,e,r){void 0===e&&(e=this.scroll.options.bounceTime),void 0===r&&(r=s.r.bounce);var i=this.resolvePostion(o,t);this.scroll.scrollTo(i.x,i.y,e,r)},o.prototype.resolvePostion=function(o,t){var e=this.scroll.scroller,s=e.scrollBehaviorX,r=e.scrollBehaviorY,i={left:function(){return 0},top:function(){return 0},right:function(){return s.minScrollPos},bottom:function(){return r.minScrollPos},center:function(o){return(0===o?s.minScrollPos:r.minScrollPos)/2}};return{x:"number"==typeof o?o:i[o](0),y:"number"==typeof t?t:i[t](1)}},o.prototype.destroy=function(){this.hooksFn.forEach((function(o){var t=o[0],e=o[1],s=o[2];t.off(e,s)})),this.hooksFn.length=0},o.prototype.registerHooks=function(o,t,e){o.on(t,e,this),this.hooksFn.push([o,t,e])},o.pluginName="movable",o.applyOrder=s.a.Pre,o}();t.a=i},356:function(o,t,e){"use strict";var s=[{key:"zoomTo",name:"zoomTo"}].map((function(o){return{key:o.key,sourceKey:"plugins.zoom."+o.name}})),r=e(345),i=function(){function o(o){this.scroll=o,this.scale=1,this.prevScale=1,this.init()}return o.prototype.init=function(){this.handleBScroll(),this.handleOptions(),this.handleHooks(),this.tryInitialZoomTo(this.zoomOpt)},o.prototype.zoomTo=function(o,t,e,s){var r=this.resolveOrigin(t,e),i={x:r.originX,y:r.originY,baseScale:this.scale};this._doZoomTo(o,i,s,!0)},o.prototype.handleBScroll=function(){this.scroll.proxy(s),this.scroll.registerType(["beforeZoomStart","zoomStart","zooming","zoomEnd"])},o.prototype.handleOptions=function(){var o=!0===this.scroll.options.zoom?{}:this.scroll.options.zoom;this.zoomOpt=Object(r.t)({start:1,min:1,max:4,initialOrigin:[0,0],minimalZoomDistance:5,bounceTime:800},o)},o.prototype.handleHooks=function(){var o=this,t=this.scroll,e=this.scroll.scroller;this.wrapper=this.scroll.scroller.wrapper,this.setTransformOrigin(this.scroll.scroller.content);var s=e.scrollBehaviorX,i=e.scrollBehaviorY;this.hooksFn=[],this.registerHooks(t.hooks,t.hooks.eventTypes.contentChanged,(function(t){o.setTransformOrigin(t),o.scale=1,o.tryInitialZoomTo(o.zoomOpt)})),this.registerHooks(t.hooks,t.hooks.eventTypes.beforeInitialScrollTo,(function(){if(1!==o.zoomOpt.start)return!0})),this.registerHooks(s.hooks,s.hooks.eventTypes.beforeComputeBoundary,(function(){var t=Object(r.z)(o.scroll.scroller.content);s.contentSize=Math.floor(t.width*o.scale)})),this.registerHooks(i.hooks,i.hooks.eventTypes.beforeComputeBoundary,(function(){var t=Object(r.z)(o.scroll.scroller.content);i.contentSize=Math.floor(t.height*o.scale)})),this.registerHooks(e.actions.hooks,e.actions.hooks.eventTypes.start,(function(t){var e=t.touches&&t.touches.length||0;o.fingersOperation(e),2===e&&o.zoomStart(t)})),this.registerHooks(e.actions.hooks,e.actions.hooks.eventTypes.beforeMove,(function(t){var e=t.touches&&t.touches.length||0;if(o.fingersOperation(e),2===e)return o.zoom(t),!0})),this.registerHooks(e.actions.hooks,e.actions.hooks.eventTypes.beforeEnd,(function(t){if(2===o.fingersOperation())return o.zoomEnd(),!0})),this.registerHooks(e.translater.hooks,e.translater.hooks.eventTypes.beforeTranslate,(function(t,e){var s=e.scale?e.scale:o.prevScale;o.prevScale=s,t.push("scale("+s+")")})),this.registerHooks(e.hooks,e.hooks.eventTypes.scrollEnd,(function(){2===o.fingersOperation()&&o.scroll.trigger(o.scroll.eventTypes.zoomEnd,{scale:o.scale})})),this.registerHooks(this.scroll.hooks,"destroy",this.destroy)},o.prototype.setTransformOrigin=function(o){o.style[r.O.transformOrigin]="0 0"},o.prototype.tryInitialZoomTo=function(o){var t=o.start,e=o.initialOrigin,s=this.scroll.scroller,r=s.scrollBehaviorX,i=s.scrollBehaviorY;1!==t&&(this.resetBoundaries([r,i]),this.zoomTo(t,e[0],e[1],0))},o.prototype.fingersOperation=function(o){if("number"!=typeof o)return this.numberOfFingers;this.numberOfFingers=o},o.prototype._doZoomTo=function(o,t,e,s){var i=this;void 0===e&&(e=this.zoomOpt.bounceTime),void 0===s&&(s=!1);var n=this.zoomOpt,c=n.min,l=n.max,a=this.scale,h=Object(r.m)(o,c,l);!function(){if(0!==e){if(e>0){var o,t=Object(r.y)(),s=t+e,n=function(){var c=Object(r.y)();if(c>=s)return i.scroll.trigger(i.scroll.eventTypes.zooming,{scale:h}),void Object(r.n)(o);var l=r.r.bounce.fn((c-t)/e)*(h-a)+a;i.scroll.trigger(i.scroll.eventTypes.zooming,{scale:l}),o=Object(r.N)(n)};n()}}else i.scroll.trigger(i.scroll.eventTypes.zooming,{scale:h})}(),this.fingersOperation(2),this._zoomTo(h,a,t,e,s)},o.prototype._zoomTo=function(o,t,e,s,i){void 0===i&&(i=!1);var n=o/e.baseScale;this.setScale(o);var c=this.scroll.scroller,l=c.scrollBehaviorX,a=c.scrollBehaviorY;this.resetBoundaries([l,a]);var h=this.getNewPos(e.x,n,l,!0,i),u=this.getNewPos(e.y,n,a,!0,i);l.currentPos===Math.round(h)&&a.currentPos===Math.round(u)&&o===t||c.scrollTo(h,u,s,r.r.bounce,{start:{scale:t},end:{scale:o}})},o.prototype.resolveOrigin=function(o,t){var e=this.scroll.scroller,s=e.scrollBehaviorX,r=e.scrollBehaviorY,i={left:function(){return 0},top:function(){return 0},right:function(){return s.contentSize},bottom:function(){return r.contentSize},center:function(o){return(0===o?s.contentSize:r.contentSize)/2}};return{originX:"number"==typeof o?o:i[o](0),originY:"number"==typeof t?t:i[t](1)}},o.prototype.zoomStart=function(o){var t=o.touches[0],e=o.touches[1];this.startDistance=this.getFingerDistance(o),this.startScale=this.scale;var s=Object(r.I)(this.wrapper),i=s.left,n=s.top;this.origin={x:Math.abs(t.pageX+e.pageX)/2+i-this.scroll.x,y:Math.abs(t.pageY+e.pageY)/2+n-this.scroll.y,baseScale:this.startScale},this.scroll.trigger(this.scroll.eventTypes.beforeZoomStart)},o.prototype.zoom=function(o){var t=this.getFingerDistance(o);if(this.zoomed||!(Math.abs(t-this.startDistance)<this.zoomOpt.minimalZoomDistance)){var e=this.dampingScale(t/this.startDistance*this.startScale),s=e/this.startScale;this.setScale(e),this.zoomed||(this.zoomed=!0,this.scroll.trigger(this.scroll.eventTypes.zoomStart));var r=this.scroll.scroller,i=r.scrollBehaviorX,n=r.scrollBehaviorY,c=this.getNewPos(this.origin.x,s,i,!1,!1),l=this.getNewPos(this.origin.y,s,n,!1,!1);this.scroll.trigger(this.scroll.eventTypes.zooming,{scale:this.scale}),r.translater.translate({x:c,y:l,scale:e})}},o.prototype.zoomEnd=function(){this.zoomed&&(this.shouldRebound()?this._doZoomTo(this.scale,this.origin,this.zoomOpt.bounceTime):this.scroll.trigger(this.scroll.eventTypes.zoomEnd,{scale:this.scale}))},o.prototype.getFingerDistance=function(o){var t=o.touches[0],e=o.touches[1],s=Math.abs(t.pageX-e.pageX),i=Math.abs(t.pageY-e.pageY);return Object(r.w)(s,i)},o.prototype.shouldRebound=function(){var o=this.zoomOpt,t=o.min,e=o.max,s=this.scale;if(s!==Object(r.m)(s,t,e))return!0;var i=this.scroll.scroller,n=i.scrollBehaviorX,c=i.scrollBehaviorY;this.resetBoundaries([n,c]);var l=n.checkInBoundary().inBoundary,a=n.checkInBoundary().inBoundary;return!(l&&a)},o.prototype.dampingScale=function(o){var t=this.zoomOpt,e=t.min,s=t.max;return o<e?o=.5*e*Math.pow(2,o/e):o>s&&(o=2*s*Math.pow(.5,s/o)),o},o.prototype.setScale=function(o){this.scale=o},o.prototype.resetBoundaries=function(o){o.forEach((function(o){return o.computeBoundary()}))},o.prototype.getNewPos=function(o,t,e,s,i){void 0===i&&(i=!1);var n=o-o*t+(i?e.currentPos:e.startPos);return s&&(n=Object(r.m)(n,e.maxScrollPos,e.minScrollPos)),n>0?Math.floor(n):Math.ceil(n)},o.prototype.registerHooks=function(o,t,e){o.on(t,e,this),this.hooksFn.push([o,t,e])},o.prototype.destroy=function(){this.hooksFn.forEach((function(o){var t=o[0],e=o[1],s=o[2];t.off(e,s)})),this.hooksFn.length=0},o.pluginName="zoom",o}();t.a=i},408:function(o,t,e){},575:function(o,t,e){o.exports=e.p+"assets/img/ftstr.ca5d5288.png"},576:function(o,t,e){o.exports=e.p+"assets/img/qos_crop.85516b28.png"},577:function(o,t,e){"use strict";e(408)},640:function(o,t,e){"use strict";e.r(t);var s=e(346),r=e(355),i=e(356),n=e(575),c=e.n(n),l=e(576),a=e.n(l);s.a.use(r.a),s.a.use(i.a);var h={created:function(){this.swordsmanLink=c.a,this.witchLink=a.a},mounted:function(){this.init()},beforeDestroy:function(){this.bs1.destroy(),this.bs2.destroy()},methods:{handleClick:function(){this.bs2.putAt("right","bottom",500)},init:function(){this.bs1=new s.a(this.$refs.scroll,{bindToTarget:!0,scrollX:!0,scrollY:!0,freeScroll:!0,movable:!0,zoom:{start:1.2,min:.5,max:3}}),this.bs1.putAt("center","center",0),this.bs2=new s.a(this.$refs.scroll,{specifiedIndexAsContent:1,bindToTarget:!0,scrollX:!0,scrollY:!0,freeScroll:!0,movable:!0,startY:150,zoom:{start:1,min:.5,max:3}})}}},u=(e(577),e(30)),p=Object(u.a)(h,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"movable-multi-content-scale-container"},[e("div",{ref:"scroll",staticClass:"scroll-wrapper"},[e("div",{staticClass:"scroll-content content1"},[e("figure",[e("figcaption",[o._v("Swordsman")]),o._v(" "),e("img",{staticClass:"picture",attrs:{src:o.swordsmanLink,alt:"ftstr"}})])]),o._v(" "),e("div",{staticClass:"scroll-content content2"},[e("figure",[e("figcaption",[o._v("The Witch")]),o._v(" "),e("img",{staticClass:"picture",attrs:{src:o.witchLink,alt:"qos_crop"}})])])]),o._v(" "),e("button",{staticClass:"btn",on:{click:o.handleClick}},[o._v("Put The Witch at right-bottom corner")])])}),[],!1,null,"6a45ed20",null);t.default=p.exports}}]);