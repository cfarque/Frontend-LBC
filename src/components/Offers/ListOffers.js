import React, { useEffect } from "react";

import axios from "axios";
import OneOffer from "./OneOffer";

function ListOffers({ offers, setOffers, step, setStep }) {
  // je créé une fonction qui va faire une requête au serveur pour récupérer les annonces
  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-2003-claire.herokuapp.com/offer/with-count"
    );
    // je mets à jour le state de offers
    setOffers(response.data.offers);
  };
  // j'appelle ma fonction fetchData une seule fois au chargement de ma page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {offers ? (
        offers.map((offer, index) => {
          // je parcours mon tableau offers et j'envoie des données à mon component
          return <OneOffer key={offer._id} offer={offer} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ListOffers;
