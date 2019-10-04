import React from 'react'
import PlayersCard from './PlayersCard'

//deconstruting, grab props from
//send to players card
const PlayersList = props => {
    console.log(`PlayersList props`,props)
    //destructure
    const{id, name, country}=props.person
    return (
      <div>     
             
                <PlayersCard
                key={id}
                name={name}
                country={country}
                /> 
        </div>
    )
}

export default PlayersList;