// @flow

import { Subject } from 'rxjs';

type Event = {
  type: string,
  payload: *,
}

export class Bus {
  subject: Subject;
  defaultCacheSize: number;

  constructor(): void {
    this.subject = new Subject({type: 'bus is running'});
  }

  read(): Subject {
    return this.subject;
  }

  emit(event: Event): void {
    this.subject.next(event);
  }
}

export default new Bus();
