import React from "react";
import Logo from "../images/pokemon.png";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <div className="header__box">
      <img src={Logo} alt="Pokemon" className="logo" />
    </div>
  );
};

export default Header;
