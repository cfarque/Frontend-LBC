import React, { useEffect } from "react";

import axios from "axios";
import OneOffer from "./OneOffer";

function ListOffers({ offers, setOffers, step, setStep }) {
  // je créé une fonction qui va faire une requête au serveur pour récupérer les annonces
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/offer/with-count");
    // je mets à jour le state de offers
    console.log(response.data);
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
