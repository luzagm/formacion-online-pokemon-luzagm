import React from "react";
import renderPokemonTypes from "./renderPokemonType";
import renderPokemonAbilities from "./renderPokemonAbilities";
import renderPokemonMoves from "./renderPokemonMoves";
import "../stylesheets/Details.scss";

const Details = props => {
  return (
    <div className="pokemon__card--detail">
      <h2 className="pokemon__name--detail">{props.pokemonName}</h2>
      <div className="pokemon__wrap--detail">
        <img
          className="pokemon__image--detail"
          src={props.pokemonImage}
          alt={`${props.pokemonName}`}
        />
        <ul className="pokemon__types--detail">
          {renderPokemonTypes(props.pokemonType)}
        </ul>
      </div>

      <div className="pokemon__info--wrapper">
        <div>
          <div className="pokemon__title--detail">Profile</div>
          <p className="pokemon__abilities--detail">
            <strong>Abilities:</strong>
            {renderPokemonAbilities(props.pokemonAbility)}
          </p>
          <ul>
            <li className="pokemon__height--detail">
              <strong>Height:</strong> {props.pokemonHeight}
            </li>
            <li className="pokemon__weight--detail">
              <strong>Weight:</strong> {props.pokemonWeight}
            </li>
          </ul>
        </div>

        <div>
          <div className="pokemon__title--detail">Moves</div>
          <p className="pokemon__moves--detail">
            {renderPokemonMoves(props.pokemonMoves)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
