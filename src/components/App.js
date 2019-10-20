import React from "react";
import PokemonData from "../services/PokemonData";
import Header from "./Header";
import Filter from "./Filter";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      inputValue: "",
      loading: true
    };
    this.searchByName = this.searchByName.bind(this);
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
              pokemons: [...this.state.pokemons, pokemon],
              loading: false
            });
          });
      }
    });
  }

  searchByName(ev) {
    const inputValue = ev.currentTarget.value;
    return this.setState({
      inputValue: inputValue
    });
  }

  render() {
    let filterName = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toUpperCase()
        .includes(this.state.inputValue.toUpperCase());
    });

    return (
      <div className="App">
        <Header />
        <Filter searchByName={this.searchByName} />
        <PokemonList
          className="pokemon__page"
          pokemons={filterName}
          loading={this.state.loading}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
