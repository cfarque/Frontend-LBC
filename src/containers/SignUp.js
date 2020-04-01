import React, { useState } from "react";
import WhyCreate from "../components/WhyCreate";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import "../components/SignUp.css";

function SignUp() {
  const history = useHistory();
  const [checkBox, setCheckBox] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  return (
    <div className="signin-all">
      <WhyCreate />
      <div className="create-account">
        <h3>Créer un compte</h3>
        <form
          className="signin-page"
          // lors de la validation de la page
          onSubmit={async event => {
            event.preventDefault();
            if (username && email && password && secondPassword) {
              // si la checkbox est cochée
              if (checkBox === true) {
                // on vérifie que les deux mots de passe sont identiques
                if (password === secondPassword) {
                  // on met un try/catch pour gérer les cas où l'utilisateur n'est pas connu
                  try {
                    // j'envoie au serveur les informations d'inscription'
                    const response = await axios.post(
                      "https://leboncoin-2003-claire.herokuapp.com/user/sign_up",
                      {
                        username,
                        email,
                        password
                      }
                    );
                    // si l'inscription est réussie :
                    // je sauvegarde le token
                    Cookies.set("token", response.data.token, { expires: 7 });
                    // je remets les states des inputs à 0
                    setEmail("");
                    setPassword("");
                    setUsername("");
                    setSecondPassword("");
                    setCheckBox(false);
                    // je redirige sur la page d'accueil
                    history.push("/");
                  } catch (error) {
                    // si l'inscription a échoué car les identifiants existent déjà
                    alert("les identifiants existent déjà ");
                  }
                } else {
                  // si l'inscription a échoué car les mots de passe sont différents
                  alert("Les deux mots de passe ne sont pas identiques");
                }
              } else {
                // si la checkbox n'est pas cochée
                alert("Veuillez accepter les conditions générales");
              }
            } else {
              alert("un des champs est vide");
            }
          }}
        >
          <div>Pseudo</div>
          <input
            type="text"
            value={username}
            name="username"
            onChange={event => {
              // Pour mettre à jour le state lié au pseudo
              setUsername(event.target.value);
            }}
          />
          <div>Adresse email </div>
          <input
            type="email"
            value={email}
            name="email"
            onChange={event => {
              // Pour mettre à jour le state lié à l'email
              setEmail(event.target.value);
            }}
          />
          <div className="signin-password">
            <div className="signin-password-input">
              <div className="signin-password-first">Mot de passe</div>
              <input
                className="signin-password-input-first"
                type="password"
                name="password"
                value={password}
                onChange={event => {
                  // Pour mettre à jour le state lié au mot de passe
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="signin-password-input">
              <div className="signin-password-first">
                Confirmer le mot de passe
              </div>
              <input
                className="signin-password-input-first"
                type="password"
                value={secondPassword}
                name="secondPassword"
                onChange={event => {
                  // Pour mettre à jour le state lié au mot de passe
                  setSecondPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="signin-checkbox">
            <input
              type="checkbox"
              onClick={() => {
                const check = !checkBox;
                setCheckBox(check);
              }}
            />
            <span>
              " J'accepte les <a href="#">Conditions Générales de Vente </a> et
              les <a href="#"> Conditions Générales d'Utilisation </a>"{" "}
            </span>
          </div>
          <button>Créer mon Compte Personnel</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
