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
