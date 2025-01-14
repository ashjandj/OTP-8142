define('product_details_options_selector.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"Pusher\" data-type=\"sc-pusher\" data-target=\"product-details-options\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"product-details-options-selector-content\" data-action=\"pushable\" data-id=\"product-details-options\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-details-options-selector-content-price\" data-view=\"Item.Price\"></div>\n\n			<div class=\"product-details-options-selector-content-stock\" data-view=\"Item.Stock\"></div>\n\n			<div data-view=\"StockDescription\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"product-details-options-selector-reference-container\">\n				<small>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Required",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":11},"end":{"line":18,"column":35}}}))
    + " <span class=\"product-details-options-selector-reference\">*</span></small>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"product-details-options-selector\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":8}}})) != null ? stack1 : "")
    + "\n	<div "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":138}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPusher") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequiredLabel") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n		<div data-view=\"Options.Collection\" class=\"product-details-options-selector-option-container\"></div>\n	</div>\n</div>\n\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_options_selector'; return template;});