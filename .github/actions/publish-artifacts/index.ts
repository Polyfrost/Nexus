import * as artifact from '@actions/artifact';
import * as core from '@actions/core';
import * as glob from '@actions/glob';
import * as io from '@actions/io';

// script to build tauri bundles without pain

type OS = 'darwin' | 'windows' | 'linux';
type Arch = 'x64' | 'arm64'; // 'aarch64';
// i could type this with tauri's config but idrc
type TargetConfig = { bundle: string; ext: string };
type BuildTarget = {
	updater: TargetConfig;
	standalone: Array<TargetConfig>;
};

const OS_TARGETS = {
	darwin: {
		updater: {
			bundle: 'macos',
			ext: 'app.tar.gz'
		},
		standalone: [{ ext: 'dmg', bundle: 'dmg' }]
	},
	windows: {
		updater: {
			bundle: 'msi',
			ext: 'msi.zip'
		},
		standalone: [{ ext: 'msi', bundle: 'msi' }]
	},
	linux: {
		updater: {
			bundle: 'appimage',
			ext: 'AppImage.tar.gz'
		},
		standalone: [
			{ ext: 'deb', bundle: 'deb' },
			{ ext: 'AppImage', bundle: 'appimage' }
		]
	}
} satisfies Record<OS, BuildTarget>;

const OS: OS = core.getInput('os') as any;
const ARCH: Arch = core.getInput('arch') as any;
const TARGET = core.getInput('target');
const PROFILE = core.getInput('profile');

const BUNDLE_DIR = `target/${TARGET}/${PROFILE}/bundle`;
const ARTIFACTS_DIR = '.artifacts';
const ARTIFACT_BASE = `Nexus-${OS}-${ARCH}`;
const UPDATER_ARTIFACT_NAME = `Nexus-Updater-${OS}-${ARCH}`;

const client = artifact.create();

// globby glob globber :3
const globFiles = async (pattern: string) => {
	const globber = await glob.create(pattern);
	return await globber.glob();
};

const uploadUpdater = async ({ bundle, ext }: TargetConfig) => {
	const files = await globFiles(`${BUNDLE_DIR}/${bundle}/*.${ext}*`);
	const updaterPath = files.find((f) => f.endsWith(ext));

	if (!updaterPath) return console.error(`updater path not found. ${files}`);

	const artifactPath = `${ARTIFACTS_DIR}/${UPDATER_ARTIFACT_NAME}.${ext}`;

	await io.cp(updaterPath, artifactPath);
	await io.cp(`${updaterPath}.sig`, `${artifactPath}.sig`);

	await client.uploadArtifact(
		UPDATER_ARTIFACT_NAME,
		[artifactPath, `${artifactPath}.sig`],
		ARTIFACTS_DIR
	);
};

const uploadStandalone = async ({ bundle, ext }: TargetConfig) => {
	const files = await globFiles(`${BUNDLE_DIR}/${bundle}/*.${ext}*`);
	const standalonePath = files.find((f) => f.endsWith(ext));

	if (!standalonePath) return console.error(`standalone path not found. ${files}`);

	const artifactName = `${ARTIFACT_BASE}.${ext}`;
	const artifactPath = `${ARTIFACTS_DIR}/${artifactName}`;

	await io.cp(standalonePath, artifactPath, { recursive: true });
	await client.uploadArtifact(artifactName, [artifactPath], ARTIFACTS_DIR);
};

const run = async () => {
	await io.mkdirP(ARTIFACTS_DIR);
	const { updater, standalone } = OS_TARGETS[OS];

	await uploadUpdater(updater);
	for (const f of standalone) await uploadStandalone(f);
};

run();
