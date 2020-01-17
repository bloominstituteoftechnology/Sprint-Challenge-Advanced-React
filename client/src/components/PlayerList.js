import React from "react";
import Player from "./Player";

const PlayerList = props => {
    return(
        <div className="playerList">
           
        {props.list.map(person => {
            return(
                <div className="box">
                <Player key={person.id} name={person.name} country={person.country} searches={person.searches} />
                </div>
                );
            
        })}
      
        </div>
   );
};

export default PlayerList;