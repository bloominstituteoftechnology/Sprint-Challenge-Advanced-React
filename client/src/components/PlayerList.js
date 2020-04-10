import React, {useState, useEffect} from 'react';

export default function PlayerList(props){
    console.log(props)
    return(
        <div className = 'playerList'>
            {props.players.map(player=>(
                <div className = 'playerCard' id = {player.id}>
                    <h3>{player.name}</h3>
                    <p>{player.country}</p>
                    <p>{player.searches}</p>
                </div>
            ))
            }
        </div>
    );
};