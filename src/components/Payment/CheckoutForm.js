import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

function CheckoutForm({ stripe, title, picture, price, username }) {
  return (
    <div className="checkForm-all-page">
      <div className="checkForm-offer">
        <h4>Acheter en ligne</h4>
        <img src={picture} alt={title} />
        <div>{title}</div>
        <div>{price}</div>
        <div>Vos Coordonnées bancaires</div>
        <CardElement />
        <button
          onClick={async event => {
            const stripeResponse = await stripe.createToken({
              name: username
            });
            if (stripeResponse.error) {
              alert(stripeResponse.error.message);
            } else {
              console.log("stripeResponse.token", stripeResponse.token);
            }
            const paymentResponse = await axios.post(
              "https://leboncoin-2003-claire.herokuapp.com/user/log_in",
              { token: stripeResponse.token.id }
            );
            console.log("paymentResponse", paymentResponse);
          }}
        >
          Valider le paiement
        </button>
      </div>
    </div>
  );
}

export default injectStripe(CheckoutForm);
