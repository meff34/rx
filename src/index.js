// @flow

import './performance/renderer';

import syncBusTest from './performance/busTest.sync';
import syncEETest from './performance/emitterTest.sync';

document.querySelector('#syncBusTest').addEventListener('click', () => {
  syncBusTest();
})

document.querySelector('#syncEETest').addEventListener('click', () => {
  syncEETest();
})
