import React from "react"




const Player = (props)=> {
 
    return (
        <div className = "player-div">

            <h2>player name: {props.player.name}</h2>
            <h3>country: {props.player.country}</h3>
        </div>
    )




}

export default Player