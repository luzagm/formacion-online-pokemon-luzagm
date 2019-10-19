import React from "react";

const renderPokemonTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="types-list_item" key={index}>
      {type}
    </li>
  ));
};

const PokemonCard = props => {
  return (
    <li>
      <img
        className="pokemon__image"
        src={props.pokemonImage}
        alt={`${props.pokemonName}`}
      />
      <h2 className="pokemon__namee">{props.pokemonName}</h2>
      <p className="pokemon__id">{`ID / ${props.pokemonId}`}</p>
      <ul className="pokemon__types">
        {renderPokemonTypes(props.pokemonType)}
      </ul>
    </li>
  );
};

export default PokemonCard;
