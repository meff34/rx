import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Header />, document.getElementById('header'));
registerServiceWorker();
