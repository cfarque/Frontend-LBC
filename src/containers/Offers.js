import React, { useState } from "react";
import Search from "../components/Search";
import ListOffers from "../components/Offers/ListOffers";

function Offers() {
  const [offers, setOffers] = useState([]);
  return (
    <div>
      <div className="orange-bar">
        <Search />
      </div>
      <div className="general">
        <ListOffers offers={offers} setOffers={setOffers} />
      </div>
    </div>
  );
}

export default Offers;
