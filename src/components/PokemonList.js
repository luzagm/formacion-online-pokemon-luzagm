import React from "react";
import PokemonCard from "./PokemonCard";
import "../stylesheets/PokemonList.scss";

const PokemonList = props => {
  if (props.pokemons.length === 0) {
    return (
      <div className="not-found">
        <p className="not-found-text">
          No hay pokemonss que coincidan con la búsqueda
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
