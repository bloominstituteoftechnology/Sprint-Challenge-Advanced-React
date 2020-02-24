<<<<<<< HEAD
import React from 'react';

const PlayerList =({name, country}) => {
    return (
        <div className="cards">
            <h3>Name: {name}</h3>
            <h4>Country: {country}</h4>
        </div>
    )
}

export default PlayerList;
=======
import React from "react";
import Player from "./Player";

const PlayerList = props => {

        return (
            <div>
                {props.data.map(person => {
                    return (
                        <Player key={person.name} name={person.name} country={person.country} />
                    )
                })}
            </div>
        )
    }


export default PlayerList;

>>>>>>> 0c5cbbd7c134c64ba074c7ca833b658cf31b2cc6
