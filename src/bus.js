// @flow

import { Observable, Subject, /*from*/ } from 'rxjs';
// import { filter, merge } from 'rxjs/operators';
import type { EventTypes, Event } from './typings.js';

export class Bus {
  observable: Observable;
  subject: Subject;
  defaultCacheSize: number;
  cacheSizes: { [EventTypes]: number };
  cache: { [EventTypes]: Array<Event> };

  constructor(): void {
    this.defaultCacheSize = 5;
    this.cacheSizes = {};
    this.cache = {};

    this.subject = new Subject({type: 'bus is running'});

    this.observable = Observable
      .create((e: Observer): void => { this.observer = e; });
  }

  read(eventType: EventTypes, withCache: boolean = false): Observable {
    return this.subject;
  }

  emit(event: Event): void {
    this.subject.next(event);
  }
}

export default new Bus();
