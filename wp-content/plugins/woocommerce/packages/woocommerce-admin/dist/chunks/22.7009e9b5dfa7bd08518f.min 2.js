(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[22],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=new WeakMap;function o(e,t){return Object(r.useMemo)((function(){var a=function(e){var t=n.get(e)||0;return n.set(e,t+1),t}(e);return t?"".concat(t,"-").concat(a):a}),[e])}},133:function(e,t,a){"use strict";var r=a(6),n=a(14),o=a(7),c=a.n(o),i=a(0);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.a=function(e){var t=e.as,a=void 0===t?"div":t,o=e.className,l=Object(n.a)(e,["as","className"]);return function(e){var t=e.as,a=void 0===t?"div":t,r=Object(n.a)(e,["as"]);return"function"==typeof r.children?r.children(r):Object(i.createElement)(a,r)}(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({as:a,className:c()("components-visually-hidden",o)},l))}},177:function(e,t,a){"use strict";var r=a(0),n=a(7),o=a.n(n),c=a(133);function i(e){var t=e.id,a=e.label,n=e.hideLabelFromVision,s=e.help,l=e.className,m=e.children;return Object(r.createElement)("div",{className:o()("components-base-control",l)},Object(r.createElement)("div",{className:"components-base-control__field"},a&&t&&(n?Object(r.createElement)(c.a,{as:"label",htmlFor:t},a):Object(r.createElement)("label",{className:"components-base-control__label",htmlFor:t},a)),a&&!t&&(n?Object(r.createElement)(c.a,{as:"label"},a):Object(r.createElement)(i.VisualLabel,null,a)),m),!!s&&Object(r.createElement)("p",{id:t+"__help",className:"components-base-control__help"},s))}i.VisualLabel=function(e){var t=e.className,a=e.children;return t=o()("components-base-control__label",t),Object(r.createElement)("span",{className:t},a)},t.a=i},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(){return Object(r.createElement)("span",{className:"components-spinner"})}},729:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(12),n=a(15),o=a(14),c=a(0),i=a(2),s=a(112),l=a(177);function m(e){var t=e.help,a=e.label,u=e.multiple,p=void 0!==u&&u,d=e.onChange,b=e.options,f=void 0===b?[]:b,h=e.className,O=e.hideLabelFromVision,j=Object(o.a)(e,["help","label","multiple","onChange","options","className","hideLabelFromVision"]),v=Object(s.a)(m),g="inspector-select-control-".concat(v);return!Object(i.isEmpty)(f)&&Object(c.createElement)(l.a,{label:a,hideLabelFromVision:O,id:g,help:t,className:h},Object(c.createElement)("select",Object(r.a)({id:g,className:"components-select-control__input",onChange:function(e){if(p){var t=Object(n.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}));d(t)}else d(e.target.value)},"aria-describedby":t?"".concat(g,"__help"):void 0,multiple:p},j),f.map((function(e,t){return Object(c.createElement)("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,disabled:e.disabled},e.label)}))))}},730:function(e,t,a){"use strict";var r=a(6),n=a(14),o=a(0);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.a=function(e){var t=e.icon,a=e.size,i=void 0===a?24:a,s=Object(n.a)(e,["icon","size"]);return Object(o.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({width:i,height:i},s))}},740:function(e,t,a){"use strict";var r=a(12),n=a(9),o=a(8),c=a(5),i=a(11),s=a(4),l=a(10),m=a(0),u=a(2),p=a(132),d=a(57);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}t.a=Object(d.a)((function(e){return function(t){Object(l.a)(f,t);var a,d=(a=f,function(){var e,t=Object(s.a)(a);if(b()){var r=Object(s.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(i.a)(this,e)});function f(){var e;return Object(n.a)(this,f),(e=d.apply(this,arguments)).debouncedSpeak=Object(u.debounce)(e.speak.bind(Object(c.a)(e)),500),e}return Object(o.a)(f,[{key:"speak",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"polite";Object(p.a)(e,t)}},{key:"componentWillUnmount",value:function(){this.debouncedSpeak.cancel()}},{key:"render",value:function(){return Object(m.createElement)(e,Object(r.a)({},this.props,{speak:this.speak,debouncedSpeak:this.debouncedSpeak}))}}]),f}(m.Component)}),"withSpokenMessages")},778:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(12),n=a(14),o=a(0),c=a(112),i=a(730),s=a(37),l=Object(o.createElement)(s.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(s.a,{d:"M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"})),m=a(177);function u(e){var t=e.label,a=e.className,s=e.heading,p=e.checked,d=e.help,b=e.onChange,f=Object(n.a)(e,["label","className","heading","checked","help","onChange"]),h=Object(c.a)(u),O="inspector-checkbox-control-".concat(h);return Object(o.createElement)(m.a,{label:s,id:O,help:d,className:a},Object(o.createElement)("span",{className:"components-checkbox-control__input-container"},Object(o.createElement)("input",Object(r.a)({id:O,className:"components-checkbox-control__input",type:"checkbox",value:"1",onChange:function(e){return b(e.target.checked)},checked:p,"aria-describedby":d?O+"__help":void 0},f)),p?Object(o.createElement)(i.a,{icon:l,className:"components-checkbox-control__checked",role:"presentation"}):null),Object(o.createElement)("label",{className:"components-checkbox-control__label",htmlFor:O},t))}},804:function(e,t,a){},805:function(e,t,a){},806:function(e,t,a){},937:function(e,t,a){"use strict";a.r(t);var r=a(78),n=a.n(r),o=a(39),c=a.n(o),i=a(17),s=a.n(i),l=a(0),m=a(3),u=a(69),p=a(175),d=a(19),b=a(55),f=a(48),h=(a(804),a(279)),O=a(42),j=a.n(O),v=a(41),g=a.n(v),y=a(43),_=a.n(y),w=a(47),k=a.n(w),S=a(28),E=a.n(S),D=a(778),I=a(1),P=a.n(I),N=a(2);a(805);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return k()(this,a)}}var T=function(e){_()(a,e);var t=C(a);function a(e){var r;return j()(this,a),(r=t.call(this,e)).renderInput=function(){var e=r.props,t=e.handleChange,a=e.name,o=e.inputText,c=e.inputType,i=e.options,s=e.value,m=e.component,p=r.state.disabled;switch(c){case"checkboxGroup":return i.map((function(e){return e.options.length>0&&Object(l.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":a+"-label"},e.label&&Object(l.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),r.renderCheckboxOptions(e.options))}));case"checkbox":return r.renderCheckboxOptions(i);case"button":return Object(l.createElement)(u.a,{isSecondary:!0,onClick:r.handleInputCallback,disabled:p},o);case"component":var d=m;return Object(l.createElement)(d,n()({value:s,onChange:t},r.props));case"text":default:var b=Object(N.uniqueId)(a);return Object(l.createElement)("input",{id:b,type:"text",name:a,onChange:t,value:s,placeholder:o,disabled:p})}},r.handleInputCallback=function(){var e=r.props,t=e.createNotice,a=e.callback;if("function"==typeof a)return new Promise((function(e,n){r.setState({disabled:!0}),a(e,n,t)})).then((function(){r.setState({disabled:!1})})).catch((function(){r.setState({disabled:!1})}))},r.state={disabled:!1},r}return g()(a,[{key:"renderCheckboxOptions",value:function(e){var t=this.props,a=t.handleChange,r=t.name,n=t.value,o=this.state.disabled;return e.map((function(e){return Object(l.createElement)(D.a,{key:r+"-"+e.value,label:e.label,name:r,checked:n&&n.includes(e.value),onChange:function(t){return a({target:{checked:t,name:r,type:"checkbox",value:e.value}})},disabled:o})}))}},{key:"render",value:function(){var e=this.props,t=e.helpText,a=e.label,r=e.name;return Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__label",id:r+"-label"},a),Object(l.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),t&&Object(l.createElement)("span",{className:"woocommerce-setting__help"},t)))}}]),a}(l.Component);T.propTypes={callback:P.a.func,handleChange:P.a.func.isRequired,helpText:P.a.oneOfType([P.a.string,P.a.array]),inputText:P.a.string,inputType:P.a.oneOf(["button","checkbox","checkboxGroup","text","component"]),label:P.a.string.isRequired,name:P.a.string.isRequired,options:P.a.arrayOf(P.a.shape({value:P.a.string,label:P.a.string,description:P.a.string,key:P.a.string,options:P.a.array})),value:P.a.oneOfType([P.a.string,P.a.array])};var R=Object(p.a)(Object(d.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))(T),F=a(65),x=a.n(F),A=a(26),L=a(22),z=a.n(L),V=a(16),M=a.n(V),Y=a(740),q=function(e,t,a){var r={};if(a&&(r.skip_existing=!0),"all"!==t.label)if("custom"===t.label){var n=M()().diff(M()(t.date,e),"days",!0);r.days=Math.floor(n)}else r.days=parseInt(t.label,10);return r},Q=a(176),B=a(30);var H=function(e){var t,a=e.importDate,r=e.onDeletePreviousData,n=e.onReimportData,o=e.onStartImport,c=e.onStopImport,i=e.status;return Object(l.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(t="ready"!==i,["initializing","customers","orders","finalizing"].includes(i)?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.a,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:c},Object(m.__)("Stop Import",'woocommerce')),Object(l.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},Object(m.__)("Imported data will not be lost if the import is stopped.",'woocommerce'),Object(l.createElement)("br",null),Object(m.__)("Navigating away from this page will not affect the import.",'woocommerce'))):["ready","nothing"].includes(i)?a?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.a,{isPrimary:!0,onClick:o,disabled:t},Object(m.__)("Start",'woocommerce')),Object(l.createElement)(u.a,{isSecondary:!0,onClick:r},Object(m.__)("Delete Previously Imported Data",'woocommerce'))):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.a,{isPrimary:!0,onClick:o,disabled:t},Object(m.__)("Start",'woocommerce'))):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.a,{isSecondary:!0,onClick:n},Object(m.__)("Re-import Data",'woocommerce')),Object(l.createElement)(u.a,{isSecondary:!0,onClick:r},Object(m.__)("Delete Previously Imported Data",'woocommerce')))))},U=a(729),G=a(111);var W=function(e){var t,a=e.dateFormat,r=e.disabled,n=e.onDateChange,o=e.onPeriodChange,c=e.value,i=function(e){e.date&&e.date.isValid?n(e.date.format(a)):n(e.text)},s=function(e){return e.isValid()&&c.date.length===a.length?e.isAfter(new Date,"day")?G.b.future:null:G.b.invalid};return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)(U.a,{label:Object(m.__)("Import Historical Data",'woocommerce'),value:c.label,disabled:r,onChange:function(e){o(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===c.label&&(t=M()(c.date,a),Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},Object(m.__)("Beginning on",'woocommerce')),Object(l.createElement)(b.DatePicker,{date:t.isValid()?t.toDate():null,dateFormat:a,disabled:r,error:s(t),isInvalidDate:function(e){return M()(e).isAfter(new Date,"day")},onUpdate:i,text:c.date}))))};var J=function(e){var t=e.label,a=e.progress,r=e.total,n=Object(m.sprintf)(Object(m.__)("Imported %(label)s",'woocommerce'),{label:t}),o=Object(N.isNil)(r)?null:Object(m.sprintf)(Object(m.__)("%(progress)s of %(total)s",'woocommerce'),{progress:a||0,total:r});return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},n),o&&Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},o),Object(l.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:r,value:a||0}))},K=a(44),X=a(273);var Z=Object(b.useFilters)("woocommerce_admin_import_status")((function(e){var t=e.importDate,a=e.status,r=Object(K.applyFilters)("woocommerce_admin_import_status",{nothing:Object(m.__)("Nothing To Import",'woocommerce'),ready:Object(m.__)("Ready To Import",'woocommerce'),initializing:[Object(m.__)("Initializing",'woocommerce'),Object(l.createElement)(X.a,{key:"spinner"})],customers:[Object(m.__)("Importing Customers",'woocommerce'),Object(l.createElement)(X.a,{key:"spinner"})],orders:[Object(m.__)("Importing Orders",'woocommerce'),Object(l.createElement)(X.a,{key:"spinner"})],finalizing:[Object(m.__)("Finalizing",'woocommerce'),Object(l.createElement)(X.a,{key:"spinner"})],finished:-1===t?Object(m.__)("All historical data imported",'woocommerce'):Object(m.sprintf)(Object(m.__)("Historical data from %s onward imported",'woocommerce'),M()(t).format("YYYY-MM-DD"))});return Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__status"},Object(m.__)("Status:",'woocommerce')+" ",r[a])}));var $=function(e){var t=e.checked,a=e.disabled,r=e.onChange;return Object(l.createElement)(D.a,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:t,disabled:a,label:Object(m.__)("Skip previously imported customers and orders",'woocommerce'),onChange:r})},ee=a(104);a(806);function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return k()(this,a)}}var ae=function(e){_()(a,e);var t=te(a);function a(){return j()(this,a),t.apply(this,arguments)}return g()(a,[{key:"render",value:function(){var e=this.props,t=e.customersProgress,a=e.customersTotal,r=e.dateFormat,n=e.importDate,o=e.inProgress,c=e.onPeriodChange,i=e.onDateChange,s=e.onSkipChange,u=e.onDeletePreviousData,p=e.onReimportData,d=e.onStartImport,f=e.onStopImport,h=e.ordersProgress,O=e.ordersTotal,j=e.period,v=e.skipChecked,g=function(e){var t=e.customersProgress,a=e.customersTotal,r=e.inProgress,n=e.ordersProgress,o=e.ordersTotal;return r?Object(N.isNil)(t)||Object(N.isNil)(n)||Object(N.isNil)(a)||Object(N.isNil)(o)?"initializing":t<a?"customers":n<o?"orders":"finalizing":a>0||o>0?t===a&&n===o?"finished":"ready":"nothing"}({customersProgress:t,customersTotal:a,inProgress:o,ordersProgress:h,ordersTotal:O});return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(m.__)("Import Historical Data",'woocommerce')}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__input"},Object(l.createElement)("span",{className:"woocommerce-setting__help"},Object(m.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.",'woocommerce')),"finished"!==g&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(W,{dateFormat:r,disabled:o,onPeriodChange:c,onDateChange:i,value:j}),Object(l.createElement)($,{disabled:o,checked:v,onChange:s}),Object(l.createElement)(J,{label:Object(m.__)("Registered Customers",'woocommerce'),progress:t,total:a}),Object(l.createElement)(J,{label:Object(m.__)("Orders and Refunds",'woocommerce'),progress:h,total:O})),Object(l.createElement)(Z,{importDate:n,status:g})))),Object(l.createElement)(H,{importDate:n,onDeletePreviousData:u,onReimportData:p,onStartImport:d,onStopImport:f,status:g}))}}]),a}(l.Component),re=Object(ee.a)((function(e,t){var a=e("wc-api"),r=a.getImportStatus,n=a.isGetImportStatusRequesting,o=a.getImportTotals,c=t.activeImport,i=t.dateFormat,s=t.lastImportStartTimestamp,l=t.lastImportStopTimestamp,m=t.onImportStarted,u=t.onImportFinished,p=t.period,d=t.skipChecked,b=void 0!==s&&void 0===l||s>l,f=o(q(i,p,d),l),h=f.customers,O=f.orders,j=r(s,b?{freshness:3*Q.c,timeout:3*Q.c}:B.a),v=j.customers,g=j.imported_from,y=j.is_importing,_=j.orders,w=v||{},k=w.imported,S=w.total,E=_||{},D=E.imported,I=E.total,P=n(s);return Boolean(!s&&!P&&!b&&!0===y)&&m(),Boolean(!P&&b&&!1===y&&(k===S&&S>0||D===I&&I>0))&&u(),c?{customersProgress:k,customersTotal:Object(N.isNil)(S)?h:S,importDate:g,inProgress:b,ordersProgress:D,ordersTotal:Object(N.isNil)(I)?O:I}:{customersTotal:h,importDate:g,ordersTotal:O}}))(ae),ne=a(64);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return k()(this,a)}}var se=function(e){_()(a,e);var t=ie(a);function a(){var e;return j()(this,a),(e=t.apply(this,arguments)).dateFormat=Object(m.__)("MM/DD/YYYY",'woocommerce'),e.state={activeImport:null,lastImportStartTimestamp:0,lastImportStopTimestamp:0,period:{date:M()().format(e.dateFormat),label:"all"},skipChecked:!0},e.makeQuery=e.makeQuery.bind(x()(e)),e.onImportFinished=e.onImportFinished.bind(x()(e)),e.onImportStarted=e.onImportStarted.bind(x()(e)),e.onDeletePreviousData=e.onDeletePreviousData.bind(x()(e)),e.onReimportData=e.onReimportData.bind(x()(e)),e.onStartImport=e.onStartImport.bind(x()(e)),e.onStopImport=e.onStopImport.bind(x()(e)),e.onDateChange=e.onDateChange.bind(x()(e)),e.onPeriodChange=e.onPeriodChange.bind(x()(e)),e.onSkipChange=e.onSkipChange.bind(x()(e)),e}return g()(a,[{key:"makeQuery",value:function(e,t){var a=this,r=this.props.createNotice;z()({path:e,method:"POST"}).then((function(e){"success"===e.status?r("success",e.message):(r("error",t),a.setState({activeImport:!1,lastImportStopTimestamp:Date.now()}))})).catch((function(e){e&&e.message&&(r("error",e.message),a.setState({activeImport:!1,lastImportStopTimestamp:Date.now()}))}))}},{key:"onImportFinished",value:function(){(0,this.props.debouncedSpeak)("Import complete"),this.setState({lastImportStopTimestamp:Date.now()})}},{key:"onImportStarted",value:function(){var e=this.props,t=e.notes,a=e.updateNote,r=t.find((function(e){return"wc-admin-historical-data"===e.name}));r&&a(r.id,{status:"actioned"}),this.setState({activeImport:!0,lastImportStartTimestamp:Date.now()})}},{key:"onDeletePreviousData",value:function(){var e=Object(m.__)("There was a problem deleting your previous data.",'woocommerce');this.makeQuery("/wc-analytics/reports/import/delete",e),this.setState({activeImport:!1}),Object(ne.b)("analytics_import_delete_previous")}},{key:"onReimportData",value:function(){this.setState({activeImport:!1})}},{key:"onStartImport",value:function(){var e=this.state,t=e.period,a=e.skipChecked,r=Object(A.addQueryArgs)("/wc-analytics/reports/import",q(this.dateFormat,t,a)),n=Object(m.__)("There was a problem rebuilding your report data.",'woocommerce');this.makeQuery(r,n),this.onImportStarted()}},{key:"onStopImport",value:function(){this.setState({lastImportStopTimestamp:Date.now()});var e=Object(m.__)("There was a problem stopping your current import.",'woocommerce');this.makeQuery("/wc-analytics/reports/import/cancel",e)}},{key:"onPeriodChange",value:function(e){this.setState({activeImport:!1,period:ce(ce({},this.state.period),{},{label:e})})}},{key:"onDateChange",value:function(e){this.setState({activeImport:!1,period:{date:e,label:"custom"}})}},{key:"onSkipChange",value:function(e){this.setState({activeImport:!1,skipChecked:e})}},{key:"render",value:function(){var e=this.state,t=e.activeImport,a=e.lastImportStartTimestamp,r=e.lastImportStopTimestamp,n=e.period,o=e.skipChecked;return Object(l.createElement)(re,{activeImport:t,dateFormat:this.dateFormat,onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:a,lastImportStopTimestamp:r,onPeriodChange:this.onPeriodChange,onDateChange:this.onDateChange,onSkipChange:this.onSkipChange,onDeletePreviousData:this.onDeletePreviousData,onReimportData:this.onReimportData,onStartImport:this.onStartImport,onStopImport:this.onStopImport,period:n,skipChecked:o})}}]),a}(l.Component),le=Object(p.a)([Object(ee.a)((function(e){return{notes:(0,e("wc-api").getNotes)({page:1,per_page:B.d.pageSize,type:"update",status:"unactioned"})}})),Object(d.withDispatch)((function(e){return{updateNote:e("wc-api").updateNote}})),Y.a])(se);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.default=Object(p.a)(Object(d.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))(Object(b.useFilters)("woocommerce_admin_analytics_settings")((function(e){var t=e.createNotice,a=e.query,r=Object(f.useSettings)("wc_admin",["wcAdminSettings"]),o=r.settingsError,i=r.isRequesting,p=r.isDirty,d=r.persistSettings,O=r.updateAndPersistSettings,j=r.updateSettings,v=r.wcAdminSettings,g=Object(l.useRef)(!1);Object(l.useEffect)((function(){function e(e){if(p)return e.returnValue=Object(m.__)("You have unsaved changes. If you proceed, they will be lost.",'woocommerce'),e.returnValue}return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[p]),Object(l.useEffect)((function(){i?g.current=!0:!i&&g.current&&(o?t("error",Object(m.__)("There was an error saving your settings.  Please try again.",'woocommerce')):t("success",Object(m.__)("Your settings have been successfully saved.",'woocommerce')),g.current=!1)}),[i,o,t]);var y=function(e){var t=e.target,a=t.checked,r=t.name,n=t.type,o=t.value,i=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},v);i[r]="checkbox"===n?a?[].concat(c()(i[r]),[o]):i[r].filter((function(e){return e!==o})):o,j("wcAdminSettings",i)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(m.__)("Analytics Settings",'woocommerce')}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(h.b).map((function(e){return Object(l.createElement)(R,n()({handleChange:y,value:v[e],key:e,name:e},h.b[e]))})),Object(l.createElement)("div",{className:"woocommerce-settings__actions"},Object(l.createElement)(u.a,{isSecondary:!0,onClick:function(){if(window.confirm(Object(m.__)("Are you sure you want to reset all settings to default values?",'woocommerce'))){var e=Object.keys(h.b).reduce((function(e,t){return e[t]=h.b[t].defaultValue,e}),{});O("wcAdminSettings",e),Object(ne.b)("analytics_settings_reset_defaults")}}},Object(m.__)("Reset Defaults",'woocommerce')),Object(l.createElement)(u.a,{isPrimary:!0,isBusy:i,onClick:function(){d(),Object(ne.b)("analytics_settings_save",v),a.period=void 0,a.compare=void 0,a.before=void 0,a.after=void 0,a.interval=void 0,a.type=void 0,window.wpNavMenuUrlUpdate(a)}},Object(m.__)("Save Settings",'woocommerce')))),"true"===a.import?Object(l.createElement)(b.ScrollTo,{offset:"-56"},Object(l.createElement)(le,{createNotice:t})):Object(l.createElement)(le,{createNotice:t}))})))}}]);