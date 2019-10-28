import React from "react";
import { Link } from "react-router-dom";
import renderPokemonTypes from "./renderPokemonType";
import "../stylesheets/PokemonCard.scss";

const PokemonCard = props => {
  return (
    <li className="pokemon__card">
      <Link className="pokemon__card-link" to={`/detail/${props.pokemonId}`}>
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

          <div className="pokemon__evolutions">
            <p className="pokemon__evolutions--title">Evolves to:</p>
            <p className="pokemon__evolutions--name">
              {props.pokemonEvolutionName}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
