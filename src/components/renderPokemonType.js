import React from "react";

const renderPokemonTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="pokemon__types--item" key={index}>
      {type}
    </li>
  ));
};

export default renderPokemonTypes;
