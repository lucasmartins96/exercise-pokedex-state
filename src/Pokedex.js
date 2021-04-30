import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex() {
    this.setState((prevState, _props) => ({
      index: (prevState.index > 6) ? 0 : prevState.index + 1
    }))
  }

  
  render() {
    const { pokemons } = this.props;
    const { index } = this.state;

    return (
      <div className="pokedex">
        <Pokemon key={ pokemons[index].id } pokemon={ pokemons[index] } />
        <button onClick={ this.changeIndex }>Próximo pokemon</button>
      </div>
    );
  }
}

export default Pokedex;