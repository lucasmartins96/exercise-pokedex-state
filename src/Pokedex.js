import React from 'react';
import Pokemon from './Pokemon';
import './css/Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      pokemonsList: props.pokemons,
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.changeType = this.changePokemonType.bind(this);
  }

  changeIndex() {
    const { pokemonsList: { length }} = this.state;
    this.setState((prevState, _props) => ({
      index: (prevState.index + 1) % length,
    }));
  }

  changePokemonType({ target: { innerText }}, pokemons) {
    this.setState({
      index: 0,
      pokemonsList: this.filterPokemonsByType(pokemons, innerText),
    })
  }

  filterPokemonsByType(pokemonsArr, type) {
    return (type !== 'All') ? pokemonsArr.filter((pokemon) => pokemon.type === type)
      : pokemonsArr;
  }

  
  render() {
    const { pokemons } = this.props;
    const { index, pokemonsList } = this.state;
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={ pokemonsList[index].id } pokemon={ pokemonsList[index] } />
        </div>
        <div className="buttons">
          <div className="type-pokemons">
            <button onClick={ (event) => this.changePokemonType(event, pokemons) }>Fire</button>
            <button onClick={ (event) => this.changePokemonType(event, pokemons) }>Psychic</button>
            <button onClick={ (event) => this.changePokemonType(event, pokemons) }>All</button>
          </div>
          <button onClick={ this.changeIndex }>Próximo pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;