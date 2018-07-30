// @flow

import { Bus } from 'core/bus/bus.js';
import type { Event } from 'core/bus/typings';


const getTradingSignalsEvent = (id: number): * => ({
  type: 'tradingSignalsService:add',
  payload: {
    id,
    pair: 'EUR USD',
    pairRaw: 'EURUSD',
    dir: 'up',
    vip: true,
    startAt: 1515767442,
    endedAt: 1515767452,
    cond: 'time',
    comment: 1,
    condValue: 1515769452,
    indicators: [{
      name: 'SMA',
      id: 1,
      color: 'red',
    }],
  },
});

const getVipChatEvent = (id: number): * => ({
  type: 'vipChatService:add',
  payload: {
    id,
    message: 'vipchat message',
  },
});


describe('bus service', (): void => {
  it('should transfer events after subscribe', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.readAll().subscribe(mockCallback);

    bus.emit(getTradingSignalsEvent(1));

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should call callback just once', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.read('tradingSignalsService:add').subscribe(mockCallback);

    bus.emit(getTradingSignalsEvent(1));
    bus.emit(getVipChatEvent(1));

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should get past events from cache', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.emit(getTradingSignalsEvent(1));
    bus.emit(getVipChatEvent(1));

    bus
      .read('tradingSignalsService:add', true)
      .subscribe(mockCallback);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should get exactly that events in that order from past', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.emit(getTradingSignalsEvent(1));
    bus.emit(getTradingSignalsEvent(2));
    bus.emit(getTradingSignalsEvent(3));

    bus
      .read('tradingSignalsService:add', true)
      .subscribe(mockCallback);

    expect(mockCallback.mock.calls[0][0]).toEqual(getTradingSignalsEvent(1));
    expect(mockCallback.mock.calls[1][0]).toEqual(getTradingSignalsEvent(2));
    expect(mockCallback.mock.calls[2][0]).toEqual(getTradingSignalsEvent(3));
  });

  it('should get events from past AND from future', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.emit(getTradingSignalsEvent(1));

    bus
      .read('tradingSignalsService:add', true)
      .subscribe(mockCallback);

    bus.emit(getTradingSignalsEvent(2));

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toEqual(getTradingSignalsEvent(1));
    expect(mockCallback.mock.calls[1][0]).toEqual(getTradingSignalsEvent(2));
  });

  it('should get five events from past AND one from future', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    Array.from({ length: 6 }).forEach((_, idx) => {
      bus.emit(getTradingSignalsEvent(idx));
    });

    bus
      .read('tradingSignalsService:add', true)
      .subscribe(mockCallback);

    bus.emit(getTradingSignalsEvent(6));

    expect(mockCallback.mock.calls.length).toBe(6);
    expect(mockCallback.mock.calls[0][0]).toEqual(getTradingSignalsEvent(1));
    expect(mockCallback.mock.calls[1][0]).toEqual(getTradingSignalsEvent(2));
    expect(mockCallback.mock.calls[2][0]).toEqual(getTradingSignalsEvent(3));
    expect(mockCallback.mock.calls[3][0]).toEqual(getTradingSignalsEvent(4));
    expect(mockCallback.mock.calls[4][0]).toEqual(getTradingSignalsEvent(5));
    expect(mockCallback.mock.calls[5][0]).toEqual(getTradingSignalsEvent(6));
  });

  it('should set cacheSize and use it', () => {
    const mockCallback = jest.fn();

    const bus = new Bus();

    bus.setCacheSize('tradingSignalsService:add', 2);

    Array.from({ length: 6 }).forEach((_, idx) => {
      bus.emit(getTradingSignalsEvent(idx));
    });

    bus
      .read('tradingSignalsService:add', true)
      .subscribe(mockCallback);

    bus.emit(getTradingSignalsEvent(6));

    expect(mockCallback.mock.calls.length).toBe(3);
    expect(mockCallback.mock.calls[0][0]).toEqual(getTradingSignalsEvent(4));
    expect(mockCallback.mock.calls[1][0]).toEqual(getTradingSignalsEvent(5));
    expect(mockCallback.mock.calls[2][0]).toEqual(getTradingSignalsEvent(6));
  })
});
