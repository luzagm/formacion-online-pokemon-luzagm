import React from "react";
import "../stylesheets/Filter.scss";

const Filter = props => {
  const { searchByName } = props;
  return (
    <form className="filter__container">
      <input
        onChange={searchByName}
        className="input"
        placeholder="Search pokemon by name"
      ></input>
    </form>
  );
};

export default Filter;
