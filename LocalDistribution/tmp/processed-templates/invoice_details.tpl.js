define('invoice_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<header>\n				<h2 class=\"invoice-details-invoice-title\">\n				 	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Invoice <span class=\"invoice-details-invoice-number\">#$(0)</span>",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":100}}}))
    + "\n					<span class=\"invoice-details-invoice-amount\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "					</span>\n				</h2>\n			</header>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "							<span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<p class=\"invoice-details-header-date-info\">\n						<span class=\"invoice-details-header-tranid-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Invoice: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":56},"end":{"line":24,"column":81}}}))
    + "</span>\n						<span class=\"invoice-details-header-tranid-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), depth0))
    + "</span>\n					</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "						<p class=\"invoice-details-header-created-from\">\n							<span class=\"invoice-details-header-created-from-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Created from: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":63},"end":{"line":34,"column":93}}}))
    + "</span>\n							 <a href=\"/purchases/view/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-header-created-from-value\">\n							 	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase #$(0)",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":9},"end":{"line":36,"column":64}}}))
    + "\n							 </a>\n						</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "                            <span class=\"invoice-details-header-due-date-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Due date:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":80},"end":{"line":42,"column":105}}}))
    + " </span>\n							<span class=\"invoice-details-header-due-date-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"dueDate") : stack1), depth0))
    + "</span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "                            <span class=\"invoice-details-header-due-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Due date:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":80},"end":{"line":45,"column":105}}}))
    + " </span>\n							<span class=\"invoice-details-header-due-date-value\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1," N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":59},"end":{"line":46,"column":79}}}))
    + "</span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":60,"column":56},"end":{"line":60,"column":79}}}))
    + "</span>\n							"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":63,"column":56},"end":{"line":63,"column":79}}}))
    + "</span>\n							"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"invoice-details-content-col\">\n					<div class=\"invoice-details-accordion-divider\">\n						<div class=\"invoice-details-accordion-head\">\n							<a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-details-products\" aria-expanded=\"true\" aria-controls=\"invoice-details-products\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":76,"column":191},"end":{"line":80,"column":14}}})) != null ? stack1 : "")
    + "							<i class=\"invoice-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n						<div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":58},"end":{"line":84,"column":94}}})) != null ? stack1 : "")
    + "\" id=\"invoice-details-products\" role=\"tabpanel\" data-target=\"#invoice-details-products\">\n							<div data-content=\"items-body\">\n									<table class=\"invoice-details-products-table lg2sm-first\">\n										<thead class=\"invoice-details-table-products-header\">\n											<th class=\"invoice-details-table-products-header-image\"></th>\n											<th class=\"invoice-details-table-products-header-product\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":69},"end":{"line":89,"column":92}}}))
    + "</th>\n											<th class=\"invoice-details-table-products-header-qty\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Qty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":90,"column":65},"end":{"line":90,"column":84}}}))
    + "</th>\n											<th class=\"invoice-details-table-products-header-unit-price\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Unit price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":91,"column":72},"end":{"line":91,"column":98}}}))
    + "</th>\n											<th class=\"invoice-details-table-products-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":92,"column":68},"end":{"line":92,"column":90}}}))
    + "</th>\n										</thead>\n										<tbody data-view=\"Items.Collection\"></tbody>\n									</table>\n							</div>\n						</div>\n					</div>\n\n\n					<!-- SALES REP -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRep") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":5},"end":{"line":136,"column":12}}})) != null ? stack1 : "")
    + "\n					<!-- BILLING -->\n					<div class=\"invoice-details-accordion-divider\">\n						<div class=\"invoice-details-accordion-head\">\n							<a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-billing\" aria-expanded=\"true\" aria-controls=\"invoice-billing\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":142,"column":8},"end":{"line":142,"column":31}}}))
    + "\n								<i class=\"invoice-details-accordion-toggle-icon\"></i>\n							</a>\n						</div>\n						<div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":146,"column":58},"end":{"line":146,"column":94}}})) != null ? stack1 : "")
    + "\" id=\"invoice-billing\" role=\"tabpanel\" data-target=\"#invoice-billing\">\n							<div class=\"invoice-details-accordion-container\">\n								<div class=\"invoice-details-row\">\n									<div class=\"invoice-details-info-card-grid\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":150,"column":10},"end":{"line":152,"column":17}}})) != null ? stack1 : "")
    + "									</div>\n									<div class=\"invoice-details-info-card-grid\">\n										<div class=\"invoice-details-info-card\">\n											<div class=\"invoice-details-info-card-terms-container\">\n												<p class=\"invoice-details-info-card-terms-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Terms:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":157,"column":61},"end":{"line":157,"column":83}}}))
    + "</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":158,"column":12},"end":{"line":162,"column":19}}})) != null ? stack1 : "")
    + "											</div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":165,"column":11},"end":{"line":170,"column":18}}})) != null ? stack1 : "")
    + "										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n									"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":77,"column":9},"end":{"line":77,"column":53}}}))
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":8},"end":{"line":79,"column":51}}}))
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "in";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"invoice-details-accordion-divider\">\n						<div class=\"invoice-details-accordion-head\">\n							<a class=\"invoice-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-salesrep\" aria-expanded=\"true\" aria-controls=\"invoice-salesrep\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sales Rep",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":106,"column":8},"end":{"line":106,"column":33}}}))
    + "\n								<i class=\"invoice-details-accordion-toggle-icon-secondary\"></i>\n							</a>\n						</div>\n						<div class=\"invoice-details-accordion-body collapse\" id=\"invoice-salesrep\" role=\"tabpanel\" data-target=\"#invoice-salesrep\">\n							<div class=\"invoice-details-accordion-container\">\n								<div class=\"invoice-details-row\">\n									<div class=\"invoice-details-info-card-grid\">\n										<div class=\"invoice-details-info-card\">\n											<p class=\"invoice-details-info-card-name-title\">"
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</p>\n											<p>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":116,"column":14},"end":{"line":116,"column":26}}}) : helper)))
    + "</p>\n										</div>\n									</div>\n									<div class=\"invoice-details-info-card-grid\">\n										<div class=\"invoice-details-info-card\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepPhone") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":10},"end":{"line":124,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepEmail") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":126,"column":10},"end":{"line":129,"column":17}}})) != null ? stack1 : "")
    + "										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "										<p class=\"invoice-details-info-card-tel-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Tel:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":122,"column":57},"end":{"line":122,"column":77}}}))
    + "</p>\n										<p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</p>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "											<p class=\"invoice-details-info-card-email-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":127,"column":60},"end":{"line":127,"column":82}}}))
    + "</p>\n											<p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</p>\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "											<div data-view=\"Billing.Address\"></div>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper;

  return "													<span> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"termsName","hash":{},"data":data,"loc":{"start":{"line":159,"column":20},"end":{"line":159,"column":33}}}) : helper)))
    + "</span>\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "													<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":161,"column":19},"end":{"line":161,"column":38}}}))
    + "</span>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "												<div class=\"invoice-details-info-card-memo-container\">\n													<p class=\"invoice-details-info-card-memo-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Memo:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":167,"column":61},"end":{"line":167,"column":82}}}))
    + "</p>\n													<span>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</span>\n												</div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col-modal";
},"40":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col";
},"42":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":194,"column":9},"end":{"line":194,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":194,"column":33},"end":{"line":194,"column":54}}}))
    + "\n";
},"44":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":196,"column":9},"end":{"line":196,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":196,"column":33},"end":{"line":196,"column":53}}}))
    + "\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<p class=\"invoice-details-summary-grid-float\">\n								<span class=\"invoice-details-summary-discount\">\n									"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + "\n								</span>\n									"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":206,"column":9},"end":{"line":206,"column":33}}}))
    + "\n							</p>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<p class=\"invoice-details-summary-grid-float\">\n								<span class=\"invoice-details-summary-gift-certificate\">\n									"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"giftcertapplied_formatted") : stack1), depth0))
    + "\n								</span>\n									"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":235,"column":9},"end":{"line":235,"column":41}}}))
    + "\n							</p>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "							<div class=\"invoice-details-summary-total-container\">\n								<p class=\"invoice-details-summary-grid-float\">\n									<span class=\"invoice-details-summary-subtotal\">\n										"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\n									</span>\n										"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":245,"column":10},"end":{"line":245,"column":31}}}))
    + "\n								</p>\n							</div>\n							<div class=\"invoice-details-adjustments-title\">\n								<h5>\n									"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Adjustments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":250,"column":9},"end":{"line":250,"column":36}}}))
    + "\n								</h5>\n							</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":253,"column":7},"end":{"line":265,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showCreditMemos") : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":267,"column":7},"end":{"line":279,"column":14}}})) != null ? stack1 : "")
    + "\n							<!-- DEPOSIT APPLICATIONS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showDepositApplications") : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":282,"column":7},"end":{"line":293,"column":14}}})) != null ? stack1 : "")
    + "\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								<!-- PAYMENTS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"payments") : depth0),{"name":"each","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":255,"column":8},"end":{"line":264,"column":17}}})) != null ? stack1 : "");
},"52":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "									<p class=\"invoice-details-summary-grid-float\">\n										<span class=\"invoice-details-summary-payment\">\n											("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":258,"column":12},"end":{"line":258,"column":32}}}) : helper)))
    + ")\n										</span>\n										<a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":260,"column":55},"end":{"line":260,"column":69}}}) : helper)))
    + "\" data-action=\"update-layout\">\n											"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":261,"column":11},"end":{"line":261,"column":47}}}))
    + "\n										</a>\n									</p>\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								<!-- CREDIT MEMOS -->\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"creditMemos") : depth0),{"name":"each","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":269,"column":8},"end":{"line":278,"column":17}}})) != null ? stack1 : "");
},"55":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "									<p class=\"invoice-details-summary-grid-float\">\n										<span class=\"invoice-details-summary-credit-memo\">\n											("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":272,"column":12},"end":{"line":272,"column":32}}}) : helper)))
    + ")\n										</span>\n										<a href=\"/transactionhistory/creditmemo/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":274,"column":50},"end":{"line":274,"column":64}}}) : helper)))
    + "\" data-action=\"update-layout\">\n											"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credit Memo #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":275,"column":11},"end":{"line":275,"column":51}}}))
    + "\n										</a>\n									</p>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"depositApplications") : depth0),{"name":"each","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":283,"column":8},"end":{"line":292,"column":17}}})) != null ? stack1 : "");
},"58":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "									<p class=\"invoice-details-summary-grid-float\">\n										<span class=\"invoice-details-summary-deposit\">\n											("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":286,"column":12},"end":{"line":286,"column":32}}}) : helper)))
    + ")\n										</span>\n										<a href=\"/transactionhistory/depositapplication/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":288,"column":58},"end":{"line":288,"column":72}}}) : helper)))
    + "\" data-action=\"update-layout\">\n											"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Deposit Applications #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":289,"column":11},"end":{"line":289,"column":60}}}))
    + "\n										</a>\n									</p>\n";
},"60":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<div class=\"invoice-details-button-make-a-payment-container\">\n							<a data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"makeAPaymentPermissions") || (depth0 != null ? compilerNameLookup(depth0,"makeAPaymentPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makeAPaymentPermissions","hash":{},"data":data,"loc":{"start":{"line":309,"column":28},"end":{"line":309,"column":55}}}) : helper)))
    + "\" href=\"/make-a-payment\" data-type=\"make-a-payment\" class=\"invoice-details-button-make-a-payment\">\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Make a Payment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":310,"column":8},"end":{"line":310,"column":38}}}))
    + "\n							</a>\n						</div>\n";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "						<a href=\"invoices/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-link-goto\" data-action=\"update-layout\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Go to detailed page",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":316,"column":108},"end":{"line":316,"column":143}}}))
    + "</a>\n						<a href=\"#\" class=\"invoice-details-button-close\" data-dismiss=\"modal\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Close",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":317,"column":76},"end":{"line":317,"column":97}}}))
    + "</a>\n";
},"64":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<a target=\"_blank\" class=\"invoice-details-button-download-as-pdf\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"donwloadPdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"donwloadPdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"donwloadPdfUrl","hash":{},"data":data,"loc":{"start":{"line":319,"column":78},"end":{"line":319,"column":96}}}) : helper)))
    + "\">\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":320,"column":7},"end":{"line":320,"column":38}}}))
    + "\n						</a>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<a href=\"/returns/new/invoice/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-button-request\" data-permissions=\"transactions.tranRtnAuth.2\">\n 	 			        	"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Request Return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":326,"column":15},"end":{"line":326,"column":45}}}))
    + "\n						</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<a href=\"/invoices\" class=\"invoice-details-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":90}}}))
    + "</a>\n<section class=\"invoice-details\">\n	<div class=\"content invoice-details-view\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\n		<div class=\"invoice-details-header-information\">\n			<div class=\"invoice-details-header-row\">\n				<div class=\"invoice-details-header-col-left\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":5},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "					<p class=\"invoice-details-header-date-info\">\n                        <span class=\"invoice-details-header-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoice Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":72},"end":{"line":29,"column":100}}}))
    + ": </span>\n						<span class=\"invoice-details-header-date-value\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span>\n					</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCreatedFrom") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":39,"column":12}}})) != null ? stack1 : "")
    + "					<p class=\"invoice-details-header-due-date-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDueDate") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":47,"column":13}}})) != null ? stack1 : "")
    + "\n					</p>\n				</div>\n				<div class=\"invoice-details-header-col-right\">\n					<p class=\"invoice-details-header-status-info\">\n                        <span class=\"invoice-details-header-status-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":74},"end":{"line":53,"column":97}}}))
    + " </span>\n						<span class=\"invoice-details-header-status-value\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span>\n					</p>\n				</div>\n				<div class=\"invoice-details-header-amount\">\n					<p class=\"invoice-details-header-amount-info\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":65,"column":13}}})) != null ? stack1 : "")
    + "					</p>\n				</div>\n			</div>\n		</div>\n\n		<div class=\"invoice-details-row\" name=\"invoice-content-layout\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":3},"end":{"line":178,"column":14}}})) != null ? stack1 : "")
    + "\n\n			<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":181,"column":15},"end":{"line":181,"column":109}}})) != null ? stack1 : "")
    + "\" name=\"summary-container\">\n				<div class=\"invoice-details-row-fluid\">\n					<div class=\"invoice-details-summary-container\">\n						<h3 class=\"invoice-details-summary-title\">\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Summary",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":185,"column":7},"end":{"line":185,"column":30}}}))
    + "\n						</h3>\n						<p class=\"invoice-details-summary-grid-float\">\n							<span class=\"invoice-details-summary-items-number\">\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":191,"column":7},"end":{"line":191,"column":31}}}))
    + "\n							<span class=\"invoice-details-summary-subtotal-items\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":193,"column":8},"end":{"line":197,"column":15}}})) != null ? stack1 : "")
    + "							</span>\n						</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscountSummary") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":201,"column":6},"end":{"line":208,"column":13}}})) != null ? stack1 : "")
    + "\n						<p class=\"invoice-details-summary-grid-float\">\n							<span class=\"invoice-details-summary-tax-total\">\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + "\n							</span>\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":214,"column":8},"end":{"line":214,"column":33}}}))
    + "\n						</p>\n\n						<p class=\"invoice-details-summary-grid-float\">\n							<span class=\"invoice-details-summary-shipping-cost\">\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + "\n							</span>\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":221,"column":8},"end":{"line":221,"column":32}}}))
    + "\n						</p>\n						<p class=\"invoice-details-summary-grid-float\">\n							<span class=\"invoice-details-summary-handling-value\">\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + "\n							</span>\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Handling",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":227,"column":7},"end":{"line":227,"column":31}}}))
    + "\n						</p>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftcerticate") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":230,"column":6},"end":{"line":237,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAdjustments") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":239,"column":6},"end":{"line":295,"column":13}}})) != null ? stack1 : "")
    + "\n						<p class=\"invoice-details-summary-grid-float\">\n							<span class=\"invoice-details-summary-amount-due\">\n								"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "\n							</span>\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount Due",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":301,"column":8},"end":{"line":301,"column":34}}}))
    + "\n						</p>\n					</div>\n				</div>\n\n				<div class=\"invoice-details-buttons-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":307,"column":5},"end":{"line":313,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":315,"column":5},"end":{"line":322,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequestReturnButton") : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":324,"column":5},"end":{"line":328,"column":12}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n</section>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'invoice_details'; return template;});