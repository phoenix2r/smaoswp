(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[10],{766:function(e,t,n){"use strict";var a=n(775),c=["a","b","em","i","strong","p"],i=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(a.sanitize)(e,{ALLOWED_TAGS:c,ALLOWED_ATTR:i})}}},767:function(e,t,n){"use strict";var a=n(42),c=n.n(a),i=n(41),r=n.n(i),o=n(43),s=n.n(o),l=n(47),m=n.n(l),u=n(28),d=n.n(u),b=n(0),f=n(7),p=n.n(f),v=n(1),_=n.n(v),h=n(731),y=(n(769),n(55));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var c=d()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return m()(this,n)}}var O=function(e){s()(n,e);var t=g(n);function n(){return c()(this,n),t.apply(this,arguments)}return r()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.menu,a=e.subtitle,c=e.title,i=e.unreadMessages,r=p()({"woocommerce-layout__inbox-panel-header":a,"woocommerce-layout__activity-panel-header":!a},t),o=i||0;return Object(b.createElement)("div",{className:r},Object(b.createElement)("div",{className:"woocommerce-layout__inbox-title"},Object(b.createElement)(h.a,{variant:"title.small"},c),Object(b.createElement)(h.a,{variant:"button"},o>0&&Object(b.createElement)("span",{className:"woocommerce-layout__inbox-badge"},i))),Object(b.createElement)("div",{className:"woocommerce-layout__inbox-subtitle"},a&&Object(b.createElement)(h.a,{variant:"body.small"},a)),n&&Object(b.createElement)("div",{className:"woocommerce-layout__activity-panel-header-menu"},n))}}]),n}(b.Component);O.propTypes={className:_.a.string,unreadMessages:_.a.number,title:_.a.string.isRequired,subtitle:_.a.string,menu:_.a.shape({type:_.a.oneOf([y.EllipsisMenu])})},t.a=O},769:function(e,t,n){},770:function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return R}));var a=n(42),c=n.n(a),i=n(41),r=n.n(i),o=n(43),s=n.n(o),l=n(47),m=n.n(l),u=n(28),d=n.n(u),b=n(0),f=n(7),p=n.n(f),v=n(92),_=n.n(v),h=n(16),y=n.n(h),g=n(1),O=n.n(g),j=(n(771),n(55)),w=n(2);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var c=d()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return m()(this,n)}}var N=function(e){s()(n,e);var t=E(n);function n(){return c()(this,n),t.apply(this,arguments)}return r()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.hasAction,a=e.hasDate,c=e.hasSubtitle,i=e.lines,r=p()("woocommerce-activity-card is-loading",t);return Object(b.createElement)("div",{className:r,"aria-hidden":!0},Object(b.createElement)("span",{className:"woocommerce-activity-card__icon"},Object(b.createElement)("span",{className:"is-placeholder"})),Object(b.createElement)("div",{className:"woocommerce-activity-card__header"},Object(b.createElement)("div",{className:"woocommerce-activity-card__title is-placeholder"}),c&&Object(b.createElement)("div",{className:"woocommerce-activity-card__subtitle is-placeholder"}),a&&Object(b.createElement)("div",{className:"woocommerce-activity-card__date"},Object(b.createElement)("span",{className:"is-placeholder"}))),Object(b.createElement)("div",{className:"woocommerce-activity-card__body"},Object(w.range)(i).map((function(e){return Object(b.createElement)("span",{className:"is-placeholder",key:e})}))),n&&Object(b.createElement)("div",{className:"woocommerce-activity-card__actions"},Object(b.createElement)("span",{className:"is-placeholder"})))}}]),n}(b.Component);N.propTypes={className:O.a.string,hasAction:O.a.bool,hasDate:O.a.bool,hasSubtitle:O.a.bool,lines:O.a.number},N.defaultProps={hasAction:!1,hasDate:!1,hasSubtitle:!1,lines:1};var R=N;function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var c=d()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return m()(this,n)}}var D=function(e){s()(n,e);var t=k(n);function n(){return c()(this,n),t.apply(this,arguments)}return r()(n,[{key:"render",value:function(){var e=this.props,t=e.actions,n=e.className,a=e.children,c=e.date,i=e.icon,r=e.subtitle,o=e.title,s=e.unread,l=p()("woocommerce-activity-card",n),m=Array.isArray(t)?t:[t];return Object(b.createElement)("section",{className:l},s&&Object(b.createElement)("span",{className:"woocommerce-activity-card__unread"}),i&&Object(b.createElement)("span",{className:"woocommerce-activity-card__icon","aria-hidden":!0},i),Object(b.createElement)("header",{className:"woocommerce-activity-card__header"},Object(b.createElement)(j.H,{className:"woocommerce-activity-card__title"},o),r&&Object(b.createElement)("div",{className:"woocommerce-activity-card__subtitle"},r),c&&Object(b.createElement)("span",{className:"woocommerce-activity-card__date"},y.a.utc(c).fromNow())),Object(b.createElement)(j.Section,{className:"woocommerce-activity-card__body"},a),t&&Object(b.createElement)("footer",{className:"woocommerce-activity-card__actions"},m.map((function(e,t){return Object(b.cloneElement)(e,{key:t})}))))}}]),n}(b.Component);D.propTypes={actions:O.a.oneOfType([O.a.arrayOf(O.a.element),O.a.element]),className:O.a.string,children:O.a.node.isRequired,date:O.a.string,icon:O.a.node,subtitle:O.a.node,title:O.a.oneOfType([O.a.string,O.a.node]).isRequired,unread:O.a.bool},D.defaultProps={icon:Object(b.createElement)(_.a,{icon:"notice-outline",size:48}),unread:!1}},771:function(e,t,n){},783:function(e,t,n){},801:function(e,t,n){"use strict";n.r(t);var a=n(134),c=n.n(a),i=n(0),r=n(3),o=n(175),s=n(48),l=n(770),m=n(42),u=n.n(m),d=n(41),b=n.n(d),f=n(43),p=n.n(f),v=n(47),_=n.n(v),h=n(28),y=n.n(h),g=n(1),O=n.n(g);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var c=y()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return _()(this,n)}}var w=function(e){p()(n,e);var t=j(n);function n(){return u()(this,n),t.apply(this,arguments)}return b()(n,[{key:"render",value:function(){var e=this.props.className;return Object(i.createElement)("div",{className:"woocommerce-inbox-message is-placeholder ".concat(e),"aria-hidden":!0},Object(i.createElement)("div",{className:"woocommerce-inbox-message__image"},Object(i.createElement)("div",{className:"banner-block"})),Object(i.createElement)("div",{className:"woocommerce-inbox-message__wrapper"},Object(i.createElement)("div",{className:"woocommerce-inbox-message__content"},Object(i.createElement)("div",{className:"woocommerce-inbox-message__date"},Object(i.createElement)("div",{className:"sixth-line"})),Object(i.createElement)("div",{className:"woocommerce-inbox-message__title"},Object(i.createElement)("div",{className:"line"}),Object(i.createElement)("div",{className:"line"})),Object(i.createElement)("div",{className:"woocommerce-inbox-message__text"},Object(i.createElement)("div",{className:"line"}),Object(i.createElement)("div",{className:"third-line"}))),Object(i.createElement)("div",{className:"woocommerce-inbox-message__actions"},Object(i.createElement)("div",{className:"fifth-line"}),Object(i.createElement)("div",{className:"fifth-line"}))))}}]),n}(i.Component);w.propTypes={className:O.a.string};var E=w,N=n(767),R=n(65),k=n.n(R),D=n(732),x=n(69),A=n(738),C=n(782),T=n.n(C),q=n(16),S=n.n(q),M=n(19),L=n(20);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var c=y()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return _()(this,n)}}var P=function(e){p()(n,e);var t=U(n);function n(e){var a;return u()(this,n),(a=t.call(this,e)).state={inAction:!1},a.handleActionClick=a.handleActionClick.bind(k()(a)),a}return b()(n,[{key:"handleActionClick",value:function(e){var t=this.props,n=t.action,a=t.actionCallback,c=t.noteId,i=t.triggerNoteAction,r=t.removeAllNotes,o=t.removeNote,s=t.onClick,l=e.target.href||"",m=!0;l.length&&!l.startsWith(L.a)&&(e.preventDefault(),m=!1,window.open(l,"_blank")),n?this.setState({inAction:m},(function(){i(c,n.id),s&&s()})):(c?o(c):r(),a(!0))}},{key:"render",value:function(){var e=this.props,t=e.action,n=e.dismiss,a=e.label;return Object(i.createElement)(x.a,{isSecondary:!0,isBusy:this.state.inAction,disabled:this.state.inAction,href:t&&t.url&&t.url.length?t.url:void 0,onClick:this.handleActionClick},n?a:t.label)}}]),n}(i.Component);P.propTypes={noteId:O.a.number,label:O.a.string,dismiss:O.a.bool,actionCallback:O.a.func,action:O.a.shape({id:O.a.number.isRequired,url:O.a.string,label:O.a.string.isRequired,primary:O.a.bool.isRequired}),onClick:O.a.func};var B=Object(o.a)(Object(M.withDispatch)((function(e){var t=e("wc-api");return{removeAllNotes:t.removeAllNotes,removeNote:t.removeNote,triggerNoteAction:t.triggerNoteAction}})))(P),F=n(766),I=n(7),z=n.n(I),V=n(64),H=(n(783),n(55)),W=n(275);function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var c=y()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return _()(this,n)}}var G=function(e){p()(n,e);var t=Y(n);function n(e){var a;return u()(this,n),(a=t.call(this,e)).onActionClicked=function(e){e.actioned_text&&a.setState({clickedActionText:e.actioned_text})},a.onVisible=a.onVisible.bind(k()(a)),a.hasBeenSeen=!1,a.state={isDismissModalOpen:!1,dismissType:null,clickedActionText:null},a.openDismissModal=a.openDismissModal.bind(k()(a)),a.closeDismissModal=a.closeDismissModal.bind(k()(a)),a.bodyNotificationRef=Object(i.createRef)(),a.screen=Object(W.a)(),a}return b()(n,[{key:"componentDidMount",value:function(){var e=this;this.bodyNotificationRef.current&&this.bodyNotificationRef.current.addEventListener("click",(function(t){return e.handleBodyClick(t,e.props)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.bodyNotificationRef.current&&this.bodyNotificationRef.current.removeEventListener("click",(function(t){return e.handleBodyClick(t,e.props)}))}},{key:"handleBodyClick",value:function(e,t){var n=e.target.href;if(n){var a=t.note;Object(V.b)("wcadmin_inbox_action_click",{note_name:a.name,note_title:a.title,note_content_inner_link:n})}}},{key:"onVisible",value:function(e){if(e&&!this.hasBeenSeen){var t=this.props.note;Object(V.b)("inbox_note_view",{note_content:t.content,note_name:t.name,note_title:t.title,note_type:t.type,screen:this.screen}),this.hasBeenSeen=!0}}},{key:"openDismissModal",value:function(e,t){this.setState({isDismissModalOpen:!0,dismissType:e}),t()}},{key:"closeDismissModal",value:function(e){var t=this.state.dismissType,n=this.props.note,a="all"===t;Object(V.b)("inbox_action_dismiss",{note_name:n.name,note_title:n.title,note_name_dismiss_all:a,note_name_dismiss_confirmation:e||!1,screen:this.screen}),this.setState({isDismissModalOpen:!1})}},{key:"handleBlur",value:function(e,t){var n=e.relatedTarget?e.relatedTarget:document.activeElement;!!n&&["woocommerce-admin-dismiss-notification","components-popover__content"].some((function(e){return n.className.includes(e)}))?e.preventDefault():t()}},{key:"renderDismissButton",value:function(){var e=this;return this.state.clickedActionText?null:Object(i.createElement)(D.a,{contentClassName:"woocommerce-admin-dismiss-dropdown",position:"bottom right",renderToggle:function(t){var n=t.onClose,a=t.onToggle;return Object(i.createElement)(x.a,{isTertiary:!0,onClick:a,onBlur:function(t){return e.handleBlur(t,n)}},Object(r.__)("Dismiss",'woocommerce'))},focusOnMount:!1,popoverProps:{noArrow:!0},renderContent:function(t){var n=t.onToggle;return Object(i.createElement)("ul",null,Object(i.createElement)("li",null,Object(i.createElement)(x.a,{className:"woocommerce-admin-dismiss-notification",onClick:function(){return e.openDismissModal("this",n)}},Object(r.__)("Dismiss this message",'woocommerce'))),Object(i.createElement)("li",null,Object(i.createElement)(x.a,{className:"woocommerce-admin-dismiss-notification",onClick:function(){return e.openDismissModal("all",n)}},Object(r.__)("Dismiss all messages",'woocommerce'))))}})}},{key:"getDismissConfirmationButton",value:function(){var e=this.props.note,t=this.state.dismissType;return Object(i.createElement)(B,{key:e.id,noteId:"all"===t?null:e.id,label:Object(r.__)("Yes, I'm sure",'woocommerce'),actionCallback:this.closeDismissModal,dismiss:!0,screen:this.screen})}},{key:"renderDismissConfirmationModal",value:function(){var e=this;return Object(i.createElement)(A.a,{title:Object(i.createElement)(i.Fragment,null,Object(r.__)("Are you sure?",'woocommerce')),onRequestClose:function(){return e.closeDismissModal()},className:"woocommerce-inbox-dismiss-confirmation_modal"},Object(i.createElement)("div",{className:"woocommerce-inbox-dismiss-confirmation_wrapper"},Object(i.createElement)("p",null,Object(r.__)("Dismissed messages cannot be viewed again",'woocommerce')),Object(i.createElement)("div",{className:"woocommerce-inbox-dismiss-confirmation_buttons"},Object(i.createElement)(x.a,{isSecondary:!0,onClick:function(){return e.closeDismissModal()}},Object(r.__)("Cancel",'woocommerce')),this.getDismissConfirmationButton())))}},{key:"renderActions",value:function(e){var t=this,n=e.actions,a=e.id,c=this.state.clickedActionText;return c||(n?Object(i.createElement)(i.Fragment,null,n.map((function(e,n){return Object(i.createElement)(B,{key:n,noteId:a,action:e,onClick:function(){return t.onActionClicked(e)}})}))):void 0)}},{key:"render",value:function(){var e=this.props,t=e.lastRead,n=e.note,a=this.state.isDismissModalOpen,c=n.content,r=n.date_created,o=n.date_created_gmt,s=n.image,l=n.is_deleted,m=n.layout,u=n.status,d=n.title;if(l)return null;var b=!t||!o||new Date(o+"Z").getTime()>t,f=r,p="plain"!==m&&""!==m,v=z()("woocommerce-inbox-message",m,{"message-is-unread":b&&"unactioned"===u});return Object(i.createElement)(T.a,{onChange:this.onVisible},Object(i.createElement)("section",{className:v},p&&Object(i.createElement)("div",{className:"woocommerce-inbox-message__image"},Object(i.createElement)("img",{src:s,alt:""})),Object(i.createElement)("div",{className:"woocommerce-inbox-message__wrapper"},Object(i.createElement)("div",{className:"woocommerce-inbox-message__content"},f&&Object(i.createElement)("span",{className:"woocommerce-inbox-message__date"},S.a.utc(f).fromNow()),Object(i.createElement)(H.H,{className:"woocommerce-inbox-message__title"},d),Object(i.createElement)(H.Section,{className:"woocommerce-inbox-message__text"},Object(i.createElement)("span",{dangerouslySetInnerHTML:Object(F.a)(c),ref:this.bodyNotificationRef}))),Object(i.createElement)("div",{className:"woocommerce-inbox-message__actions"},this.renderActions(n),this.renderDismissButton())),a&&this.renderDismissConfirmationModal()))}}]),n}(i.Component);G.propTypes={note:O.a.shape({id:O.a.number,status:O.a.string,title:O.a.string,content:O.a.string,date_created:O.a.string,date_created_gmt:O.a.string,actions:O.a.arrayOf(O.a.shape({id:O.a.number.isRequired,url:O.a.string,label:O.a.string.isRequired,primary:O.a.bool.isRequired})),layout:O.a.string,image:O.a.string,is_deleted:O.a.bool}),lastRead:O.a.number};var J=G,Z=n(30),K=n(104),Q=n(276),X=function(e){var t=e.hasNotes,n=e.isDismissUndoRequesting,a=e.isDismissAllUndoRequesting,c=e.lastRead,o=e.notes;if(!a)return t?Object.keys(o).map((function(e){return o[e]})).map((function(e){return n===e.id?Object(i.createElement)(E,{className:"banner message-is-unread",key:e.id}):Object(i.createElement)(J,{key:e.id,note:e,lastRead:c})})):Object(i.createElement)(l.a,{className:"woocommerce-empty-activity-card",title:Object(r.__)("Your inbox is empty",'woocommerce'),icon:!1},Object(r.__)("As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!",'woocommerce'))};t.default=Object(o.a)(Object(K.a)((function(e){var t=e("wc-api"),n=t.getNotes,a=t.getNotesError,c=t.isGetNotesRequesting,i=t.getUndoDismissRequesting,r={page:1,per_page:Z.d.pageSize,status:"unactioned",type:Z.d.noteTypes,orderby:"date",order:"desc",_fields:["id","name","title","content","type","status","actions","date_created","date_created_gmt","layout","image","is_deleted"]},o=n(r),s=Boolean(a(r)),l=c(r),m=i();return{notes:o,isError:s,isRequesting:l,isUndoRequesting:m.isUndoRequesting,isDismissUndoRequesting:m.isDismissUndoRequesting,isDismissAllUndoRequesting:m.isDismissAllUndoRequesting}})))((function(e){var t=e.isError,n=e.isPanelEmpty,a=e.isRequesting,o=e.isUndoRequesting,l=e.isDismissAllUndoRequesting,m=e.isDismissUndoRequesting,u=e.notes,d=Object(s.useUserPreferences)(),b=d.updateUserPreferences,f=c()(d,["updateUserPreferences"]).activity_panel_inbox_last_read;if(Object(i.useEffect)((function(){var e=Date.now();return function(){b({activity_panel_inbox_last_read:e})}}),[]),t){var p=Object(r.__)("There was an error getting your inbox. Please try again.",'woocommerce'),v=Object(r.__)("Reload",'woocommerce');return Object(i.createElement)(i.Fragment,null,Object(i.createElement)(H.EmptyContent,{title:p,actionLabel:v,actionURL:null,actionCallback:function(){window.location.reload()}}))}var _=Object(Q.b)(u),h=_||a||o;return n&&n(!_&&!h),Object(i.createElement)(i.Fragment,null,h&&Object(i.createElement)(N.a,{title:Object(r.__)("Inbox",'woocommerce'),subtitle:Object(r.__)("Insights and growth tips for your business",'woocommerce'),unreadMessages:Object(Q.a)(u,f)}),Object(i.createElement)("div",{className:"woocommerce-homepage-notes-wrapper"},(a||l)&&Object(i.createElement)(H.Section,null,Object(i.createElement)(E,{className:"banner message-is-unread"})),Object(i.createElement)(H.Section,null,!a&&!l&&X({hasNotes:_,isDismissUndoRequesting:m,isDismissAllUndoRequesting:l,lastRead:f,notes:u}))))}))},932:function(e,t,n){"use strict";n.r(t);var a=n(42),c=n.n(a),i=n(41),r=n.n(i),o=n(43),s=n.n(o),l=n(47),m=n.n(l),u=n(28),d=n.n(u),b=n(0),f=n(3),p=n(7),v=n.n(p),_=n(69),h=n(92),y=n.n(h),g=n(36),O=n.n(g),j=n(2),w=n(1),E=n.n(w),N=n(55),R=n(20),k=n(770),D=n(767),x=n(30),A=n(766),C=n(104),T=n(64);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var c=d()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return m()(this,n)}}var S=function(e){s()(n,e);var t=q(n);function n(){var e;return c()(this,n),(e=t.call(this)).mountTime=(new Date).getTime(),e}return r()(n,[{key:"renderReview",value:function(e,t){var n=t.lastRead,a=e&&e._embedded&&e._embedded.up&&e._embedded.up[0]||null;if(Object(j.isNull)(a))return null;var c=O()({mixedString:Object(f.sprintf)(Object(f.__)("{{productLink}}%s{{/productLink}} reviewed by {{authorLink}}%s{{/authorLink}}",'woocommerce'),a.name,e.reviewer),components:{productLink:Object(b.createElement)(N.Link,{href:a.permalink,type:"external"}),authorLink:Object(b.createElement)(N.Link,{href:"mailto:"+e.reviewer_email,type:"external"})}}),i=Object(b.createElement)(b.Fragment,null,Object(b.createElement)(N.ReviewRating,{review:e}),e.verified&&Object(b.createElement)("span",{className:"woocommerce-review-activity-card__verified"},Object(b.createElement)(y.a,{icon:"checkmark",size:18}),Object(f.__)("Verified customer",'woocommerce'))),r=Object(j.get)(a,["images",0])||Object(j.get)(a,["image"]),o=v()("woocommerce-review-activity-card__image-overlay__product",{"is-placeholder":!r||!r.src}),s=Object(b.createElement)("div",{className:"woocommerce-review-activity-card__image-overlay"},Object(b.createElement)(N.Gravatar,{user:e.reviewer_email,size:24}),Object(b.createElement)("div",{className:o},Object(b.createElement)(N.ProductImage,{product:a}))),l={date:e.date_created_gmt,status:e.status},m=Object(b.createElement)(_.a,{isSecondary:!0,onClick:function(){return Object(T.b)("review_manage_click",l)},href:Object(R.f)("comment.php?action=editcomment&c="+e.id)},Object(f.__)("Manage",'woocommerce'));return Object(b.createElement)(k.a,{className:"woocommerce-review-activity-card",key:e.id,title:c,subtitle:i,date:e.date_created_gmt,icon:s,actions:m,unread:"hold"===e.status||!n||!e.date_created_gmt||new Date(e.date_created_gmt+"Z").getTime()>n},Object(b.createElement)("span",{dangerouslySetInnerHTML:Object(A.a)(e.review)}))}},{key:"renderEmptyMessage",value:function(){var e=this.props.lastApprovedReviewTime,t=Object(f.__)("You have no reviews to moderate",'woocommerce'),n="",a="",c="",i="";if(e){((new Date).getTime()-e)/864e5>30?(n="https://woocommerce.com/posts/reviews-woocommerce-best-practices/",a="_blank",c=Object(f.__)("Learn more",'woocommerce'),i=Object(b.createElement)(b.Fragment,null,Object(b.createElement)("p",null,Object(f.__)("We noticed that it's been a while since your products had any reviews.",'woocommerce')),Object(b.createElement)("p",null,Object(f.__)("Take some time to learn about best practices for collecting and using your reviews.",'woocommerce')))):(n=Object(R.f)("edit-comments.php?comment_type=review"),c=Object(f.__)("View all Reviews",'woocommerce'),i=Object(b.createElement)("p",null,Object(f.__)("Awesome, you've moderated all of your product reviews. How about responding to some of those negative reviews?",'woocommerce')))}else n="https://woocommerce.com/posts/reviews-woocommerce-best-practices/",a="_blank",c=Object(f.__)("Learn more",'woocommerce'),i=Object(b.createElement)(b.Fragment,null,Object(b.createElement)("p",null,Object(f.__)("Your customers haven't started reviewing your products.",'woocommerce')),Object(b.createElement)("p",null,Object(f.__)("Take some time to learn about best practices for collecting and using your reviews.",'woocommerce')));return Object(b.createElement)(k.a,{className:"woocommerce-empty-activity-card",title:t,icon:Object(b.createElement)(y.a,{icon:"time",size:48}),actions:Object(b.createElement)(_.a,{href:n,target:a,isSecondary:!0},c)},i)}},{key:"render",value:function(){var e=this,t=this.props,n=t.isError,a=t.isRequesting,c=t.reviews;if(n){var i=Object(f.__)("There was an error getting your reviews. Please try again.",'woocommerce'),r=Object(f.__)("Reload",'woocommerce');return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(N.EmptyContent,{title:i,actionLabel:r,actionURL:null,actionCallback:function(){window.location.reload()}}))}var o=a||c.length?Object(f.__)("Reviews",'woocommerce'):Object(f.__)("No reviews to moderate",'woocommerce');return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(D.a,{title:o}),Object(b.createElement)(N.Section,null,a?Object(b.createElement)(k.b,{className:"woocommerce-review-activity-card",hasAction:!0,hasDate:!0,lines:2}):Object(b.createElement)(b.Fragment,null,c.length?c.map((function(t){return e.renderReview(t,e.props)})):this.renderEmptyMessage())))}}]),n}(b.Component);S.propTypes={reviews:E.a.array.isRequired,isError:E.a.bool,isRequesting:E.a.bool},S.defaultProps={reviews:[],isError:!1,isRequesting:!1},t.default=Object(C.a)((function(e,t){var n=t.hasUnapprovedReviews,a=e("wc-api"),c=a.getReviews,i=a.getReviewsError,r=a.isGetReviewsRequesting,o=[],s=!1,l=!1,m=null;if(n){var u={page:1,per_page:x.d.pageSize,status:"hold",_embed:1};o=c(u),s=Boolean(i(u)),l=r(u)}else{var d={page:1,per_page:1,status:"approved",_embed:1},b=c(d);if(b.length){var f=b[0];if(f.date_created_gmt)m=new Date(f.date_created_gmt).getTime()}s=Boolean(i(d)),l=r(d)}return{reviews:o,isError:s,isRequesting:l,lastApprovedReviewTime:m}}))(S)}}]);