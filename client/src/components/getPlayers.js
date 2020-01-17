import React from 'react';

function Players(props) {
    console.log(props.data)
        return (
            <div>
            <h1>Women's World Cup</h1>
            {props.data.map(players => {
                return(
                <div key={players.id}>
                    <h2>Athlete Name: {players.name}</h2>
                    <h2>Athlete Name: {players.country}</h2>
                    <h2>Athlete Name: {players.searches}</h2>
                </div>
            )})})
            </div>
        )
}
    export default Players;