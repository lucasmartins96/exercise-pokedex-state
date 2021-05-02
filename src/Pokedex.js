import React from 'react';
import Pokemon from './Pokemon';
import './css/Pokedex.css';
import Button from './components/Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      pokemonsList: props.pokemons,
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.changeType = this.changePokemonType.bind(this);
  }

  changeIndex() {
    const { pokemonsList: { length }} = this.state;
    this.setState((prevState, _props) => ({
      index: (prevState.index + 1) % length,
    }));
  }

  filterPokemonsByType(pokemonsArr, type) {
    return (type !== 'All') ? pokemonsArr.filter((pokemon) => pokemon.type === type)
      : pokemonsArr;
  }

  changePokemonType(pokemonType, pokemons) {
    this.setState({
      index: 0,
      pokemonsList: this.filterPokemonsByType(pokemons, pokemonType),
    });
  }

  getDistinctPokemonTypes(pokemons) {
    return pokemons.reduce((acc, { type }) => {
      const arrAcc = acc;
      if (!arrAcc.includes(type)) {
        arrAcc.push(type);
      }
      return arrAcc;
    }, ['All']);
  }

  render() {
    const { pokemons } = this.props;
    const { index, pokemonsList } = this.state;
    const pokemonsType = this.getDistinctPokemonTypes(pokemons);
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={ pokemonsList[index].id } pokemon={ pokemonsList[index] } />
        </div>
        <div className="buttons">
          <div className="type-pokemons">
            { 
              pokemonsType.map((type) => 
                <Button changePokemonType={ () => this.changePokemonType(type, pokemons) }>
                  { type }
                </Button>)
            }            
          </div>
          <button onClick={ this.changeIndex }>Próximo pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;