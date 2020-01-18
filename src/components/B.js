import React, { Component } from "react";
import C from "./C";

class B extends Component {
  render() {
    return (
      <div className='component'>
        <h1>
          Component B - props: counter: {this.props.counter}
        </h1>
        <p>this.props.counter = {this.props.counter}</p>
        <p>this.props.onCounterClick => (function in A)</p>
        <C
          counter={this.props.counter}
          onCounterClick={this.props.onCounterClick}
        />
      </div>
    );
  }
}

export default B;
