import React from 'react';

const PlayerCard = (props) => {
    return (
        <div>
            <h1>{props.player.name}</h1>
            <h1>{props.player.country}</h1>
            <h1>{props.player.searches}</h1>
        </div>
    );
}

export default PlayerCard;
