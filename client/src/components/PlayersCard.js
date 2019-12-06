  
import React from 'react';

const PlayersCard = props => {
    return(
        <div className="player_card">
            <h2>{props.name}</h2>
            <p>{`is from ${props.country} and as been searched ${props.searches} times.`}</p>
        </div>
    );
}

export default PlayersCard;