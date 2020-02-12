import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import ListOffers from "../components/ListOffers";

function Offers() {
  const [offers, setOffers] = useState([]);
  const [step, setStep] = useState(0);
  return (
    <div>
      <div className="orange-bar">
        <Search />
      </div>
      <div className="general">
        <ListOffers
          offers={offers}
          setOffers={setOffers}
          step={step}
          setStep={setStep}
        />
      </div>
    </div>
  );
}

export default Offers;
