(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{350:function(t,e,o){"use strict";var s,n,i=o(345),l=[{key:"finishPullDown",name:"finishPullDown"},{key:"openPullDown",name:"openPullDown"},{key:"closePullDown",name:"closePullDown"},{key:"autoPullDownRefresh",name:"autoPullDownRefresh"}].map((function(t){return{key:t.key,sourceKey:"plugins.pullDownRefresh."+t.name}}));!function(t){t[t.DEFAULT=0]="DEFAULT",t[t.MOVING=1]="MOVING",t[t.FETCHING=2]="FETCHING"}(s||(s={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.INSIDE=1]="INSIDE",t[t.OUTSIDE=2]="OUTSIDE"}(n||(n={}));var r=function(){function t(t){this.scroll=t,this.pulling=s.DEFAULT,this.thresholdBoundary=n.DEFAULT,this.init()}return t.prototype.setPulling=function(t){this.pulling=t},t.prototype.setThresholdBoundary=function(t){this.thresholdBoundary=t},t.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullDownRefresh),this.handleHooks(),this.watch()},t.prototype.handleBScroll=function(){this.scroll.registerType(["pullingDown","enterThreshold","leaveThreshold"]),this.scroll.proxy(l)},t.prototype.handleOptions=function(t){void 0===t&&(t={}),t=!0===t?{}:t;this.options=Object(i.t)({threshold:90,stop:40},t),this.scroll.options.probeType=i.j.Realtime},t.prototype.handleHooks=function(){var t=this;this.hooksFn=[];var e=this.scroll.scroller,o=e.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY=o.minScrollPos,this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,(function(){t.finishPullDown()})),this.registerHooks(o.hooks,o.hooks.eventTypes.computeBoundary,(function(e){e.maxScrollPos>0&&(e.maxScrollPos=-1),e.minScrollPos=t.currentMinScrollY})),this.hasMouseWheelPlugin()&&(this.registerHooks(this.scroll,this.scroll.eventTypes.alterOptions,(function(t){t.discreteTime=300,t.easeTime=350})),this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelEnd,(function(){e.hooks.trigger(e.hooks.eventTypes.end)})))},t.prototype.registerHooks=function(t,e,o){t.on(e,o,this),this.hooksFn.push([t,e,o])},t.prototype.hasMouseWheelPlugin=function(){return!!this.scroll.eventTypes.alterOptions},t.prototype.watch=function(){var t=this.scroll.scroller;this.watching=!0,this.registerHooks(t.hooks,t.hooks.eventTypes.end,this.checkPullDown),this.registerHooks(this.scroll,this.scroll.eventTypes.scrollStart,this.resetStateBeforeScrollStart),this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},t.prototype.resetStateBeforeScrollStart=function(){this.isFetchingStatus()||(this.setPulling(s.MOVING),this.setThresholdBoundary(n.DEFAULT))},t.prototype.checkLocationOfThresholdBoundary=function(){if(this.pulling===s.MOVING){var t=this.scroll,e=this.thresholdBoundary!==n.INSIDE&&this.locateInsideThresholdBoundary(),o=this.thresholdBoundary!==n.OUTSIDE&&!this.locateInsideThresholdBoundary();e&&(this.setThresholdBoundary(n.INSIDE),t.trigger("enterThreshold")),o&&(this.setThresholdBoundary(n.OUTSIDE),t.trigger("leaveThreshold"))}},t.prototype.locateInsideThresholdBoundary=function(){return this.scroll.y<=this.options.threshold},t.prototype.unwatch=function(){var t=this.scroll,e=t.scroller;this.watching=!1,e.hooks.off(e.hooks.eventTypes.end,this.checkPullDown),t.off(t.eventTypes.scrollStart,this.resetStateBeforeScrollStart),t.off(t.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&t.off(t.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},t.prototype.checkPullDown=function(){var t=this.options,e=t.threshold,o=t.stop;return!(this.scroll.y<e)&&(this.pulling===s.MOVING&&(this.modifyBehaviorYBoundary(o),this.setPulling(s.FETCHING),this.scroll.trigger("pullingDown")),this.scroll.scrollTo(this.scroll.x,o,this.scroll.options.bounceTime,i.r.bounce),this.isFetchingStatus())},t.prototype.isFetchingStatus=function(){return this.pulling===s.FETCHING},t.prototype.modifyBehaviorYBoundary=function(t){var e=this.scroll.scroller.scrollBehaviorY;this.cachedOriginanMinScrollY=e.minScrollPos,this.currentMinScrollY=t,e.computeBoundary()},t.prototype.finishPullDown=function(){if(this.isFetchingStatus()){var t=this.scroll.scroller.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY,t.computeBoundary(),this.setPulling(s.DEFAULT),this.scroll.resetPosition(this.scroll.options.bounceTime,i.r.bounce)}},t.prototype.openPullDown=function(t){void 0===t&&(t={}),this.handleOptions(t),this.watching||this.watch()},t.prototype.closePullDown=function(){this.unwatch()},t.prototype.autoPullDownRefresh=function(){var t=this.options,e=t.threshold,o=t.stop;!this.isFetchingStatus()&&this.watching&&(this.modifyBehaviorYBoundary(o),this.scroll.trigger(this.scroll.eventTypes.scrollStart),this.scroll.scrollTo(this.scroll.x,e),this.setPulling(s.FETCHING),this.scroll.trigger("pullingDown"),this.scroll.scrollTo(this.scroll.x,o,this.scroll.options.bounceTime,i.r.bounce))},t.pluginName="pullDownRefresh",t}();e.a=r},418:function(t,e,o){},589:function(t,e,o){"use strict";o(418)},648:function(t,e,o){"use strict";o.r(e);var s=o(50),n=(o(183),o(8),o(110),o(346)),i=o(350);function l(){for(var t=30*h,e=[],o=30*(h+1);o>t;o--)e.push(o);return e}n.a.use(i.a);var r={moving:{enter:"enter",leave:"leave"},fetching:"fetching",succeed:"succeed"},h=0,c='<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M367.997 338.75l-95.998 95.997V17.503h-32v417.242l-95.996-95.995l-22.627 22.627L256 496l134.624-134.623l-22.627-22.627z"></path></svg>',u='<svg width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995l22.628-22.627z"></path></svg>',a={data:function(){return{tipText:"",isPullingDown:!1,dataList:l()}},mounted:function(){this.initBscroll()},methods:{initBscroll:function(){var t=this;this.bscroll=new n.a(this.$refs.bsWrapper,{scrollY:!0,bounceTime:800,useTransition:!1,pullDownRefresh:{threshold:70,stop:56}}),this.bscroll.on("pullingDown",this.pullingDownHandler),this.bscroll.on("scrollEnd",(function(t){console.log("scrollEnd")})),this.bscroll.on("enterThreshold",(function(){t.setTipText(r.moving.enter)})),this.bscroll.on("leaveThreshold",(function(){t.setTipText(r.moving.leave)}))},pullingDownHandler:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setTipText(r.fetching),h+=1,e.next=4,t.getData();case 4:t.setTipText(r.succeed),t.bscroll.finishPullDown(),setTimeout((function(){t.bscroll.refresh()}),850);case 7:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.mockFetchData();case 2:o=e.sent,t.dataList=o.concat(t.dataList);case 4:case"end":return e.stop()}}),e)})))()},mockFetchData:function(){return new Promise((function(t){setTimeout((function(){var e=l();t(e)}),2e3)}))},setTipText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.default,e={enter:"".concat(c," Pull down"),leave:"".concat(u," Release"),fetching:"Loading...",succeed:"Refresh succeed"};this.tipText=e[t]}}},p=(o(589),o(30)),d=Object(p.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pulldown-sina"},[o("div",{ref:"bsWrapper",staticClass:"pulldown-bswrapper"},[o("div",{staticClass:"pulldown-scroller"},[o("div",{staticClass:"pulldown-wrapper"},[o("div",{domProps:{innerHTML:t._s(t.tipText)}})]),t._v(" "),o("ul",{staticClass:"pulldown-list"},t._l(t.dataList,(function(e){return o("li",{key:e,staticClass:"pulldown-list-item"},[t._v(t._s("I am item "+e+" "))])})),0)])])])}),[],!1,null,"24339483",null);e.default=d.exports}}]);