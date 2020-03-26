class EventBus {
  constructor() {
    this.bus = document.createElement('fake_component');
  }

  addEventListener(event, callback) {
    this.bus.addEventListener(event, callback);
  }

  removeEventListener(event, callback) {
    this.bus.removeEventListener(event, callback);
  }

  dispatch(event, payload = {}) {
    this.bus.dispatchEvent(new CustomEvent(event, { payload }));
  }
}

window.EventBus = new EventBus();
