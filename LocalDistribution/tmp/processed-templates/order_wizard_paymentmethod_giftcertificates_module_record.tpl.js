define('order_wizard_paymentmethod_giftcertificates_module_record.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing;

  return "<tr class=\"order-wizard-paymentmethod-giftcertificates-module-record-row\" data-gc-code=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "\">\n	<td class=\"order-wizard-paymentmethod-giftcertificates-module-record-gift-certificates\">\n		<span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Gift Certificate: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":80},"end":{"line":3,"column":114}}}))
    + "</span>\n		<div data-view=\"GiftCertificates\" class=\"order-wizard-paymentmethod-giftcertificates-module-record-value\"></div>\n	</td>\n	<td class=\"order-wizard-paymentmethod-giftcertificates-module-record-amount-applied\">\n		<span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Amount applied: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":80},"end":{"line":7,"column":112}}}))
    + "</span>\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"amountapplied_formatted") : stack1), depth0))
    + "</span>\n	</td>\n	<td class=\"order-wizard-paymentmethod-giftcertificates-module-record-remaining-balance\">\n		<span class=\"order-wizard-paymentmethod-giftcertificates-module-record-label\">"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Remaining balance: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":80},"end":{"line":11,"column":115}}}))
    + "</span>\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"amountremaining_formatted") : stack1), depth0))
    + "</span>\n	</td>\n	<td class=\"order-wizard-paymentmethod-giftcertificates-module-record-actions\">\n		<a class=\"order-wizard-paymentmethod-giftcertificates-module-record-actions-button\" href=\"#\" data-action=\"remove\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"giftcertificate") : depth0)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "\">\n			"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias4).call(alias3,"Remove",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":25}}}))
    + "\n		</a>\n	</td>\n</tr>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_paymentmethod_giftcertificates_module_record'; return template;});