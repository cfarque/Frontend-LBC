import React, { useState, useEffect } from "react";

import axios from "axios";
import OneOffer from "./OneOffer";
import Container from "../components/Container";

function ListOffers({ offers, setOffers, step, setStep }) {
  const [dateFilter, setDateFilter] = useState("date-desc");
  const [priceFilter, setPriceFilter] = useState(null);
  // je créé une fonction qui va faire une requête au serveur pour récupérer les annonces
  const fetchData = async () => {
    if (priceFilter === null) {
      const response = await axios.get(
        `https://leboncoin-2003-claire.herokuapp.com/offer/with-count?date=${dateFilter}`
      );
      // je mets à jour le state de offers
      setOffers(response.data.offers);
    } else {
      const response = await axios.get(
        `https://leboncoin-2003-claire.herokuapp.com/offer/with-count?sort=${priceFilter}`
      );
      // je mets à jour le state de offers
      setOffers(response.data.offers);
    }
  };
  // j'appelle ma fonction fetchData une seule fois au chargement de ma page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {offers ? (
        offers.map(offer => {
          // je parcours mon tableau offers et j'envoie des données à mon component
          return <OneOffer key={offer._id} offer={offer} />;
        })
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default ListOffers;
