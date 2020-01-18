import React from "react";

class D extends React.Component {
  render() {
    return (
      <div className='component'>
        <h1>
          Component D - props: counter: {this.props.counter}
        </h1>
        <p>this.props.counter = {this.props.counter} </p>
        <p>this.props.onCounterClick => (function in A) </p>
        <button onClick={this.props.onCounterClick}>
          {`Clicou ${this.props.counter} vezes`}
        </button>{' '}
        onClick => this.props.onCounterClick
      </div>
    );
  }
}

export default D;
