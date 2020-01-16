import React, { Component } from 'react';
import Button from './Button';

class Form extends Component {

  render() {
    return(
      <form>
        <Button
          type="button"
          handleClick={this.props.submitButtonClick}
        >Clique aqui
        </Button>
      </form>

    );
  }
}

export default Form;
