(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{303:function(e,t,o){"use strict";var i=o(301),l=function(){function e(e){this.scroll=e,this.wheelEndTimer=0,this.wheelMoveTimer=0,this.wheelStart=!1,this.init()}return e.prototype.init=function(){this.handleBScroll(),this.handleOptions(),this.handleHooks(),this.registerEvent()},e.prototype.handleBScroll=function(){this.scroll.registerType(["alterOptions","mousewheelStart","mousewheelMove","mousewheelEnd"])},e.prototype.handleOptions=function(){var e=!0===this.scroll.options.mouseWheel?{}:this.scroll.options.mouseWheel;this.mouseWheelOpt=Object(i.r)({speed:20,invert:!1,easeTime:300,discreteTime:400,throttleTime:0,dampingFactor:.1},e)},e.prototype.handleHooks=function(){this.hooksFn=[],this.registerHooks(this.scroll.hooks,"destroy",this.destroy)},e.prototype.registerEvent=function(){this.eventRegister=new i.f(this.scroll.scroller.wrapper,[{name:"wheel",handler:this.wheelHandler.bind(this)},{name:"mousewheel",handler:this.wheelHandler.bind(this)},{name:"DOMMouseScroll",handler:this.wheelHandler.bind(this)}])},e.prototype.registerHooks=function(e,t,o){e.on(t,o,this),this.hooksFn.push([e,t,o])},e.prototype.wheelHandler=function(e){if(this.scroll.enabled){this.beforeHandler(e),this.wheelStart||(this.wheelStartHandler(e),this.wheelStart=!0);var t=this.getWheelDelta(e);this.wheelMoveHandler(t),this.wheelEndDetector(t)}},e.prototype.wheelStartHandler=function(e){this.cleanCache();var t=this.scroll.scroller,o=t.scrollBehaviorX,l=t.scrollBehaviorY;o.setMovingDirection(i.b.Default),l.setMovingDirection(i.b.Default),o.setDirection(i.b.Default),l.setDirection(i.b.Default),this.scroll.trigger(this.scroll.eventTypes.alterOptions,this.mouseWheelOpt),this.scroll.trigger(this.scroll.eventTypes.mousewheelStart)},e.prototype.cleanCache=function(){this.deltaCache=[]},e.prototype.wheelMoveHandler=function(e){var t=this,o=this.mouseWheelOpt,i=o.throttleTime,l=o.dampingFactor;if(i&&this.wheelMoveTimer)this.deltaCache.push(e);else{var s=this.deltaCache.reduce((function(e,t){return{x:e.x+t.x,y:e.y+t.y}}),{x:0,y:0});this.cleanCache();var r=this.scroll.scroller,n=r.scrollBehaviorX,a=r.scrollBehaviorY;n.setMovingDirection(-e.directionX),a.setMovingDirection(-e.directionY),n.setDirection(e.x),a.setDirection(e.y);var h=n.performDampingAlgorithm(Math.round(e.x)+s.x,l),c=a.performDampingAlgorithm(Math.round(e.y)+s.x,l);if(!this.scroll.trigger(this.scroll.eventTypes.mousewheelMove,{x:h,y:c})){var u=this.getEaseTime();h===this.scroll.x&&c===this.scroll.y||this.scroll.scrollTo(h,c,u)}i&&(this.wheelMoveTimer=window.setTimeout((function(){t.wheelMoveTimer=0}),i))}},e.prototype.wheelEndDetector=function(e){var t=this;window.clearTimeout(this.wheelEndTimer),this.wheelEndTimer=window.setTimeout((function(){t.wheelStart=!1,window.clearTimeout(t.wheelMoveTimer),t.wheelMoveTimer=0,t.scroll.trigger(t.scroll.eventTypes.mousewheelEnd,e)}),this.mouseWheelOpt.discreteTime)},e.prototype.getWheelDelta=function(e){var t=this.mouseWheelOpt,o=t.speed,l=0,s=0,r=t.invert?i.b.Negative:i.b.Positive;switch(!0){case"deltaX"in e:1===e.deltaMode?(l=-e.deltaX*o,s=-e.deltaY*o):(l=-e.deltaX,s=-e.deltaY);break;case"wheelDeltaX"in e:l=e.wheelDeltaX/120*o,s=e.wheelDeltaY/120*o;break;case"wheelDelta"in e:l=s=e.wheelDelta/120*o;break;case"detail"in e:l=s=-e.detail/3*o}return l*=r,s*=r,this.scroll.hasVerticalScroll||(l=s,s=0),this.scroll.hasHorizontalScroll||(l=0),{x:l,y:s,directionX:l>0?i.b.Negative:l<0?i.b.Positive:i.b.Default,directionY:s>0?i.b.Negative:s<0?i.b.Positive:i.b.Default}},e.prototype.beforeHandler=function(e){var t=this.scroll.options,o=t.preventDefault,l=t.stopPropagation,s=t.preventDefaultException;o&&!Object(i.H)(e.target,s)&&e.preventDefault(),l&&e.stopPropagation()},e.prototype.getEaseTime=function(){var e=this.mouseWheelOpt.easeTime;return e<100&&Object(i.O)("easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times."),Math.max(e,100)},e.prototype.destroy=function(){this.eventRegister.destroy(),window.clearTimeout(this.wheelEndTimer),window.clearTimeout(this.wheelMoveTimer),this.hooksFn.forEach((function(e){var t=e[0],o=e[1],i=e[2];t.off(o,i)}))},e.pluginName="mouseWheel",e.applyOrder=i.a.Pre,e}();t.a=l},305:function(e,t,o){"use strict";var i=o(301),l=[{key:"finishPullUp",name:"finishPullUp"},{key:"openPullUp",name:"openPullUp"},{key:"closePullUp",name:"closePullUp"},{key:"autoPullUpLoad",name:"autoPullUpLoad"}].map((function(e){return{key:e.key,sourceKey:"plugins.pullUpLoad."+e.name}})),s=function(){function e(e){this.scroll=e,this.pulling=!1,this.watching=!1,this.init()}return e.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullUpLoad),this.handleHooks(),this.watch()},e.prototype.handleBScroll=function(){this.scroll.registerType(["pullingUp"]),this.scroll.proxy(l)},e.prototype.handleOptions=function(e){void 0===e&&(e={}),e=!0===e?{}:e;this.options=Object(i.r)({threshold:0},e),this.scroll.options.probeType=i.j.Realtime},e.prototype.handleHooks=function(){var e=this;this.hooksFn=[];var t=this.scroll.scroller.scrollBehaviorY;this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,(function(){e.finishPullUp()})),this.registerHooks(t.hooks,t.hooks.eventTypes.computeBoundary,(function(e){e.maxScrollPos>0&&(e.maxScrollPos=-1)}))},e.prototype.registerHooks=function(e,t,o){e.on(t,o,this),this.hooksFn.push([e,t,o])},e.prototype.watch=function(){this.watching||(this.watching=!0,this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkPullUp))},e.prototype.unwatch=function(){this.watching=!1,this.scroll.off(this.scroll.eventTypes.scroll,this.checkPullUp)},e.prototype.checkPullUp=function(e){var t=this,o=this.options.threshold;this.scroll.movingDirectionY===i.b.Positive&&e.y<=this.scroll.maxScrollY+o&&(this.pulling=!0,this.scroll.once(this.scroll.eventTypes.scrollEnd,(function(){t.pulling=!1})),this.unwatch(),this.scroll.trigger("pullingUp"))},e.prototype.finishPullUp=function(){var e=this;this.scroll.scroller.scrollBehaviorY.setMovingDirection(i.b.Default),this.pulling?this.scroll.once(this.scroll.eventTypes.scrollEnd,(function(){e.watch()})):this.watch()},e.prototype.openPullUp=function(e){void 0===e&&(e={}),this.handleOptions(e),this.watch()},e.prototype.closePullUp=function(){this.unwatch()},e.prototype.autoPullUpLoad=function(){var e=this.options.threshold,t=this.scroll.scroller.scrollBehaviorY;if(!this.pulling&&this.watching){var o=t.maxScrollPos+e+-1;this.scroll.scroller.scrollBehaviorY.setMovingDirection(-1),this.scroll.scrollTo(this.scroll.x,o,this.scroll.options.bounceTime)}},e.pluginName="pullUpLoad",e}();t.a=s},348:function(e,t,o){},416:function(e,t,o){"use strict";var i=o(348);o.n(i).a},553:function(e,t,o){"use strict";o.r(t);o(7),o(92);var i=o(42),l=o(302),s=o(305),r=o(303);l.a.use(s.a),l.a.use(r.a);var n={data:function(){return{isPullUpLoad:!1,data:30}},mounted:function(){this.initBscroll()},methods:{initBscroll:function(){this.scroll=new l.a(this.$refs.scroll,{probeType:3,pullUpLoad:!0,mouseWheel:!0}),this.scroll.on("pullingUp",this.pullingUpHandler)},pullingUpHandler:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isPullUpLoad=!0,t.next=3,e.requestData();case 3:e.scroll.finishPullUp(),e.scroll.refresh(),e.isPullUpLoad=!1;case 6:case"end":return t.stop()}}),t)})))()},requestData:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.ajaxGet();case 3:o=t.sent,e.data+=o,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},ajaxGet:function(){return new Promise((function(e){setTimeout((function(){e(20)}),1e3)}))}}},a=(o(416),o(40)),h=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mouse-wheel-pullup"},[o("div",{ref:"scroll",staticClass:"pullup-wrapper"},[o("div",{staticClass:"pullup-content"},[o("ul",{staticClass:"pullup-list"},e._l(e.data,(function(t){return o("li",{key:t,staticClass:"pullup-list-item"},[e._v("\n          "+e._s(t%5==0?"use your mousewheel please 👆🏻":"I am item "+t+" ")+"\n        ")])})),0),e._v(" "),o("div",{staticClass:"pullup-tips"},[e.isPullUpLoad?o("div",{staticClass:"after-trigger"},[o("span",{staticClass:"pullup-txt"},[e._v("Loading...")])]):o("div",{staticClass:"before-trigger"},[o("span",{staticClass:"pullup-txt"},[e._v("mousewheel trigger pullingup and load more")])])])])])])}),[],!1,null,"070b2528",null);t.default=h.exports}}]);