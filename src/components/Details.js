import React from "react";
import renderPokemonTypes from "./renderPokemonType";
import "../stylesheets/App.scss";

const Details = props => {
  return (
    <div className="pokemon__card">
      <img
        className="pokemon__image"
        src={props.pokemonImage}
        alt={`${props.pokemonName}`}
      />
      <p className="pokemon__id">{`ID / ${props.pokemonId}`}</p>

      <div className="pokemon__info">
        <h2 className="pokemon__name">{props.pokemonName}</h2>

        {
          <ul className="pokemon__types">
            {renderPokemonTypes(props.pokemonType)}
          </ul>
        }
      </div>
    </div>
  );
};

export default Details;
