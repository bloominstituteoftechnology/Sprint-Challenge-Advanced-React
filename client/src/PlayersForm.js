import React from "react"
import {useInput} from './hooks'

const PlayersForm = props => {
    const [ playerName, handleNameChanges, clearnameInput]= useInput("");
    const[ countryName, handleCountryChanges, clearCountryInput]=useInput("");

    const resetValues = e =>{
        e.preventDefault();
        props.addNewPlayer(playerName, country);
        clearnameInput();
        clearCountryInput();
    };
    return(
        <form onSubmit={resetValues}>
            <input
            className= "Player-Name"
            id= "Player"
            name= "Player"
            onChange={handleNameChanges}
            value={playerName}
            placeholder= "Player name"
            
            />
                <input
            className= "Country-Name"
            id= "Country"
            name= "Country"
            onChange={handleCountryChanges}
            value={countryName}
            placeholder= "Player name"
            
            />
        <button>Submit</button>
        </form>
    )
}