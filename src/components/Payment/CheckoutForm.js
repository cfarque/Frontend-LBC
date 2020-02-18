import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import "./CheckoutForm.css";

function CheckoutForm({ stripe, title, picture, price, username }) {
  return (
    <div className="checkForm-all-page">
      <div className="checkForm-offer">
        <h4>Acheter en ligne</h4>
        <img src={picture} alt={title} />
        <div className="checkForm-title">{title}</div>
        <div className="checkForm-price">{price} €</div>
        <div className="checkForm-number">Vos coordonnées bancaires</div>
        <CardElement className="card-element" />
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
              "http://localhost:3000/payment",
              { token: stripeResponse.token.id, amount: price, title: title }
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
