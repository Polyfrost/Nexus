import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
	cleanupSVG,
	importDirectorySync,
	isEmptyColor,
	parseColors,
	runSVGO,
} from '@iconify/tools';

const iconSet = importDirectorySync(join(__dirname, '../svgs'), {
	prefix: 'polyicons',
	includeSubDirs: true,
	ignoreImportErrors: true,
});

iconSet.forEachSync((name, type) => {
	// eslint-disable-next-line no-console
	console.log(`generating icon for ${name}`);

	if (type !== 'icon')
		return;
	const svg = iconSet.toSVG(name);

	if (!svg) {
		iconSet.remove(name);
		return;
	}

	try {
		cleanupSVG(svg);

		parseColors(svg, {
			defaultColor: 'currentColor',
			callback: (_attr, colorStr, color) => {
				return !color || isEmptyColor(color)
					? colorStr
					: 'currentColor';
			},
		});

		runSVGO(svg);
	}
	catch (err) {
		console.error(`error parsing ${name}:`, err);
		iconSet.remove(name);
		return;
	}

	iconSet.fromSVG(name, svg);
});

const exported = `${JSON.stringify(iconSet.export(), null, '\t')}\n`;
writeFileSync(join(__dirname, '../export/', `${iconSet.prefix}.json`), exported, 'utf8');
