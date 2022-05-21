(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{353:function(t,o,e){"use strict";var s,i,r,n=e(345),l=function(){function t(t,o){this.indicator=t,this.options=o,this.hooks=new n.d(["touchStart","touchMove","touchEnd"]),this.registerEvents()}return t.prototype.registerEvents=function(){var t=this.options,o=t.disableMouse,e=t.disableTouch,s=[],i=[],r=[];o||(s.push({name:"mousedown",handler:this.start.bind(this)}),i.push({name:"mousemove",handler:this.move.bind(this)}),r.push({name:"mouseup",handler:this.end.bind(this)})),e||(s.push({name:"touchstart",handler:this.start.bind(this)}),i.push({name:"touchmove",handler:this.move.bind(this)}),r.push({name:"touchend",handler:this.end.bind(this)},{name:"touchcancel",handler:this.end.bind(this)})),this.startEventRegister=new n.f(this.indicator.indicatorEl,s),this.moveEventRegister=new n.f(window,i),this.endEventRegister=new n.f(window,r)},t.prototype.BScrollIsDisabled=function(){return!this.indicator.scroll.enabled},t.prototype.start=function(t){if(!this.BScrollIsDisabled()){var o=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.initiated=!0,this.lastPoint=o[this.indicator.keysMap.point],this.hooks.trigger(this.hooks.eventTypes.touchStart)}},t.prototype.move=function(t){if(this.initiated){var o=(t.touches?t.touches[0]:t)[this.indicator.keysMap.point];t.preventDefault(),t.stopPropagation();var e=o-this.lastPoint;this.lastPoint=o,this.hooks.trigger(this.hooks.eventTypes.touchMove,e)}},t.prototype.end=function(t){this.initiated&&(this.initiated=!1,t.preventDefault(),t.stopPropagation(),this.hooks.trigger(this.hooks.eventTypes.touchEnd))},t.prototype.destroy=function(){this.startEventRegister.destroy(),this.moveEventRegister.destroy(),this.endEventRegister.destroy()},t}();!function(t){t.Horizontal="horizontal",t.Vertical="vertical"}(s||(s={})),function(t){t[t.Up=-1]="Up",t[t.Down=1]="Down"}(i||(i={})),function(t){t.Step="step",t.Point="clickedPoint"}(r||(r={}));var a=function(){function t(t,o){this.scroll=t,this.options=o,this.hooksFn=[],this.wrapper=o.wrapper,this.direction=o.direction,this.indicatorEl=this.wrapper.children[0],this.keysMap=this.getKeysMap(),this.handleFade(),this.handleHooks()}return t.prototype.handleFade=function(){this.options.fade&&(this.wrapper.style.opacity="0")},t.prototype.handleHooks=function(){var t=this,o=this.options,e=o.fade,s=o.interactive,i=o.scrollbarTrackClickable,r=this.scroll,n=r.hooks,a=r.scroller.translater.hooks,c=r.scroller.animater.hooks;if(this.registerHooks(n,n.eventTypes.refresh,this.refresh),this.registerHooks(a,a.eventTypes.translate,(function(o){var e=t.keysMap.hasScroll;t.scroll[e]&&t.updatePosition(o)})),this.registerHooks(c,c.eventTypes.time,this.transitionTime),this.registerHooks(c,c.eventTypes.timeFunction,this.transitionTimingFunction),e&&(this.registerHooks(r,r.eventTypes.scrollEnd,(function(){t.fade()})),this.registerHooks(r,r.eventTypes.scrollStart,(function(){t.fade(!0)})),r.eventTypes.mousewheelStart&&r.eventTypes.mousewheelEnd&&(this.registerHooks(r,r.eventTypes.mousewheelStart,(function(){t.fade(!0)})),this.registerHooks(r,r.eventTypes.mousewheelMove,(function(){t.fade(!0)})),this.registerHooks(r,r.eventTypes.mousewheelEnd,(function(){t.fade()})))),s){var h=this.scroll.options,p=h.disableMouse,d=h.disableTouch;this.eventHandler=new l(this,{disableMouse:p,disableTouch:d});var u=this.eventHandler.hooks;this.registerHooks(u,u.eventTypes.touchStart,this.startHandler),this.registerHooks(u,u.eventTypes.touchMove,this.moveHandler),this.registerHooks(u,u.eventTypes.touchEnd,this.endHandler)}i&&this.bindClick()},t.prototype.registerHooks=function(t,o,e){t.on(o,e,this),this.hooksFn.push([t,o,e])},t.prototype.bindClick=function(){var t=this.wrapper;this.clickEventRegister=new n.f(t,[{name:"click",handler:this.handleClick.bind(this)}])},t.prototype.handleClick=function(t){var o=this.calculateclickOffsetPos(t),e=this.scroll,i=e.x,r=e.y;i=this.direction===s.Horizontal?o:i,r=this.direction===s.Vertical?o:r,this.scroll.scrollTo(i,r,this.options.scrollbarTrackOffsetTime)},t.prototype.calculateclickOffsetPos=function(t){var o=this.keysMap,e=o.point,s=o.domRect,n=this.options.scrollbarTrackOffsetType,l=t[e]-this.wrapperRect[s],a=l<this.currentPos?i.Up:i.Down,c=0,h=this.currentPos;return n===r.Step?c=this.scrollInfo.baseSize*a:(c=0,h=l),this.newPos(h,c,this.scrollInfo)},t.prototype.getKeysMap=function(){return this.direction===s.Vertical?{hasScroll:"hasVerticalScroll",size:"height",wrapperSize:"clientHeight",scrollerSize:"scrollerHeight",maxScrollPos:"maxScrollY",pos:"y",point:"pageY",translateProperty:"translateY",domRect:"top"}:{hasScroll:"hasHorizontalScroll",size:"width",wrapperSize:"clientWidth",scrollerSize:"scrollerWidth",maxScrollPos:"maxScrollX",pos:"x",point:"pageX",translateProperty:"translateX",domRect:"left"}},t.prototype.fade=function(t){var o=this.options,e=o.fadeInTime,s=o.fadeOutTime,i=t?e:s,r=this.wrapper;r.style[n.O.transitionDuration]=i+"ms",r.style.opacity=t?"1":"0"},t.prototype.refresh=function(){var t=this.keysMap.hasScroll,o=this.scroll,e=o.x,s=o.y;if(this.wrapperRect=this.wrapper.getBoundingClientRect(),this.canScroll(o[t])){var i=this.keysMap,r=i.wrapperSize,n=i.scrollerSize,l=i.maxScrollPos;this.scrollInfo=this.refreshScrollInfo(this.wrapper[r],o[n],o[l],this.indicatorEl[r]),this.updatePosition({x:e,y:s})}},t.prototype.transitionTime=function(t){void 0===t&&(t=0),this.indicatorEl.style[n.O.transitionDuration]=t+"ms"},t.prototype.transitionTimingFunction=function(t){this.indicatorEl.style[n.O.transitionTimingFunction]=t},t.prototype.canScroll=function(t){return this.wrapper.style.display=t?"block":"none",t},t.prototype.refreshScrollInfo=function(t,o,e,s){var i=Math.max(Math.round(t*t/(o||t||1)),this.options.minSize);this.options.isCustom&&(i=s);var r=t-i;return{baseSize:i,maxScrollPos:r,minScrollPos:0,sizeRatio:r/e}},t.prototype.updatePosition=function(t){var o=this.caculatePosAndSize(t,this.scrollInfo),e=o.pos,s=o.size;this.refreshStyle(s,e),this.currentPos=e},t.prototype.caculatePosAndSize=function(t,o){var e,s=this.keysMap.pos,i=o.sizeRatio,r=o.baseSize,n=o.maxScrollPos,l=o.minScrollPos,a=this.options.minSize,c=Math.round(i*t[s]);return c<l?(e=Math.max(r+3*c,a),c=l):c>n?c=n+r-(e=Math.max(r-3*(c-n),a)):e=r,{pos:c,size:e}},t.prototype.refreshStyle=function(t,o){var e=this.keysMap,s=e.translateProperty,i=e.size,r=this.scroll.options.translateZ;this.indicatorEl.style[i]=t+"px",this.indicatorEl.style[n.O.transform]=s+"("+o+"px)"+r},t.prototype.startHandler=function(){this.moved=!1,this.startTime=Object(n.y)(),this.transitionTime(),this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart)},t.prototype.moveHandler=function(t){if(this.moved||this.indicatorNotMoved(t)||(this.moved=!0,this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)),this.moved){var o=this.newPos(this.currentPos,t,this.scrollInfo);this.syncBScroll(o)}},t.prototype.endHandler=function(){if(this.moved){var t=this.scroll,o=t.x,e=t.y;this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd,{x:o,y:e})}},t.prototype.indicatorNotMoved=function(t){var o=this.currentPos,e=this.scrollInfo,s=e.maxScrollPos;return o===e.minScrollPos&&t<=0||o===s&&t>=0},t.prototype.syncBScroll=function(t){var o=Object(n.y)(),e=this.scroll,i=e.x,r=e.y,l=e.options,a=e.scroller,c=e.maxScrollY,h=e.minScrollY,p=e.maxScrollX,d=e.minScrollX,u=l.probeType,f=l.momentumLimitTime,v={x:i,y:r};this.direction===s.Vertical?v.y=Object(n.m)(t,c,h):v.x=Object(n.m)(t,p,d),a.translater.translate(v),o-this.startTime>f&&(this.startTime=o,u===n.j.Throttle&&a.hooks.trigger(a.hooks.eventTypes.scroll,v)),u>n.j.Throttle&&a.hooks.trigger(a.hooks.eventTypes.scroll,v)},t.prototype.newPos=function(t,o,e){var s=e.maxScrollPos,i=e.sizeRatio,r=e.minScrollPos,l=t+o;return l=Object(n.m)(l,r,s),Math.round(l/i)},t.prototype.destroy=function(){var t=this.options,o=t.interactive,e=t.scrollbarTrackClickable,s=t.isCustom;o&&this.eventHandler.destroy(),e&&this.clickEventRegister.destroy(),s||this.wrapper.parentNode.removeChild(this.wrapper),this.hooksFn.forEach((function(t){var o=t[0],e=t[1],s=t[2];o.off(e,s)})),this.hooksFn.length=0},t}(),c=function(){return(c=Object.assign||function(t){for(var o,e=1,s=arguments.length;e<s;e++)for(var i in o=arguments[e])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)},h=function(){function t(t){this.scroll=t,this.handleOptions(),this.createIndicators(),this.handleHooks()}return t.prototype.handleHooks=function(){var t=this,o=this.scroll;o.hooks.on(o.hooks.eventTypes.destroy,(function(){for(var o=0,e=t.indicators;o<e.length;o++){e[o].destroy()}}))},t.prototype.handleOptions=function(){var t=!0===this.scroll.options.scrollbar?{}:this.scroll.options.scrollbar,o={fade:!0,fadeInTime:250,fadeOutTime:500,interactive:!1,customElements:[],minSize:8,scrollbarTrackClickable:!1,scrollbarTrackOffsetType:r.Step,scrollbarTrackOffsetTime:300};this.options=Object(n.t)(o,t)},t.prototype.createIndicators=function(){for(var t,o=this.scroll,e=[],i=["scrollX","scrollY"],r=[s.Horizontal,s.Vertical],n=this.options.customElements,l=0;l<i.length;l++){var h=i[l];if(o.options[h]){var p=n.shift(),d=r[l],u=!1,f=p||this.createScrollbarElement(d);f!==p?o.wrapper.appendChild(f):u=!0,t=c(c({wrapper:f,direction:d},this.options),{isCustom:u}),e.push(new a(o,t))}}this.indicators=e},t.prototype.createScrollbarElement=function(t,o){void 0===o&&(o=this.options.scrollbarTrackClickable);var e=document.createElement("div"),i=document.createElement("div");return e.style.cssText="position:absolute;z-index:9999;overflow:hidden;",i.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",i.className="bscroll-indicator",t===s.Horizontal?(e.style.cssText+="height:7px;left:2px;right:2px;bottom:0;",i.style.height="100%",e.className="bscroll-horizontal-scrollbar"):(e.style.cssText+="width:7px;bottom:2px;top:2px;right:1px;",i.style.width="100%",e.className="bscroll-vertical-scrollbar"),o||(e.style.cssText+="pointer-events:none;"),e.appendChild(i),e},t.pluginName="scrollbar",t}();o.a=h},423:function(t,o,e){},595:function(t,o,e){t.exports=e.p+"assets/img/girl.05e51507.jpg"},596:function(t,o,e){"use strict";e(423)},653:function(t,o,e){"use strict";e.r(o);var s=e(346),i=e(353),r=e(595),n=e.n(r);s.a.use(i.a);var l={data:function(){return{girlImageLink:n.a}},methods:{initBscroll:function(){this.scroll=new s.a(this.$refs.wrapper,{freeScroll:!0,click:!0,scrollbar:{customElements:[this.$refs.horizontal,this.$refs.vertical],fade:!1,interactive:!0,scrollbarTrackClickable:!0}})},onload:function(){this.initBscroll()}}},a=(e(596),e(30)),c=Object(a.a)(l,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"custom-scrollbar-container"},[o("div",{ref:"wrapper",staticClass:"custom-scrollbar-wrapper"},[o("img",{staticClass:"custom-scrollbar-content",attrs:{src:this.girlImageLink,alt:""},on:{load:this.onload}}),this._v(" "),o("div",{ref:"vertical",staticClass:"custom-vertical-scrollbar"},[o("div",{staticClass:"custom-vertical-indicator"})]),this._v(" "),o("div",{ref:"horizontal",staticClass:"custom-horizontal-scrollbar"},[o("div",{staticClass:"custom-horizontal-indicator"})])])])}),[],!1,null,"3913c12e",null);o.default=c.exports}}]);