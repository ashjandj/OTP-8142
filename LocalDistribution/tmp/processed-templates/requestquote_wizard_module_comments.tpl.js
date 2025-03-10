define('requestquote_wizard_module_comments.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"requestquote-wizard-module-comments\">\n		<div class=\"requestquote-wizard-module-comments-box\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isReadOnly") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<h3 class=\"requestquote-wizard-module-comments-title\">\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":5},"end":{"line":6,"column":14}}}) : helper)))
    + "\n				</h3>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"requestquote-wizard-module-comments-box-message\">\n					<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"memo") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":27}}}))
    + "</p>\n				</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "				<p>\n					<label>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Do you have any remarks or comments with this quote request?",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":15,"column":88}}}))
    + "</label>\n					<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1," (Optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":38}}}))
    + "</span>\n				</p>\n				<textarea data-action=\"validate-textarea-length\" maxlength=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"maxLength","hash":{},"data":data,"loc":{"start":{"line":18,"column":64},"end":{"line":18,"column":77}}}) : helper)))
    + "\" data-type=\"memo-input\" class=\"requestquote-wizard-module-comments-box-textarea\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"memo") || (depth0 != null ? compilerNameLookup(depth0,"memo") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"memo","hash":{},"data":data,"loc":{"start":{"line":18,"column":159},"end":{"line":18,"column":167}}}) : helper)))
    + "</textarea>\n				<small class=\"requestquote-wizard-module-comments-box-textarea-length\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Maximum 999 characters.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":75},"end":{"line":19,"column":114}}}))
    + "</small>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hideContent") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_module_comments'; return template;});