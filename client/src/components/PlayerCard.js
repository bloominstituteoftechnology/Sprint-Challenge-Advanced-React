import React from 'react';

const PlayerCard = props => {
    return (
        <div className= "card-wrapper">
            <p className="card-name">Name: {props.name}</p>
            <p className="card-country">Country: {props.country}</p>
        </div>
    );
};

export default PlayerCard;
