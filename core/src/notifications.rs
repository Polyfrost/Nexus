use std::sync::{atomic::AtomicU32, Arc};
use tokio::sync::broadcast;
use crate::api::notifications::Notification;

#[derive(Clone)]
pub struct Notifications(broadcast::Sender<Notification>, Arc<AtomicU32>);

impl Notifications {
	#[allow(clippy::new_without_default)]
	pub fn new() -> Self {
		let (tx, _) = broadcast::channel(30);
		Self(tx, Arc::new(AtomicU32::new(0)))
	}

	pub fn subscribe(&self) -> broadcast::Receiver<Notification> {
		self.0.subscribe()
	}

	pub fn _internal_send(&self, notif: Notification) {
		self.0.send(notif).ok();
	}

	pub fn _internal_next_id(&self) -> u32 {
		self.1.fetch_add(1, std::sync::atomic::Ordering::SeqCst, order)
	}
}