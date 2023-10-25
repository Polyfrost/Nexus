use anyhow::Result;
use cargo_metadata::CargoOpt;
use clap::Parser;
use std::{fs::File, path::PathBuf};
use types::backend::BackendDependency;
use types::cli::{Action, Arguments};
use types::frontend::FrontendDependency;

pub mod types;

const FOSSA_NEXUS_URL: &str =
	"https://app.fossa.com/api/revisions/git%2Bgithub.com%2Fpolyfrost%2Fnexus%24";
const FOSSA_ONECONFIG_URL: &str =
	"https://app.fossa.com/api/revisions/git%2Bgithub.com%2Fpolyfrost%2Foneconfig%24";

fn main() -> Result<()> {
	let args = Arguments::parse();

	match args.action {
		Action::Frontend(sub_args) => write_frontend_deps(sub_args.revision, sub_args.path),
		Action::Java(sub_args) => write_java_deps(sub_args.revision, sub_args.path),
		Action::Backend(sub_args) => {
			write_backend_deps(sub_args.manifest_path, sub_args.output_path)
		}
	}
}

fn write_backend_deps(manifest_path: PathBuf, output_path: PathBuf) -> Result<()> {
	let cmd = cargo_metadata::MetadataCommand::new()
		.manifest_path(manifest_path)
		.features(CargoOpt::AllFeatures)
		.exec()?;

	let deps: Vec<BackendDependency> = cmd
		.packages
		.into_iter()
		.filter_map(|p| {
			(!cmd.workspace_members.iter().any(|t| &p.id == t)).then_some(BackendDependency {
				title: p.name,
				description: p.description,
				url: p.repository,
				version: p.version.to_string(),
				authors: p.authors,
				license: p.license,
			})
		})
		.collect();

	let mut file = File::create(output_path)?;
	serde_json::to_writer(&mut file, &deps)?;

	Ok(())
}

fn write_frontend_deps(rev: String, path: PathBuf) -> Result<()> {
	let url = format!("{FOSSA_NEXUS_URL}{rev}/dependencies");

	let response = reqwest::blocking::get(url)?.text()?;
	let json: Vec<types::frontend::Dependency> = serde_json::from_str(&response)?;

	let deps: Vec<_> = json
		.into_iter()
		.map(|dep| FrontendDependency {
			title: dep.project.title,
			authors: dep.project.authors,
			description: dep.project.description,
			url: dep.project.url,
			license: dep.licenses,
		})
		.collect();

	let mut file = File::create(path)?;
	serde_json::to_writer(&mut file, &deps)?;

	Ok(())
}

fn write_java_deps(rev: String, path: PathBuf) -> Result<()> {
	let url = format!("{FOSSA_ONECONFIG_URL}{rev}/dependencies");

	let response = reqwest::blocking::get(url)?.text()?;
	let json: Vec<types::frontend::Dependency> = serde_json::from_str(&response)?;

	let deps: Vec<_> = json
		.into_iter()
		.map(|dep| FrontendDependency {
			title: dep.project.title,
			authors: dep.project.authors,
			description: dep.project.description,
			url: dep.project.url,
			license: dep.licenses,
		})
		.collect();

	let mut file = File::create(path)?;
	serde_json::to_writer(&mut file, &deps)?;

	Ok(())
}
