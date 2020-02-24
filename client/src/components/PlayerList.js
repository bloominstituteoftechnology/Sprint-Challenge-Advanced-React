import React from 'react';

const PlayerList =({name, country}) => {
    return (
        <div className="cards">
            <h3>Name: {name}</h3>
            <h4>Country: {country}</h4>
        </div>
    )
}

export default PlayerList;
