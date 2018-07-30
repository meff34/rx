// @flow

import { Bus } from '../bus';
import EventEmitter from '../EventEmitter';

const $EE = document.querySelector('#startEventEmitter');
const $bus = document.querySelector('#startBus');
const info = document.querySelector('.info');
const body = document.querySelector('body');

if ($bus) $bus.addEventListener('click', initiateBusTest);
if ($EE) $EE.addEventListener('click', initiateEETest);


const itemsLimit = 1000;
const interval = 10;
let renderedItems = 0;
let intervalId;
let container;
let profiler;
let currentTestSuite = '';

const calculateTextContent =
  rendered =>
    `${rendered}/${itemsLimit} (${(rendered / itemsLimit * 100).toFixed(2)}%) items is rendered, wait please...`;

function initiateBusTest() {
  dropState();

  currentTestSuite = 'BusBelaz';
  container = document.createElement('div');
  if (body) body.appendChild(container);

  const bus = new Bus();

  bus.read().subscribe(() => {
    renderedItems++;

    const span = document.createElement('span');
    if (container) container.appendChild(span);

    if (info) info.textContent = calculateTextContent(renderedItems);

    if (renderedItems >= itemsLimit) {
      finishTest(container);
    }
  })

  profiler = performance.now()
  intervalId = setInterval(() => {
    bus.emit({type: 'stream', payload: Math.random()})
  }, interval)
}

function initiateEETest() {
  dropState();

  currentTestSuite = 'EventEmitter';
  container = document.createElement('div');
  if (body) body.appendChild(container);

  const eventEmitter = new EventEmitter();

  eventEmitter.addListener('stream', () => {
    renderedItems++;

    const span = document.createElement('span');
    if (container) container.appendChild(span);

    if (info) info.textContent = calculateTextContent(renderedItems);

    if (renderedItems >= itemsLimit) {
      finishTest(container);
    }
  })

  profiler = performance.now()
  intervalId = setInterval(() => {
    eventEmitter.emit('stream', {type: 'stream', payload: Math.random()})
  }, interval)
}

function finishTest(container) {
  if (info) info.textContent = `rendering ${itemsLimit} nodes througt ${currentTestSuite} took ${Math.ceil(performance.now() - Number(profiler))}ms`
  if (intervalId) clearInterval(intervalId);
}

function dropState() {
  if (intervalId) clearInterval(intervalId);
  intervalId = null;
  if (container) container.remove();
  container = null;
  renderedItems = 0;
  profiler = undefined;
  currentTestSuite = '';
}
