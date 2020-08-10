(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{146:function(e,t,r){var a=r(419),n=r(420),o=r(172),i=r(421);e.exports=function(e,t){return a(e)||n(e,t)||o(e,t)||i()}},419:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},420:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}}},421:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},720:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(12),n=r(15),o=r(14),i=r(0),l=r(2),c=r(112),s=r(171);function d(e){var t=e.help,r=e.label,u=e.multiple,b=void 0!==u&&u,m=e.onChange,f=e.options,p=void 0===f?[]:f,h=e.className,g=e.hideLabelFromVision,y=Object(o.a)(e,["help","label","multiple","onChange","options","className","hideLabelFromVision"]),v=Object(c.a)(d),O="inspector-select-control-".concat(v);return!Object(l.isEmpty)(p)&&Object(i.createElement)(s.a,{label:r,hideLabelFromVision:g,id:O,help:t,className:h},Object(i.createElement)("select",Object(a.a)({id:O,className:"components-select-control__input",onChange:function(e){if(b){var t=Object(n.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}));m(t)}else m(e.target.value)},"aria-describedby":t?"".concat(O,"__help"):void 0,multiple:b},y),p.map((function(e,t){return Object(i.createElement)("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,disabled:e.disabled},e.label)}))))}},758:function(e,t,r){"use strict";var a=r(766),n=["a","b","em","i","strong","p"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(a.sanitize)(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})}}},906:function(e,t,r){},907:function(e,t,r){},929:function(e,t,r){"use strict";r.r(t);var a=r(146),n=r.n(a),o=r(129),i=r.n(o),l=r(0),c=r(3),s=r(169),d=r(1),u=r.n(d),b=r(720),m=r(53),f=r(43),p=r(23),h=r(38),g=r.n(h),y=r(37),v=r.n(y),O=r(39),j=r.n(O),w=r(42),_=r.n(w),E=r(26),R=r.n(E),T=r(22),k=r(274),L=r(261),q=r(758),I=r(101);r(906);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=R()(e);if(t){var n=R()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return _()(this,r)}}var C=function(e){j()(r,e);var t=S(r);function r(){return g()(this,r),t.apply(this,arguments)}return v()(r,[{key:"getFormattedHeaders",value:function(){return this.props.headers.map((function(e,t){return{isLeftAligned:0===t,hiddenByDefault:!1,isSortable:!1,key:e.label,label:e.label}}))}},{key:"getFormattedRows",value:function(){return this.props.rows.map((function(e){return e.map((function(e){return{display:Object(l.createElement)("div",{dangerouslySetInnerHTML:Object(q.a)(e.display)}),value:e.value}}))}))}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,r=e.isError,a=e.totalRows,n=e.title,o="woocommerce-leaderboard";if(r)return Object(l.createElement)(L.a,{className:o,isError:!0});var i=this.getFormattedRows();return t||0!==i.length?Object(l.createElement)(m.TableCard,{className:o,headers:this.getFormattedHeaders(),isLoading:t,rows:i,rowsPerPage:a,showMenu:!1,title:n,totalRows:a}):Object(l.createElement)(m.Card,{title:n,className:o},Object(l.createElement)(m.EmptyTable,null,Object(c.__)("No data recorded for the selected time period.",'woocommerce')))}}]),r}(l.Component);C.propTypes={headers:u.a.arrayOf(u.a.shape({label:u.a.string})),id:u.a.string.isRequired,query:u.a.object,rows:u.a.arrayOf(u.a.arrayOf(u.a.shape({display:u.a.node,value:u.a.oneOfType([u.a.string,u.a.number,u.a.bool])}))).isRequired,title:u.a.string.isRequired,totalRows:u.a.number.isRequired},C.defaultProps={rows:[],isError:!1,isRequesting:!1};var N=Object(s.a)(Object(I.a)((function(e,t){var r=t.id,a=t.query,n=t.totalRows,o=e(f.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,i={id:r,per_page:n,persisted_query:Object(T.getPersistedQuery)(a),query:a,select:e,defaultDateRange:o};return Object(k.a)(i)})))(C),F=r(63),A=(r(907),function(e){var t=e.allLeaderboards,r=e.controls,a=e.isFirst,o=e.isLast,s=e.hiddenBlocks,d=e.onMove,u=e.onRemove,p=e.onTitleBlur,h=e.onTitleChange,g=e.onToggleHiddenBlock,y=e.query,v=e.title,O=e.titleInput,j=Object(f.useUserPreferences)(),w=j.updateUserPreferences,_=i()(j,["updateUserPreferences"]),E=Object(l.useState)(parseInt(_.dashboard_leaderboard_rows||5,10)),R=n()(E,2),T=R[0],k=R[1],L=function(e){k(parseInt(e,10));var t={dashboard_leaderboard_rows:parseInt(e,10)};w(t)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"woocommerce-dashboard__dashboard-leaderboards"},Object(l.createElement)(m.SectionHeader,{title:v||Object(c.__)("Leaderboards",'woocommerce'),menu:Object(l.createElement)(m.EllipsisMenu,{label:Object(c.__)("Choose which leaderboards to display and other settings",'woocommerce'),renderContent:function(e){var n=e.onToggle;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.MenuTitle,null,Object(c.__)("Leaderboards",'woocommerce')),function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.onToggleHiddenBlock;return t.map((function(e){var t=!r.includes(e.id);return Object(l.createElement)(m.MenuItem,{checked:t,isCheckbox:!0,isClickable:!0,key:e.id,onInvoke:function(){a(e.id)(),Object(F.b)("dash_leaderboards_toggle",{status:t?"off":"on",key:e.id})}},e.label)}))}({allLeaderboards:t,hiddenBlocks:s,onToggleHiddenBlock:g}),Object(l.createElement)(b.a,{className:"woocommerce-dashboard__dashboard-leaderboards__select",label:Object(c.__)("Rows Per Table",'woocommerce'),value:T,options:Array.from({length:20},(function(e,t){return{v:t+1,label:t+1}})),onChange:L}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(l.createElement)(r,{onToggle:n,onMove:d,onRemove:u,isFirst:a,isLast:o,onTitleBlur:p,onTitleChange:h,titleInput:O}))}})}),Object(l.createElement)("div",{className:"woocommerce-dashboard__columns"},function(e){var t=e.allLeaderboards,r=e.hiddenBlocks,a=e.query,n=e.rowsPerTable;return t.map((function(e){if(!r.includes(e.id))return Object(l.createElement)(N,{headers:e.headers,id:e.id,key:e.id,query:a,title:e.label,totalRows:n})}))}({allLeaderboards:t,hiddenBlocks:s,query:y,rowsPerTable:T}))))});A.propTypes={query:u.a.object.isRequired};t.default=Object(s.a)(Object(I.a)((function(e){var t=e("wc-api"),r=t.getItems,a=t.getItemsError,n=t.isGetItemsRequesting;return{allLeaderboards:Object(p.g)("dataEndpoints",{leaderboards:[]}).leaderboards,getItems:r,getItemsError:a,isGetItemsRequesting:n}})))(A)}}]);
