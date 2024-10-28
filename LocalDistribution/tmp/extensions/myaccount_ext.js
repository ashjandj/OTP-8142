var extensions = {};

extensions['jj.FooterEditor.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/jj/FooterEditor/1.0.0/' + asset;
}

// @module jj.FooterEditor.FooterEditor
define('jj.FooterEditor.FooterEditor.View', [
    'jj_footereditor_footereditor.tpl',
    'jj.FooterEditor.FooterEditor.SS2Model',
    'Backbone'
], function (
    jj_footereditor_footereditor_tpl,
    FooterEditorSS2Model,
    Backbone
) {
    'use strict';

    return Backbone.View.extend({

        template: jj_footereditor_footereditor_tpl,

        initialize: function (options) {
            this.currentConfig = options.currentConfig;
            this.message = JSON.parse(this.currentConfig) || { multiColLinks: [] };

            const columns = {
                column1: [],
                column2: [],
                column3: [],
                column4: []
            };
            // Add copyright data to column1
            const copyrightData = this.message.copyright;

            // Check if the copyright data exists and add it to column1
            if (copyrightData) {
                if (copyrightData.phoneNum) {
                    columns.column1.push({ phone: copyrightData.phoneNum, value: `tel:${copyrightData.phoneNum}` });
                }
                if (copyrightData.emailID) {
                    columns.column1.push({ email: copyrightData.emailID, value: `mailto:${copyrightData.emailID}` });
                }
                if (copyrightData.storeName) {
                    columns.column1.push({ storeName: copyrightData.storeName, value: '#' }); // Assuming store name is also not a link
                }
                if (copyrightData.address) {
                    columns.column1.push({ address: copyrightData.address, value: '#' }); // Assuming the address is not a link
                }

            }
            columns.column1.push({ logo: options.logourl, href: '#' });

            // Populate the column objects with the respective links
            this.message.multiColLinks.forEach(link => {
                if (link.column === "Column 1") {
                    columns.column2.push(link);
                } else if (link.column === "Column 2") {
                    columns.column3.push(link);
                }
            });
            this.message.socialMediaLinks.forEach(link => {
                columns.column4.push(link);
            })

            // Store columns in the view context
            this.columns = columns;
            console.log(this.columns); // Log to check if columns are populated
        },

        events: {
            // Define any events you want to handle here
        },

        getContext: function getContext() {
            return {
                columns: this.columns // Return the columns object
            };
        }
    });
});


// Model.js
// -----------------------
// @module Case
define("jj.FooterEditor.FooterEditor.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/FooterEditor.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("jj.FooterEditor.FooterEditor.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/FooterEditor/SuiteScript2/FooterEditor.Service.ss"
            ),
            true
        )
});
});



define(
	'jj.FooterEditor.FooterEditor'
	, [
		'jj.FooterEditor.FooterEditor.View'
	]
	, function (
		FooterEditorView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				var environment_component = container.getComponent('Environment');

				
			let environment_footerwarningsave,environment_logo;
				
				if (environment_component) {
					// Get the configuration value
					environment_footerwarningsave = environment_component.getConfig("footer");
					environment_logo = environment_component.getConfig("header").logoUrl;

					// Log the configuration to the console
					console.log(environment_logo);
				} else {
					console.error('Environment component is not available.');
				}
				if (layout) {
					layout.removeChildView('Footer');
					layout.addChildView('Footer', function () {
						return new FooterEditorView({ container: container ,currentConfig: JSON.stringify(environment_footerwarningsave),logourl : environment_logo});
					});
				}

			}
		};
	});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["jj.FooterEditor.FooterEditor.View","jj.FooterEditor.FooterEditor.Model","jj.FooterEditor.FooterEditor.SS2Model"];
try{
	extensions['jj.FooterEditor.1.0.0']();
	SC.addExtensionModule('jj.FooterEditor.FooterEditor');
}
catch(error)
{
	console.error(error);
}

