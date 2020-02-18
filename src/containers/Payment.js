import React from "react";
import { Elements } from "react-stripe-elements";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/Payment/CheckoutForm";
import cookie from "js-cookie";

function Payment() {
  const username = cookie.get("username");
  const location = useLocation();
  const { picture, price, title } = location.state;
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
