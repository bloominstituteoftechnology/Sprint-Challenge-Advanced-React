import React from 'react';

function Players(props){

    
        return (
            <div>
               
                {props.playersData.map(player => (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                        <h3>{player.country}</h3>
                        <p>{player.searches}</p>
                  </div>
                ))}
            </div>
        )
    }


export default Players;