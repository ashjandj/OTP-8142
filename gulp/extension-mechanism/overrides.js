/*jshint esversion: 8 */

const manifest_manager = require('./manifest-manager');
const watch_manager = require('./watch-manager');
const configs = require('./configurations').getConfigs();
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const _ = require('underscore');

module.exports = {
	updateOverrides: function() {
		const theme_manifest = manifest_manager.getThemeManifest();
		const isFallback = theme_manifest.sub_type === 'fallback';
		const overrides_folder = configs.folders.overrides_path;
		const theme_folder = configs.folders.theme_path;

		if(!fs.existsSync(overrides_folder) && !isFallback)
		{
			throw new Error('The overrides folder path "' + overrides_folder + '" does not exists. You need to execute "gulp theme-fetch" before');
		}

		var src_overrides_files = glob.sync(path.join(overrides_folder, '**/*.@(scss|tpl)'));
		var manifest_path = path.join(theme_manifest.local_folder, 'manifest.json');

		theme_manifest.override = _.map(src_overrides_files, function(override)
		{
			var dst_path = override.replace(overrides_folder + '/', '');
			var src_path = override.replace(theme_folder + '/', '');

			var ext = path.extname(src_path);
			if(ext === '.scss')
			{
				var files = theme_manifest.sass.files;
				if(!_.contains(files, src_path))
				{
					files.push(src_path);
				}
			}
			else if(ext === '.tpl')
			{
				var aux = dst_path.split('/')
				,	extensions_name = aux.length > 1 && aux[1]
				,	file_path = aux.join('/')
				,	extension_manifest = manifest_manager.getManifestByName(extensions_name) || {};

                extension_manifest.templates = extension_manifest.templates || {};
                extension_manifest.templates.application = extension_manifest.templates.application || {};

				_.each(extension_manifest.templates.application, function(app, app_name)
				{
					var files = theme_manifest.templates.application[app_name].files;

					if(_.contains(app.files, file_path) && !_.contains(files, src_path))
					{
						files.push(src_path);
					}
				});

			}

			return {
				src: src_path
			,	dst: dst_path
			};
		});

		fs.writeFileSync(manifest_path, JSON.stringify(theme_manifest, null, '\t'));

		var tpl_overrides_files = path.join(overrides_folder, '**', '*.tpl');
		var scss_overrides_files = path.join(overrides_folder, '**', '*.scss');

		watch_manager.registerWatch([tpl_overrides_files], ['templates']);
		watch_manager.registerWatch([scss_overrides_files], ['compile-sass']);
	}
};
