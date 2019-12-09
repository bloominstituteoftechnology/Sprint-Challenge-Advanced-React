import React from 'react';

function PlayerData({ item }) {
    const name = item.name;
    const country = item.country;
    const searches = item.searches;
    return (
        <div className='player-data'>
            <h2 className='name'>{name}</h2>
            <p className='player-details'>{`Country: ${country}`}</p>
            <p className='player-details'>{`Searches: ${searches}`}</p>
        </div>
    )
}

export default PlayerData;