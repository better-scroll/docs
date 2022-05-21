(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{665:function(e,t,s){"use strict";s.r(t);var a=s(30),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"betterscroll-s-diagnosis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#betterscroll-s-diagnosis"}},[e._v("#")]),e._v(' BetterScroll\'s "diagnosis"')]),e._v(" "),s("h3",{attrs:{id:"question-1-why-can-t-my-betterscroll-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-1-why-can-t-my-betterscroll-work"}},[e._v("#")]),e._v(" [Question 1] Why can't my BetterScroll work?")]),e._v(" "),s("p",[e._v("The problem basically lies in the "),s("strong",[e._v("Height Calculation Error")]),e._v(". First of all, you must have a clear understanding of the scrolling principle of "),s("code",[e._v("BetterScroll")]),e._v(". For vertical scrolling, simply the height of the "),s("code",[e._v("wrapper")]),e._v(" container is greater than the height of the "),s("code",[e._v("content")]),e._v(" content, and the "),s("code",[e._v("translateY")]),e._v(" is modified to achieve the purpose of scrolling. The principle of horizontal scrolling is similar. Then the calculation "),s("strong",[e._v("Scrollable Height")]),e._v(" is the logic necessary for "),s("code",[e._v("BetterScroll")]),e._v(". The general logic  is:")]),e._v(" "),s("p",[e._v("1. "),s("strong",[e._v("Pictures with uncertain sizes")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("When js performs a calculation of the scrollable height, the image has not been rendered.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("Call "),s("code",[e._v("bs.refresh()")]),e._v(" inside the callback function of the image's "),s("code",[e._v("onload")]),e._v(" to ensure that the correct height of the image is calculated before calculating the "),s("strong",[e._v("Scrollable Height")]),e._v(".")])])]),e._v(" "),s("p",[e._v("2. "),s("strong",[e._v("Vue's keep-alive component")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Scenes")])]),e._v(" "),s("p",[e._v("Suppose there are two components of A and B wrapped by "),s("code",[e._v("keep-alive")]),e._v(", A component uses BetterScroll, does some operation in A component, pops up input keyboard, then enters B component, then returns to A component, "),s("code",[e._v("bs")]),e._v(" is unable to scroll.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("Because Vue's keep-alive's cache and the input keyboard pops up, it compresses the height of the viewable area, causing the previously calculated scrollable height to be incorrect.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("You can call "),s("code",[e._v("bs.refresh()")]),e._v(" on Vue's "),s("code",[e._v("activated")]),e._v(" hook to recalculate the height or re-instantiate bs.")])])]),e._v(" "),s("h3",{attrs:{id:"question-2-why-do-brower-s-vertical-scrolling-failed-after-i-use-betterscroll-to-do-horizontal-scrolling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-2-why-do-brower-s-vertical-scrolling-failed-after-i-use-betterscroll-to-do-horizontal-scrolling"}},[e._v("#")]),e._v(" [Question 2] Why do brower's vertical scrolling failed after I use BetterScroll to do horizontal scrolling?")]),e._v(" "),s("p",[e._v("BetterScroll provides a feature of "),s("code",[e._v("slide")]),e._v(". If you implement a horizontal scrollin, such as "),s("code",[e._v("slide")]),e._v(". do vertical scrolling in the "),s("code",[e._v("slide")]),e._v(" area, you can't bubble to the browser, so you can't manipulate the scroll bar of the native browser.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("The internal scrolling calculations of BetterScroll exist in the user's interaction. For example, the mobile terminal is the "),s("code",[e._v("touchstart/touchmove/touchend")]),e._v(" event. The listeners of these events generally have the line "),s("code",[e._v("e.preventDefault()")]),e._v(", which will block the browser's default behavior so that the browser's scrollbar cannot be scrolled.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("Configure the "),s("code",[e._v("eventPassthrough")]),e._v(" attribute.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("  Let bs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    eventPassthrough"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vertical'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// keep vertical native scrolling")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"question-3-why-can-t-i-pop-up-a-pop-up-window-after-using-betterscroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-3-why-can-t-i-pop-up-a-pop-up-window-after-using-betterscroll"}},[e._v("#")]),e._v(" [Question 3] Why can't I pop up a pop-up window after using BetterScroll.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[s("strong",[e._v("question 2")]),e._v(" has been mentioned, it is caused by "),s("code",[e._v("e.preventDefault()")]),e._v(" in touchstart.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("Option 1: Configure the "),s("code",[e._v("preventDefaultException")]),e._v(" property.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" bs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  preventDefaultException"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    className"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("(^|\\s)test(\\s|$)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("code",[e._v("eventDefaultException")]),e._v(" can be used to control the "),s("code",[e._v("e.preventDefault()")]),e._v(" of the "),s("code",[e._v("touchstart")]),e._v(" and "),s("code",[e._v("touchmove")]),e._v(" events. If the above regular expression is used to check if the class name of the currently touched target element contains "),s("code",[e._v("test")]),e._v(", if passed, Then "),s("code",[e._v("e.preventDefault()")]),e._v(" will not be called.")]),e._v(" "),s("p",[e._v("Option 2: Configure the "),s("code",[e._v("preventDefault")]),e._v(" property.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" bs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  preventDefault"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[s("code",[e._v("preventDefault")]),e._v(" is set to "),s("code",[e._v("false")]),e._v(", there are some side effects, it is generally recommended to use "),s("strong",[e._v("Option one")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The side effect is that the touch event may bubble up to the document, causing the document to be dragged. At this point you need to listen for the parent or ancestor element of the "),s("code",[e._v("wrapper")]),e._v(" element, bind them to the touchmove event, and call "),s("code",[e._v("e.preventDefault()")]),e._v(".")])])])]),e._v(" "),s("h3",{attrs:{id:"question-4-why-are-the-listeners-for-all-click-events-inside-betterscroll-content-not-triggered"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-4-why-are-the-listeners-for-all-click-events-inside-betterscroll-content-not-triggered"}},[e._v("#")]),e._v(" [Question 4] Why are the listeners for all click events inside BetterScroll content not triggered?")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("Still caused by "),s("code",[e._v("e.preventDefault()")]),e._v(". On the mobile side, if you call "),s("code",[e._v("e.preventDefault()")]),e._v(" inside the logic of "),s("code",[e._v("touchstart/touchmove/touchend")]),e._v(", it will prevent the execution of the click event of it and its child elements. Therefore, BetterScroll internally manages the dispatch of the "),s("code",[e._v("click")]),e._v(" event, you only need the "),s("code",[e._v("click")]),e._v(" configuration item.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("Configure the "),s("code",[e._v("click")]),e._v(" attribute.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("  Let bs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    click"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"question-5-why-is-the-click-event-dispatched-twice-when-nesting-betterscroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-5-why-is-the-click-event-dispatched-twice-when-nesting-betterscroll"}},[e._v("#")]),e._v(" [Question 5] Why is the click event dispatched twice when Nesting BetterScroll?")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("As stated in "),s("strong",[e._v("Question 4")]),e._v(", the BetterScroll dispatches a "),s("code",[e._v("click")]),e._v(" event internally, and nested scenes must have two or more bs.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("You can manage the bubbling of events by instantiating inner BetterScroll's "),s("code",[e._v("stopPropagation")]),e._v(" configuration item, or by instantiating inner BetterScroll's "),s("code",[e._v("click")]),e._v(" configuration item to prevent multiple triggers of clicks.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" innerBS "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  stopPropagation"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// or")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" innerBS "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  click"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"question-6-why-do-i-listen-to-the-scroll-event-of-bs-why-not-execute-the-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-6-why-do-i-listen-to-the-scroll-event-of-bs-why-not-execute-the-callback"}},[e._v("#")]),e._v(" [Question 6] Why do I listen to the scroll event of bs, why not execute the callback?")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("BetterScroll does not dispatch the "),s("code",[e._v("scroll")]),e._v(" event at any time because there is a performance penalty for getting the scroll position of bs. As for whether or not to distribute, it depends on the "),s("code",[e._v("probeType")]),e._v(" configuration item.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("  Let bs "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    probeType"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// real-time dispatch")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"question-7-in-two-vertically-nested-bs-scenes-why-move-the-inner-bs-will-cause-the-outer-layer-to-also-be-scrolled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-7-in-two-vertically-nested-bs-scenes-why-move-the-inner-bs-will-cause-the-outer-layer-to-also-be-scrolled"}},[e._v("#")]),e._v(" [Question 7] In two vertically nested bs scenes, why move the inner bs will cause the outer layer to also be scrolled.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("The internal logic of BetterScroll is in the body of the listener function of the touch event. Since the touch event of the internal bs is triggered, it will naturally bubble to the outer bs.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("Since you know the reason, there are corresponding solutions. For example, when you scroll the "),s("strong",[e._v("inner")]),e._v(" "),s("code",[e._v("bs")]),e._v(", listen for the "),s("code",[e._v("scroll")]),e._v(" event and call the "),s("strong",[e._v("outer")]),e._v(" "),s("code",[e._v("bs.disable()")]),e._v(" to disable the "),s("strong",[e._v("outer")]),e._v(" "),s("code",[e._v("bs")]),e._v(". When the "),s("strong",[e._v("inner")]),e._v(" "),s("code",[e._v("bs")]),e._v(" scrolls to the bottom, it means that you need to scroll the "),s("strong",[e._v("outer")]),e._v(" "),s("code",[e._v("bs")]),e._v(" at this time. At this time, call the "),s("strong",[e._v("outer")]),e._v(" "),s("code",[e._v("bs.enable()")]),e._v(" to activate the outer layer and call the "),s("strong",[e._v("inner")]),e._v(" "),s("code",[e._v("bs.disable().")]),e._v(" to forbid inner scrolling. In fact, think about it, this interaction is consistent with the nested scrolling behavior of the "),s("code",[e._v("Web browser")]),e._v(", except that the browser handles the various scrolling nesting logic for you, and the BetterScroll requires your own dispatched events and exposed APIs to fulfill.")]),e._v(" "),s("blockquote",[s("p",[e._v("The "),s("a",{attrs:{href:"https://didi.github.io/cube-ui/example/#/scroll/v-scrolls",target:"_blank",rel:"noopener noreferrer"}},[e._v("scroll"),s("OutboundLink")],1),e._v(" component of "),s("code",[e._v("cube-ui")]),e._v(" gives a solution to this scenario. "),s("a",{attrs:{href:"https://github.com/didi/cube-ui/blob/dev/src/components/scroll/scroll.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code is here"),s("OutboundLink")],1)])])])]),e._v(" "),s("h3",{attrs:{id:"question-8-in-the-vertical-bs-nesting-horizontal-bs-scene-why-does-the-vertical-movement-of-the-horizontal-bs-area-do-not-cause-vertical-scrolling-of-the-outer-vertical-bs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question-8-in-the-vertical-bs-nesting-horizontal-bs-scene-why-does-the-vertical-movement-of-the-horizontal-bs-area-do-not-cause-vertical-scrolling-of-the-outer-vertical-bs"}},[e._v("#")]),e._v(" [Question 8] In the vertical bs nesting horizontal bs scene, why does the vertical movement of the horizontal bs area do not cause vertical scrolling of the outer vertical bs?")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Reason")])]),e._v(" "),s("p",[e._v("The reason is similar to "),s("strong",[e._v("Question 2")]),e._v(", because "),s("code",[e._v("e.preventDefault()")]),e._v(" affects the default scrolling behavior, causing the outer bs to not trigger the touch event.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Solution")])]),e._v(" "),s("p",[e._v("The solution is to configure the "),s("code",[e._v("eventPassthrough")]),e._v(" property of the inner bs to keep the default native vertical scrolling.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("  Let innerBS "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BScroll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    eventPassthrough"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vertical'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// keep vertical native scrolling")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);