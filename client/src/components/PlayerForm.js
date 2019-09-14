import React, { useState } from "react";
import { useInput } from "../hooks/hooks";

const PlayerForm = props => {
  const [playerName, handleNameChanges, clearPlayerInput] = useInput("");
  const [country, handleCountryChanges, clearCountryInput] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewPlayer(playerName, country);
    clearPlayerInput();
    clearCountryInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="player"
        placeholder="Player"
        value={playerName}
        onChange={handleNameChanges}
      />
      <input
        name="country"
        placeholder="country"
        value={country}
        onChange={handleCountryChanges}
      />
      <button>Submit</button>
    </form>
  );
};

export default PlayerForm;
