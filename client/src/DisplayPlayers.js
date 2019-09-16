import React, {useState} from 'react';
import {useInput} from "./playerLiker";

export const increaseStat = value => {
    return value + 1;
}

const DisplayPlayers = (props) => {

    const [playerLikes, setPlayerLikes, handlePlayerLikes] = useInput("likes", 0);

    return (
        <div className="playerBoxesContainer">
            <h1>Number of Liked Players: {playerLikes}</h1>
            {props.players.map((player) =>
                <div key={player.id} className="playerBox">
                    <h1>{player.name}</h1>
                    <h2>Country: {player.country}</h2>
                    <h2># of Searches: {player.searches}</h2>
                    <button onClick={() => setPlayerLikes(increaseStat(playerLikes))}>Like</button>
                </div>
            )}
        </div>
    )
};

export default DisplayPlayers;