// @flow

import bus from '../bus';
import mock, { iterations } from './mock';

let Storage1 = []
let Storage2 = []

console.time('bus evaluation time');

const stream = bus.read('stream');

stream.subscribe(chunk => {
  Storage1 = [...Storage1, Object.assign({}, chunk)];
})

stream.subscribe(chunk => {
  Storage2 = [...Storage2, Object.assign({}, chunk)];
})

for (let i = 0; i < iterations; i++) {
  bus.emit({type: 'stream', payload: mock(i)});
}

console.log('now bus Storage1 have', Storage1.length, 'items');
console.log('now bus Storage2 have', Storage2.length, 'items');

console.timeEnd('bus evaluation time');