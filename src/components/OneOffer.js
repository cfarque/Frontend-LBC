import React from "react";
import { Link } from "react-router-dom";

function OneOffer({ offer, step, setStep }) {
  return (
    <div
      className="item"
      onClick={() => {
        const page = `/offer/:${offer._id}:`;
        return <Link to={page}>Aller sur la page offre</Link>;
      }}
    >
      {offer.pictures.length > 0 ? (
        <div className="bg-img">
          <img src={offer.pictures[0]} alt="annonce" />
        </div>
      ) : (
        <div className="bg-img"></div>
      )}
      <div className="description">
        <div className="title-price">
          <div className="title">{offer.title}</div>
          {offer.price ? <div className="price">{offer.price}€</div> : null}
        </div>
        <div className="date">{offer.created}</div>
      </div>
    </div>
  );
}

export default OneOffer;
