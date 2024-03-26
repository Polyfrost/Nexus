/// <reference types="../types" />
/// <reference lib="es2015" />

import { JFile } from './classes.js';

const OneConfigClasspath = 'org.polyfrost.oneconfig';
const ModulesFolder = `${ChatTriggers.MODULES_FOLDER}`;

export default function initOneConfig() {
	const oneConfigInitFile = new JFile(`${ModulesFolder}/oneConfigInitialized.txt`);
	if (oneConfigInitFile.exists && !oneConfigInitFile.isDirectory())
		return;
}
