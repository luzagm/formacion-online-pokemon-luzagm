import React from "react";
import PokemonList from "./PokemonList";
import Filter from "./Filter";

const Home = props => {
  return (
    <div className="App">
      <Filter searchByName={props.searchByName} />
      <PokemonList pokemons={props.pokemons} loading={props.loading} />
    </div>
  );
};

export default Home;
