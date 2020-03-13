import React from 'react';

    const Player = (props) => {
        return (
        <div>
            <p>{props.name} : {props.country}</p>
        </div>
    )
}

export default Player;