import React from 'react';

const PlayerCard = ({ player }) => {
    return(
        <div>
            <h3>{player.name}</h3>
            <h3>{player.country}</h3>
            <h3>Searches: {player.searches}</h3>
        </div>
    )
}

export default PlayerCard;