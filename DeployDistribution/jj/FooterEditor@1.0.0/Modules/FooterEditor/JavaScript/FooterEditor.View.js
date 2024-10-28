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
