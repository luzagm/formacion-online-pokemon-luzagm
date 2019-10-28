import React from "react";
import PokemonCard from "./PokemonCard";
import Pokeball from "../images/ball-poke.png";
import "../stylesheets/PokemonList.scss";

const PokemonList = props => {
  const { loading } = props;

  if (loading) {
    return (
      <div className="loader">
        <img className="pokeball" src={Pokeball} alt="Pokeball" />
      </div>
    );
  } else if (props.pokemons.length === 0) {
    return (
      <div className="not__found">
        <p className="not__found--text">
          No hay pokemons que coincidan con la búsqueda
        </p>
      </div>
    );
  } else {
    let pokemonsList = props.pokemons.map((pokemon, index) => {
      return (
        <PokemonCard
          key={index}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.image}
          pokemonType={pokemon.types}
          pokemonEvotion={pokemon.evolution}
          /* pokemonFirstEvolutionName={pokemon.firstEvolutionName}
          pokemonSecondEvolutionName={pokemon.secondEvolutionName} */
          pokemonId={pokemon.id}
        />
      );
    });

    return (
      <div className="pokemon__wrapper">
        <ul className="pokemon">{pokemonsList}</ul>
      </div>
    );
  }
};

export default PokemonList;
