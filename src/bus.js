// @flow

import { Subject, merge } from 'rxjs';

type EventType = 'trading_signals:add' | 'trading_signals:remove'

type Event = {
  type: EventType,
  payload: *,
}

export class Bus {
  observable: Observable;
  subject: Subject;
  defaultCacheSize: number;
  streams: Map<EventType, Subject> = new Map();

  select(type: EventType): Subject {
    return this.streams.get(type);
  }

  read() {
    return merge(...this.streams.values());
  }

  emit(event: Event): void {
    if (!this.streams.has(event.type)) {
      this.streams.set(event.type, new Subject());
    }

    this.streams.get(event.type).next(event);
  }
}

export default new Bus();
