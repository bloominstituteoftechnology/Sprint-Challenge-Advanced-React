import React from 'react';

import PlayerCard from './PlayerCard';

const PlayerData = ({ players, images }) => {
    return (
        <section>
            {players.map(player => (
                <PlayerCard 
                    key={player.id}
                    name={player.name}
                    country={player.country}
                    searches={player.searches}
                />
            ))}
        </section>
    );
};

export default PlayerData;