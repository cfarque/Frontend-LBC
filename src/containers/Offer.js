import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../components/Offer/Product";

function Offer() {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const fetchData = async () => {
    // je fais une requête au serveur avec l'id, pour récupérer et afficher les informations d'une annonce en particulier
    const response = await axios.get(
      "https://leboncoin-2003-claire.herokuapp.com/offer/" + params.id
    );
    // je mets à jour mon objet offer
    setOffer(response.data);
    // je change l'état de isLoading
    setIsLoading(false);
  };
  // j'appelle ma fonction fetchData qu'une seule fois au chargement de ma page
  useEffect(() => {
    fetchData();
  }, [params.id]);
  return (
    <div className="product-page">
      {isLoading ? (
        <div>En cours de chargement</div>
      ) : (
        <Product offer={offer} />
      )}
    </div>
  );
}

export default Offer;
