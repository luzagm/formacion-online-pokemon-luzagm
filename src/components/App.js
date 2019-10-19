import React from "react";
import PokemonData from "../services/PokemonData";
import Header from "./Header";
import PokemonList from "./PokemonList";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData() {
    PokemonData().then(data => {
      for (let item of data.results) {
        fetch(item.url)
          .then(response => response.json())
          .then(pokemonInfo => {
            const types = [];
            for (let item of pokemonInfo.types) {
              types.push(item.type.name);
            }
            const pokemon = {
              name: pokemonInfo.name,
              image: pokemonInfo.sprites.front_default,
              id: pokemonInfo.id,
              types: types
            };
            this.setState({
              pokemons: [...this.state.pokemons, pokemon]
            });
          });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PokemonList className="pokemon__page" pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
