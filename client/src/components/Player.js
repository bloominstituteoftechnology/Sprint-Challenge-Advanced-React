import React from "react";

const Player = props =>{
    return (
        <div className="player" data-testid="player">
            <h2>{props.name}</h2>
            <h3>Country: {props.country}</h3>
            <h3>Searches: {props.searches}</h3>
        </div>
    );
};

export default Player;