import React from "react";
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
      <label htmlFor="player" hidden>
        Player
      </label>
      <input
        data-testid="player"
        name="player"
        placeholder="Player"
        value={playerName}
        onChange={handleNameChanges}
      />
      <label htmlFor="country" hidden>
        Country
      </label>
      <input
        data-testid="country"
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
