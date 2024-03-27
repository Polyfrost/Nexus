import on from './hooks';
import state from './state';

(() => {
	state.plugin = BBPlugin.register('polyfrost', {
		title: 'Polyfrost Models',
		author: 'Polyfrost',
		icon: 'icon.png',
		description: 'Adds support for Polyfrost models',
		min_version: '4.9.4',
		variant: 'both',
		onload: on.load,
		onunload: on.unload,
		oninstall: on.install,
		onuninstall: on.uninstall,
	});
})();
