import React from "react";
import { Elements } from "react-stripe-elements";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/Payment/CheckoutForm";

function Payment() {
  const location = useLocation();
  const { picture, price, title, username } = location.state;
  return (
    <Elements>
      <CheckoutForm
        picture={picture}
        price={price}
        title={title}
        username={username}
      />
    </Elements>
  );
}

export default Payment;
