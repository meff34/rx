// @flow

import bus from '../bus';
import mock, { iterations } from './mock';

export default () => {
  let Storage1 = []
  let Storage2 = []

  const profiler = performance.now();

  const stream = bus.read();

  stream.subscribe(chunk => {
    Storage1 = [...Storage1, Object.assign({}, chunk)];
  })

  stream.subscribe(chunk => {
    Storage2 = [...Storage2, Object.assign({}, chunk)];
  })

  for (let i = 0; i < iterations; i++) {
    bus.emit({type: 'stream', payload: mock(i)});
  }

  console.log('now BusBelaz Storage1 have', Storage1.length, 'items');
  console.log('now BusBelaz Storage2 have', Storage2.length, 'items');

  console.log(`one BusBelaz, two subscribers, ${iterations} items: ${Math.ceil(performance.now() - Number(profiler))} ms`);
}
