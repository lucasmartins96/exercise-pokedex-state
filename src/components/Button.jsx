import React, { Component } from 'react';
import '../css/Button.css';

class Button extends Component {
  render() {
    const { children, changePokemonType } = this.props;
    return <button className={ `button ${children}`} onClick={ changePokemonType }>{ children }</button>
  }
}

export default Button;
