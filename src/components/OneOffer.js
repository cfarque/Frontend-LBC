import React from "react";
import "./OneOffer.css";
import moment from "moment";
import { Link } from "react-router-dom";
import "moment/locale/fr";

function OneOffer({ offer }) {
  moment.locale("fr");
  // je récupère chaque offre
  // je créé une constante pour afficher une url
  const page = `/offer/${offer._id}`;

  return (
    <Link to={page}>
      <div className="item">
        {offer.pictures ? (
          // si mon tableau d'images n'est pas vide j'affiche la première image du tableau
          <div className="bg-img">
            <img src={offer.pictures[0]} alt="annonce" />
          </div>
        ) : (
          //sinon j'affiche un logo vide
          <div className="bg-img">
            <i className="no-photo fas fa-ban"></i>
          </div>
        )}
        <div className="description">
          <div className="title-price">
            <div className="title">{offer.title}</div>
            {offer.price ? ( // est ce que le price existe? si oui je l'affiche
              <div className="price">{offer.price}€</div>
            ) : // sinon je n'affiche rien
            null}
          </div>
          <div className="date">{moment(offer.created).format("LLLL")}</div>
        </div>
      </div>
    </Link>
  );
}

export default OneOffer;
