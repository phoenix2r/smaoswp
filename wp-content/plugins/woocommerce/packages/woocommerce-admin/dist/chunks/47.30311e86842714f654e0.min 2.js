(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[47],{153:function(e,t,r){var n=r(431),a=r(432),i=r(178),o=r(433);e.exports=function(e,t){return n(e)||a(e,t)||i(e,t)||o()}},431:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},432:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}}},433:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},759:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"e",(function(){return v})),r.d(t,"b",(function(){return j})),r.d(t,"f",(function(){return h})),r.d(t,"d",(function(){return w})),r.d(t,"c",(function(){return E}));var n=r(17),a=r.n(n),i=r(153),o=r.n(i),c=r(2),u=r(16),s=r.n(u),l=r(111),f=r(23),d=r(30),p=r(759);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t=e.endpoint,r=e.query,n=e.limitBy,i=e.filters,u=void 0===i?[]:i,d=e.advancedFilters,p=void 0===d?{}:d;return r.search?(n||[t]).reduce((function(e,t){return e[t]=r[t],e}),{}):u.map((function(e){return function(e,t,r){var n=r[e.param];if(!n)return{};if("advanced"===n){var i=Object(f.getActiveFiltersFromQuery)(r,t.filters);return 0===i.length?{}:i.map((function(e){return function(e,t){var r=e.filters[t.key];if("Date"!==Object(c.get)(r,["input","component"]))return t;var n=t.rule,a=t.value,i={after:"start",before:"end"};if(Array.isArray(a)){var u=o()(a,2),f=u[0],d=u[1];return Object.assign({},t,{value:[Object(l.a)(s()(f),i.after),Object(l.a)(s()(d),i.before)]})}return Object.assign({},t,{value:Object(l.a)(s()(a),i[n])})}(t,e)})).reduce((function(e,t){var r=t.key,n=t.rule,a=t.value;return e[Object(f.getUrlKey)(r,n)]=a,e}),{match:r.match||"all"})}var u=Object(c.find)(Object(f.flattenFilters)(e.filters),{value:n});if(!u)return{};if(u.settings&&u.settings.param){var d=u.settings.param;return r[d]?a()({},d,r[d]):{}}return a()({},e.param,n)}(e,p,r)})).reduce((function(e,t){return Object.assign(e,t)}),{})}var O=["stock","customers"];function g(e){var t=e.endpoint,r=e.dataType,n=e.query,a=e.fields,i=Object(l.f)(n,e.defaultDateRange),o=Object(l.i)(n),u=y(e),s=i[r].before;return Object(c.includes)(O,t)?b(b({},u),{},{fields:a}):b({order:"asc",interval:o,per_page:d.b,after:Object(l.a)(i[r].after,"start"),before:Object(l.a)(s,"end"),segmentby:n.segmentby,fields:a},u)}function v(e){var t=e.endpoint,r=(0,e.select)("wc-api"),n=r.getReportStats,a=r.getReportStatsError,i=r.isReportStatsRequesting,o={isRequesting:!1,isError:!1,totals:{primary:null,secondary:null}},c=g(b(b({},e),{},{dataType:"primary"})),u=n(t,c);if(i(t,c))return b(b({},o),{},{isRequesting:!0});if(a(t,c))return b(b({},o),{},{isError:!0});var s=u&&u.data&&u.data.totals||null,l=g(b(b({},e),{},{dataType:"secondary"})),f=n(t,l);if(i(t,l))return b(b({},o),{},{isRequesting:!0});if(a(t,l))return b(b({},o),{},{isError:!0});var d=f&&f.data&&f.data.totals||null;return b(b({},o),{},{totals:{primary:s,secondary:d}})}function j(e){var t=e.endpoint,r=(0,e.select)("wc-api"),n=r.getReportStats,a=r.getReportStatsError,i=r.isReportStatsRequesting,o={isEmpty:!1,isError:!1,isRequesting:!1,data:{totals:{},intervals:[]}},u=g(e),s=n(t,u);if(i(t,u))return b(b({},o),{},{isRequesting:!0});if(a(t,u))return b(b({},o),{},{isError:!0});if(function(e,t){return!e||(!e.data||(!(e.data.totals&&!Object(c.isNull)(e.data.totals))||!(Object(c.includes)(O,t)||e.data.intervals&&0!==e.data.intervals.length)))}(s,t))return b(b({},o),{},{isEmpty:!0});var l=s&&s.data&&s.data.totals||null,f=s&&s.data&&s.data.intervals||[];if(s.totalResults>d.b){for(var p=!0,m=!1,y=[],v=Math.ceil(s.totalResults/d.b),j=1,h=2;h<=v;h++){var w=b(b({},u),{},{page:h}),E=n(t,w);if(!i(t,w)){if(a(t,w)){m=!0,p=!1;break}if(y.push(E),++j===v){p=!1;break}}}if(p)return b(b({},o),{},{isRequesting:!0});if(m)return b(b({},o),{},{isError:!0});Object(c.forEach)(y,(function(e){f=f.concat(e.data.intervals)}))}return b(b({},o),{},{data:{totals:l,intervals:f}})}function h(e,t){switch(e){case"currency":return t;case"percent":return".0%";case"number":return",";case"average":return",.2r";default:return","}}function w(e){var t=e.query,r=e.tableQuery,n=void 0===r?{}:r,a=y(e),i=Object(l.f)(t,e.defaultDateRange),o=Object(c.includes)(O,e.endpoint);return b(b({orderby:t.orderby||"date",order:t.order||"desc",after:o?void 0:Object(l.a)(i.primary.after,"start"),before:o?void 0:Object(l.a)(i.primary.before,"end"),page:t.paged||1,per_page:t.per_page||d.d.pageSize},a),n)}function E(e){var t=e.endpoint,r=(0,e.select)("wc-api"),n=r.getReportItems,a=r.getReportItemsError,i=r.isReportItemsRequesting,o=p.d(e),c={query:o,isRequesting:!1,isError:!1,items:{data:[],totalResults:0}},u=n(t,o);return i(t,o)?b(b({},c),{},{isRequesting:!0}):a(t,o)?b(b({},c),{},{isError:!0}):b(b({},c),{},{items:u})}},780:function(e,t,r){"use strict";r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return O}));var n=r(17),a=r.n(n),i=r(16),o=r.n(i),c=r(2),u=r(24),s=r(48),l=r(23),f=r(205),d=r(20),p=r(759);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.indicator,r=e.primaryData,n=e.secondaryData,a=e.currency,i=e.formatAmount,o=e.persistedQuery,u=Object(c.find)(r.data,(function(e){return e.stat===t.stat})),s=Object(c.find)(n.data,(function(e){return e.stat===t.stat}));if(!u||!s)return{};var p=u._links&&u._links.report[0]&&u._links.report[0].href||"",m=function(e,t,r){return e?"/jetpack"===e?Object(d.f)("admin.php?page=jetpack#/dashboard"):Object(l.getNewPath)(t,e,{chart:r.chart}):""}(p,o,u),b="/jetpack"===p?"wp-admin":"wc-admin",y="currency"===u.format,O=Object(f.calculateDelta)(u.value,s.value);return{primaryValue:y?i(u.value):Object(f.formatValue)(a,u.format,u.value),secondaryValue:y?i(s.value):Object(f.formatValue)(a,s.format,s.value),delta:O,reportUrl:m,reportUrlType:b}},O=function(e,t,r,n){var a=e("wc-api"),i=a.getReportItems,c=a.getReportItemsError,l=a.isReportItemsRequesting,f=e(s.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,d=Object(u.getCurrentDates)(r,f),m=d.primary.before,y=d.secondary.before,O=t.map((function(e){return e.stat})).join(","),g=Object(p.a)({filters:n,query:r}),v=b(b({},g),{},{after:Object(u.appendTimestamp)(d.primary.after,"start"),before:Object(u.appendTimestamp)(m,m.isSame(o()(),"day")?"now":"end"),stats:O}),j=b(b({},g),{},{after:Object(u.appendTimestamp)(d.secondary.after,"start"),before:Object(u.appendTimestamp)(y,y.isSame(o()(),"day")?"now":"end"),stats:O});return{primaryData:i("performance-indicators",v),primaryError:c("performance-indicators",v)||null,primaryRequesting:l("performance-indicators",v),secondaryData:i("performance-indicators",j),secondaryError:c("performance-indicators",j)||null,secondaryRequesting:l("performance-indicators",j),defaultDateRange:f}}},924:function(e,t,r){},933:function(e,t,r){"use strict";r.r(t);var n=r(17),a=r.n(n),i=r(42),o=r.n(i),c=r(41),u=r.n(c),s=r(43),l=r.n(s),f=r(47),d=r.n(f),p=r(28),m=r.n(p),b=r(0),y=r(3),O=r(175),g=r(111),v=r(23),j=r(20),h=r(48),w=r(55),E=r(104),R=(r(924),r(64)),_=r(204),S=r(780);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m()(e);if(t){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var T=Object(j.g)("dataEndpoints",{performanceIndicators:[]}).performanceIndicators,q=function(e){l()(r,e);var t=D(r);function r(){return o()(this,r),t.apply(this,arguments)}return u()(r,[{key:"renderMenu",value:function(){var e=this.props,t=e.hiddenBlocks,r=e.isFirst,n=e.isLast,a=e.onMove,i=e.onRemove,o=e.onTitleBlur,c=e.onTitleChange,u=e.onToggleHiddenBlock,s=e.titleInput,l=e.controls;return Object(b.createElement)(w.EllipsisMenu,{label:Object(y.__)("Choose which analytics to display and the section name",'woocommerce'),renderContent:function(e){var f=e.onToggle;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.MenuTitle,null,Object(y.__)("Display Stats:",'woocommerce')),T.map((function(e,r){var n=!t.includes(e.stat);return Object(b.createElement)(w.MenuItem,{checked:n,isCheckbox:!0,isClickable:!0,key:r,onInvoke:function(){u(e.stat)(),Object(R.b)("dash_indicators_toggle",{status:n?"off":"on",key:e.stat})}},e.label)})),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(b.createElement)(l,{onToggle:f,onMove:a,onRemove:i,isFirst:r,isLast:n,onTitleBlur:o,onTitleChange:c,titleInput:s}))}})}},{key:"renderList",value:function(){var e=this.props,t=e.query,r=e.primaryRequesting,n=e.secondaryRequesting,a=e.primaryError,i=e.secondaryError,o=e.primaryData,c=e.secondaryData,u=e.userIndicators,s=e.defaultDateRange;if(r||n)return Object(b.createElement)(w.SummaryListPlaceholder,{numberOfItems:u.length});if(a||i)return null;var l=Object(v.getPersistedQuery)(t),f="previous_period"===Object(g.h)(t,s).compare?Object(y.__)("Previous Period:",'woocommerce'):Object(y.__)("Previous Year:",'woocommerce'),d=this.context,p=d.formatAmount,m=(0,d.getCurrencyConfig)();return Object(b.createElement)(w.SummaryList,null,(function(){return u.map((function(e,t){var r=Object(S.b)({indicator:e,primaryData:o,secondaryData:c,currency:m,formatAmount:p,persistedQuery:l}),n=r.primaryValue,a=r.secondaryValue,i=r.delta,u=r.reportUrl,s=r.reportUrlType;return Object(b.createElement)(w.SummaryNumber,{key:t,href:u,hrefType:s,label:e.label,value:n,prevLabel:f,prevValue:a,delta:i,onLinkClickCallback:function(){Object(R.b)("dash_indicators_click",{key:e.stat})}})}))}))}},{key:"render",value:function(){var e=this.props,t=e.userIndicators,r=e.title;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.SectionHeader,{title:r||Object(y.__)("Store Performance",'woocommerce'),menu:this.renderMenu()}),t.length>0&&Object(b.createElement)("div",{className:"woocommerce-dashboard__store-performance"},this.renderList()))}}]),r}(b.Component);q.contextType=_.a,t.default=Object(O.a)(Object(E.a)((function(e,t){var r=t.hiddenBlocks,n=t.query,a=t.filters,i=T.filter((function(e){return!r.includes(e.stat)})),o=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,c={hiddenBlocks:r,userIndicators:i,indicators:T,defaultDateRange:o};if(0===i.length)return c;var u=Object(S.a)(e,i,n,a);return P(P({},c),u)})))(q)}}]);