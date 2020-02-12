import React, { useEffect } from "react";

import axios from "axios";
import OneOffer from "./OneOffer";

function ListOffers({ offers, setOffers, step, setStep }) {
  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );
    setOffers(response.data.offers);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      {offers.map((offer, index) => {
        return <OneOffer offer={offer} step={step} setStep={setStep} />;
      })}
    </div>
  );
}

export default ListOffers;
