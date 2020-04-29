import { Injectable } from '@angular/core';

@Injectable()
export class ServiceForRootService {

  private events = new Map();

  constructor() { }

  public addEvent(name, callback) {
    let event = this.events.get(name);
    if(event) {
      event.handlers.push(callback);
    } else {
      this.events.set(name, {
        handlers: [callback]
      });
    }
  }

}