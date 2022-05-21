(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{353:function(t,e,o){"use strict";var s,i,r,n=o(345),l=function(){function t(t,e){this.indicator=t,this.options=e,this.hooks=new n.d(["touchStart","touchMove","touchEnd"]),this.registerEvents()}return t.prototype.registerEvents=function(){var t=this.options,e=t.disableMouse,o=t.disableTouch,s=[],i=[],r=[];e||(s.push({name:"mousedown",handler:this.start.bind(this)}),i.push({name:"mousemove",handler:this.move.bind(this)}),r.push({name:"mouseup",handler:this.end.bind(this)})),o||(s.push({name:"touchstart",handler:this.start.bind(this)}),i.push({name:"touchmove",handler:this.move.bind(this)}),r.push({name:"touchend",handler:this.end.bind(this)},{name:"touchcancel",handler:this.end.bind(this)})),this.startEventRegister=new n.f(this.indicator.indicatorEl,s),this.moveEventRegister=new n.f(window,i),this.endEventRegister=new n.f(window,r)},t.prototype.BScrollIsDisabled=function(){return!this.indicator.scroll.enabled},t.prototype.start=function(t){if(!this.BScrollIsDisabled()){var e=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.initiated=!0,this.lastPoint=e[this.indicator.keysMap.point],this.hooks.trigger(this.hooks.eventTypes.touchStart)}},t.prototype.move=function(t){if(this.initiated){var e=(t.touches?t.touches[0]:t)[this.indicator.keysMap.point];t.preventDefault(),t.stopPropagation();var o=e-this.lastPoint;this.lastPoint=e,this.hooks.trigger(this.hooks.eventTypes.touchMove,o)}},t.prototype.end=function(t){this.initiated&&(this.initiated=!1,t.preventDefault(),t.stopPropagation(),this.hooks.trigger(this.hooks.eventTypes.touchEnd))},t.prototype.destroy=function(){this.startEventRegister.destroy(),this.moveEventRegister.destroy(),this.endEventRegister.destroy()},t}();!function(t){t.Horizontal="horizontal",t.Vertical="vertical"}(s||(s={})),function(t){t[t.Up=-1]="Up",t[t.Down=1]="Down"}(i||(i={})),function(t){t.Step="step",t.Point="clickedPoint"}(r||(r={}));var a=function(){function t(t,e){this.scroll=t,this.options=e,this.hooksFn=[],this.wrapper=e.wrapper,this.direction=e.direction,this.indicatorEl=this.wrapper.children[0],this.keysMap=this.getKeysMap(),this.handleFade(),this.handleHooks()}return t.prototype.handleFade=function(){this.options.fade&&(this.wrapper.style.opacity="0")},t.prototype.handleHooks=function(){var t=this,e=this.options,o=e.fade,s=e.interactive,i=e.scrollbarTrackClickable,r=this.scroll,n=r.hooks,a=r.scroller.translater.hooks,c=r.scroller.animater.hooks;if(this.registerHooks(n,n.eventTypes.refresh,this.refresh),this.registerHooks(a,a.eventTypes.translate,(function(e){var o=t.keysMap.hasScroll;t.scroll[o]&&t.updatePosition(e)})),this.registerHooks(c,c.eventTypes.time,this.transitionTime),this.registerHooks(c,c.eventTypes.timeFunction,this.transitionTimingFunction),o&&(this.registerHooks(r,r.eventTypes.scrollEnd,(function(){t.fade()})),this.registerHooks(r,r.eventTypes.scrollStart,(function(){t.fade(!0)})),r.eventTypes.mousewheelStart&&r.eventTypes.mousewheelEnd&&(this.registerHooks(r,r.eventTypes.mousewheelStart,(function(){t.fade(!0)})),this.registerHooks(r,r.eventTypes.mousewheelMove,(function(){t.fade(!0)})),this.registerHooks(r,r.eventTypes.mousewheelEnd,(function(){t.fade()})))),s){var h=this.scroll.options,p=h.disableMouse,d=h.disableTouch;this.eventHandler=new l(this,{disableMouse:p,disableTouch:d});var u=this.eventHandler.hooks;this.registerHooks(u,u.eventTypes.touchStart,this.startHandler),this.registerHooks(u,u.eventTypes.touchMove,this.moveHandler),this.registerHooks(u,u.eventTypes.touchEnd,this.endHandler)}i&&this.bindClick()},t.prototype.registerHooks=function(t,e,o){t.on(e,o,this),this.hooksFn.push([t,e,o])},t.prototype.bindClick=function(){var t=this.wrapper;this.clickEventRegister=new n.f(t,[{name:"click",handler:this.handleClick.bind(this)}])},t.prototype.handleClick=function(t){var e=this.calculateclickOffsetPos(t),o=this.scroll,i=o.x,r=o.y;i=this.direction===s.Horizontal?e:i,r=this.direction===s.Vertical?e:r,this.scroll.scrollTo(i,r,this.options.scrollbarTrackOffsetTime)},t.prototype.calculateclickOffsetPos=function(t){var e=this.keysMap,o=e.point,s=e.domRect,n=this.options.scrollbarTrackOffsetType,l=t[o]-this.wrapperRect[s],a=l<this.currentPos?i.Up:i.Down,c=0,h=this.currentPos;return n===r.Step?c=this.scrollInfo.baseSize*a:(c=0,h=l),this.newPos(h,c,this.scrollInfo)},t.prototype.getKeysMap=function(){return this.direction===s.Vertical?{hasScroll:"hasVerticalScroll",size:"height",wrapperSize:"clientHeight",scrollerSize:"scrollerHeight",maxScrollPos:"maxScrollY",pos:"y",point:"pageY",translateProperty:"translateY",domRect:"top"}:{hasScroll:"hasHorizontalScroll",size:"width",wrapperSize:"clientWidth",scrollerSize:"scrollerWidth",maxScrollPos:"maxScrollX",pos:"x",point:"pageX",translateProperty:"translateX",domRect:"left"}},t.prototype.fade=function(t){var e=this.options,o=e.fadeInTime,s=e.fadeOutTime,i=t?o:s,r=this.wrapper;r.style[n.O.transitionDuration]=i+"ms",r.style.opacity=t?"1":"0"},t.prototype.refresh=function(){var t=this.keysMap.hasScroll,e=this.scroll,o=e.x,s=e.y;if(this.wrapperRect=this.wrapper.getBoundingClientRect(),this.canScroll(e[t])){var i=this.keysMap,r=i.wrapperSize,n=i.scrollerSize,l=i.maxScrollPos;this.scrollInfo=this.refreshScrollInfo(this.wrapper[r],e[n],e[l],this.indicatorEl[r]),this.updatePosition({x:o,y:s})}},t.prototype.transitionTime=function(t){void 0===t&&(t=0),this.indicatorEl.style[n.O.transitionDuration]=t+"ms"},t.prototype.transitionTimingFunction=function(t){this.indicatorEl.style[n.O.transitionTimingFunction]=t},t.prototype.canScroll=function(t){return this.wrapper.style.display=t?"block":"none",t},t.prototype.refreshScrollInfo=function(t,e,o,s){var i=Math.max(Math.round(t*t/(e||t||1)),this.options.minSize);this.options.isCustom&&(i=s);var r=t-i;return{baseSize:i,maxScrollPos:r,minScrollPos:0,sizeRatio:r/o}},t.prototype.updatePosition=function(t){var e=this.caculatePosAndSize(t,this.scrollInfo),o=e.pos,s=e.size;this.refreshStyle(s,o),this.currentPos=o},t.prototype.caculatePosAndSize=function(t,e){var o,s=this.keysMap.pos,i=e.sizeRatio,r=e.baseSize,n=e.maxScrollPos,l=e.minScrollPos,a=this.options.minSize,c=Math.round(i*t[s]);return c<l?(o=Math.max(r+3*c,a),c=l):c>n?c=n+r-(o=Math.max(r-3*(c-n),a)):o=r,{pos:c,size:o}},t.prototype.refreshStyle=function(t,e){var o=this.keysMap,s=o.translateProperty,i=o.size,r=this.scroll.options.translateZ;this.indicatorEl.style[i]=t+"px",this.indicatorEl.style[n.O.transform]=s+"("+e+"px)"+r},t.prototype.startHandler=function(){this.moved=!1,this.startTime=Object(n.y)(),this.transitionTime(),this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart)},t.prototype.moveHandler=function(t){if(this.moved||this.indicatorNotMoved(t)||(this.moved=!0,this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)),this.moved){var e=this.newPos(this.currentPos,t,this.scrollInfo);this.syncBScroll(e)}},t.prototype.endHandler=function(){if(this.moved){var t=this.scroll,e=t.x,o=t.y;this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd,{x:e,y:o})}},t.prototype.indicatorNotMoved=function(t){var e=this.currentPos,o=this.scrollInfo,s=o.maxScrollPos;return e===o.minScrollPos&&t<=0||e===s&&t>=0},t.prototype.syncBScroll=function(t){var e=Object(n.y)(),o=this.scroll,i=o.x,r=o.y,l=o.options,a=o.scroller,c=o.maxScrollY,h=o.minScrollY,p=o.maxScrollX,d=o.minScrollX,u=l.probeType,f=l.momentumLimitTime,y={x:i,y:r};this.direction===s.Vertical?y.y=Object(n.m)(t,c,h):y.x=Object(n.m)(t,p,d),a.translater.translate(y),e-this.startTime>f&&(this.startTime=e,u===n.j.Throttle&&a.hooks.trigger(a.hooks.eventTypes.scroll,y)),u>n.j.Throttle&&a.hooks.trigger(a.hooks.eventTypes.scroll,y)},t.prototype.newPos=function(t,e,o){var s=o.maxScrollPos,i=o.sizeRatio,r=o.minScrollPos,l=t+e;return l=Object(n.m)(l,r,s),Math.round(l/i)},t.prototype.destroy=function(){var t=this.options,e=t.interactive,o=t.scrollbarTrackClickable,s=t.isCustom;e&&this.eventHandler.destroy(),o&&this.clickEventRegister.destroy(),s||this.wrapper.parentNode.removeChild(this.wrapper),this.hooksFn.forEach((function(t){var e=t[0],o=t[1],s=t[2];e.off(o,s)})),this.hooksFn.length=0},t}(),c=function(){return(c=Object.assign||function(t){for(var e,o=1,s=arguments.length;o<s;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},h=function(){function t(t){this.scroll=t,this.handleOptions(),this.createIndicators(),this.handleHooks()}return t.prototype.handleHooks=function(){var t=this,e=this.scroll;e.hooks.on(e.hooks.eventTypes.destroy,(function(){for(var e=0,o=t.indicators;e<o.length;e++){o[e].destroy()}}))},t.prototype.handleOptions=function(){var t=!0===this.scroll.options.scrollbar?{}:this.scroll.options.scrollbar,e={fade:!0,fadeInTime:250,fadeOutTime:500,interactive:!1,customElements:[],minSize:8,scrollbarTrackClickable:!1,scrollbarTrackOffsetType:r.Step,scrollbarTrackOffsetTime:300};this.options=Object(n.t)(e,t)},t.prototype.createIndicators=function(){for(var t,e=this.scroll,o=[],i=["scrollX","scrollY"],r=[s.Horizontal,s.Vertical],n=this.options.customElements,l=0;l<i.length;l++){var h=i[l];if(e.options[h]){var p=n.shift(),d=r[l],u=!1,f=p||this.createScrollbarElement(d);f!==p?e.wrapper.appendChild(f):u=!0,t=c(c({wrapper:f,direction:d},this.options),{isCustom:u}),o.push(new a(e,t))}}this.indicators=o},t.prototype.createScrollbarElement=function(t,e){void 0===e&&(e=this.options.scrollbarTrackClickable);var o=document.createElement("div"),i=document.createElement("div");return o.style.cssText="position:absolute;z-index:9999;overflow:hidden;",i.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",i.className="bscroll-indicator",t===s.Horizontal?(o.style.cssText+="height:7px;left:2px;right:2px;bottom:0;",i.style.height="100%",o.className="bscroll-horizontal-scrollbar"):(o.style.cssText+="width:7px;bottom:2px;top:2px;right:1px;",i.style.width="100%",o.className="bscroll-vertical-scrollbar"),e||(o.style.cssText+="pointer-events:none;"),o.appendChild(i),o},t.pluginName="scrollbar",t}();e.a=h},426:function(t,e,o){},600:function(t,e,o){"use strict";o(426)},656:function(t,e,o){"use strict";o.r(e);var s=o(346),i=o(353);s.a.use(i.a);var r={mounted:function(){this.initBscroll()},methods:{initBscroll:function(){this.scroll=new s.a(this.$refs.wrapper,{scrollY:!0,scrollbar:!0})}}},n=(o(600),o(30)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scrollbar"},[o("div",{ref:"wrapper",staticClass:"scrollbar-wrapper"},[o("ul",{staticClass:"scrollbar-content"},t._l(40,(function(e){return o("li",{key:e,staticClass:"scrollbar-content-item"},[t._v("\n        "+t._s("I am item "+e+" ")+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=l.exports}}]);