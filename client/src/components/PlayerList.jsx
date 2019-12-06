import React, { useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { useLocalStorage } from "./hooks/useLocalStorage";

function PlayerList({ players, putLocalStorageInState }) {
  const [playerData, setPlayerData] = useLocalStorage("players");

  useEffect(() => {
    setPlayerData(players);
  }, [players, setPlayerData]);

  useEffect(() => {
    if (playerData) {
      putLocalStorageInState(playerData);
    }
  }, []);

  return (
    <>
      {players.map((player, i) => (
        <PlayerCard key={i} player={player} />
      ))}
    </>
  );
}

export default PlayerList;
