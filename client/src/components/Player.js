import React from 'react';

const Player = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Country: {props.country}</h3>
        </div>
    )
}

export default Player;