import React, { Component } from "react";
import B from "./B";
import D from "./D";

class A extends Component {
  state = {
    counter: 0
  };

  handleCounterClick = () => {
    let { counter } = this.state;
    counter++;

    this.setState({ counter });
  };

  render() {
    return (
      <div className='component'>
        <h1>Component A - state : counter: {this.state.counter} </h1>
        <p>this.state.counter = {this.state.counter} </p>
        <p>
          this.handleCounterClick =>{' '}
          {
            'this.setState({counter: this.state.counter + 1})'
          }{' '}
        </p>
        <B
          counter={this.state.counter}
          onCounterClick={this.handleCounterClick}
        />
        <D
          counter={this.state.counter}
          onCounterClick={this.handleCounterClick}
        />
      </div>
    );
  }
}

export default A;
