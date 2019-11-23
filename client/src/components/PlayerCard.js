import React from 'react'

const PlayerCard = (props) => {
    return (
        <div className="card">
            <h1>{props.data.name}</h1>
            <h2>{props.data.country}</h2>
            <p>Times searched: {props.data.searches}</p>
        </div>
    )
}

export default PlayerCard