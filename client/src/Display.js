import React from 'react';
import Navbar from "./darkMode";

function Display(props){

    
        return (
            <div>
                <div>
                <Navbar />
                </div>
                {props.playersData.map(player => (
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                        <h3>{player.country}</h3>
                        <p>{player.searches}</p>
                        <p>{player.id}</p>
                  </div>
                ))}
            </div>
        )
    }
export default Display;