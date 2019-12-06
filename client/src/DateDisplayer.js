import React, { useState } from 'react';

export default (props) => {

    // const [playerData, setPlayerData] = useState(props.playerData);
    const playerDataDIS = props.playerData
    console.log('props.playerData', props.playerData)
    console.log('playerDataDIS', playerDataDIS)
    if (props.playerData !== null) {
        return (

            <div>
                {

                    props.playerData.map((player, index) => {
                        return (
                            <div>
                                <div>{player.name}</div>
                                <div>{player.country}</div>
                                <div>{player.searches}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (<div>fefe</div>)
    }

}


