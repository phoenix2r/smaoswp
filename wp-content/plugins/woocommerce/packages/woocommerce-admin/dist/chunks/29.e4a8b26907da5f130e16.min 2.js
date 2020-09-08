(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[29],{153:function(e,t,r){var o=r(431),a=r(432),c=r(178),n=r(433);e.exports=function(e,t){return o(e)||a(e,t)||c(e,t)||n()}},431:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},432:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,a=!1,c=void 0;try{for(var n,i=e[Symbol.iterator]();!(o=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){a=!0,c=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw c}}return r}}},433:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},729:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var o=r(12),a=r(15),c=r(14),n=r(0),i=r(2),l=r(112),s=r(177);function m(e){var t=e.help,r=e.label,u=e.multiple,d=void 0!==u&&u,p=e.onChange,b=e.options,_=void 0===b?[]:b,f=e.className,y=e.hideLabelFromVision,O=Object(c.a)(e,["help","label","multiple","onChange","options","className","hideLabelFromVision"]),j=Object(l.a)(m),h="inspector-select-control-".concat(j);return!Object(i.isEmpty)(_)&&Object(n.createElement)(s.a,{label:r,hideLabelFromVision:y,id:h,help:t,className:f},Object(n.createElement)("select",Object(o.a)({id:h,className:"components-select-control__input",onChange:function(e){if(d){var t=Object(a.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}));p(t)}else p(e.target.value)},"aria-describedby":t?"".concat(h,"__help"):void 0,multiple:d},O),_.map((function(e,t){return Object(n.createElement)("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,disabled:e.disabled},e.label)}))))}},759:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"e",(function(){return j})),r.d(t,"b",(function(){return h})),r.d(t,"f",(function(){return v})),r.d(t,"d",(function(){return w})),r.d(t,"c",(function(){return g}));var o=r(17),a=r.n(o),c=r(153),n=r.n(c),i=r(2),l=r(16),s=r.n(l),m=r(111),u=r(23),d=r(30),p=r(759);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=e.endpoint,r=e.query,o=e.limitBy,c=e.filters,l=void 0===c?[]:c,d=e.advancedFilters,p=void 0===d?{}:d;return r.search?(o||[t]).reduce((function(e,t){return e[t]=r[t],e}),{}):l.map((function(e){return function(e,t,r){var o=r[e.param];if(!o)return{};if("advanced"===o){var c=Object(u.getActiveFiltersFromQuery)(r,t.filters);return 0===c.length?{}:c.map((function(e){return function(e,t){var r=e.filters[t.key];if("Date"!==Object(i.get)(r,["input","component"]))return t;var o=t.rule,a=t.value,c={after:"start",before:"end"};if(Array.isArray(a)){var l=n()(a,2),u=l[0],d=l[1];return Object.assign({},t,{value:[Object(m.a)(s()(u),c.after),Object(m.a)(s()(d),c.before)]})}return Object.assign({},t,{value:Object(m.a)(s()(a),c[o])})}(t,e)})).reduce((function(e,t){var r=t.key,o=t.rule,a=t.value;return e[Object(u.getUrlKey)(r,o)]=a,e}),{match:r.match||"all"})}var l=Object(i.find)(Object(u.flattenFilters)(e.filters),{value:o});if(!l)return{};if(l.settings&&l.settings.param){var d=l.settings.param;return r[d]?a()({},d,r[d]):{}}return a()({},e.param,o)}(e,p,r)})).reduce((function(e,t){return Object.assign(e,t)}),{})}var y=["stock","customers"];function O(e){var t=e.endpoint,r=e.dataType,o=e.query,a=e.fields,c=Object(m.f)(o,e.defaultDateRange),n=Object(m.i)(o),l=f(e),s=c[r].before;return Object(i.includes)(y,t)?_(_({},l),{},{fields:a}):_({order:"asc",interval:n,per_page:d.b,after:Object(m.a)(c[r].after,"start"),before:Object(m.a)(s,"end"),segmentby:o.segmentby,fields:a},l)}function j(e){var t=e.endpoint,r=(0,e.select)("wc-api"),o=r.getReportStats,a=r.getReportStatsError,c=r.isReportStatsRequesting,n={isRequesting:!1,isError:!1,totals:{primary:null,secondary:null}},i=O(_(_({},e),{},{dataType:"primary"})),l=o(t,i);if(c(t,i))return _(_({},n),{},{isRequesting:!0});if(a(t,i))return _(_({},n),{},{isError:!0});var s=l&&l.data&&l.data.totals||null,m=O(_(_({},e),{},{dataType:"secondary"})),u=o(t,m);if(c(t,m))return _(_({},n),{},{isRequesting:!0});if(a(t,m))return _(_({},n),{},{isError:!0});var d=u&&u.data&&u.data.totals||null;return _(_({},n),{},{totals:{primary:s,secondary:d}})}function h(e){var t=e.endpoint,r=(0,e.select)("wc-api"),o=r.getReportStats,a=r.getReportStatsError,c=r.isReportStatsRequesting,n={isEmpty:!1,isError:!1,isRequesting:!1,data:{totals:{},intervals:[]}},l=O(e),s=o(t,l);if(c(t,l))return _(_({},n),{},{isRequesting:!0});if(a(t,l))return _(_({},n),{},{isError:!0});if(function(e,t){return!e||(!e.data||(!(e.data.totals&&!Object(i.isNull)(e.data.totals))||!(Object(i.includes)(y,t)||e.data.intervals&&0!==e.data.intervals.length)))}(s,t))return _(_({},n),{},{isEmpty:!0});var m=s&&s.data&&s.data.totals||null,u=s&&s.data&&s.data.intervals||[];if(s.totalResults>d.b){for(var p=!0,b=!1,f=[],j=Math.ceil(s.totalResults/d.b),h=1,v=2;v<=j;v++){var w=_(_({},l),{},{page:v}),g=o(t,w);if(!c(t,w)){if(a(t,w)){b=!0,p=!1;break}if(f.push(g),++h===j){p=!1;break}}}if(p)return _(_({},n),{},{isRequesting:!0});if(b)return _(_({},n),{},{isError:!0});Object(i.forEach)(f,(function(e){u=u.concat(e.data.intervals)}))}return _(_({},n),{},{data:{totals:m,intervals:u}})}function v(e,t){switch(e){case"currency":return t;case"percent":return".0%";case"number":return",";case"average":return",.2r";default:return","}}function w(e){var t=e.query,r=e.tableQuery,o=void 0===r?{}:r,a=f(e),c=Object(m.f)(t,e.defaultDateRange),n=Object(i.includes)(y,e.endpoint);return _(_({orderby:t.orderby||"date",order:t.order||"desc",after:n?void 0:Object(m.a)(c.primary.after,"start"),before:n?void 0:Object(m.a)(c.primary.before,"end"),page:t.paged||1,per_page:t.per_page||d.d.pageSize},a),o)}function g(e){var t=e.endpoint,r=(0,e.select)("wc-api"),o=r.getReportItems,a=r.getReportItemsError,c=r.isReportItemsRequesting,n=p.d(e),i={query:n,isRequesting:!1,isError:!1,items:{data:[],totalResults:0}},l=o(t,n);return c(t,n)?_(_({},i),{},{isRequesting:!0}):a(t,n)?_(_({},i),{},{isError:!0}):_(_({},i),{},{items:l})}},760:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return _})),r.d(t,"g",(function(){return f}));var o=r(26),a=r(22),c=r.n(a),n=r(2),i=r(23),l=r(761),s=r(30);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,n="function"==typeof e?e(a):e,l=Object(i.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var s={include:l.join(","),per_page:l.length};return c()({path:Object(o.addQueryArgs)(n,s)}).then((function(e){return e.map(t)}))}}var u=m(s.c+"/products/categories",(function(e){return{key:e.id,label:e.name}})),d=m(s.c+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=m(s.c+"/customers",(function(e){return{key:e.id,label:e.name}})),b=m(s.c+"/products",(function(e){return{key:e.id,label:e.name}})),_=m(s.c+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}})),f=m((function(e){return s.c+"/products/".concat(e.products,"/variations")}),(function(e){return{key:e.id,label:e.attributes.reduce((function(e,t,r,o){return e+"".concat(t.option).concat(o.length===r+1?"":", ")}),"")}}))},761:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(3);function a(e){return[e.country,e.state,e.name||Object(o.__)("TAX",'woocommerce'),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},762:function(e,t,r){"use strict";var o=r(17),a=r.n(o),c=r(42),n=r.n(c),i=r(41),l=r.n(i),s=r(43),m=r.n(s),u=r(47),d=r.n(u),p=r(28),b=r.n(p),_=r(0),f=r(3),y=r(175),O=r(113),j=r(2),h=r(1),v=r.n(h),w=r(111),g=r(55),k=r(48),x=r(204),S=r(759),R=r(267),C=r(104),P=r(23);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return d()(this,r)}}var D=function(e){m()(r,e);var t=q(r);function r(){return n()(this,r),t.apply(this,arguments)}return l()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(j.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var o=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:o,value:e.subtotals[r.key]||0}}})),E({date:Object(O.a)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,o=e.secondaryData,a=e.selectedChart,c=e.defaultDateRange,n=Object(w.i)(t),i=Object(w.f)(t,c),l=i.primary,s=i.secondary;return r.data.intervals.map((function(e,r){var c=Object(w.j)(e.date_start,l.after,s.after,t.compare,n),i=o.data.intervals[r];return{date:Object(O.a)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(l.label," (").concat(l.range,")"),labelDate:e.date_start,value:e.subtotals[a.key]||0},secondary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:c.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[a.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,o=e.selectedChart;return{primary:Object(j.get)(t,["data","totals",o.key],null),secondary:Object(j.get)(r,["data","totals",o.key],null)}}},{key:"renderChart",value:function(e,t,r,o){var a=this.props,c=a.emptySearchResults,n=a.filterParam,i=a.interactiveLegend,l=a.itemsLabel,s=a.legendPosition,m=a.path,u=a.query,d=a.selectedChart,p=a.showHeaderControls,b=a.primaryData,y=Object(w.i)(u),O=Object(w.d)(u),j=Object(w.g)(y,b.data.intervals.length),h=c?Object(f.__)("No data for the current search",'woocommerce'):Object(f.__)("No data for the selected date range",'woocommerce'),v=this.context,k=v.formatAmount,x=v.getCurrencyConfig;return Object(_.createElement)(g.Chart,{allowedIntervals:O,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:h,filterParam:n,interactiveLegend:i,interval:y,isRequesting:t,itemsLabel:l,legendPosition:s,legendTotals:o,mode:e,path:m,query:u,screenReaderFormat:j.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:j.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(S.f)(d.type,k),chartType:Object(w.e)(u),valueType:d.type,xFormat:j.xFormat,x2Format:j.x2Format,currency:x()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(_.createElement)(R.a,{isError:!0});var o=t||r.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",o,a)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,o=e.secondaryData;if(!r||r.isError||o.isError)return Object(_.createElement)(R.a,{isError:!0});var a=t||r.isRequesting||o.isRequesting,c=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",a,c,n)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(_.Component);D.contextType=x.a,D.propTypes={filters:v.a.array,isRequesting:v.a.bool,itemsLabel:v.a.string,limitProperties:v.a.array,mode:v.a.string,path:v.a.string.isRequired,primaryData:v.a.object,query:v.a.object.isRequired,secondaryData:v.a.object,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired},D.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(y.a)(Object(C.a)((function(e,t){var r=t.charts,o=t.endpoint,a=t.filters,c=t.isRequesting,n=t.limitProperties,i=t.query,l=t.advancedFilters,s=n||[o],m=function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var a=t.slice(0),c=a.pop();if(c.showFilters(r,o)){var n=Object(P.flattenFilters)(c.filters),i=r[c.param]||c.defaultValue||"all";return Object(j.find)(n,{value:i})}return e(a,r,o)}(a,i),u=Object(j.get)(m,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(j.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(j.get)(e,["chartMode"])}return null}(m,i)||"time-comparison",p=e(k.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,b={mode:d,filterParam:u,defaultDateRange:p};if(c)return b;var _=s.some((function(e){return i[e]&&i[e].length}));if(i.search&&!_)return E(E({},b),{},{emptySearchResults:!0});var f=r&&r.map((function(e){return e.key})),y=Object(S.b)({endpoint:o,dataType:"primary",query:i,select:e,limitBy:s,filters:a,advancedFilters:l,defaultDateRange:p,fields:f});if("item-comparison"===d)return E(E({},b),{},{primaryData:y});var O=Object(S.b)({endpoint:o,dataType:"secondary",query:i,select:e,limitBy:s,filters:a,advancedFilters:l,defaultDateRange:p,fields:f});return E(E({},b),{},{primaryData:y,secondaryData:O})})))(D)},785:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i}));var o=r(3),a=r(44),c=Object(a.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(o.__)("Gross Sales",'woocommerce'),order:"desc",orderby:"gross_sales",type:"currency"},{key:"refunds",label:Object(o.__)("Returns",'woocommerce'),order:"desc",orderby:"refunds",type:"currency"},{key:"coupons",label:Object(o.__)("Coupons",'woocommerce'),order:"desc",orderby:"coupons",type:"currency"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),orderby:"net_revenue",type:"currency"},{key:"taxes",label:Object(o.__)("Taxes",'woocommerce'),order:"desc",orderby:"taxes",type:"currency"},{key:"shipping",label:Object(o.__)("Shipping",'woocommerce'),orderby:"shipping",type:"currency"},{key:"total_sales",label:Object(o.__)("Total Sales",'woocommerce'),order:"desc",orderby:"total_sales",type:"currency"}]),n=Object(a.applyFilters)("woocommerce_admin_revenue_report_filters",[]),i=Object(a.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{})},786:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(3),a=r(44),c=r(760),n=Object(a.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold",'woocommerce'),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),i={label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Products",'woocommerce'),value:"all"},{label:Object(o.__)("Single Product",'woocommerce'),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:c.d,labels:{placeholder:Object(o.__)("Type to search for a product",'woocommerce'),button:Object(o.__)("Single Product",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:c.d,labels:{helpText:Object(o.__)("Check at least two products below to compare",'woocommerce'),placeholder:Object(o.__)("Search for products to compare",'woocommerce'),title:Object(o.__)("Compare Products",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},l={showFilters:function(e){return"single_product"===e.filter&&!!e.products&&e["is-variable"]},staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations",'woocommerce'),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Comparison",'woocommerce'),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:c.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare",'woocommerce'),placeholder:Object(o.__)("Search for variations to compare",'woocommerce'),title:Object(o.__)("Compare Variations",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},s=Object(a.applyFilters)("woocommerce_admin_products_report_filters",[i,l]),m=Object(a.applyFilters)("woocommerce_admin_products_report_advanced_filters",{})},787:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return s}));var o=r(3),a=r(44),c=r(20),n=r(760),i=Object(a.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(o.__)("Average Order Value",'woocommerce'),type:"currency"},{key:"avg_items_per_order",label:Object(o.__)("Average Items Per Order",'woocommerce'),order:"desc",orderby:"num_items_sold",type:"average"}]),l=Object(a.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Orders",'woocommerce'),value:"all"},{label:Object(o.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),s=Object(a.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(o._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce'),filters:{status:{labels:{add:Object(o.__)("Order Status",'woocommerce'),remove:Object(o.__)("Remove order status filter",'woocommerce'),rule:Object(o.__)("Select an order status filter match",'woocommerce'),title:Object(o.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select an order status",'woocommerce')},rules:[{value:"is",label:Object(o._x)("Is","order status",'woocommerce')},{value:"is_not",label:Object(o._x)("Is Not","order status",'woocommerce')}],input:{component:"SelectControl",options:Object.keys(c.d).map((function(e){return{value:e,label:c.d[e]}}))}},product:{labels:{add:Object(o.__)("Products",'woocommerce'),placeholder:Object(o.__)("Search products",'woocommerce'),remove:Object(o.__)("Remove products filter",'woocommerce'),rule:Object(o.__)("Select a product filter match",'woocommerce'),title:Object(o.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select products",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:n.d}},coupon:{labels:{add:Object(o.__)("Coupon Codes",'woocommerce'),placeholder:Object(o.__)("Search coupons",'woocommerce'),remove:Object(o.__)("Remove coupon filter",'woocommerce'),rule:Object(o.__)("Select a coupon filter match",'woocommerce'),title:Object(o.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select coupon codes",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","coupon code",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","coupon code",'woocommerce')}],input:{component:"Search",type:"coupons",getLabels:n.b}},customer_type:{labels:{add:Object(o.__)("Customer Type",'woocommerce'),remove:Object(o.__)("Remove customer filter",'woocommerce'),rule:Object(o.__)("Select a customer filter match",'woocommerce'),title:Object(o.__)("{{title}}Customer is{{/title}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select a customer type",'woocommerce')},input:{component:"SelectControl",options:[{value:"new",label:Object(o.__)("New",'woocommerce')},{value:"returning",label:Object(o.__)("Returning",'woocommerce')}],defaultOption:"new"}},refunds:{labels:{add:Object(o.__)("Refunds",'woocommerce'),remove:Object(o.__)("Remove refunds filter",'woocommerce'),rule:Object(o.__)("Select a refund filter match",'woocommerce'),title:Object(o.__)("{{title}}Refunds{{/title}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select a refund type",'woocommerce')},input:{component:"SelectControl",options:[{value:"all",label:Object(o.__)("All",'woocommerce')},{value:"partial",label:Object(o.__)("Partially refunded",'woocommerce')},{value:"full",label:Object(o.__)("Fully refunded",'woocommerce')},{value:"none",label:Object(o.__)("None",'woocommerce')}],defaultOption:"all"}},tax_rate:{labels:{add:Object(o.__)("Tax Rates",'woocommerce'),placeholder:Object(o.__)("Search tax rates",'woocommerce'),remove:Object(o.__)("Remove tax rate filter",'woocommerce'),rule:Object(o.__)("Select a tax rate filter match",'woocommerce'),title:Object(o.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select tax rates",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","tax rate",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","tax rate",'woocommerce')}],input:{component:"Search",type:"taxes",getLabels:n.f}}}})},788:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l}));var o=r(3),a=r(44),c=r(760),n=Object(a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(o.__)("Discounted Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(o.__)("Amount",'woocommerce'),order:"desc",orderby:"amount",type:"currency"}]),i=Object(a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Coupons",'woocommerce'),value:"all"},{label:Object(o.__)("Single Coupon",'woocommerce'),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:c.b,labels:{placeholder:Object(o.__)("Type to search for a coupon",'woocommerce'),button:Object(o.__)("Single Coupon",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:c.b,labels:{title:Object(o.__)("Compare Coupon Codes",'woocommerce'),update:Object(o.__)("Compare",'woocommerce'),helpText:Object(o.__)("Check at least two coupon codes below to compare",'woocommerce')}}}]}]),l=Object(a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{})},789:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(3),a=r(44),c=r(760),n=r(761),i=r(30),l=Object(a.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(o.__)("Total Tax",'woocommerce'),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(o.__)("Order Tax",'woocommerce'),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(o.__)("Shipping Tax",'woocommerce'),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),s=Object(a.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Taxes",'woocommerce'),value:"all"},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(c.e)(i.c+"/taxes",(function(e){return{id:e.id,label:Object(n.a)(e)}})),labels:{helpText:Object(o.__)("Check at least two tax codes below to compare",'woocommerce'),placeholder:Object(o.__)("Search for tax codes to compare",'woocommerce'),title:Object(o.__)("Compare Tax Codes",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]}]),m=Object(a.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{})},790:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return d}));var o,a,c=r(54),n=r.n(c),i=r(3),l=r(44),s=r(760),m=Object(l.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(i.__)("Downloads",'woocommerce'),type:"number"}]),u=Object(l.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(i.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(i.__)("All Downloads",'woocommerce'),value:"all"},{label:Object(i.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),d=Object(l.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(i._x)("Downloads Match {{select /}} Filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg",'woocommerce'),filters:{product:{labels:{add:Object(i.__)("Product",'woocommerce'),placeholder:Object(i.__)("Search",'woocommerce'),remove:Object(i.__)("Remove product filter",'woocommerce'),rule:Object(i.__)("Select a product filter match",'woocommerce'),title:Object(i.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(i.__)("Select product",'woocommerce')},rules:[{value:"includes",label:Object(i._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(i._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:s.d}},customer:{labels:{add:Object(i.__)("Username",'woocommerce'),placeholder:Object(i.__)("Search customer username",'woocommerce'),remove:Object(i.__)("Remove customer username filter",'woocommerce'),rule:Object(i.__)("Select a customer username filter match",'woocommerce'),title:Object(i.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(i.__)("Select customer username",'woocommerce')},rules:[{value:"includes",label:Object(i._x)("Includes","customer usernames",'woocommerce')},{value:"excludes",label:Object(i._x)("Excludes","customer usernames",'woocommerce')}],input:{component:"Search",type:"usernames",getLabels:s.c}},order:{labels:{add:Object(i.__)("Order #",'woocommerce'),placeholder:Object(i.__)("Search order number",'woocommerce'),remove:Object(i.__)("Remove order number filter",'woocommerce'),rule:Object(i.__)("Select a order number filter match",'woocommerce'),title:Object(i.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(i.__)("Select order number",'woocommerce')},rules:[{value:"includes",label:Object(i._x)("Includes","order numbers",'woocommerce')},{value:"excludes",label:Object(i._x)("Excludes","order numbers",'woocommerce')}],input:{component:"Search",type:"orders",getLabels:(a=n()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:"#"+e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}},ip_address:{labels:{add:Object(i.__)("IP Address",'woocommerce'),placeholder:Object(i.__)("Search IP address",'woocommerce'),remove:Object(i.__)("Remove IP address filter",'woocommerce'),rule:Object(i.__)("Select an IP address filter match",'woocommerce'),title:Object(i.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(i.__)("Select IP address",'woocommerce')},rules:[{value:"includes",label:Object(i._x)("Includes","IP addresses",'woocommerce')},{value:"excludes",label:Object(i._x)("Excludes","IP addresses",'woocommerce')}],input:{component:"Search",type:"downloadIps",getLabels:(o=n()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}}}})},920:function(e,t,r){},921:function(e,t,r){},939:function(e,t,r){"use strict";r.r(t);var o=r(17),a=r.n(o),c=r(153),n=r.n(c),i=r(134),l=r.n(i),s=r(0),m=r(3),u=r(7),d=r.n(u),p=r(92),b=r.n(p),_=r(1),f=r.n(_),y=r(729),O=r(430),j=r(69),h=r(55),v=r(48),w=r(111),g=r(42),k=r.n(g),x=r(41),S=r.n(x),R=r(43),C=r.n(R),P=r(47),T=r.n(P),E=r(28),q=r.n(E),D=r(23),F=r(20),I=r(762);r(920);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=q()(e);if(t){var a=q()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return T()(this,r)}}var L=function(e){C()(r,e);var t=A(r);function r(){var e,o;k()(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return T()(o,(e=o=t.call.apply(t,[this].concat(c)),o.handleChartClick=function(){var e=o.props.selectedChart;Object(D.getHistory)().push(o.getChartPath(e))},e))}return S()(r,[{key:"getChartPath",value:function(e){return Object(D.getNewPath)({chart:e.key},"/analytics/"+e.endpoint,Object(D.getPersistedQuery)())}},{key:"render",value:function(){var e=this.props,t=e.charts,r=e.endpoint,o=e.path,a=e.query,c=e.selectedChart,n=e.filters;return c?Object(s.createElement)("div",{role:"presentation",className:"woocommerce-dashboard__chart-block-wrapper",onClick:this.handleChartClick},Object(s.createElement)(h.Card,{className:"woocommerce-dashboard__chart-block woocommerce-analytics__card",title:c.label},Object(s.createElement)("a",{className:"screen-reader-text",href:Object(F.f)(this.getChartPath(c))},Object(m.sprintf)(Object(m.__)("%s Report",'woocommerce'),c.label)),Object(s.createElement)(I.a,{charts:t,endpoint:r,query:a,interactiveLegend:!1,legendPosition:"bottom",path:o,selectedChart:c,showHeaderControls:!1,filters:n}))):null}}]),r}(s.Component);L.propTypes={charts:f.a.array,endpoint:f.a.string.isRequired,path:f.a.string.isRequired,query:f.a.object.isRequired,selectedChart:f.a.object.isRequired};var N=L,M=r(44),B=r(787),H=r(786),V=r(785),U=r(788),Y=r(789),Q=r(790);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={revenue:V.b,orders:B.b,products:H.b,coupons:U.b,taxes:Y.b,downloads:Q.b},K=[{label:Object(m.__)("Total Sales",'woocommerce'),report:"revenue",key:"total_sales"},{label:Object(m.__)("Net Sales",'woocommerce'),report:"revenue",key:"net_revenue"},{label:Object(m.__)("Orders",'woocommerce'),report:"orders",key:"orders_count"},{label:Object(m.__)("Average Order Value",'woocommerce'),report:"orders",key:"avg_order_value"},{label:Object(m.__)("Items Sold",'woocommerce'),report:"products",key:"items_sold"},{label:Object(m.__)("Returns",'woocommerce'),report:"revenue",key:"refunds"},{label:Object(m.__)("Discounted Orders",'woocommerce'),report:"coupons",key:"orders_count"},{label:Object(m.__)("Gross discounted",'woocommerce'),report:"coupons",key:"amount"},{label:Object(m.__)("Total Tax",'woocommerce'),report:"taxes",key:"total_tax"},{label:Object(m.__)("Order Tax",'woocommerce'),report:"taxes",key:"order_tax"},{label:Object(m.__)("Shipping Tax",'woocommerce'),report:"taxes",key:"shipping_tax"},{label:Object(m.__)("Shipping",'woocommerce'),report:"revenue",key:"shipping"},{label:Object(m.__)("Downloads",'woocommerce'),report:"downloads",key:"download_count"}],X=Object(M.applyFilters)("woocommerce_admin_dashboard_charts_filter",K.map((function(e){return G(G({},J[e.report].find((function(t){return t.key===e.key}))),{},{label:e.label,endpoint:e.report})}))),W=r(64);r(921);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.controls,r=e.hiddenBlocks,o=e.isFirst,a=e.isLast,c=e.onMove,i=e.onRemove,u=e.onTitleBlur,p=e.onTitleChange,_=e.onToggleHiddenBlock,f=e.path,g=e.title,k=e.titleInput,x=e.filters,S=Object(v.useUserPreferences)(),R=S.updateUserPreferences,C=l()(S,["updateUserPreferences"]),P=Object(s.useState)(C.dashboard_chart_type||"line"),T=n()(P,2),E=T[0],q=T[1],D=Object(s.useState)(C.dashboard_chart_interval||"day"),F=n()(D,2),I=F[0],A=F[1],L=$($({},e.query),{},{chartType:E,interval:I}),M=function(e){return function(){q(e),R({dashboard_chart_type:e}),Object(W.b)("dash_charts_type_toggle",{chart_type:e})}};return Object(s.createElement)("div",{className:"woocommerce-dashboard__dashboard-charts"},Object(s.createElement)(h.SectionHeader,{title:g||Object(m.__)("Charts",'woocommerce'),menu:Object(s.createElement)(h.EllipsisMenu,{label:Object(m.__)("Choose which charts to display",'woocommerce'),renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(h.MenuTitle,null,Object(m.__)("Charts",'woocommerce')),function(e){var t=e.hiddenBlocks,r=e.onToggleHiddenBlock;return X.map((function(e){var o=e.endpoint+"_"+e.key,a=!t.includes(o);return Object(s.createElement)(h.MenuItem,{checked:a,isCheckbox:!0,isClickable:!0,key:e.endpoint+"_"+e.key,onInvoke:function(){r(o)(),Object(W.b)("dash_charts_chart_toggle",{status:a?"off":"on",key:o})}},e.label)}))}({hiddenBlocks:r,onToggleHiddenBlock:_}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(s.createElement)(t,{onToggle:n,onMove:c,onRemove:i,isFirst:o,isLast:a,onTitleBlur:u,onTitleChange:p,titleInput:k}))}}),className:"has-interval-select"},function(e){var t=e.chartInterval,r=e.setInterval,o=e.query,a=Object(w.d)(o);if(!a||a.length<1)return null;var c={hour:Object(m.__)("By hour",'woocommerce'),day:Object(m.__)("By day",'woocommerce'),week:Object(m.__)("By week",'woocommerce'),month:Object(m.__)("By month",'woocommerce'),quarter:Object(m.__)("By quarter",'woocommerce'),year:Object(m.__)("By year",'woocommerce')};return Object(s.createElement)(y.a,{className:"woocommerce-chart__interval-select",value:t,options:a.map((function(e){return{value:e,label:c[e]}})),onChange:r})}({chartInterval:I,setInterval:function(e){A(e),R({dashboard_chart_interval:e}),Object(W.b)("dash_charts_interval",{interval:e})},query:L}),Object(s.createElement)(O.a,{className:"woocommerce-chart__types",orientation:"horizontal",role:"menubar"},Object(s.createElement)(j.a,{className:d()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":!L.chartType||"line"===L.chartType}),title:Object(m.__)("Line chart",'woocommerce'),"aria-checked":"line"===L.chartType,role:"menuitemradio",tabIndex:"line"===L.chartType?0:-1,onClick:M("line")},Object(s.createElement)(b.a,{icon:"line-graph"})),Object(s.createElement)(j.a,{className:d()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":"bar"===L.chartType}),title:Object(m.__)("Bar chart",'woocommerce'),"aria-checked":"bar"===L.chartType,role:"menuitemradio",tabIndex:"bar"===L.chartType?0:-1,onClick:M("bar")},Object(s.createElement)(b.a,{icon:"stats-alt"})))),function(e){var t=e.hiddenBlocks,r=e.path,o=e.query,a=e.filters,c=X.reduce((function(e,t){return void 0===e[t.endpoint]&&(e[t.endpoint]=[]),e[t.endpoint].push(t),e}),{});return Object(s.createElement)("div",{className:"woocommerce-dashboard__columns"},X.map((function(e){return t.includes(e.endpoint+"_"+e.key)?null:Object(s.createElement)(N,{charts:c[e.endpoint],endpoint:e.endpoint,key:e.endpoint+"_"+e.key,path:r,query:o,selectedChart:e,filters:a})})))}({hiddenBlocks:r,path:f,query:L,filters:x}))};ee.propTypes={path:f.a.string.isRequired,query:f.a.object.isRequired};t.default=ee}}]);
