jQuery(function(t){if("undefined"==typeof woocommerce_params)return!1;t("#add_payment_method").on("click init_add_payment_method",".payment_methods input.input-radio",function(){if(1<t(".payment_methods input.input-radio").length){var e=t("div.payment_box."+t(this).attr("ID"));t(this).is(":checked")&&!e.is(":visible")&&(t("div.payment_box").filter(":visible").slideUp(250),t(this).is(":checked")&&t("div.payment_box."+t(this).attr("ID")).slideDown(250))}else t("div.payment_box").show()}).find("input[name=payment_method]:checked").click(),t("#add_payment_method").submit(function(){t("#add_payment_method").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})}),t(document.body).trigger("init_add_payment_method")});