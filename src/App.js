import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import LogIn from "./containers/LogIn";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import Cookies from "js-cookie";
import Footer from "./components/Footer";
import Payment from "./containers/Payment";

function App() {
  //Je stocke le token dans un cookie
  const tokenFromCookie = Cookies.get("token");
  let newState;

  // Si le token existe je change l'état de user en lui donnant le token
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    //sinon je lui attributs la valeur null
    newState = null;
  }
  const [user, setUser] = useState(newState);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/user/sign_up">
          <SignUp />
        </Route>
        <Route path="/payment">
          <StripeProvider
            apiKey="	
pk_test_MPC5U4TIGO38zJvaz5r5a1Mz00NF4khP0c"
          >
            <Payment />
          </StripeProvider>
        </Route>
        <Route path="/user/log_in">
          <LogIn user={user} setUser={setUser} />
        </Route>
        <Route path="/offer/publish">
          <Publish user={user} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
