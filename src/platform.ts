import {
  API,
  IndependentPlatformPlugin,
  Logging,
  PlatformConfig,
} from 'homebridge';

import { EventEmitter } from 'events';

import { Homebrige } from './homebridge';

import { Matter } from './matter';

export class MatterLinkPlatform implements IndependentPlatformPlugin {

  private readonly log: Logging;
  private readonly api: API;

  eventBus: EventEmitter;

  constructor(log: Logging, config: PlatformConfig, api: API) {
    this.log = log;
    this.api = api;

    // Create an event bus to allow for communication between Homebridge component and Matter component
    this.eventBus = new EventEmitter();

    // Create the Homebridge component
    //this.homebridge = new Homebridge(this.eventBus);

    // Create the Matter component
    //this.matter = new Matter(this.eventBus);

    // probably parse config or something here

    log.info('Example platform finished initializing!');
  }
}