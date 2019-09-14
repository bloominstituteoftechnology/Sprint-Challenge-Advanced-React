import React from "react";

const Players = props => {
    console.log("Players:", props)
    return (
     <div className="player-info">
        <h3>{props.player.name}</h3>
        <p>Country:{props.player.country}</p>
        <p>Number of Searches: {props.player.searches}</p>
    </div>
    )
}

export default Players