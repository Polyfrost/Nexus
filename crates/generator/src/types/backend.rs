use serde::{Serialize, Deserialize};

#[allow(clippy::module_name_repetitions)]
#[derive(Serialize, Deserialize)]
pub struct BackendDependency {
	pub title: String,
	pub description: Option<String>,
	pub url: Option<String>,
	pub version: String,
	pub authors: Vec<String>,
	pub license: Option<String>,
}