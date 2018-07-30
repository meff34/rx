// @flow

// import './performance/busTest.sync';
// import './performance/emitterTest.sync';

import bus from "./bus";
import EventEmitter from "./EventEmitter";

const busContainer = document.querySelector('#bus');
const busCounterContainer = document.querySelector('#bus>.counter');
const emitterContainer = document.querySelector('#eventEmitter');
const emitterCounterContainer = document.querySelector('#eventEmitter>.counter');

const speed = 1;
let busRenderedItems = 0;
let emitterRenderedItems = 0;

bus.read().subscribe(chunk => {
  const span = document.createElement('span');
  busContainer.appendChild(span);
  busCounterContainer.textContent = `${++busRenderedItems} -- bus items`;
});


const emitter = new EventEmitter();

emitter.addListener('stream', chunk => {
  const span = document.createElement('span');
  emitterContainer.appendChild(span);
  emitterCounterContainer.textContent = `${++emitterRenderedItems} -- eventEmitter items`;
});

let intervalIds = [];

const startTest = () => {
  intervalIds = [
    setInterval(() => {
      bus.emit({type: 'stream', payload: Math.random()})
    }, speed),
    setInterval(() => {
      emitter.emit('stream', {type: 'stream', payload: Math.random()})
    }, speed),
  ]
}

const stopTest = () => {
  intervalIds.forEach(clearInterval);
  intervalIds = [];
}

const pauser = document.querySelector('#pause');
const resumer = document.querySelector('#resume');

pauser.addEventListener('click', stopTest)
resumer.addEventListener('click', startTest)

startTest();
