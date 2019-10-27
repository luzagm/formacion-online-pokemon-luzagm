import React from "react";

const renderPokemonAbilities = pokemon => {
  return pokemon.map((ability, index) => (
    <li className="pokemon__abilities--detail--item" key={index}>
      {ability}
    </li>
  ));
};

export default renderPokemonAbilities;
