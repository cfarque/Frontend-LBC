import React from "react";
import axios from "axios";
import "./Login.css";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Login({ setPassword, password, setEmail, email, setUser }) {
  const history = useHistory();
  return (
    <div className="all-login">
      <div className="bg-white">
        <form
          className="loginpage"
          onSubmit={async event => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://leboncoin-2003-claire.herokuapp.com/api/user/log_in",
                { email, password }
              );
              if (response.data.token) {
                // Connexion réussie
                const token = response.data.token;
                Cookies.set("token", token, { expires: 7 });
                history.push("/");
                setUser({ token });
              } else {
                // Connexion échouée
                alert("le mot de passe et/ou l'identifiant est incorrect");
              }
            } catch (error) {
              alert("le mot de passe et/ou l'identifiant est incorrect");
            }

            setEmail("");
            setPassword("");
          }}
        >
          <h3>Connexion</h3>
          <p>Adresse email</p>
          <input
            className="account-input"
            type="email"
            name="email"
            value={email}
            onChange={event => {
              //Pour mettre à jour le state de l'email
              setEmail(event.target.value);
            }}
          />
          <p>Mot de passe</p>
          <input
            className="account-input"
            type="password"
            name="password"
            value={password}
            onChange={event => {
              //Pour mettre à jour le state du mot de passe
              setPassword(event.target.value);
            }}
          />
          <button className="connect-button" type="submit">
            Se connecter
          </button>
        </form>
      </div>
      <div className="no-account">
        <div>Vous n'avez pas de compte ?</div>
        <button
          className="btn-crea"
          onClick={() => {
            //Pour être redirigé vers la page de connexion
            history.push("/user/sign_up");
          }}
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
}

export default Login;
