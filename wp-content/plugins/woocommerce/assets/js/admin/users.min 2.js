jQuery(function(g){var m={states:null,init:function(){"undefined"!=typeof wc_users_params.countries&&(this.states=g.parseJSON(wc_users_params.countries.replace(/&quot;/g,'"'))),g(".js_field-country").selectWoo().change(this.change_country),g(".js_field-country").trigger("change",[!0]),g(document.body).on("change","select.js_field-state",this.change_state),g(document.body).on("click","button.js_copy-billing",this.copy_billing)},change_country:function(e,t){var a,n,o,i,c,s,l,r,p,d,u,h;void 0===t&&(t=!1),null!==m.states&&(n=(a=g(this)).val(),i=(o=a.parents(".form-table").find(":input.js_field-state")).parent(),c=o.attr("name"),s=o.attr("id"),l="woocommerce.stickState-"+n,r=a.data(l)?a.data(l):o.val(),p=o.attr("placeholder"),t&&a.data("woocommerce.stickState-"+n,r),i.show().find(".select2-container").remove(),g.isEmptyObject(m.states[n])?(h=g('<input type="text" />').prop("id",s).prop("name",c).prop("placeholder",p).addClass("js_field-state regular-text").val(r),o.replaceWith(h)):(d=m.states[n],u=g('<option value=""></option>').text(m.i18n_select_state_text),h=g('<select style="width: 25em;"></select>').prop("id",s).prop("name",c).prop("placeholder",p).addClass("js_field-state").append(u),g.each(d,function(e){var t=g("<option></option>").prop("value",e).text(d[e]);h.append(t)}),h.val(r),o.replaceWith(h),h.show().selectWoo().hide().change()),g(document.body).trigger("contry-change.woocommerce",[n,g(this).closest("div")]),g(document.body).trigger("country-change.woocommerce",[n,g(this).closest("div")]))},change_state:function(){var e=g(this),t=e.val(),a=e.parents(".form-table").find(":input.js_field-country"),n=a.val();a.data("woocommerce.stickState-"+n,t)},copy_billing:function(e){e.preventDefault(),g("#fieldset-billing").find("input, select").each(function(e,t){var a=t.name.replace(/^billing_/,"shipping_"),n=g('[name="'+a+'"]');n.length&&n.val(t.value).trigger("change")})}};m.init()});