import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className='player-card'>
        <h2>Player Information</h2>
        <h3>Name: {props.name}</h3>
        <p>Country: {props.country}</p>
        <p>Search Ranking: {props.searches}</p>
        </div>
    )

}

export default PlayerCard;