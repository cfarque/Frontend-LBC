import React from "react";
import Logo from "/Users/Claire/LeReacteur/React/lbc/leboncoin-front/src/Leboncoin.fr_Logo_2016.svg";

function Header() {
  return (
    <div className="header">
      <div className="first-header">
        <img className="logo" src={Logo} alt="Leboncoin" />
        <button className="plus-bar">
          <i className="plus far fa-plus-square"></i>
          Déposer une annonce
        </button>
        <button className="search-bar">
          <i className="search fas fa-search"></i>
          Rechercher
        </button>
      </div>
      <div>
        <button className="login">
          <i className="far fa-user"></i>
          <span> Se connecter</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
