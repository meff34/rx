import React, { Component } from 'react';
import stream from './bus';

const counterEvents = stream.read('counter');

class App extends Component {
  state = {};

  onEvent = data => {
    this.setState(() => ({
      counter: data.payload,
    }))
  }

  subscribe = () => {
    this.subscribtion = counterEvents.subscribe(this.onEvent)
  }

  unsubscribe = () => {
    this.subscribtion && this.subscribtion.unsubscribe();
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          App <em>{this.state.counter}</em>
        </div>
        <br/>
        <button onClick={this.subscribe}>subscribe</button>
        <button onClick={this.unsubscribe}>unsubscribe</button>
      </div>
    );
  }
}

export default App;
