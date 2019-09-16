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
                    <button>Like</button>
                    <button>Hate</button>
                </div>
            )}
        </div>
    )
};

export default DisplayPlayers;