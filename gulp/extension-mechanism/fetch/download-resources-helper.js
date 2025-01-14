'use strict';

var {log, colorText, color} = require('ns-logs')
,	configs = require('../configurations').getConfigs()
,	_ = require('underscore')
,	semver = require('semver');

var ConversionTool = require('../conversion-tool')
,	RecordHelper = require('../extension-record-helper')
,	ResourcePromisesHelper = require('./resource-promises-helper')
,   FileServiceClient = require('../client-script/FileServiceClient');

var DownloadResourcesHelper = {
	getManifestFilePromises: async function getManifestFilePromises(manifest) {
		var isFetchExtension = manifest.type === 'extension' && configs.fetchConfig.extension && _.contains(configs.fetchConfig.extension.split(','), manifest.name);

        if(manifest.type !== 'theme' && !isFetchExtension) {
            return [];
        }

        const result = await RecordHelper.searchExtensions({manifest: manifest});

        if(!result.extension_record.manifest_id) {
            throw new Error(`Extension ${[manifest.vendor, manifest.name, manifest.version].join('.')} not found in account`);
        }

        //Get the manifest in order to use its path updated since the one that comes in the activationManifest may be old (generated before a SCEM push)
        const file_service_client = FileServiceClient.getInstance();
        const manifest_file = await file_service_client.getFiles([result.extension_record.manifest_id]);
        manifest.path = manifest_file[0].path;

        if(!isFetchExtension) {
            // Use manifest just downloaded because when fetching Base Theme for fallback themes
            // may not be local manifests
            const parsed_manifest = JSON.parse(manifest_file[0].content);
            parsed_manifest.path = manifest.path;
            parsed_manifest.is_fallback = manifest.is_fallback;
            return this.downloadFiles(parsed_manifest);
        }

        if (result.extension_record && result.has_bundle) {
            log(colorText(color.YELLOW, 'Cannot fetch packaged extension ' + manifest.name + '.\n' +
                '\tYou can only fetch custom extensions located in your file cabinet.\n'));

            return [];
        }

        ConversionTool.updateConfigPaths(manifest);
        return this.downloadFiles(manifest);
	}

,	downloadFiles: function downloadFiles(manifest) {
		var app_manifest = configs.application.application_manifest,
            allowed_resources = app_manifest.extensible_resources,
            file_promises = [];

		//for versions of SC >= to 19.1 we should support suite script 2 resources because SSPv2 is available but not present into app manifest
    	if(!semver.lt(app_manifest.version, '19.1.0') && !_.contains(allowed_resources, 'suitescript2')) {
            allowed_resources.push('suitescript2');
        }

		_.each(manifest, function(resource_data, resource) {
			if(_.contains(allowed_resources, resource)) {
				var message_finished = 'Finished downloading ' + resource + ' of ' + manifest.type + ': ' +  manifest.name + '...',
                    resource_promises;

				switch(resource) {
					case 'assets':
						resource_promises = ResourcePromisesHelper.getAssetFilesPromises({
                            manifest,
                            resource,
                            message_finished
                        });

						file_promises.push(resource_promises);
						break;
                    default:
                        resource_promises = ResourcePromisesHelper.getFilesPromisesForResource({
                            manifest,
                            resource,
                            message_finished
                        });

                        file_promises.push(resource_promises);
                        break;
				}
			}
		});

		return file_promises;
	}
};

module.exports = DownloadResourcesHelper;
