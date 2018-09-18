import React, { Component } from 'react';


class Counter extends Component {
  state = { counter: 0, showCounter: false }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  resetCounter = () => {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div className="App">
        { this.state.counter }
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.increaseCounter}>+</button>
        <button onClick={this.resetCounter}>RESET!</button>
      </div>
    )
  }
}

export default Counter;
