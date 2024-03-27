import emitter from './emitter';

export const on = {
	load: () => emitter.emit('load'),
	unload: () => emitter.emit('unload'),
	install: () => emitter.emit('install'),
	uninstall: () => emitter.emit('uninstall'),
};

export default on;
