define('jj_footereditor_footereditor.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a href=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"href") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"text") : depth0), depth0))
    + "</a><br>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a href=\""
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"href") : depth0), depth0))
    + "\" class=\"icon\">\n                        <i class=\"fa-brands fa-"
    + alias2(alias1((depth0 != null ? compilerNameLookup(depth0,"icon") : depth0), depth0))
    + "\" style=\"font-size: 1.5em;\"></i>\n                    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<section class=\"footereditor-info-card\">\n    <div class=\"container-fluid\">\n        <div class=\"row\" id=\"signupRow\">\n            <div class=\"col-md-6 col-sm-12\" id=\"signupMessage\">\n                <b>Sign up to get new and exclusive offers to your inbox!</b>\n            </div>\n            <div class=\"col-md-6 col-sm-12\" id=\"emailAdder\">\n                <div>\n                    <input type=\"email\" placeholder=\"username@domain\">\n                </div>\n                <div>\n                    <button>\n                        Subscribe\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"button-icon\">\n                            <path d=\"M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z\"/>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n        </div>\n        "
    + alias3((compilerNameLookup(helpers,"let")||(depth0 && compilerNameLookup(depth0,"let"))||alias2).call(alias1,{"name":"let","hash":{"i":0},"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":21}}}))
    + "\n        <div class=\"row\" id=\"secondFooter\">\n            <div class=\"col-md-6 col-sm-6 col-12\" id=\"companyDetails\">\n                <a href=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"0") : stack1)) != null ? compilerNameLookup(stack1,"value") : stack1), depth0))
    + "\">\n                    <i class=\"support-ico fa fa-phone\" style=\"transform: scaleX(-1);\"></i>&nbsp;&nbsp;&nbsp;"
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"0") : stack1)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "\n                </a><br>\n                <a href=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"1") : stack1)) != null ? compilerNameLookup(stack1,"value") : stack1), depth0))
    + "\">\n                    <i class=\"support-ico fa fa-envelope\"></i>&nbsp;&nbsp;&nbsp;"
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"1") : stack1)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "\n                </a><br>\n                <h2 id=\"storeName\">"
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"2") : stack1)) != null ? compilerNameLookup(stack1,"storeName") : stack1), depth0))
    + "</h2>\n                <a id=\"storeAddress\">"
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"3") : stack1)) != null ? compilerNameLookup(stack1,"address") : stack1), depth0))
    + "</a><br>\n                <img src="
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column1") : stack1)) != null ? compilerNameLookup(stack1,"4") : stack1)) != null ? compilerNameLookup(stack1,"logo") : stack1), depth0))
    + " id=\"footerLogo\">\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-12 detailColumn\">\n                <h2>INFORMATION</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column2") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":38,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"col-md-2 col-sm-3 col-12\">\n                <h2>My Account</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column3") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":16},"end":{"line":44,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"col-md-2 col-sm-3 col-12\">\n                <h2>social</h2>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"columns") : depth0)) != null ? compilerNameLookup(stack1,"column4") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":52,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <span class=\"footereditor-info-card-content\">\n        &copy; Balaji Trading, Inc. 2023 All Rights Reserved.\n    </span>\n</section>\n<script type=\"text/javascript\">\n    (function() {\n        var fontAwesomeLink = document.createElement(\"link\");\n        fontAwesomeLink.rel = \"stylesheet\";\n        fontAwesomeLink.href = \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css\";\n        fontAwesomeLink.crossOrigin = \"anonymous\";\n        fontAwesomeLink.referrerPolicy = \"no-referrer\";\n        document.head.appendChild(fontAwesomeLink);\n    })();\n</script>\n\n<!--\n  Available helpers:\n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias2).call(alias1,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":73,"column":2},"end":{"line":73,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias3((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":75,"column":2},"end":{"line":75,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":77,"column":2},"end":{"line":77,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias3((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":79,"column":2},"end":{"line":79,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/jj/FooterEditor/1.0.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'jj_footereditor_footereditor'; return template;});