define('requestquote_wizard_permission_error.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"requestquote-wizard-permission-error\">\n	<div class=\"requestquote-wizard-permission-error-header\">\n		<h1 class=\"requestquote-wizard-permission-error-header-title\">\n			"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":17}}}) : helper)))
    + "\n		</h1>\n	</div>\n	<div class=\"requestquote-wizard-permission-error-message\">\n		 <p class=\"requestquote-wizard-permission-error-message-disclaimer\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sorry, you don't have sufficient permissions to request a quote online. <br/> For immediate assistance <strong>call us at $(0)</strong> or email us to <strong>$(1)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":70},"end":{"line":8,"column":287}}}))
    + "</p>\n		<a href=\"/\" data-touchpoint=\"home\" class=\"requestquote-wizard-permission-error-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Go to Home Page",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":89},"end":{"line":9,"column":120}}}))
    + "</a>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_permission_error'; return template;});