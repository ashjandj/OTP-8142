define('itemssearcher_item.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing;

  return "	<a class=\"itemssearcher-item-results\" data-hashtag=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_url") : stack1), depth0))
    + "\" data-touchpoint=\"home\">\n	    <div class=\"itemssearcher-item-results-image\">\n	        <img data-loader=\"false\" class=\"typeahead-image\" src=\""
    + alias2((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":4,"column":63},"end":{"line":4,"column":111}}}))
    + "\" alt=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_thumbnail") : stack1)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\n	    </div>\n	    <div class=\"itemssearcher-item-results-content\">\n	        <div class=\"itemssearcher-item-results-title\">\n	            "
    + alias2((compilerNameLookup(helpers,"highlightKeyword")||(depth0 && compilerNameLookup(depth0,"highlightKeyword"))||alias4).call(alias3,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"_name") : stack1),(depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0),{"name":"highlightKeyword","hash":{},"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":58}}}))
    + "\n	        </div>\n	        <div data-view=\"Global.StarRating\"></div>\n	    </div>\n	</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"itemssearcher-item-shadow\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasResults") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":32,"column":8}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"itemssearcher-item-all-results\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"See all results",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":34}}}))
    + "\n			<span class=\"hide\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currentQuery","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":38}}}) : helper)))
    + "</span>\n		</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isAjaxDone") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":21,"column":2},"end":{"line":31,"column":9}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"itemssearcher-item-no-results\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"No results",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":30}}}))
    + "\n				<span class=\"hide\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currentQuery","hash":{},"data":data,"loc":{"start":{"line":24,"column":23},"end":{"line":24,"column":39}}}) : helper)))
    + "</span>\n			</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"itemssearcher-item-searching\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Searching...",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":32}}}))
    + "\n				<span class=\"hide\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"currentQuery") || (depth0 != null ? compilerNameLookup(depth0,"currentQuery") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"currentQuery","hash":{},"data":data,"loc":{"start":{"line":29,"column":23},"end":{"line":29,"column":39}}}) : helper)))
    + "</span>\n			</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isItemSelected") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "")
    + "\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'itemssearcher_item'; return template;});