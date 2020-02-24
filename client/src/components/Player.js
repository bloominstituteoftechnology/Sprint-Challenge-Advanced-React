import React from 'react'

const Player = props => {
        return (
            <div>
                <h3>{props.name}</h3>
                <h4>Country: {props.country}</h4>
            </div>
        )
    }


export default Player;