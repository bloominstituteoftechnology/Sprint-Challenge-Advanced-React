import React, { useState } from "react";

import Players from "./Players";

const PlayersSearchForm = props => {
  const [search, setSearch] = useState("");

  const handleChanges = e => {
    setSearch(e.target.value);
  };

  const players = props.data.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchPlayer = e => {
    {
      props.data.filter(players => players.name.toLowerCase().includes(search));
     
    }
  };

  return (
    <section>
      <form className="playerssearchForm">
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

export default PlayersSearchForm;