import React from "react";
import "./Header.css";
import Logo from "/Users/Claire/LeReacteur/React/lbc/leboncoin-front/src/Leboncoin.fr_Logo_2016.svg";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
function Header({ user, setUser }) {
  const history = useHistory();
  return (
    <div className="all-header">
      <div className="header">
        <div className="first-header">
          <img className="logo" src={Logo} alt="Leboncoin" />
          <button
            className="plus-bar"
            onClick={() => {
              //Pour rediriger l'utilisateur vers la page de publication d'offre
              history.push("/offer/publish");
            }}
          >
            <i className="plus far fa-plus-square"></i>
            Déposer une annonce
          </button>
          <button className="search-bar">
            <i className="search fas fa-search"></i>
            Rechercher
          </button>
        </div>
        <div>
          <button
            className="login"
            // au moment du click sur le bouton connecter/déconnecter
            onClick={() => {
              // si le user n'est pas connecté, l'envoyer sur la page pour se connecter
              if (user === null) {
                history.push("/user/log_in");
              } else {
                // si le user est connecté, le déconnecter:
                //supprimer le cookie
                Cookies.remove("token");
                // modifier l'état de User
                setUser(null);
                // Rediriger vers la page d'accueil
                history.push("/");
              }
            }}
          >
            {user === null ? (
              // si le user est null, afficher le bouton se connecter
              <div className="login">
                <i className="far fa-user"></i>
                <span> Se connecter</span>
              </div>
            ) : (
              // sinon, afficher le bouton déconnecter
              <div className="login">
                <i className="far fa-user"></i>
                <span> Se déconnecter</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
