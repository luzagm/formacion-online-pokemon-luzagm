import React from "react";
import { Route, Switch } from "react-router-dom";
import PokemonData from "../services/PokemonData";
import Header from "./Header";
import Home from "./Home";
import PokemonDetail from "./PokemonDetail";
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
    this.getPokemonInfo();
  }

  getPokemonInfo() {
    PokemonData().then(data => {
      for (let pokemon of data.results) {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(pokemonInfo => {
            fetch(pokemonInfo.species.url)
              .then(response => response.json())
              .then(pokemonSpecies => {
                fetch(pokemonSpecies.evolution_chain.url)
                  .then(response => response.json())
                  .then(pokemonEvolutions => {
                    const types = [];
                    for (let item of pokemonInfo.types) {
                      types.push(item.type.name);
                    }
                    const abilities = [];
                    for (let item of pokemonInfo.abilities) {
                      abilities.push(item.ability.name);
                    }
                    const moves = [];
                    for (let item of pokemonInfo.moves) {
                      moves.push(item.move.name);
                    }
                    const pokemon = {
                      name: pokemonInfo.name,
                      image: pokemonInfo.sprites.front_default,
                      id: pokemonInfo.id,
                      types: types,
                      abilities: abilities,
                      moves: moves,
                      height: pokemonInfo.height,
                      weight: pokemonInfo.weight,
                      firstEvolutionName: pokemonEvolutions.chain.evolves_to[0]
                        ? pokemonEvolutions.chain.evolves_to[0].species.name
                        : ""
                      /*   secondEvolutionName: pokemonEvolutions.chain.species
                        ? pokemonEvolutions.chain.species.name
                        : "" */
                    };
                    this.setState({
                      pokemons: [...this.state.pokemons, pokemon],
                      loading: false
                    });
                  });
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

        <Footer />
      </div>
    );
  }
}

export default App;
