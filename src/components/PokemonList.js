import React from "react";
import PokemonCard from "./PokemonCard";
import "../stylesheets/PokemonList.scss";

const PokemonList = props => {
  const { loading } = props;

  if (loading) {
    return (
      <div className="loader">
        <p>Loading...</p>
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
          pokemonId={pokemon.id}
        />
      );
    });

    return <ul className="pokemon">{pokemonsList}</ul>;
  }
};

export default PokemonList;
