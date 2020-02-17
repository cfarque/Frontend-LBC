import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import LogIn from "./containers/LogIn";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import Cookies from "js-cookie";
import Footer from "./components/Footer";

function App() {
  //Je stocke le token dans un cookie
  const tokenFromCookie = Cookies.get("token");
  let newState;
  const [user, setUser] = useState(newState);
  // Si le token existe je change l'état de user en lui donnant le token
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    //sinon je lui attributs la valeur null
    newState = null;
  }
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/user/sign_up">
          <SignUp />
        </Route>
        <Route path="/user/log_in">
          <LogIn user={user} setUser={setUser} />
        </Route>
        <Route path="/offer/publish">
          <Publish />
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
