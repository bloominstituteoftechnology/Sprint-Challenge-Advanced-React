import React, { useState } from "react";


const SearchForm = props => {
  const [search, setSearch] = useState("");

  const handleChanges = e => {
    setSearch(e.target.value);
  };



  const submitHandler = e => {
    e.preventDefault();

    const filtered = e.data.filter(player => {
      return player.name.toLowerCase().includes(search)
    });
    props.search(filtered);
  
  };

  return (
    <section>
      <form className="searchForm">
        <input
          type="text"
          placeholder="Search"
          name ="players"
          value={search}
          onChange={handleChanges}
        />
        <button onSubmit={submitHandler} data-testid="searchButton">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;