#![warn(clippy::unwrap_used, clippy::panic)]

use crate::api::notifications::{Notification, NotificationData, NotificationId};
use crate::api::{CoreEvent, Router};
pub use crate::env::Env;
use crate::node::config;
use crate::notifications::Notifications;

use chrono::{DateTime, Utc};
pub use nexus_prisma::*;
use reqwest::{RequestBuilder, Response};
use std::path::{Path, PathBuf};
use std::sync::{atomic::AtomicBool, Arc};
use thiserror::Error;
use tokio::{fs, sync::broadcast};
use tracing::{error, info, warn};
use tracing_appender::non_blocking::{NonBlocking, WorkerGuard};
use tracing_appender::rolling::{RollingFileAppender, Rotation};
use tracing_subscriber::filter::{Directive, FromEnvError, LevelFilter};
use tracing_subscriber::fmt as tracing_fmt;
use tracing_subscriber::{prelude::*, EnvFilter};

pub mod api;
pub mod env;
pub mod instance;
pub mod internal;
pub mod job;
pub mod library;
pub mod node;
pub mod preferences;
pub mod notifications;
pub mod utils;

/// Represents a single running Instance.
/// Holds references to all services.
pub struct Node {
	pub data_dir: PathBuf,
	pub config: Arc<config::Manager>,
	pub jobs: Arc<job::Jobs>,
	pub notifications: Notifications,
	pub event_bus: (broadcast::Sender<CoreEvent>, broadcast::Receiver<CoreEvent>),
	pub env: env::Env,
	pub http: reqwest::Client,
}

impl std::fmt::Debug for Node {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		f.debug_struct("Node")
			.field("data_dir", &self.data_dir)
			.finish()
	}
}

impl Node {
	pub async fn new(
		data_dir: impl AsRef<Path>,
		env: env::Env,
	) -> Result<(Arc<Node>, Arc<Router>), NodeError> {
		let data_dir = data_dir.as_ref();

		info!("starting core with data_dir '{}'", data_dir.display());

		#[cfg(debug_assertions)]
		let init_data = utils::debug_init::InitConfig::load(data_dir).await?;

		let _ = fs::create_dir_all(&data_dir).await;

		let event_bus = broadcast::channel(1024);
		let config = config::Manager::new(data_dir.to_path_buf())
			.await
			.map_err(NodeError::FailedToInitConfig)?;

		let (jobs, jobs_actor) = job::Jobs::new();
		let (instances, instances_actor) = instance::Instances::new();
		let node = Arc::new(Node {
			data_dir: data_dir.to_path_buf(),
			config,
			jobs,
			notifications: notifications::Notifications::new(),
			event_bus,
			env,
			http: reqwest::Client::new(),
		});

		for feature in node.config.get().await.features {
			feature.restore(&node);
		}

		jobs_actor.start(node.clone());

		let router = api::mount();

		info!("nexus online");
		Ok((node, router))
	}

	pub async fn shutdown(&self) {
		info!("nexus shutting down...");
		self.jobs.shutdown().await;
		info!("nexus shutdown");
	}

	pub(crate) fn emit(&self, event: CoreEvent) {
		if let Err(e) = self.event_bus.0.send(event) {
			warn!("could not send event to event bus: {e:?}");
		}
	}

	pub async fn emit_notification(&self, data: NotificationData, expires: Option<DateTime<Utc>>) {
		let notification = Notification {
			id: NotificationId::Node(self.notifications._internal_next_id()),
			data,
			read: false,
			expires,
		};

		match self
			.config
			.write(|mut cfg| cfg.notifications.push(notification.clone()))
			.await
		{
			Ok(_) => {
				self.notifications._internal_send(notification);
			}
			Err(err) => {
				error!("could not save notification to config: {:?}", err);
			}
		}
	}
}

/// Error type for Node related errors.
#[derive(Error, Debug)]
pub enum NodeError {
	#[error("NodeError::FailedToInitConfig({0})")]
	FailedToInitConfig(utils::migrator::MigratorError),
	#[error("failed to initialize instance manager: {0}")]
	FailedToInitInstanceManager(#[from] instance::InstanceManagerError),
	#[error("failed to validate platform value: {0}")]
	InvalidPlatformId(u8),
	#[cfg(debug_assertions)]
	#[error("failed to initialize configuration: {0}")]
	InitConfig(#[from] utils::debug_init::InitConfigError),
	#[error("failed to use logger: {0}")]
	Logger(#[from] FromEnvError),
}
