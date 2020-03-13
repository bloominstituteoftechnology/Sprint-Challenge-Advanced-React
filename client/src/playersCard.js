import React from 'react'


function PlayersCard (props){
    const players = props.play
    return (
        <>
        {Object.keys(players).map((item, i) => (
            <div key={i}>
                {players[item].name}
                <br/>
                Country of Orgin: {players[item].country}
               
            </div>
        ))}
        </>
    )
}

export default PlayersCard;