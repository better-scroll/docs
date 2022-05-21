(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,o,e){"use strict";var n=e(345),s=function(){function t(t){this.ancestors=[],this.descendants=[],this.hooksManager=[],this.analyzed=!1,this.selfScroll=t}return t.create=function(o){return new t(o)},t.prototype.hasAncestors=function(t){return Object(n.u)(this.ancestors,(function(o){return o[0]===t}))>-1},t.prototype.hasDescendants=function(t){return Object(n.u)(this.descendants,(function(o){return o[0]===t}))>-1},t.prototype.addAncestor=function(t,o){var e=this.ancestors;e.push([t,o]),e.sort((function(t,o){return t[1]-o[1]}))},t.prototype.addDescendant=function(t,o){var e=this.descendants;e.push([t,o]),e.sort((function(t,o){return t[1]-o[1]}))},t.prototype.removeAncestor=function(t){var o=this.ancestors;if(o.length){var e=Object(n.u)(this.ancestors,(function(o){return o[0]===t}));if(e>-1)return o.splice(e,1)}},t.prototype.removeDescendant=function(t){var o=this.descendants;if(o.length){var e=Object(n.u)(this.descendants,(function(o){return o[0]===t}));if(e>-1)return o.splice(e,1)}},t.prototype.registerHooks=function(t,o,e){t.on(o,e),this.hooksManager.push([t,o,e])},t.prototype.setAnalyzed=function(t){void 0===t&&(t=!1),this.analyzed=t},t.prototype.purge=function(){var t=this;this.ancestors.forEach((function(o){o[0].removeDescendant(t)})),this.descendants.forEach((function(o){o[0].removeAncestor(t)})),this.hooksManager.forEach((function(t){var o=t[0],e=t[1],n=t[2];o.off(e,n)})),this.hooksManager=[]},t}(),r=[{key:"purgeNestedScroll",name:"purgeNestedScroll"}].map((function(t){return{key:t.key,sourceKey:"plugins.nestedScroll."+t.name}})),l=function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;var n=Array(t),s=0;for(o=0;o<e;o++)for(var r=arguments[o],l=0,i=r.length;l<i;l++,s++)n[s]=r[l];return n},i=function(t){t.forEach((function(t){t.enable()}))},c=function(t,o){t.forEach((function(t){t.hasHorizontalScroll!==o.hasHorizontalScroll&&t.hasVerticalScroll!==o.hasVerticalScroll||t.disable()}))},h=function(t,o){for(var e=0,n=t.parentNode;n&&n!==o;)e++,n=n.parentNode;return e},u=function(){function t(o){var e=this.handleOptions(o),n=t.instancesMap[e];return n||((n=t.instancesMap[e]=this).store=[],n.hooksFn=[]),n.init(o),n}return t.getAllNestedScrolls=function(){var o=t.instancesMap;return Object.keys(o).map((function(t){return o[t]}))},t.purgeAllNestedScrolls=function(){t.getAllNestedScrolls().forEach((function(t){return t.purgeNestedScroll()}))},t.prototype.handleOptions=function(t){var o=!0===t.options.nestedScroll?{}:t.options.nestedScroll,e={groupId:"INTERNAL_NESTED_SCROLL"};this.options=Object(n.t)(e,o);var s=typeof this.options.groupId;return"string"!==s&&"number"!==s&&Object(n.R)("groupId must be string or number for NestedScroll plugin"),this.options.groupId},t.prototype.init=function(t){t.proxy(r),this.addBScroll(t),this.buildBScrollGraph(),this.analyzeBScrollGraph(),this.ensureEventInvokeSequence(),this.handleHooks(t)},t.prototype.handleHooks=function(t){var o=this;this.registerHooks(t.hooks,t.hooks.eventTypes.destroy,(function(){o.deleteScroll(t)}))},t.prototype.deleteScroll=function(t){t.wrapper.isBScrollContainer=void 0;var o=this.store,e=this.hooksFn,s=Object(n.u)(o,(function(o){return o.selfScroll===t}));s>-1&&(o[s].purge(),o.splice(s,1));var r=Object(n.u)(e,(function(o){return o[0]===t.hooks}));if(r>-1){var l=e[r],i=l[0],c=l[1],h=l[2];i.off(c,h),e.splice(r,1)}},t.prototype.addBScroll=function(t){this.store.push(s.create(t))},t.prototype.buildBScrollGraph=function(){for(var t,o,e,n,s=this.store,r=this.store.length,l=0;l<r;l++){e=(t=s[l]).selfScroll.wrapper;for(var i=0;i<r;i++)if(n=(o=s[i]).selfScroll.wrapper,t!==o&&e.contains(n)){var c=h(n,e);t.hasDescendants(o)||t.addDescendant(o,c),o.hasAncestors(t)||o.addAncestor(t,c)}}},t.prototype.analyzeBScrollGraph=function(){this.store.forEach((function(t){if(!t.analyzed){var o=t.ancestors,e=t.descendants,s=t.selfScroll;t.registerHooks(s,s.eventTypes.beforeScrollStart,(function(){var t,n,r,i,h,u,a,p,f,d,v=o.map((function(t){return t[0].selfScroll})),g=e.map((function(t){return t[0].selfScroll}));l(v,g).forEach((function(t){t.pending&&(t.stop(),t.resetPosition())})),n=(t=s).hasHorizontalScroll,r=t.hasVerticalScroll,i=t.x,h=t.y,u=t.minScrollX,a=t.maxScrollX,p=t.minScrollY,f=t.maxScrollY,d=!1,r?d=h>p||h<f:n&&(d=i>u||i<a),d&&function(t){t.scroller.reflow(),t.resetPosition(0)}(s),function(t){t.forEach((function(t){var o=t.scroller,e=o.actions,n=o.scrollBehaviorX,s=o.scrollBehaviorY;e.fingerMoved=!0,e.contentMoved=!1,e.directionLockAction.reset(),n.start(),s.start(),n.resetStartPos(),s.resetStartPos(),e.startTime=+new Date}))}(v),c(v,s)})),t.registerHooks(s,s.eventTypes.touchEnd,(function(){var t=o.map((function(t){return t[0].selfScroll})),n=e.map((function(t){return t[0].selfScroll}));i(l(t,n))}));var r=s.scroller.actions.hooks;t.registerHooks(r,r.eventTypes.detectMovingDirection,(function(){var t,e,r,l,h,u,a,p,f,d,v,g,y,S,m,w,k=o.map((function(t){return t[0].selfScroll})),P=k[0],D=k.slice(1),T=s.scroller.actions.contentMoved,b=0===k.length;if(T)c(k,s);else if(!b&&(e=(t=s).hasHorizontalScroll,r=t.hasVerticalScroll,l=t.x,h=t.y,u=t.minScrollX,a=t.maxScrollX,p=t.minScrollY,f=t.maxScrollY,d=t.movingDirectionX,v=t.movingDirectionY,g=!1,y=l>=u&&d===n.b.Negative,S=l<=a&&d===n.b.Positive,m=h>=p&&v===n.b.Negative,w=h<=f&&v===n.b.Positive,r?g=m||w:e&&(g=y||S),g))return c([s],s),P&&i([P]),c(D,s),!0})),t.setAnalyzed(!0)}}))},t.prototype.ensureEventInvokeSequence=function(){this.store.slice().sort((function(t,o){return t.descendants.length-o.descendants.length})).forEach((function(t){t.selfScroll.scroller.actionsHandler.rebindDOMEvents()}))},t.prototype.registerHooks=function(t,o,e){t.on(o,e,this),this.hooksFn.push([t,o,e])},t.prototype.purgeNestedScroll=function(){var o=this.options.groupId;this.store.forEach((function(t){t.purge()})),this.store=[],this.hooksFn.forEach((function(t){var o=t[0],e=t[1],n=t[2];o.off(e,n)})),this.hooksFn=[],delete t.instancesMap[o]},t.pluginName="nestedScroll",t.instancesMap={},t}();o.a=u},349:function(t,o,e){"use strict";var n=e(345),s=[{key:"finishPullUp",name:"finishPullUp"},{key:"openPullUp",name:"openPullUp"},{key:"closePullUp",name:"closePullUp"},{key:"autoPullUpLoad",name:"autoPullUpLoad"}].map((function(t){return{key:t.key,sourceKey:"plugins.pullUpLoad."+t.name}})),r=function(){function t(t){this.scroll=t,this.pulling=!1,this.watching=!1,this.init()}return t.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullUpLoad),this.handleHooks(),this.watch()},t.prototype.handleBScroll=function(){this.scroll.registerType(["pullingUp"]),this.scroll.proxy(s)},t.prototype.handleOptions=function(t){void 0===t&&(t={}),t=!0===t?{}:t;this.options=Object(n.t)({threshold:0},t),this.scroll.options.probeType=n.j.Realtime},t.prototype.handleHooks=function(){var t=this;this.hooksFn=[];var o=this.scroll.scroller.scrollBehaviorY;this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,(function(){t.finishPullUp()})),this.registerHooks(o.hooks,o.hooks.eventTypes.computeBoundary,(function(t){t.maxScrollPos>0&&(t.maxScrollPos=-1)}))},t.prototype.registerHooks=function(t,o,e){t.on(o,e,this),this.hooksFn.push([t,o,e])},t.prototype.watch=function(){this.watching||(this.watching=!0,this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkPullUp))},t.prototype.unwatch=function(){this.watching=!1,this.scroll.off(this.scroll.eventTypes.scroll,this.checkPullUp)},t.prototype.checkPullUp=function(t){var o=this,e=this.options.threshold;this.scroll.movingDirectionY===n.b.Positive&&t.y<=this.scroll.maxScrollY+e&&(this.pulling=!0,this.scroll.once(this.scroll.eventTypes.scrollEnd,(function(){o.pulling=!1})),this.unwatch(),this.scroll.trigger("pullingUp"))},t.prototype.finishPullUp=function(){var t=this;this.scroll.scroller.scrollBehaviorY.setMovingDirection(n.b.Default),this.pulling?this.scroll.once(this.scroll.eventTypes.scrollEnd,(function(){t.watch()})):this.watch()},t.prototype.openPullUp=function(t){void 0===t&&(t={}),this.handleOptions(t),this.watch()},t.prototype.closePullUp=function(){this.unwatch()},t.prototype.autoPullUpLoad=function(){var t=this.options.threshold,o=this.scroll.scroller.scrollBehaviorY;if(!this.pulling&&this.watching){var e=o.maxScrollPos+t+-1;this.scroll.scroller.scrollBehaviorY.setMovingDirection(-1),this.scroll.scrollTo(this.scroll.x,e,this.scroll.options.bounceTime)}},t.pluginName="pullUpLoad",t}();o.a=r},350:function(t,o,e){"use strict";var n,s,r=e(345),l=[{key:"finishPullDown",name:"finishPullDown"},{key:"openPullDown",name:"openPullDown"},{key:"closePullDown",name:"closePullDown"},{key:"autoPullDownRefresh",name:"autoPullDownRefresh"}].map((function(t){return{key:t.key,sourceKey:"plugins.pullDownRefresh."+t.name}}));!function(t){t[t.DEFAULT=0]="DEFAULT",t[t.MOVING=1]="MOVING",t[t.FETCHING=2]="FETCHING"}(n||(n={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.INSIDE=1]="INSIDE",t[t.OUTSIDE=2]="OUTSIDE"}(s||(s={}));var i=function(){function t(t){this.scroll=t,this.pulling=n.DEFAULT,this.thresholdBoundary=s.DEFAULT,this.init()}return t.prototype.setPulling=function(t){this.pulling=t},t.prototype.setThresholdBoundary=function(t){this.thresholdBoundary=t},t.prototype.init=function(){this.handleBScroll(),this.handleOptions(this.scroll.options.pullDownRefresh),this.handleHooks(),this.watch()},t.prototype.handleBScroll=function(){this.scroll.registerType(["pullingDown","enterThreshold","leaveThreshold"]),this.scroll.proxy(l)},t.prototype.handleOptions=function(t){void 0===t&&(t={}),t=!0===t?{}:t;this.options=Object(r.t)({threshold:90,stop:40},t),this.scroll.options.probeType=r.j.Realtime},t.prototype.handleHooks=function(){var t=this;this.hooksFn=[];var o=this.scroll.scroller,e=o.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY=e.minScrollPos,this.registerHooks(this.scroll.hooks,this.scroll.hooks.eventTypes.contentChanged,(function(){t.finishPullDown()})),this.registerHooks(e.hooks,e.hooks.eventTypes.computeBoundary,(function(o){o.maxScrollPos>0&&(o.maxScrollPos=-1),o.minScrollPos=t.currentMinScrollY})),this.hasMouseWheelPlugin()&&(this.registerHooks(this.scroll,this.scroll.eventTypes.alterOptions,(function(t){t.discreteTime=300,t.easeTime=350})),this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelEnd,(function(){o.hooks.trigger(o.hooks.eventTypes.end)})))},t.prototype.registerHooks=function(t,o,e){t.on(o,e,this),this.hooksFn.push([t,o,e])},t.prototype.hasMouseWheelPlugin=function(){return!!this.scroll.eventTypes.alterOptions},t.prototype.watch=function(){var t=this.scroll.scroller;this.watching=!0,this.registerHooks(t.hooks,t.hooks.eventTypes.end,this.checkPullDown),this.registerHooks(this.scroll,this.scroll.eventTypes.scrollStart,this.resetStateBeforeScrollStart),this.registerHooks(this.scroll,this.scroll.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&this.registerHooks(this.scroll,this.scroll.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},t.prototype.resetStateBeforeScrollStart=function(){this.isFetchingStatus()||(this.setPulling(n.MOVING),this.setThresholdBoundary(s.DEFAULT))},t.prototype.checkLocationOfThresholdBoundary=function(){if(this.pulling===n.MOVING){var t=this.scroll,o=this.thresholdBoundary!==s.INSIDE&&this.locateInsideThresholdBoundary(),e=this.thresholdBoundary!==s.OUTSIDE&&!this.locateInsideThresholdBoundary();o&&(this.setThresholdBoundary(s.INSIDE),t.trigger("enterThreshold")),e&&(this.setThresholdBoundary(s.OUTSIDE),t.trigger("leaveThreshold"))}},t.prototype.locateInsideThresholdBoundary=function(){return this.scroll.y<=this.options.threshold},t.prototype.unwatch=function(){var t=this.scroll,o=t.scroller;this.watching=!1,o.hooks.off(o.hooks.eventTypes.end,this.checkPullDown),t.off(t.eventTypes.scrollStart,this.resetStateBeforeScrollStart),t.off(t.eventTypes.scroll,this.checkLocationOfThresholdBoundary),this.hasMouseWheelPlugin()&&t.off(t.eventTypes.mousewheelStart,this.resetStateBeforeScrollStart)},t.prototype.checkPullDown=function(){var t=this.options,o=t.threshold,e=t.stop;return!(this.scroll.y<o)&&(this.pulling===n.MOVING&&(this.modifyBehaviorYBoundary(e),this.setPulling(n.FETCHING),this.scroll.trigger("pullingDown")),this.scroll.scrollTo(this.scroll.x,e,this.scroll.options.bounceTime,r.r.bounce),this.isFetchingStatus())},t.prototype.isFetchingStatus=function(){return this.pulling===n.FETCHING},t.prototype.modifyBehaviorYBoundary=function(t){var o=this.scroll.scroller.scrollBehaviorY;this.cachedOriginanMinScrollY=o.minScrollPos,this.currentMinScrollY=t,o.computeBoundary()},t.prototype.finishPullDown=function(){if(this.isFetchingStatus()){var t=this.scroll.scroller.scrollBehaviorY;this.currentMinScrollY=this.cachedOriginanMinScrollY,t.computeBoundary(),this.setPulling(n.DEFAULT),this.scroll.resetPosition(this.scroll.options.bounceTime,r.r.bounce)}},t.prototype.openPullDown=function(t){void 0===t&&(t={}),this.handleOptions(t),this.watching||this.watch()},t.prototype.closePullDown=function(){this.unwatch()},t.prototype.autoPullDownRefresh=function(){var t=this.options,o=t.threshold,e=t.stop;!this.isFetchingStatus()&&this.watching&&(this.modifyBehaviorYBoundary(e),this.scroll.trigger(this.scroll.eventTypes.scrollStart),this.scroll.scrollTo(this.scroll.x,o),this.setPulling(n.FETCHING),this.scroll.trigger("pullingDown"),this.scroll.scrollTo(this.scroll.x,e,this.scroll.options.bounceTime,r.r.bounce))},t.pluginName="pullDownRefresh",t}();o.a=i},385:function(t,o,e){},466:function(t,o,e){"use strict";e(385)},618:function(t,o,e){"use strict";e.r(o);var n=e(50),s=(e(183),e(8),e(110),e(346)),r=e(348),l=e(349),i=e(350);s.a.use(r.a),s.a.use(l.a),s.a.use(i.a);var c=["😀  😁   😂  🤣   😃  🙃","👆🏻 Pull Down and refresh👆🏻","🙂  🤔   😄  🤨   😐  🙃","👆🏻 Pull Down and refresh👆🏻","😔  😕   🙃  🤑   😲  ☹️","🙂  🤔  😄  🤨   😐  🙃 ","👆🏻 Pull Down and refresh👆🏻","😔  😕   🙃  🤑   😲  ☹️ "],h=["😀  😁   😂  🤣   😃  🙃","👆🏻 Pull Up and refresh👆🏻","🙂  🤔   😄  🤨   😐  🙃","👆🏻 Pull Up and refresh👆🏻","😔  😕   🙃  🤑   😲  ☹️","🙂  🤔  😄  🤨   😐  🙃 ","👆🏻 Pull Up and refresh👆🏻","😔  😕   🙃  🤑   😲  ☹️ "],u=["The Mountain top of Inner","😀 😁 😂 🤣 😃 🙃 ","👆🏻 inner scroll 👇🏻 ","🙂 🤔 😄 🤨 😐 🙃 ","👆🏻 inner scroll 👇🏻 ","😔 😕 🙃 🤑 😲 ☹️ ","👆🏻 inner scroll 👇🏻 ","🐣 🐣 🐣 🐣 🐣 🐣 ","👆🏻 inner scroll 👇🏻 ","🐥 🐥 🐥 🐥 🐥 🐥 ","👆🏻 inner scroll 👇🏻 ","🤓 🤓 🤓 🤓 🤓 🤓 ","👆🏻 inner scroll 👇🏻 ","🦔 🦔 🦔 🦔 🦔 🦔 ","👆🏻 inner scroll 👇🏻 ","🙈 🙈 🙈 🙈 🙈 🙈 ","👆🏻 inner scroll 👇🏻 ","🚖 🚖 🚖 🚖 🚖 🚖 ","👆🏻 inner scroll 👇🏻 ","✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ","The Mountain foot of Inner"],a={data:function(){return{topOutItems:c,bottomOutItems:h,innerItems:u,beforePullDown:!0,isPullingDown:!1,isPullingUp:!1}},mounted:function(){this.initBScroll()},methods:{initBScroll:function(){this.outerScroll=new s.a(this.$refs.outerScroll,{nestedScroll:{groupId:"pullup-pullldown"},bounceTime:800,pullDownRefresh:{threshold:70,stop:56},pullUpLoad:{threshold:70}}),this.innerScroll=new s.a(this.$refs.innerScroll,{nestedScroll:{groupId:"pullup-pullldown"},bounce:{top:!1,bottom:!1}}),this.outerScroll.on("pullingDown",this.pullingDownHandler),this.outerScroll.on("pullingUp",this.pullingUpHandler),this.outerScroll.on("scroll",this.scrollHandler)},scrollHandler:function(t){console.log(t.y)},pullingDownHandler:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.beforePullDown=!1,t.isPullingDown=!0,o.next=4,t.requestData("refresh");case 4:t.isPullingDown=!1,t.$nextTick((function(){t.outerScroll.finishPullDown(),t.beforePullDown=!0,t.outerScroll.refresh()}));case 6:case"end":return o.stop()}}),o)})))()},pullingUpHandler:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.isPullingUp=!0,o.next=3,t.requestData("load");case 3:t.isPullingUp=!1,t.$nextTick((function(){t.outerScroll.finishPullUp(),t.outerScroll.refresh()}));case 5:case"end":return o.stop()}}),o)})))()},requestData:function(t){var o=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,s,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ajaxGet();case 3:n=e.sent,s=n.topOutItems,r=n.bottomOutItems,"load"===t?o.bottomOutItems=o.bottomOutItems.concat(r):(o.topOutItems=s,o.bottomOutItems=r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},ajaxGet:function(){return new Promise((function(t){setTimeout((function(){t({topOutItems:c,bottomOutItems:h})}),3e3)}))}}},p=(e(466),e(30)),f=Object(p.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{ref:"outerScroll",staticClass:"outer-wrapper"},[e("div",{staticClass:"outer-content"},[e("div",{staticClass:"pulldown-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.beforePullDown,expression:"beforePullDown"}]},[e("span",[t._v("Pull Down and refresh")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.beforePullDown,expression:"!beforePullDown"}]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isPullingDown,expression:"isPullingDown"}]},[e("span",[t._v("Loading...")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPullingDown,expression:"!isPullingDown"}]},[e("span",[t._v("Refresh success")])])])]),t._v(" "),e("ul",t._l(t.topOutItems,(function(o,n){return e("li",{key:n,staticClass:"outer-list-item"},[t._v(t._s(o))])})),0),t._v(" "),e("div",{ref:"innerScroll",staticClass:"inner-wrapper"},[e("ul",{staticClass:"inner-content"},t._l(t.innerItems,(function(o,n){return e("li",{key:n,staticClass:"inner-list-item"},[t._v(t._s(o))])})),0)]),t._v(" "),e("ul",t._l(t.bottomOutItems,(function(o,n){return e("li",{key:n,staticClass:"outer-list-item2"},[t._v(t._s(o))])})),0),t._v(" "),e("div",{staticClass:"pullup-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPullingUp,expression:"!isPullingUp"}]},[e("span",[t._v("Pull Up and load")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isPullingUp,expression:"isPullingUp"}]},[e("span",[t._v("Loading...")])])])])])])}),[],!1,null,"07f524ce",null);o.default=f.exports}}]);