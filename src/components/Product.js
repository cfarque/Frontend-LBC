import React from "react";
import "./Product.css";
import moment from "moment";
import "moment/locale/fr";
import { useHistory } from "react-router-dom";
import cookie from "js-cookie";
import Container from "./Container";

// je récupère l'objet offer
function Product({ offer }) {
  const token = cookie.get("token") || null;
  const history = useHistory();
  moment.locale("fr");

  return (
    <Container>
      <div className="global-div">
        <div className="offer-description">
          <div className="offer-title">
            {offer.pictures ? (
              // si mon objet contient plusieurs images
              <div className="offer-picture">
                {offer.pictures.map(picture => {
                  return (
                    <img src={picture} alt={offer.title} key={offer._id} />
                  );
                })}
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
          <button
            className="paid"
            onClick={() => {
              if (token) {
                history.push("/payment", {
                  title: offer.title,
                  price: offer.price,
                  picture: offer.picture,
                  username: offer.creator.account.username
                });
              } else {
                history.push("/log_in");
              }
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Product;
