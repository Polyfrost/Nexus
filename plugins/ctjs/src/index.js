/// <reference types="../types" />
/// <reference lib="es2015" />

import { JFile } from './classes.js';

const OneConfigClasspath = 'org.polyfrost.oneconfig';
const OneConfigData = 'org.polyfrost.oneconfig.config.data';
const OneConfigAnnotations = 'org.polyfrost.oneconfig.config.annotations';
const OneConfigCommandManager = Java.type(`${OneConfigClasspath}.utils.commands.CommandManager`);
const OneConfigConfig = Java.type(`${OneConfigClasspath}.config.Config`);
const OneConfigMod = Java.type(`${OneConfigData}.Mod`);
const OneConfigModType = Java.type(`${OneConfigData}.ModType`);
const OneConfigOptionSize = Java.type(`${OneConfigData}.OptionSize`);
const ModulesFolder = `${ChatTriggers.MODULES_FOLDER}`;

const configs = [];

function JSBackedPropertyValue(config, propName, isIntegerDesired, isFloatDesired) {
	return {
		getPropName: () => propName,
		getValue: () => {
			if (isIntegerDesired)
				return new java.lang.Integer(config[propName]);
			if (isFloatDesired)
				return new java.lang.Float(config[propName]);
			return config[propName];
		},
		setValue: newValue => config[propName] = newValue,
	};
}

function JSFunctionCallableValue(config, funcName) {
	return {
		invoke: () => config[funcName](),
	};
}

function DecoratorCollector(config) {
	return {
		collectProperties: (instance) => {
			const props = [];
			const clazz = Object.getPrototypeOf(config);
			Object.getOwnPropertyNames(clazz.__config_props__).forEach((prop) => {
				const attributes = clazz.__config_props__[prop];
				const isIntegerDesired = attributes.type === PropertyType.SLIDER || attributes.type === PropertyType.SELECTOR;
				const isFloatDesired = attributes.type === PropertyType.DECIMAL_SLIDER || attributes.type === PropertyType.PERCENT_SLIDER;
				props.push(new PropertyD());
			});
		},
	};
}

export function initOneConfig() {
	const oneConfigInitFile = new JFile(`${ModulesFolder}/oneConfigInitialized.txt`);
	if (oneConfigInitFile.exists && !oneConfigInitFile.isDirectory())
		return;
}

export const CommandManager = {
	registerCommand: (command) => {
		OneConfigCommandManager.INSTANCE.registerCommand(command);
	},
};
