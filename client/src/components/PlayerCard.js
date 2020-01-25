import React from 'react';
const PlayerCard = (props) => {
    return (
        <div>
            {props.players.map(player =>(
                <div key={player.id}>
                    <p>Name {player.name}</p>
                    <p>Country: {player.country}</p>
                    <p># of searches: {player.searches}</p>
                </div>
            ))}
           
        </div>
    )
}
export default PlayerCard;