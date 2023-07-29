import { EventEmitter } from './events';

export class Matter {
  eventBus: EventEmitter;

  constructor(eventBus: EventEmitter) {
    this.eventBus = eventBus;
  }

  // TODO: Implement this
}