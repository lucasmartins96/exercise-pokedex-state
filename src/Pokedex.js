import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      type: 'Fire',
      lengthFilteredArr: 2,
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  changeIndex() {
    const iterableIndex = this.state.lengthFilteredArr - 1;
    this.setState((prevState, _props) => ({
      index: (prevState.index === iterableIndex) ? 0 : prevState.index + 1
    }))
  }

  changeType({ target: { innerText }}, length) {
    this.setState({
      type: innerText,
      lengthFilteredArr: length
    })
  }

  
  render() {
    const { pokemons } = this.props;
    const { index, type } = this.state;
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === type);
    const lenghtFilteredArr = filteredPokemons.length;
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={ filteredPokemons[index].id } pokemon={ filteredPokemons[index] } />
        </div>
        <div className="buttons">
          <button onClick={ this.changeIndex }>Próximo pokemon</button>
          <button onClick={ (event) => this.changeType(event, lenghtFilteredArr) }>Fire</button>
          <button onClick={ (event) => this.changeType(event, lenghtFilteredArr) }>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;