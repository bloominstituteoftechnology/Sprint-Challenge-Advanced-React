import React from 'react';

const PlayerCard = (props) => {
    return(
        <div>
            {props.players.map(player =>
                <div key={player.id}>
                    <h2>{player.name}</h2>
                    <h3>{player.country}</h3>
                    <h3>Number of searches: {player.searches}</h3>
                </div>
            )}
        </div>
    );
}

export default PlayerCard;