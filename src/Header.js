import React, { Component } from 'react';
import stream from './bus';

class Header extends Component {
  state = {
    counter: 0,
  }

  pushStateToBus = () => {
    stream.push({
      type: 'counter',
      payload: this.state.counter,
    })
  }

  incrementCounter = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }), this.pushStateToBus)
  }

  decrementCounter = () => {
    this.setState(({ counter }) => ({
      counter: --counter,
    }), this.pushStateToBus)
  }

  render() {
    return (
      <div>
        <h2>counter now is {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>
          ++counter
        </button>
        <button onClick={this.decrementCounter}>
          --counter
        </button>
      </div>
    );
  }
}

export default Header;
