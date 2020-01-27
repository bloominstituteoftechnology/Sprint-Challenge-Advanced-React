import React from "react"

const PlayerCard = ({player}) =>{
    return(
        <div>
            <p> {player.name}</p>
            <p> {player.country}</p>
            <p> {player.searches}</p>
        </div>
    )
}

export default PlayerCard;