// @flow

import { Bus } from '../bus';
import EventEmitter from '../EventEmitter';
import mock from '../mock';

const colors = ['green', 'blue', 'red', 'yellow', 'rebeccapurple'];

const $EE = document.querySelector('#startEventEmitter');
const $bus = document.querySelector('#startBus');
const $stop = document.querySelector('#stopAsyncTest');
const $info = document.querySelector('.info');
const $body = document.querySelector('body');
const $input = document.querySelector('#asyncInput');
const $streamsCount = document.querySelector('select');
const $interval = document.querySelector('#interval');

if ($bus) $bus.addEventListener('click', initiateBusTest);
if ($EE) $EE.addEventListener('click', initiateEETest);
if ($stop) $stop.addEventListener('click', setInitialState);


let itemsLimit = 1000;
let interval = 10;
let renderedItems = 0;
let intervalIds = [];
let container;
let profiler;
let currentTestSuite = '';
let streamsCount;

const calculateTextContent =
  rendered =>
    `${rendered}/${itemsLimit * streamsCount} (${(rendered / (itemsLimit  * streamsCount) * 100).toFixed(2)}%) items is rendered, wait please...`;

function initiateBusTest() {
  setInitialState();

  currentTestSuite = 'BusBelaz';
  container = document.createElement('div');
  if ($body) $body.appendChild(container);

  streamsCount = Number($streamsCount.value);
  interval = Number($interval.value);
  const bus = new Bus();

  bus.getMainStream().subscribe(({ payload }) => {
    renderedItems++;

    insertSpan(container, payload.id);

    if ($info) $info.textContent = calculateTextContent(renderedItems);

    if (renderedItems >= itemsLimit * streamsCount) {
      finishTest(container);
    }
  })

  profiler = performance.now()
  intervalIds = Array
    .from({ length: streamsCount })
    .map((_, i) => setInterval(() => {
      bus.emit({type: `stream${i}`, payload: mock(i)})
    }, interval));
}

function initiateEETest() {
  setInitialState();

  currentTestSuite = 'EventEmitter';
  container = document.createElement('div');
  if ($body) $body.appendChild(container);

  const eventEmitter = new EventEmitter();

  streamsCount = Number($streamsCount.value);
  interval = Number($interval.value);
  eventEmitter.addListener('stream', ({ payload }) => {
    renderedItems++;

    insertSpan(container, payload.id);

    if ($info) $info.textContent = calculateTextContent(renderedItems);

    if (renderedItems >= itemsLimit * streamsCount) {
      finishTest(container);
    }
  })

  profiler = performance.now()
  intervalIds = Array
    .from({ length: streamsCount })
    .map((_, i) => setInterval(() => {
      eventEmitter.emit('stream', {type: 'stream', payload: mock(i)})
    }, interval));
}

function finishTest(container) {
  if ($info) $info.textContent = `rendering ${itemsLimit * streamsCount} nodes througt ${currentTestSuite} took ${Math.ceil(performance.now() - Number(profiler))}ms`
  intervalIds.forEach(clearInterval);
}

function setInitialState() {
  intervalIds.forEach(clearInterval);
  intervalIds = [];
  if (container) container.remove();
  container = null;
  renderedItems = 0;
  profiler = undefined;
  currentTestSuite = '';
  interval = 10;
  itemsLimit = Number($input.value) || 1000;
}

function insertSpan(container, streamNumber) {
  const span = document.createElement('span');
  span.classList.add('item');
  span.style.backgroundColor = colors[streamNumber];
  container.appendChild(span);
}
