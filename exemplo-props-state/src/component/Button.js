import React, { Component } from 'react';

class Button extends Component {


  handleClick = (event) =>{
    if(this.props.handleClick) {
      this.props.handleClick();
    }
  }

  handleMouseover = (event) =>{
    if(this.props.handleMouseover) {
      this.props.handleMouseover();
    }
  }

  render(){
    return(
      <button
        theme={this.props.theme}
        type={this.props.type}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseover}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
