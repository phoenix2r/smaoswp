(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{146:function(e,t,r){var o=r(419),c=r(420),a=r(172),n=r(421);e.exports=function(e,t){return o(e)||c(e,t)||a(e,t)||n()}},419:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},420:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,c=!1,a=void 0;try{for(var n,m=e[Symbol.iterator]();!(o=(n=m.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==m.return||m.return()}finally{if(c)throw a}}return r}}},421:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},737:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Q}));var o,c=r(17),a=r.n(c),n=r(38),m=r.n(n),l=r(37),i=r.n(l),u=r(39),s=r.n(u),d=r(42),b=r.n(d),_=r(26),f=r.n(_),p=r(0),v=r(1),O=r.n(v),j=r(51),y=r.n(j),w=r(3),g=r(72),h=r(48),S=r(23),x=r(751),R=r(33),C=Object(S.g)("dataEndpoints",{countries:{}}).countries,k=Object(h.applyFilters)("woocommerce_admin_customers_report_filters",[{label:Object(w.__)("Show",'woocommerce'),staticParams:["paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(w.__)("All Customers",'woocommerce'),value:"all"},{label:Object(w.__)("Single Customer",'woocommerce'),value:"select_customer",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_customer",chartMode:"item-comparison",path:["select_customer"],settings:{type:"customers",param:"customers",getLabels:x.c,labels:{placeholder:Object(w.__)("Type to search for a customer",'woocommerce'),button:Object(w.__)("Single Customer",'woocommerce')}}}]},{label:Object(w.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),E=Object(h.applyFilters)("woocommerce_admin_customers_report_advanced_filters",{title:Object(w._x)("Customers Match {{select /}} Filters","A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE",'woocommerce'),filters:{name:{labels:{add:Object(w.__)("Name",'woocommerce'),placeholder:Object(w.__)("Search",'woocommerce'),remove:Object(w.__)("Remove customer name filter",'woocommerce'),rule:Object(w.__)("Select a customer name filter match",'woocommerce'),title:Object(w.__)("{{title}}Name{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select customer name",'woocommerce')},rules:[{value:"includes",label:Object(w._x)("Includes","customer names",'woocommerce')},{value:"excludes",label:Object(w._x)("Excludes","customer names",'woocommerce')}],input:{component:"Search",type:"customers",getLabels:Object(x.e)(R.c+"/customers",(function(e){return{id:e.id,label:e.name}}))}},country:{labels:{add:Object(w.__)("Country / Region",'woocommerce'),placeholder:Object(w.__)("Search",'woocommerce'),remove:Object(w.__)("Remove country / region filter",'woocommerce'),rule:Object(w.__)("Select a country / region filter match",'woocommerce'),title:Object(w.__)("{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select country / region",'woocommerce')},rules:[{value:"includes",label:Object(w._x)("Includes","countries",'woocommerce')},{value:"excludes",label:Object(w._x)("Excludes","countries",'woocommerce')}],input:{component:"Search",type:"countries",getLabels:(o=y()(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=C.map((function(e){return{key:e.code,label:Object(g.decodeEntities)(e.name)}})),o=t.split(","),e.next=4,r.filter((function(e){return o.includes(e.key)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}},username:{labels:{add:Object(w.__)("Username",'woocommerce'),placeholder:Object(w.__)("Search customer username",'woocommerce'),remove:Object(w.__)("Remove customer username filter",'woocommerce'),rule:Object(w.__)("Select a customer username filter match",'woocommerce'),title:Object(w.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select customer username",'woocommerce')},rules:[{value:"includes",label:Object(w._x)("Includes","customer usernames",'woocommerce')},{value:"excludes",label:Object(w._x)("Excludes","customer usernames",'woocommerce')}],input:{component:"Search",type:"usernames",getLabels:x.c}},email:{labels:{add:Object(w.__)("Email",'woocommerce'),placeholder:Object(w.__)("Search customer email",'woocommerce'),remove:Object(w.__)("Remove customer email filter",'woocommerce'),rule:Object(w.__)("Select a customer email filter match",'woocommerce'),title:Object(w.__)("{{title}}Email{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select customer email",'woocommerce')},rules:[{value:"includes",label:Object(w._x)("Includes","customer emails",'woocommerce')},{value:"excludes",label:Object(w._x)("Excludes","customer emails",'woocommerce')}],input:{component:"Search",type:"emails",getLabels:Object(x.e)(R.c+"/customers",(function(e){return{id:e.id,label:e.email}}))}},orders_count:{labels:{add:Object(w.__)("No. of Orders",'woocommerce'),remove:Object(w.__)("Remove order filter",'woocommerce'),rule:Object(w.__)("Select an order count filter match",'woocommerce'),title:Object(w.__)("{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(w._x)("Less Than","number of orders",'woocommerce')},{value:"min",label:Object(w._x)("More Than","number of orders",'woocommerce')},{value:"between",label:Object(w._x)("Between","number of orders",'woocommerce')}],input:{component:"Number"}},total_spend:{labels:{add:Object(w.__)("Total Spend",'woocommerce'),remove:Object(w.__)("Remove total spend filter",'woocommerce'),rule:Object(w.__)("Select a total spend filter match",'woocommerce'),title:Object(w.__)("{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(w._x)("Less Than","total spend by customer",'woocommerce')},{value:"min",label:Object(w._x)("More Than","total spend by customer",'woocommerce')},{value:"between",label:Object(w._x)("Between","total spend by customer",'woocommerce')}],input:{component:"Currency"}},avg_order_value:{labels:{add:Object(w.__)("AOV",'woocommerce'),remove:Object(w.__)("Remove average order value filter",'woocommerce'),rule:Object(w.__)("Select an average order value filter match",'woocommerce'),title:Object(w.__)("{{title}}AOV{{/title}} {{rule /}} {{filter /}}",'woocommerce')},rules:[{value:"max",label:Object(w._x)("Less Than","average order value of customer",'woocommerce')},{value:"min",label:Object(w._x)("More Than","average order value of customer",'woocommerce')},{value:"between",label:Object(w._x)("Between","average order value of customer",'woocommerce')}],input:{component:"Currency"}},registered:{labels:{add:Object(w.__)("Registered",'woocommerce'),remove:Object(w.__)("Remove registered filter",'woocommerce'),rule:Object(w.__)("Select a registered filter match",'woocommerce'),title:Object(w.__)("{{title}}Registered{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select registered date",'woocommerce')},rules:[{value:"before",label:Object(w._x)("Before","date",'woocommerce')},{value:"after",label:Object(w._x)("After","date",'woocommerce')},{value:"between",label:Object(w._x)("Between","date",'woocommerce')}],input:{component:"Date"}},last_active:{labels:{add:Object(w.__)("Last active",'woocommerce'),remove:Object(w.__)("Remove last active filter",'woocommerce'),rule:Object(w.__)("Select a last active filter match",'woocommerce'),title:Object(w.__)("{{title}}Last active{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(w.__)("Select registered date",'woocommerce')},rules:[{value:"before",label:Object(w._x)("Before","date",'woocommerce')},{value:"after",label:Object(w._x)("After","date",'woocommerce')},{value:"between",label:Object(w._x)("Between","date",'woocommerce')}],input:{component:"Date"}}}}),D=r(62),F=r.n(D),A=r(97),P=r(53),L=r(201),T=r(108),B=r(759),q=r(200);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var c=f()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return b()(this,r)}}var I=Object(S.g)("dataEndpoints",{countries:{}}).countries,V=function(e){s()(r,e);var t=N(r);function r(){var e;return m()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(F()(e)),e.getRowsContent=e.getRowsContent.bind(F()(e)),e.getSummary=e.getSummary.bind(F()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(w.__)("Name",'woocommerce'),key:"name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(w.__)("Username",'woocommerce'),key:"username",hiddenByDefault:!0},{label:Object(w.__)("Last Active",'woocommerce'),key:"date_last_active",defaultSort:!0,isSortable:!0},{label:Object(w.__)("Sign Up",'woocommerce'),key:"date_registered",isSortable:!0},{label:Object(w.__)("Email",'woocommerce'),key:"email"},{label:Object(w.__)("Orders",'woocommerce'),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(w.__)("Total Spend",'woocommerce'),key:"total_spend",isSortable:!0,isNumeric:!0},{label:Object(w.__)("AOV",'woocommerce'),screenReaderLabel:Object(w.__)("Average Order Value",'woocommerce'),key:"avg_order_value",isNumeric:!0},{label:Object(w.__)("Country / Region",'woocommerce'),key:"country",isSortable:!0},{label:Object(w.__)("City",'woocommerce'),key:"city",hiddenByDefault:!0,isSortable:!0},{label:Object(w.__)("Region",'woocommerce'),key:"state",hiddenByDefault:!0,isSortable:!0},{label:Object(w.__)("Postal Code",'woocommerce'),key:"postcode",hiddenByDefault:!0,isSortable:!0}]}},{key:"getCountryName",value:function(e){return void 0!==I[e]?I[e]:null}},{key:"getRowsContent",value:function(e){var t=this,r=Object(S.g)("dateFormat",T.c),o=this.context,c=o.formatCurrency,a=o.formatDecimal,n=o.getCurrency;return e.map((function(e){var o=e.avg_order_value,m=e.date_last_active,l=e.date_registered,i=e.email,u=e.name,s=e.user_id,d=e.orders_count,b=e.username,_=e.total_spend,f=e.postcode,v=e.city,O=e.state,j=e.country,y=t.getCountryName(j),w=s?Object(p.createElement)(P.Link,{href:Object(S.f)("user-edit.php?user_id="+s),type:"wp-admin"},u):u,g=m?Object(p.createElement)(P.Date,{date:m,visibleFormat:r}):"—",h=l?Object(p.createElement)(P.Date,{date:l,visibleFormat:r}):"—",x=Object(p.createElement)(p.Fragment,null,Object(p.createElement)(A.a,{text:y},Object(p.createElement)("span",{"aria-hidden":"true"},j)),Object(p.createElement)("span",{className:"screen-reader-text"},y));return[{display:w,value:u},{display:b,value:b},{display:g,value:m},{display:h,value:l},{display:Object(p.createElement)("a",{href:"mailto:"+i},i),value:i},{display:Object(L.formatValue)(n(),"number",d),value:d},{display:c(_),value:a(_)},{display:c(o),value:a(o)},{display:x,value:j},{display:v,value:v},{display:O,value:O},{display:f,value:f}]}))}},{key:"getSummary",value:function(e){var t=e.customers_count,r=void 0===t?0:t,o=e.avg_orders_count,c=void 0===o?0:o,a=e.avg_total_spend,n=void 0===a?0:a,m=e.avg_avg_order_value,l=void 0===m?0:m,i=this.context,u=i.formatCurrency,s=(0,i.getCurrency)();return[{label:Object(w._n)("customer","customers",r,'woocommerce'),value:Object(L.formatValue)(s,"number",r)},{label:Object(w._n)("average order","average orders",c,'woocommerce'),value:Object(L.formatValue)(s,"number",c)},{label:Object(w.__)("average lifetime spend",'woocommerce'),value:u(n)},{label:Object(w.__)("average order value",'woocommerce'),value:u(l)}]}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,o=e.filters,c=e.advancedFilters;return Object(p.createElement)(B.a,{endpoint:"customers",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["customers_count","avg_orders_count","avg_total_spend","avg_avg_order_value"],isRequesting:t,itemIdField:"id",query:r,labels:{placeholder:Object(w.__)("Search by customer name",'woocommerce')},searchBy:"customers",title:Object(w.__)("Customers",'woocommerce'),columnPrefsKey:"customers_report_columns",filters:o,advancedFilters:c})}}]),r}(p.Component);V.contextType=q.a;var M=V,H=r(757);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=f()(e);if(t){var c=f()(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return b()(this,r)}}var Q=function(e){s()(r,e);var t=J(r);function r(){return m()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.query,o=e.path,c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({orderby:"date_last_active",order:"desc"},r);return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(H.a,{query:r,path:o,filters:k,showDatePicker:!1,advancedFilters:E,report:"customers"}),Object(p.createElement)(M,{isRequesting:t,query:c,filters:k,advancedFilters:E}))}}]),r}(p.Component);Q.propTypes={query:O.a.object.isRequired}},751:function(e,t,r){"use strict";r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return _})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return p}));var o=r(27),c=r(21),a=r.n(c),n=r(2),m=r(22),l=r(752),i=r(33);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0,n="function"==typeof e?e(c):e,l=Object(m.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var i={include:l.join(","),per_page:l.length};return a()({path:Object(o.addQueryArgs)(n,i)}).then((function(e){return e.map(t)}))}}var s=u(i.c+"/products/categories",(function(e){return{key:e.id,label:e.name}})),d=u(i.c+"/coupons",(function(e){return{key:e.id,label:e.code}})),b=u(i.c+"/customers",(function(e){return{key:e.id,label:e.name}})),_=u(i.c+"/products",(function(e){return{key:e.id,label:e.name}})),f=u(i.c+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}})),p=u((function(e){return i.c+"/products/".concat(e.products,"/variations")}),(function(e){return{key:e.id,label:e.attributes.reduce((function(e,t,r,o){return e+"".concat(t.option).concat(o.length===r+1?"":", ")}),"")}}))},752:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(3);function c(e){return[e.country,e.state,e.name||Object(o.__)("TAX",'woocommerce'),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}}}]);
