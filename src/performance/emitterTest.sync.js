// @flow

import EventEmitter from '../EventEmitter';
import mock, { iterations } from './mock';

export default () => {
  let Storage1 = []
  let Storage2 = []

  const profiler = performance.now();

  const bus = new EventEmitter();

  bus.addListener('stream', chunk => {
    Storage1 = [...Storage1, Object.assign({}, chunk)];
  });

  bus.addListener('stream', chunk => {
    Storage2 = [...Storage2, Object.assign({}, chunk)];
  });


  for (let i = 0; i < iterations; i++) {
    bus.emit('stream', {type: 'stream', payload: mock(i)});
  }

  console.log('now EventEmitter Storage1 have', Storage1.length, 'items');
  console.log('now EventEmitter Storage2 have', Storage2.length, 'items');

  console.log(`one EventEmitter, two subscribers, ${iterations} items: ${Math.ceil(performance.now() - Number(profiler))} ms`);
}
