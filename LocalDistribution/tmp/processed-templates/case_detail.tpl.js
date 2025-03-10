define('case_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"case-detail-reply-section\">\n						<button type=\"button\" class=\"case-detail-close-case-button\" data-action=\"close-case\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Close Case",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":91},"end":{"line":25,"column":117}}}))
    + "</button>\n					</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div class=\"case-detail-message-group-row\">\n						<div class=\"case-detail-message-date-section\">\n							<span class=\"case-detail-field-message-date\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":57,"column":52},"end":{"line":57,"column":60}}}) : helper)))
    + "</span>\n						</div>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":6},"end":{"line":70,"column":15}}})) != null ? stack1 : "")
    + "					</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<div class=\"case-detail-message-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":43},"end":{"line":60,"column":86}}})) != null ? stack1 : "")
    + "\">\n								<div class=\"case-detail-message\">\n									<span class=\"case-detail-field-message-author\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":62,"column":56},"end":{"line":62,"column":66}}}) : helper)))
    + "</span>\n									<span class=\"case-detail-field-message-field-message-time\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageDate") || (depth0 != null ? compilerNameLookup(depth0,"messageDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageDate","hash":{},"data":data,"loc":{"start":{"line":63,"column":70},"end":{"line":63,"column":85}}}) : helper)))
    + ")</span>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":9},"end":{"line":66,"column":16}}})) != null ? stack1 : "")
    + "								</div>\n								<p class=\"case-detail-field-message-text\">"
    + alias4((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":68,"column":50},"end":{"line":68,"column":69}}}))
    + "</p>\n							</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "sc-highlighted";
},"7":function(container,depth0,helpers,partials,data) {
    return "										<span class=\"case-detail-field-message-original\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"- Original case message",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":65,"column":59},"end":{"line":65,"column":98}}}))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<section class=\"case-detail\">\n	<header class=\"case-detail-title\">\n		<a href=\"/cases\" class=\"case-detail-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to Cases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":48},"end":{"line":3,"column":82}}}))
    + "</a>\n		<h2 class=\"case-detail-header-title\">\n			<span class=\"case-detail-field-number\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":56}}}) : helper)))
    + "</span>\n			<span class=\"case-detail-field-subject\"> "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</span>\n		</h2>\n	</header>\n\n	<div data-confirm-message class=\"case-detail-confirm-message\"></div>\n\n	<div data-type=\"alert-placeholder\"></div>\n\n	<div class=\"case-detail-header-information\">\n		<div class=\"case-detail-header-row\">\n			<div class=\"case-detail-header-col-left\">\n                <p><span class=\"case-detail-label-type\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Type of inquiry",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":56},"end":{"line":17,"column":88}}}))
    + ": </span> <span class=\"case-detail-value-type\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"category") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p>\n                <p><span class=\"case-detail-label-creation-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Creation date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":65},"end":{"line":18,"column":95}}}))
    + ": </span> <span class=\"case-detail-value-creation-date\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdDate") : stack1), depth0))
    + "</span></p>\n                <p><span class=\"case-detail-label-last-message-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Message:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":69},"end":{"line":19,"column":99}}}))
    + " </span> <span class=\"case-detail-value-last-message-date\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"lastMessageDate") : stack1), depth0))
    + "</span></p>\n			</div>\n			<div class=\"case-detail-header-col-right\">\n                <p class=\"case-detail-header-status-info\"><span class=\"case-detail-label-status\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":97},"end":{"line":22,"column":119}}}))
    + ": </span> <span class=\"case-detail-value-status\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"closeStatusId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n\n	<div class=\"case-detail-conversation-background\">\n		<form action=\"#\">\n				<div class=\"case-detail-reply-container\" data-validation=\"control-group\">\n					<label class=\"case-detail-reply-label\" for=\"reply\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reply with a message:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":56},"end":{"line":35,"column":93}}}))
    + "</label>\n					<span class=\"case-detail-controls\" data-validation=\"control\">\n						<textarea name=\"reply\" id=\"reply\" class=\"case-detail-reply-textarea\" rows=\"4\"></textarea>\n					</span>\n				</div>\n				<div class=\"case-detail-reply-section\">\n					<button type=\"submit\" class=\"case-detail-reply-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reply",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":41,"column":60},"end":{"line":41,"column":81}}}))
    + "</button>\n				</div>\n		</form>\n\n		<div class=\"case-detail-messages-accordion\">\n			<div class=\"case-detail-accordion-head\">\n				<a class=\"case-detail-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#response-messages\" aria-expanded=\"true\" aria-controls=\"response-messages\">\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Messages ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"messages_count") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":5},"end":{"line":48,"column":57}}}))
    + "\n					<i class=\"case-detail-accordion-toggle-icon\"></i>\n				</a>\n			</div>\n			<div class=\"case-detail-accordion-body collapse in\" id=\"response-messages\" role=\"tabpanel\" data-target=\"#response-messages\">\n				<div class=\"case-detail-accordion-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"grouped_messages") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":72,"column":13}}})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n	</div>\n\n\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'case_detail'; return template;});