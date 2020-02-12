import React from "react";

function Search() {
  return (
    <form onSubmit={() => {}}>
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
