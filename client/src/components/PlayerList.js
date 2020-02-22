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

