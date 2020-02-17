import React from "react";
import "./Search.css";

function Search() {
  return (
    <form className="searched-bar" onSubmit={() => {}}>
      <input
        className="input"
        type="search"
        placeholder="Que recherchez vous?"
      />
      <button className="put-search" type="submit">
        Rechercher
      </button>
    </form>
  );
}

export default Search;
