import React, { Component } from "react";

class C extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Component C - props: counter: {this.props.counter}</h1>
        <p>this.props.counter = {this.props.counter}</p>
        <p>this.props.onCounterClick => (function in B)</p>
        <button onClick={this.props.onCounterClick}>
          {`Clicou ${this.props.counter} vez(es)`}
        </button>{' '}
        onClick => this.props.onCounterClick
      </div>
    );
  }
}

export default C;
