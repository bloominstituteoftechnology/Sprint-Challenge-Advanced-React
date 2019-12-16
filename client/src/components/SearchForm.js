import React, { useState } from "react";

import Player from "./Player";

const SearchForm = props => {
  const [search, setSearch] = useState("");

  const handleChanges = e => {
    setSearch(e.target.value);
  };

  const players = props.data.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchPlayer = e => {
    {
      props.data.filter(player => player.name.toLowerCase().includes(search));
      // .map(name => <Player key={name} name={name} />);
    }
  };

  return (
    <section>
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChanges}
        />
        <button onClick={searchPlayer} data-testid="searchButton">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
