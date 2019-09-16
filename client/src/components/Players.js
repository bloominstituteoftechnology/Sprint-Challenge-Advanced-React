import React from "react";

const Players = props => {
    console.log("Players:", props)
    return (
     <div className="player-info">
        <h2>{props.player.name}</h2>
        <p>Country: {props.player.country}</p>
        <p>Number of Searches: {props.player.searches}</p>
    </div>
    )
}

export default Players