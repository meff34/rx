import Events from 'events';

class EventEmitter extends Events {
  history = {};
  historyLengthByDefault = 5;
  historyLengthByEvents = {};

  constructor(historyLengthByEvents:{[key: string]: number}): void {
    super();
    if (historyLengthByEvents) {
      this.historyLengthByEvents = historyLengthByEvents;
    }
  }

  emit(e: string, ...arg: *): boolean {
    this.saveHistrory(e, ...arg);
    return super.emit(e, ...arg);
  }

  saveHistrory(e: string, ...arg: *): void {
    const historyLength = this.historyLengthByEvents[e] || this.historyLengthByDefault;
    const h = this.history;
    if (!h[e]) {
      h[e] = [];
    }
    h[e].push(arg);
    if (h[e].length > historyLength) {
      h[e].shift();
    }
  }

  addListenerOnce(e: string, listner:*): EventEmitter {
    const list = this.rawListeners(e);
    let isListner = null;

    list.forEach((item: *): void => {
      if (item === listner) {
        isListner = true;
      }
    });

    if (!isListner) {
      this.on(e, listner);
    }
    return this;
  }

  getHistory(e: string): Array<*> {
    return this.history[e];
  }

  getLastHistory(e: string): * {
    const h = this.history;
    return h[e] && h[e][h[e].length - 1];
  }
}

export default EventEmitter;
