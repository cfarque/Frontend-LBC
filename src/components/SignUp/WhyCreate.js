import React from "react";
import "./WhyCreate.css";

function WhyCreate() {
  return (
    <div className="why-create">
      <h3>Pourquoi créer un compte ?</h3>
      <div className="why-create-one">
        <i className="far fa-clock"></i>
        <div className="why-create-one-description">
          <h4>Gagnez du temps</h4>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplies
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
        </div>
      </div>
      <div className="why-create-one">
        <i classNames="far fa-bell"></i>
        <div className="why-create-one-description">
          <h4>Soyez les premiers informés</h4>
          <p>
            Crées des alertes Immo ou Emploi et ne manquez jamais l'annonce qui
            vous intéresse.
          </p>
        </div>
      </div>
      <div className="why-create-one">
        {" "}
        <i className="fas fa-eye"></i>
        <div className="why-create-one-description">
          <h4>Visibilité</h4>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyCreate;
