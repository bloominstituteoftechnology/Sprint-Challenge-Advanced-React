import React from 'react';
import GetPlayers from './GetPlayers';

const DisplayPlayers = (props) => {

    return (
        <div className="playerBoxesContainer">
            {props.players.map((player) =>
                <div key={player.id} className="playerBox">
                    <h1>{player.name}</h1>
                    <h2>Country: {player.country}</h2>
                    <h2># of Searches: {player.searches}</h2>
                    <h2>ID# {player.id}</h2>
                </div>
            )}
        </div>
    )
};

export default DisplayPlayers;