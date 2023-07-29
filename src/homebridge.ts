import { EventEmitter } from 'events';

export class Homebridge {
  eventBus: EventEmitter;

  constructor(eventBus: EventEmitter) {
    this.eventBus = eventBus;

    this.discoverDevices(); // Discover homebridge devices & send them to the Matter component
    this.listenToUpdates(); // Listen for updates from homebridge devices and send them to the Matter component
  }

  discoverDevices() {
    // Achieve this by getting the characteristics endpoint
  }

  listenToUpdates() {
    // Achieve this by creating an interval that polls the characteristics endpoint
  }
}