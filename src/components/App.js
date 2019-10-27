import React from "react";
import { Route, Switch } from "react-router-dom";
import PokemonData from "../services/PokemonData";
import Header from "./Header";
import Home from "./Home";
import PokemonDetail from "./PokemonDetail";
/* import Filter from "./Filter";
import PokemonList from "./PokemonList"; */
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
    this.renderOriginal = this.renderOriginal.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
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

  renderOriginal() {
    let filterName = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toUpperCase()
        .includes(this.state.inputValue.toUpperCase());
    });

    return (
      <Home
        pokemons={filterName}
        loading={this.state.loading}
        searchByName={this.searchByName}
      />
    );
  }

  renderDetail(props) {
    const selectedId = parseInt(props.match.params.id);
    let selectedPokemon;
    for (const pokemon of this.state.pokemons) {
      if (pokemon.id === selectedId) {
        selectedPokemon = pokemon;
      }
    }
    return <PokemonDetail pokemon={selectedPokemon} />;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={this.renderOriginal} />
          <Route path="/detail/:id" render={this.renderDetail} />
        </Switch>
        {/*  <Filter searchByName={this.searchByName} />
        <PokemonList
          className="pokemon__page"
          pokemons={filterName}
          loading={this.state.loading}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
