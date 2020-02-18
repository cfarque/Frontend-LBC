import React from "react";
import "./Product.css";
import moment from "moment";
import "moment/locale/fr";
// je récupère l'objet offer
function Product({ offer }) {
  console.log(offer);
  moment.locale("fr");
  return (
    <div className="global-div">
      <div className="offer-description">
        <div className="offer-title">
          {offer.picture ? (
            // si mon objet contient plusieurs images
            <div className="offer-picture">
              <img src={offer.picture} alt={offer.title} />
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
          <div className="offer-date">
            {moment(offer.created).format("LLLL")}
          </div>
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
