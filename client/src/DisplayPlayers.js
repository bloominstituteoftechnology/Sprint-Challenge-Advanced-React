import React, {useState} from 'react';
import {useInput} from "./playerLiker";

const DisplayPlayers = (props) => {

    const [playerLikes, setPlayerLikes, handlePlayerLikes] = useInput("likes", 0);

    const clickHandler = (numString) => {
        let num = parseInt(numString);
        let newNum = num++;
        setPlayerLikes(newNum.toString());
    }

    return (
        <div className="playerBoxesContainer">
            <h1>Number of Liked Players: {}</h1>
            {props.players.map((player) =>
                <div key={player.id} className="playerBox">
                    <h1>{player.name}</h1>
                    <h2>Country: {player.country}</h2>
                    <h2># of Searches: {player.searches}</h2>
                    <h2># of Likes: {playerLikes}</h2>
                    <button onClick={(playerLikes) => clickHandler(playerLikes)}>Like</button>
                </div>
            )}
        </div>
    )
};

export default DisplayPlayers;