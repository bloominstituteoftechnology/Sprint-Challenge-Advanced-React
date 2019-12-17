import React from 'react';

import Player from './Player';

const PlayerList = ({ players }) => {
    return (
        <div>
            {players.map(player => (
                <Player
                    key={player.id}
                    name={player.name}
                    country={player.country}
                    searches={player.searches}
                />
            ))}
        </div>
    );
};

export default PlayerList;