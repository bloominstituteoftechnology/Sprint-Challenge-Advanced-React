import React from "react";
import PlayerCard from "./PlayerCard"


const PlayerList=({player})=>{

    return (
        <div>
            <PlayerCard player={player}  />
        </div>
    )

}
export default PlayerList;