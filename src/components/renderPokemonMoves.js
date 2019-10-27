import React from "react";

const renderPokemonMoves = pokemon => {
  return pokemon.map((move, index) => (
    <li className="pokemon__moves--detail--item" key={index}>
      {move}
    </li>
  ));
};

export default renderPokemonMoves;
