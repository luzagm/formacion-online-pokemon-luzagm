import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import "../stylesheets/PokemonDetail.scss";

const PokemonDetail = props => {
  if (props.pokemon === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="details">
        <Details
          pokemonName={props.pokemon.name}
          pokemonImage={props.pokemon.image}
          pokemonType={props.pokemon.types}
          pokemonHeight={props.pokemon.height}
          pokemonWeight={props.pokemon.weight}
          pokemonAbility={props.pokemon.abilities}
          pokemonMoves={props.pokemon.moves}
          pokemonId={props.pokemon.id}
        />
        <Link className="back-link" to="/">
          <div className="back">Back</div>
        </Link>
      </div>
    );
  }
};

export default PokemonDetail;
