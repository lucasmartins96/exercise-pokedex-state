import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { children, changePokemonType} = this.props;
    return <button onClick={ changePokemonType }>{ children }</button>
  }
}

export default Button;
