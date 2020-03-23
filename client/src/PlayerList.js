import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
    return (
        <div>
            {props.data.map((player,i) => {
                return <PlayerCard key={i} player={player}/>
            })}
        </div>
    );
}

export default PlayerList;
