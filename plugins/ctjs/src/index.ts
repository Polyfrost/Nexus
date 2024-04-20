/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { JFile, JFloat, JInteger } from './classes.js';
import request from './request.js';

export default (_ASM: IASM) => {};

const OneConfigClasspath = 'org.polyfrost.oneconfig';
const OneConfigCommand = Java.type(`${OneConfigClasspath}.utils.commands.Command`);
const OneConfigCommandManager = Java.type(`${OneConfigClasspath}.utils.commands.CommandManager`);
const OneConfigConfig = Java.type(`${OneConfigClasspath}.config.Config`);

const configs: (typeof OneConfigConfig)[] = [];

function JSBackedPropertyValue(config: typeof OneConfigConfig, propName: string, isIntegerDesired: boolean, isFloatDesired: boolean) {
	return {
		getPropName: () => propName,
		getValue: () => {
			if (isIntegerDesired)
				return new JFloat(config[propName]);
			if (isFloatDesired)
				return new JInteger(config[propName]);
			return config[propName];
		},
		setValue: (newValue: any) => config[propName] = newValue,
	};
}

function JSFunctionCallableValue(config: typeof OneConfigConfig, funcName: string) {
	return {
		invoke: () => config[funcName](),
	};
}

function DecoratorCollector(config: typeof OneConfigConfig) {
	return {
		collectProperties: () => {
			const props = [];
			const clazz = Object.getPrototypeOf(config);
			Object.getOwnPropertyNames(clazz.__config_props__).forEach((prop) => {
				const attributes = clazz.__config_props__[prop];
			});
		},
	};
}

export function initOneConfig() {
	const oneConfigInitFile = new JFile(`${ChatTriggers.MODULES_FOLDER}/oneConfigInitialized.txt`);
	if (oneConfigInitFile.exists() && !oneConfigInitFile.isDirectory())
		return;

	const req = request('https://api.polyfrost.org/');
}

export const CommandManager = {
	registerCommand: (command: typeof OneConfigCommand) => {
		OneConfigCommandManager.INSTANCE.registerCommand(command);
	},
};
