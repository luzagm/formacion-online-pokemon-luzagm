import React from "react";
import "../stylesheets/PokemonCard.scss";

const renderPokemonTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="pokemon__types--item" key={index}>
      {type}
    </li>
  ));
};

const PokemonCard = props => {
  return (
    <li className="pokemon__card">
      <img
        className="pokemon__image"
        src={props.pokemonImage}
        alt={`${props.pokemonName}`}
      />
      <p className="pokemon__id">{`ID / ${props.pokemonId}`}</p>

      <div className="pokemon__info">
        <h2 className="pokemon__name">{props.pokemonName}</h2>

        <ul className="pokemon__types">
          {renderPokemonTypes(props.pokemonType)}
        </ul>
      </div>
    </li>
  );
};

export default PokemonCard;
