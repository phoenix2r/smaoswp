(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[17],{750:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return N}));var a=r(42),n=r.n(a),o=r(41),c=r.n(o),i=r(43),u=r.n(i),s=r(47),l=r.n(s),m=r(28),d=r.n(m),p=r(0),b=r(1),f=r.n(b),y=r(787),_=r(763),v=r(65),O=r.n(v),h=r(3),j=r(2),g=r(55),w=r(205),R=r(20),S=r(111),q=r(768),C=r(23),k=r(204);r(918);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var x=function(e){u()(r,e);var t=D(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(O()(e)),e.getRowsContent=e.getRowsContent.bind(O()(e)),e.getSummary=e.getSummary.bind(O()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(h.__)("Date",'woocommerce'),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(h.__)("Order #",'woocommerce'),screenReaderLabel:Object(h.__)("Order Number",'woocommerce'),key:"order_number",required:!0},{label:Object(h.__)("Status",'woocommerce'),key:"status",required:!1,isSortable:!1},{label:Object(h.__)("Customer",'woocommerce'),key:"customer_id",required:!1,isSortable:!1},{label:Object(h.__)("Product(s)",'woocommerce'),screenReaderLabel:Object(h.__)("Products",'woocommerce'),key:"products",required:!1,isSortable:!1},{label:Object(h.__)("Items Sold",'woocommerce'),key:"num_items_sold",required:!1,isSortable:!0,isNumeric:!0},{label:Object(h.__)("Coupon(s)",'woocommerce'),screenReaderLabel:Object(h.__)("Coupons",'woocommerce'),key:"coupons",required:!1,isSortable:!1},{label:Object(h.__)("Net Sales",'woocommerce'),screenReaderLabel:Object(h.__)("Net Sales",'woocommerce'),key:"net_total",required:!0,isSortable:!0,isNumeric:!0}]}},{key:"getCustomerName",value:function(e){var t=e||{},r=t.first_name,a=t.last_name;return r||a?[r,a].join(" "):""}},{key:"getRowsContent",value:function(e){var t=this,r=this.props.query,a=Object(C.getPersistedQuery)(r),n=Object(R.g)("dateFormat",S.c),o=this.context,c=o.render,i=o.getCurrencyConfig;return Object(j.map)(e,(function(e){var r=e.currency,o=e.date_created,u=e.net_total,s=e.num_items_sold,l=e.order_id,m=e.order_number,d=e.parent_id,b=e.status,f=e.extended_info||{},y=f.coupons,_=f.customer,v=f.products.sort((function(e,t){return t.quantity-e.quantity})).map((function(e){return{label:e.name,quantity:e.quantity,href:Object(C.getNewPath)(a,"/analytics/products",{filter:"single_product",products:e.id})}})),O=y.map((function(e){return{label:e.code,href:Object(C.getNewPath)(a,"/analytics/coupons",{filter:"single_coupon",coupons:e.id})}}));return[{display:Object(p.createElement)(g.Date,{date:o,visibleFormat:n}),value:o},{display:Object(p.createElement)(g.Link,{href:"post.php?post="+(d||l)+"&action=edit"+(d?"#order_refunds":""),type:"wp-admin"},m),value:m},{display:Object(p.createElement)(g.OrderStatus,{className:"woocommerce-orders-table__status",order:{status:b},orderStatusMap:Object(R.g)("orderStatuses",{})}),value:b},{display:t.getCustomerName(_),value:t.getCustomerName(_)},{display:t.renderList(v.length?[v[0]]:[],v.map((function(e){return{label:Object(h.sprintf)(Object(h.__)("%s× %s",'woocommerce'),e.quantity,e.label),href:e.href}}))),value:v.map((function(e){var t=e.quantity,r=e.label;return Object(h.sprintf)(Object(h.__)("%s× %s",'woocommerce'),t,r)})).join(", ")},{display:Object(w.formatValue)(i(),"number",s),value:s},{display:t.renderList(O.length?[O[0]]:[],O),value:O.map((function(e){return e.label})).join(", ")},{display:c(u,r),value:u}]}))}},{key:"getSummary",value:function(e){var t=e.orders_count,r=void 0===t?0:t,a=e.total_customers,n=void 0===a?0:a,o=e.products,c=void 0===o?0:o,i=e.num_items_sold,u=void 0===i?0:i,s=e.coupons_count,l=void 0===s?0:s,m=e.net_revenue,d=void 0===m?0:m,p=this.context,b=p.formatAmount,f=(0,p.getCurrencyConfig)();return[{label:Object(h._n)("order","orders",r,'woocommerce'),value:Object(w.formatValue)(f,"number",r)},{label:Object(h._n)(" customer"," customers",n,'woocommerce'),value:Object(w.formatValue)(f,"number",n)},{label:Object(h._n)("product","products",c,'woocommerce'),value:Object(w.formatValue)(f,"number",c)},{label:Object(h._n)("item sold","items sold",u,'woocommerce'),value:Object(w.formatValue)(f,"number",u)},{label:Object(h._n)("coupon","coupons",l,'woocommerce'),value:Object(w.formatValue)(f,"number",l)},{label:Object(h.__)("net sales",'woocommerce'),value:b(d)}]}},{key:"renderLinks",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){return Object(p.createElement)(g.Link,{href:e.href,key:t,type:"wc-admin"},e.label)}))}},{key:"renderList",value:function(e,t){return Object(p.createElement)(p.Fragment,null,this.renderLinks(e),t.length>1&&Object(p.createElement)(g.ViewMoreList,{items:this.renderLinks(t)}))}},{key:"render",value:function(){var e=this.props,t=e.query,r=e.filters,a=e.advancedFilters;return Object(p.createElement)(q.a,{endpoint:"orders",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["orders_count","total_customers","products","num_items_sold","coupons_count","net_revenue"],query:t,tableQuery:{extended_info:!0},title:Object(h.__)("Orders",'woocommerce'),columnPrefsKey:"orders_report_columns",filters:r,advancedFilters:a})}}]),r}(p.Component);x.contextType=k.a;var E=x,P=r(762),F=r(764),T=r(765);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var N=function(e){u()(r,e);var t=L(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e=this.props,t=e.path,r=e.query;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(T.a,{query:r,path:t,filters:y.c,advancedFilters:y.a,report:"orders"}),Object(p.createElement)(F.a,{charts:y.b,endpoint:"orders",query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(P.a,{charts:y.b,endpoint:"orders",path:t,query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(E,{query:r,filters:y.c,advancedFilters:y.a}))}}]),r}(p.Component);N.propTypes={path:f.a.string.isRequired,query:f.a.object.isRequired}},760:function(e,t,r){"use strict";r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return y}));var a=r(26),n=r(22),o=r.n(n),c=r(2),i=r(23),u=r(761),s=r(30);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,c="function"==typeof e?e(n):e,u=Object(i.getIdsFromQuery)(r);if(u.length<1)return Promise.resolve([]);var s={include:u.join(","),per_page:u.length};return o()({path:Object(a.addQueryArgs)(c,s)}).then((function(e){return e.map(t)}))}}var m=l(s.c+"/products/categories",(function(e){return{key:e.id,label:e.name}})),d=l(s.c+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=l(s.c+"/customers",(function(e){return{key:e.id,label:e.name}})),b=l(s.c+"/products",(function(e){return{key:e.id,label:e.name}})),f=l(s.c+"/taxes",(function(e){return{key:e.id,label:Object(u.a)(e)}})),y=l((function(e){return s.c+"/products/".concat(e.products,"/variations")}),(function(e){return{key:e.id,label:e.attributes.reduce((function(e,t,r,a){return e+"".concat(t.option).concat(a.length===r+1?"":", ")}),"")}}))},761:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX",'woocommerce'),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},762:function(e,t,r){"use strict";var a=r(17),n=r.n(a),o=r(42),c=r.n(o),i=r(41),u=r.n(i),s=r(43),l=r.n(s),m=r(47),d=r.n(m),p=r(28),b=r.n(p),f=r(0),y=r(3),_=r(175),v=r(113),O=r(2),h=r(1),j=r.n(h),g=r(111),w=r(55),R=r(48),S=r(204),q=r(759),C=r(267),k=r(104),D=r(23);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var F=function(e){l()(r,e);var t=P(r);function r(){return c()(this,r),t.apply(this,arguments)}return u()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(O.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),E({date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,c=Object(g.i)(t),i=Object(g.f)(t,o),u=i.primary,s=i.secondary;return r.data.intervals.map((function(e,r){var o=Object(g.j)(e.date_start,u.after,s.after,t.compare,c),i=a.data.intervals[r];return{date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(O.get)(t,["data","totals",a.key],null),secondary:Object(O.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,c=n.filterParam,i=n.interactiveLegend,u=n.itemsLabel,s=n.legendPosition,l=n.path,m=n.query,d=n.selectedChart,p=n.showHeaderControls,b=n.primaryData,_=Object(g.i)(m),v=Object(g.d)(m),O=Object(g.g)(_,b.data.intervals.length),h=o?Object(y.__)("No data for the current search",'woocommerce'):Object(y.__)("No data for the selected date range",'woocommerce'),j=this.context,R=j.formatAmount,S=j.getCurrencyConfig;return Object(f.createElement)(w.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:h,filterParam:c,interactiveLegend:i,interval:_,isRequesting:t,itemsLabel:u,legendPosition:s,legendTotals:a,mode:e,path:l,query:m,screenReaderFormat:O.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:O.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(q.f)(d.type,R),chartType:Object(g.e)(m),valueType:d.type,xFormat:O.xFormat,x2Format:O.x2Format,currency:S()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(f.createElement)(C.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(f.createElement)(C.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),c=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,c)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(f.Component);F.contextType=S.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(_.a)(Object(k.a)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,c=t.limitProperties,i=t.query,u=t.advancedFilters,s=c||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var c=Object(D.flattenFilters)(o.filters),i=r[o.param]||o.defaultValue||"all";return Object(O.find)(c,{value:i})}return e(n,r,a)}(n,i),m=Object(O.get)(l,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(O.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(O.get)(e,["chartMode"])}return null}(l,i)||"time-comparison",p=e(R.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,b={mode:d,filterParam:m,defaultDateRange:p};if(o)return b;var f=s.some((function(e){return i[e]&&i[e].length}));if(i.search&&!f)return E(E({},b),{},{emptySearchResults:!0});var y=r&&r.map((function(e){return e.key})),_=Object(q.b)({endpoint:a,dataType:"primary",query:i,select:e,limitBy:s,filters:n,advancedFilters:u,defaultDateRange:p,fields:y});if("item-comparison"===d)return E(E({},b),{},{primaryData:_});var v=Object(q.b)({endpoint:a,dataType:"secondary",query:i,select:e,limitBy:s,filters:n,advancedFilters:u,defaultDateRange:p,fields:y});return E(E({},b),{},{primaryData:_,secondaryData:v})})))(F)},763:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(2);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},764:function(e,t,r){"use strict";var a=r(42),n=r.n(a),o=r(41),c=r.n(o),i=r(43),u=r.n(i),s=r(47),l=r.n(s),m=r(28),d=r.n(m),p=r(0),b=r(3),f=r(175),y=r(1),_=r.n(y),v=r(111),O=r(23),h=r(55),j=r(205),g=r(48),w=r(759),R=r(267),S=r(104),q=r(64),C=r(204);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var D=function(e){u()(r,e);var t=k(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(j.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=a?0:n.primary[e],c=a?0:n.secondary[e];return{delta:Object(j.calculateDelta)(o,c),prevValue:this.formatVal(c,t),value:this.formatVal(o,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,c=t.endpoint,i=t.report,u=t.defaultDateRange,s=o.isError,l=o.isRequesting;if(s)return Object(p.createElement)(R.a,{isError:!0});if(l)return Object(p.createElement)(h.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(v.h)(a,u).compare;return Object(p.createElement)(h.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,u=t.orderby,s=t.label,l=t.type,d={chart:r};u&&(d.orderby=u),o&&(d.order=o);var f=Object(O.getNewPath)(d),y=n.key===r,_=e.getValues(r,l),v=_.delta,j=_.prevValue,g=_.value;return Object(p.createElement)(h.SummaryNumber,{key:r,delta:v,href:f,label:s,prevLabel:"previous_period"===m?Object(b.__)("Previous Period:",'woocommerce'):Object(b.__)("Previous Year:",'woocommerce'),prevValue:j,selected:y,value:g,onLinkClickCallback:function(){a&&a(),Object(q.b)("analytics_chart_tab_click",{report:i||c,key:r})}})}))}))}}]),r}(p.Component);D.propTypes={charts:_.a.array.isRequired,endpoint:_.a.string.isRequired,limitProperties:_.a.array,query:_.a.object.isRequired,selectedChart:_.a.shape({key:_.a.string.isRequired,label:_.a.string.isRequired,order:_.a.oneOf(["asc","desc"]),orderby:_.a.string,type:_.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:_.a.object,report:_.a.string},D.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},D.contextType=C.a,t.a=Object(f.a)(Object(S.a)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,c=t.filters,i=t.advancedFilters,u=n||[a],s=u.some((function(e){return o[e]&&o[e].length}));if(o.search&&!s)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(g.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(w.e)({endpoint:a,query:o,select:e,limitBy:u,filters:c,advancedFilters:i,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(D)},787:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return s}));var a=r(3),n=r(44),o=r(20),c=r(760),i=Object(n.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(a.__)("Orders",'woocommerce'),type:"number"},{key:"net_revenue",label:Object(a.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(a.__)("Average Order Value",'woocommerce'),type:"currency"},{key:"avg_items_per_order",label:Object(a.__)("Average Items Per Order",'woocommerce'),order:"desc",orderby:"num_items_sold",type:"average"}]),u=Object(n.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(a.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(a.__)("All Orders",'woocommerce'),value:"all"},{label:Object(a.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),s=Object(n.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(a._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce'),filters:{status:{labels:{add:Object(a.__)("Order Status",'woocommerce'),remove:Object(a.__)("Remove order status filter",'woocommerce'),rule:Object(a.__)("Select an order status filter match",'woocommerce'),title:Object(a.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select an order status",'woocommerce')},rules:[{value:"is",label:Object(a._x)("Is","order status",'woocommerce')},{value:"is_not",label:Object(a._x)("Is Not","order status",'woocommerce')}],input:{component:"SelectControl",options:Object.keys(o.d).map((function(e){return{value:e,label:o.d[e]}}))}},product:{labels:{add:Object(a.__)("Products",'woocommerce'),placeholder:Object(a.__)("Search products",'woocommerce'),remove:Object(a.__)("Remove products filter",'woocommerce'),rule:Object(a.__)("Select a product filter match",'woocommerce'),title:Object(a.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select products",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:c.d}},coupon:{labels:{add:Object(a.__)("Coupon Codes",'woocommerce'),placeholder:Object(a.__)("Search coupons",'woocommerce'),remove:Object(a.__)("Remove coupon filter",'woocommerce'),rule:Object(a.__)("Select a coupon filter match",'woocommerce'),title:Object(a.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select coupon codes",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","coupon code",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","coupon code",'woocommerce')}],input:{component:"Search",type:"coupons",getLabels:c.b}},customer_type:{labels:{add:Object(a.__)("Customer Type",'woocommerce'),remove:Object(a.__)("Remove customer filter",'woocommerce'),rule:Object(a.__)("Select a customer filter match",'woocommerce'),title:Object(a.__)("{{title}}Customer is{{/title}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select a customer type",'woocommerce')},input:{component:"SelectControl",options:[{value:"new",label:Object(a.__)("New",'woocommerce')},{value:"returning",label:Object(a.__)("Returning",'woocommerce')}],defaultOption:"new"}},refunds:{labels:{add:Object(a.__)("Refunds",'woocommerce'),remove:Object(a.__)("Remove refunds filter",'woocommerce'),rule:Object(a.__)("Select a refund filter match",'woocommerce'),title:Object(a.__)("{{title}}Refunds{{/title}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select a refund type",'woocommerce')},input:{component:"SelectControl",options:[{value:"all",label:Object(a.__)("All",'woocommerce')},{value:"partial",label:Object(a.__)("Partially refunded",'woocommerce')},{value:"full",label:Object(a.__)("Fully refunded",'woocommerce')},{value:"none",label:Object(a.__)("None",'woocommerce')}],defaultOption:"all"}},tax_rate:{labels:{add:Object(a.__)("Tax Rates",'woocommerce'),placeholder:Object(a.__)("Search tax rates",'woocommerce'),remove:Object(a.__)("Remove tax rate filter",'woocommerce'),rule:Object(a.__)("Select a tax rate filter match",'woocommerce'),title:Object(a.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select tax rates",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","tax rate",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","tax rate",'woocommerce')}],input:{component:"Search",type:"taxes",getLabels:c.f}}}})},918:function(e,t,r){}}]);
