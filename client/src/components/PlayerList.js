import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
    return (
        <div className="playerList">
        {props.data.map(cv => {
            return <PlayerCard data={cv} key={cv.id} />
        })}
        </div>
    )
}

export default PlayerList