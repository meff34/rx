import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';

class Stream {
  emitter;

  constructor() {
    this.observable = Observable
      .create(e => this.emitter = e)

    this.observable.subscribe();
  }

  readAll() {
    return this.observable;
  }

  read(neededType) {
    return this.observable
      .pipe(filter(({ type }) => neededType === type))
  }

  push(...arg) {
    this.emitter.next(...arg);
  }
}

export default new Stream();
