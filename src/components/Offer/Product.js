import React from "react";
import "./Product.css";
// je récupère l'objet offer
function Product({ offer }) {
  return (
    <div className="global-div">
      <div className="offer-description">
        <div className="offer-title">
          {offer.pictures.length > 0 ? (
            // si mon objet contient plusieurs images
            <div className="offer-picture">
              <img src={offer.pictures[0]} alt={offer.title} />
            </div>
          ) : (
            // sinon on affiche une div vide
            <div className="offer-picture">
              <i className="no-p fas fa-ban"></i>
            </div>
          )}
          <div className="title-price">
            <h5>{offer.title}</h5>

            {offer.price ? (
              <div className="offer-price">{offer.price}€</div>
            ) : (
              <div className="offer-price"></div>
            )}
          </div>
          <div className="offer-date">{offer.created}</div>
        </div>
        <div className="offer-infos">
          {offer.description && (
            <div>
              <h6> Description</h6>
              {offer.description}
            </div>
          )}
        </div>
      </div>
      <div className="aside">
        <div className="offer-user">{offer.creator.account.username}</div>
        <button className="paid">Acheter</button>
      </div>
    </div>
  );
}

export default Product;
