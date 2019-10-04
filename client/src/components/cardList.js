import React from 'react';
import PlayerCard from './PlayerCard'

const CardList = ({ tennisData }) => {
    console.log("TENNIS", tennisData)
    return (
        <div>
            <div>{tennisData.map((player) => {
                return (

                    <PlayerCard
                        name={player.name}
                        country={player.country}
                        searches={player.searches}

                    />

                )
            }
            )}</div>
        </div>
    )
}

export default CardList;