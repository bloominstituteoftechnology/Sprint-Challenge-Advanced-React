import React from "react";
import PlayersCard from "./PlayersCard.js";

const PlayersList = props => {
  return (
    <div>
      {props.players.map(player => {
          return(
            <PlayersCard 
                key={player.id}
                id={player.id}
                name={player.name}
                country={player.country}
                searches={player.searches} 
            />
          );
      })}
    </div>
  );
};

export default PlayersList; 
