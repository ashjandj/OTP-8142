define('quote_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"duedate") || (depth0 != null ? compilerNameLookup(depth0,"duedate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duedate","hash":{},"data":data,"loc":{"start":{"line":25,"column":69},"end":{"line":25,"column":80}}}) : helper)))
    + "</span>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":27,"column":7},"end":{"line":33,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "								<i class=\"quote-details-header-info-expiration-date-icon-overdue\"></i>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isCloseOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":8},"end":{"line":32,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "									<i class=\"quote-details-header-info-expiration-date-icon-closeoverdue\"></i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Not specified",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":69},"end":{"line":35,"column":98}}}))
    + "</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"quote-details-header-info-status\">\n						<span class=\"quote-details-header-label-status\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":54},"end":{"line":42,"column":78}}}))
    + "</span>\n						<span class=\"quote-details-header-value-status\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"entityStatusName") || (depth0 != null ? compilerNameLookup(depth0,"entityStatusName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"entityStatusName","hash":{},"data":data,"loc":{"start":{"line":43,"column":54},"end":{"line":43,"column":74}}}) : helper)))
    + "</span>\n					</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"13":function(container,depth0,helpers,partials,data) {
    return "in";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-comments\" aria-expanded=\"false\" aria-controls=\"#quote-comments\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My comments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":75,"column":8},"end":{"line":75,"column":35}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-comments\" role=\"tabpanel\" data-target=\"quote-comments\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-comments-row\">\n									"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"memo") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":83,"column":9},"end":{"line":83,"column":28}}}))
    + "\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-billing-info\" aria-expanded=\"false\" aria-controls=\"#quote-billing-info\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":95,"column":8},"end":{"line":95,"column":43}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-billing-info\" role=\"tabpanel\" data-target=\"quote-billing-info\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-billing-row\">\n									<div class=\"quote-details-billing-info-card\">\n										<h5 class=\"quote-details-billing-info-card-title\">\n											"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Bill to:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":104,"column":11},"end":{"line":104,"column":35}}}))
    + "\n										</h5>\n										<div data-view=\"Billing.Address\"></div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\n\n						<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-messages\" aria-expanded=\"false\" aria-controls=\"#quote-messages\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Message from Sales Representative",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":120,"column":8},"end":{"line":120,"column":57}}}))
    + "\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-messages\" role=\"tabpanel\" data-target=\"quote-messages\">\n							<div class=\"quote-details-accordion-container\">\n								<div class=\"quote-details-message-row\">\n								"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"message") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":128,"column":8},"end":{"line":128,"column":30}}}))
    + "\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "						<small class=\"quote-details-disclaimer-message\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong>. For additional information, send an email to <strong>$(2)</strong>.",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":137,"column":54},"end":{"line":137,"column":259}}}))
    + "</small>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						<small class=\"quote-details-disclaimer-message\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":139,"column":54},"end":{"line":139,"column":70}}}) : helper))) != null ? stack1 : "")
    + "</small>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-discount\">\n								"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias2,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":164,"column":7},"end":{"line":164,"column":31}}}))
    + "\n						</p>\n						<div class=\"quote-details-summary-grid\">\n							<div class=\"quote-details-summary-amount-discount-text-success\">\n								<span class=\"quote-details-summary-amount-discount-code\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,true,{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":169,"column":8},"end":{"line":171,"column":15}}})) != null ? stack1 : "")
    + "								</span>\n							</div>\n						</div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"discount") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + ")\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-promo-code\">\n								"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discountrate_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Promo Code Applied",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":182,"column":7},"end":{"line":182,"column":41}}}))
    + "\n						</p>\n						<div class=\"quote-details-summary-grid\">\n							<div class=\"quote-details-summary-promocode-text-success\">\n								<span class=\"quote-details-summary-promocode-code\">#"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"promocode") : stack1)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "</span>\n							</div>\n						</div>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-handling-cost-formatted\">\n							"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Handling",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":203,"column":6},"end":{"line":203,"column":30}}}))
    + "\n					</p>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":227,"column":6},"end":{"line":255,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermission") : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":257,"column":6},"end":{"line":259,"column":13}}})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<div data-type=\"quote-details-and-order-msg-placeholder\">\n								<div class=\"quote-details-msg\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermissionAndHasErrors") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":230,"column":9},"end":{"line":237,"column":16}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":239,"column":9},"end":{"line":243,"column":16}}})) != null ? stack1 : "")
    + "								</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftCertificateMessage") : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":246,"column":8},"end":{"line":253,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"To complete this quote, the following information is needed:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":231,"column":13},"end":{"line":231,"column":89}}}))
    + "</p>\n										<ul>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"purchaseValidationErrors") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":233,"column":11},"end":{"line":235,"column":20}}})) != null ? stack1 : "")
    + "										</ul>\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "												<li>- "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To place the order please contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":240,"column":13},"end":{"line":240,"column":192}}}))
    + "</p>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "										<p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimerSummary") || (depth0 != null ? compilerNameLookup(depth0,"disclaimerSummary") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimerSummary","hash":{},"data":data,"loc":{"start":{"line":242,"column":13},"end":{"line":242,"column":36}}}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"41":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"quote-details-msg-certificate\">\n										<p>\n											<i class=\"quote-details-msg-certificate-icon\"></i>\n											"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate not allowed",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":250,"column":11},"end":{"line":250,"column":55}}}))
    + "\n										</p>\n									</div>\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewQuoteURL") || (depth0 != null ? compilerNameLookup(depth0,"reviewQuoteURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"reviewQuoteURL","hash":{},"data":data,"loc":{"start":{"line":258,"column":16},"end":{"line":258,"column":34}}}) : helper)))
    + "\" class=\"quote-details-button-review-and-order\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":258,"column":82},"end":{"line":258,"column":150}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Review and Place Order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":258,"column":151},"end":{"line":258,"column":189}}}))
    + "</a>\n";
},"44":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", alias5=container.lambda;

  return "<a href=\"/quotes\" class=\"quote-details-header-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":56},"end":{"line":1,"column":91}}}))
    + "</a>\n<section class=\"quote-details\">\n	<div class=\"quote-details-view\">\n		<header>\n			<h2 class=\"quote-details-header-title\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quote ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":26}}}))
    + "\n				<span class=\"quote-details-quote-id\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranid") || (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranid","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":51}}}) : helper)))
    + "</span>\n				<span class=\"quote-details-header-amount-total\">\n					"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"quoteTotalFormatted") || (depth0 != null ? compilerNameLookup(depth0,"quoteTotalFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"quoteTotalFormatted","hash":{},"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":9,"column":28}}}) : helper)))
    + "\n				</span>\n			</h2>\n		</header>\n\n		<!--GENERATE HEADER -->\n		<div class=\"quote-details-header-information\">\n			<div class=\"quote-details-row\">\n				<div class=\"quote-details-header-col-left\">\n					<p class=\"quote-details-header-info-request-date\">\n						<span class=\"quote-details-header-label-request-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":60},"end":{"line":19,"column":90}}}))
    + "</span>\n						<span class=\"quote-details-header-value-date\">"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span>\n					</p>\n					<p class=\"quote-details-header-info-expiration-date\">\n						<span class=\"quote-details-header-info-expiration-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Expiration date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":68},"end":{"line":23,"column":102}}}))
    + "</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDuedate") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "					</p>\n				</div>\n				<div class=\"quote-details-header-col-right\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuoteStatus") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":45,"column":11}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n\n		<!-- CONTENT -->\n		<div class=\"quote-details-row\">\n			<div class=\"quote-details-content-col\">\n\n				<div class=\"quote-details-accordion-divider\">\n					<div class=\"quote-details-accordion-head\">\n							<a class=\"quote-details-accordion-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":53},"end":{"line":56,"column":104}}})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#quote-products\" aria-expanded=\"true\" aria-controls=\"#quote-products\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items ($(0))",(depth0 != null ? compilerNameLookup(depth0,"lineItemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":57,"column":8},"end":{"line":57,"column":52}}}))
    + "\n							<i class=\"quote-details-accordion-toggle-icon\"></i>\n						</a>\n					</div>\n\n						<div class=\"quote-details-accordion-body collapse  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":57},"end":{"line":62,"column":93}}})) != null ? stack1 : "")
    + "\" id=\"quote-products\" role=\"tabpanel\" data-target=\"#quote-products\">\n						<table class=\"quote-details-products-table lg2sm-first\">\n							<tbody data-view=\"Items.Collection\"></tbody>\n						</table>\n					</div>\n				</div>\n\n				<!-- COMMENTS/MEMO -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":4},"end":{"line":88,"column":11}}})) != null ? stack1 : "")
    + "\n				<!-- BILLADDRESS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":4},"end":{"line":112,"column":11}}})) != null ? stack1 : "")
    + "\n				<!-- MESSAGE -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":4},"end":{"line":133,"column":11}}})) != null ? stack1 : "")
    + "\n				<div class=\"quote-details-disclaimer-bottom-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":136,"column":5},"end":{"line":140,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n\n			<!-- SUMMARY -->\n			<div class=\"quote-details-summary-col\">\n				<div class=\"quote-details-summary-container\">\n					<h3 class=\"quote-details-summary-title\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Summary",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":148,"column":6},"end":{"line":148,"column":29}}}))
    + "\n					</h3>\n					<div class=\"quote-details-summary-subtotal\">\n						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-subtotal\">\n								"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":155,"column":7},"end":{"line":155,"column":31}}}))
    + "\n						</p>\n					</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":5},"end":{"line":175,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":5},"end":{"line":189,"column":12}}})) != null ? stack1 : "")
    + "\n					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-amount-shipping\">\n							"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":195,"column":6},"end":{"line":195,"column":30}}}))
    + "\n					</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":198,"column":5},"end":{"line":205,"column":12}}})) != null ? stack1 : "")
    + "\n					<p class=\"quote-details-summary-grid-float\">\n						<span class=\"quote-details-summary-amount-tax\">\n							"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + "\n						</span>\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":211,"column":6},"end":{"line":211,"column":31}}}))
    + "\n					</p>\n\n					<div class=\"quote-details-summary-total\">\n						<p class=\"quote-details-summary-grid-float\">\n							<span class=\"quote-details-summary-amount-total\">\n								"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":219,"column":7},"end":{"line":219,"column":28}}}))
    + "\n						</p>\n					</div>\n\n				</div>\n				<div class=\"quote-details-row-fluid\">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":226,"column":5},"end":{"line":260,"column":12}}})) != null ? stack1 : "")
    + "					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":261,"column":14},"end":{"line":261,"column":24}}}) : helper)))
    + "\" target=\"_blank\" class=\"quote-details-button-download-pdf\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"disableDownloadAsPDF") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":261,"column":84},"end":{"line":261,"column":127}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":261,"column":128},"end":{"line":261,"column":159}}}))
    + "</a>\n				</div>\n				<div class=\"quote-details-disclaimer-bottom\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":264,"column":5},"end":{"line":268,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</section>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_details'; return template;});