(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),i=new WeakMap;function r(e){return Object(o.useMemo)((function(){return function(e){var t=i.get(e)||0;return i.set(e,t+1),t}(e)}),[e])}},266:function(e,t,n){"use strict";var o=n(12),i=n(0),r=n(54),a=n(112);t.a=Object(r.a)((function(e){return function(t){var n=Object(a.a)(e);return Object(i.createElement)(e,Object(o.a)({},t,{instanceId:n}))}}),"withInstanceId")},721:function(e,t,n){"use strict";var o=n(12),i=n(9),r=n(7),a=n(5),c=n(11),s=n(4),l=n(10),u=n(0),p=n(8),f=n.n(p),d=n(82);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(l.a)(p,e);var t,n=(t=p,function(){var e,n=Object(s.a)(t);if(h()){var o=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(c.a)(this,e)});function p(){var e;return Object(i.a)(this,p),(e=n.apply(this,arguments)).toggle=e.toggle.bind(Object(a.a)(e)),e.close=e.close.bind(Object(a.a)(e)),e.closeIfFocusOutside=e.closeIfFocusOutside.bind(Object(a.a)(e)),e.containerRef=Object(u.createRef)(),e.state={isOpen:!1},e}return Object(r.a)(p,[{key:"componentWillUnmount",value:function(){var e=this.state.isOpen,t=this.props.onToggle;e&&t&&t(!1)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.isOpen,o=this.props.onToggle;t.isOpen!==n&&o&&o(n)}},{key:"toggle",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"closeIfFocusOutside",value:function(){this.containerRef.current.contains(document.activeElement)||document.activeElement.closest('[role="dialog"]')||this.close()}},{key:"close",value:function(){this.props.onClose&&this.props.onClose(),this.setState({isOpen:!1})}},{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.renderContent,i=t.renderToggle,r=t.position,a=void 0===r?"bottom right":r,c=t.className,s=t.contentClassName,l=t.expandOnMobile,p=t.headerTitle,h=t.focusOnMount,b=t.popoverProps,m={isOpen:e,onToggle:this.toggle,onClose:this.close};return Object(u.createElement)("div",{className:f()("components-dropdown",c),ref:this.containerRef},i(m),e&&Object(u.createElement)(d.a,Object(o.a)({position:a,onClose:this.close,onFocusOutside:this.closeIfFocusOutside,expandOnMobile:l,headerTitle:p,focusOnMount:h},b,{className:f()("components-dropdown__content",b?b.className:void 0,s)}),n(m)))}}]),p}(u.Component);t.a=b},722:function(e,t,n){"use strict";var o=n(12),i=n(14),r=n(9),a=n(7),c=n(11),s=n(4),l=n(10),u=n(0),p=n(266),f=n(59),d=n(5),h=n(8),b=n.n(h),m=n(31),y=n(169),v=n(85),O=n(84),g=n(86),j=n(83);function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var k=function(e){Object(l.a)(o,e);var t,n=(t=o,function(){var e,n=Object(s.a)(t);if(C()){var o=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(c.a)(this,e)});function o(){var e;return Object(r.a)(this,o),(e=n.apply(this,arguments)).containerRef=Object(u.createRef)(),e.handleKeyDown=e.handleKeyDown.bind(Object(d.a)(e)),e.handleFocusOutside=e.handleFocusOutside.bind(Object(d.a)(e)),e}return Object(a.a)(o,[{key:"componentDidMount",value:function(){this.props.focusOnMount&&this.containerRef.current.focus()}},{key:"handleFocusOutside",value:function(e){this.props.shouldCloseOnClickOutside&&this.onRequestClose(e)}},{key:"handleKeyDown",value:function(e){e.keyCode===m.b&&this.handleEscapeKeyDown(e)}},{key:"handleEscapeKeyDown",value:function(e){this.props.shouldCloseOnEsc&&(e.stopPropagation(),this.onRequestClose(e))}},{key:"onRequestClose",value:function(e){var t=this.props.onRequestClose;t&&t(e)}},{key:"render",value:function(){var e=this.props,t=e.overlayClassName,n=e.contentLabel,o=e.aria,i=o.describedby,r=o.labelledby,a=e.children,c=e.className,s=e.role,l=e.style;return Object(u.createElement)(v.a,{className:b()("components-modal__screen-overlay",t),onKeyDown:this.handleKeyDown},Object(u.createElement)("div",{className:b()("components-modal__frame",c),style:l,ref:this.containerRef,role:s,"aria-label":n,"aria-labelledby":n?null:r,"aria-describedby":i,tabIndex:"-1"},a))}}]),o}(u.Component),w=Object(y.a)([g.a,j.a,O.a])(k),D=n(3),R=n(209),T=n(67),_=function(e){var t=e.icon,n=e.title,o=e.onClose,i=e.closeLabel,r=e.headingId,a=e.isDismissible,c=i||Object(D.__)("Close dialog");return Object(u.createElement)("div",{className:"components-modal__header"},Object(u.createElement)("div",{className:"components-modal__header-heading-container"},t&&Object(u.createElement)("span",{className:"components-modal__icon-container","aria-hidden":!0},t),n&&Object(u.createElement)("h1",{id:r,className:"components-modal__header-heading"},n)),a&&Object(u.createElement)(T.a,{onClick:o,icon:R.a,label:c}))},E=n(2),M=new Set(["alert","status","log","marquee","timer"]),P=[],S=!1;function x(e){if(!S){var t=document.body.children;Object(E.forEach)(t,(function(t){t!==e&&function(e){var t=e.getAttribute("role");return!("SCRIPT"===e.tagName||e.hasAttribute("aria-hidden")||e.hasAttribute("aria-live")||M.has(t))}(t)&&(t.setAttribute("aria-hidden","true"),P.push(t))})),S=!0}}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I,L=0,V=function(e){Object(l.a)(p,e);var t,n=(t=p,function(){var e,n=Object(s.a)(t);if(N()){var o=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(c.a)(this,e)});function p(e){var t;return Object(r.a)(this,p),(t=n.call(this,e)).prepareDOM(),t}return Object(a.a)(p,[{key:"componentDidMount",value:function(){1===++L&&this.openFirstModal()}},{key:"componentWillUnmount",value:function(){0===--L&&this.closeLastModal(),this.cleanDOM()}},{key:"prepareDOM",value:function(){I||(I=document.createElement("div"),document.body.appendChild(I)),this.node=document.createElement("div"),I.appendChild(this.node)}},{key:"cleanDOM",value:function(){I.removeChild(this.node)}},{key:"openFirstModal",value:function(){x(I),document.body.classList.add(this.props.bodyOpenClassName)}},{key:"closeLastModal",value:function(){document.body.classList.remove(this.props.bodyOpenClassName),S&&(Object(E.forEach)(P,(function(e){e.removeAttribute("aria-hidden")})),P=[],S=!1)}},{key:"render",value:function(){var e=this.props,t=e.onRequestClose,n=e.title,r=e.icon,a=e.closeButtonLabel,c=e.children,s=e.aria,l=e.instanceId,p=e.isDismissible,d=e.isDismissable,h=Object(i.a)(e,["onRequestClose","title","icon","closeButtonLabel","children","aria","instanceId","isDismissible","isDismissable"]),b=s.labelledby||"components-modal-header-".concat(l);return d&&Object(f.a)("isDismissable prop of the Modal component",{alternative:"isDismissible prop (renamed) of the Modal component"}),Object(u.createPortal)(Object(u.createElement)(w,Object(o.a)({onRequestClose:t,aria:{labelledby:n?b:null,describedby:s.describedby}},h),Object(u.createElement)("div",{className:"components-modal__content",role:"document"},Object(u.createElement)(_,{closeLabel:a,headingId:b,icon:r,isDismissible:p||d,onClose:t,title:n}),c)),this.node)}}]),p}(u.Component);V.defaultProps={bodyOpenClassName:"modal-open",role:"dialog",title:null,focusOnMount:!0,shouldCloseOnEsc:!0,shouldCloseOnClickOutside:!0,isDismissible:!0,aria:{labelledby:null,describedby:null}};t.a=Object(p.a)(V)},775:function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,i=e.value;switch(o){case"top":return n.top+i<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+i<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-i>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-i>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var o=n(1),i=n.n(o),r=n(2),a=n.n(r),c=n(0),s=n.n(c),l=n(3),u=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=d(t).call(this,e),n=!i||"object"!==p(i)&&"function"!=typeof i?h(o):i,m(h(n),"getContainer",(function(){return n.props.containment||window})),m(h(n),"addEventListener",(function(e,t,o,i){var r;n.debounceCheck||(n.debounceCheck={});var a=function(){r=null,n.check()},c={target:e,fn:i>-1?function(){r||(r=setTimeout(a,i||0))}:function(){clearTimeout(r),r=setTimeout(a,o||0)},getLastTimeout:function(){return r}};e.addEventListener(t,c.fn),n.debounceCheck[t]=c})),m(h(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),m(h(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),m(h(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var i=n.props.containment.getBoundingClientRect();t={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=n.props.offset||{};"object"===p(r)&&(t.top+=r.top||0,t.left+=r.left||0,t.bottom-=r.bottom||0,t.right-=r.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},c=e.height>0&&e.width>0,s=c&&a.top&&a.left&&a.bottom&&a.right;if(c&&n.props.partialVisibility){var l=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(l=a[n.props.partialVisibility]),s=n.props.minTopValue?l&&e.top<=t.bottom-n.props.minTopValue:l}"string"==typeof r.direction&&"number"==typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),s=u()(r,e,t));var f=n.state;return n.state.isVisible!==s&&(f={isVisible:s,visibilityRect:a},n.setState(f),n.props.onChange&&n.props.onChange(s)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.a.Children.only(this.props.children)}}])&&f(n.prototype,o),r&&f(n,r),t}(i.a.Component);m(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.a.createElement("span",null)}),m(y,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!=typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var o=n(6);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n(13),n(78))}}]);