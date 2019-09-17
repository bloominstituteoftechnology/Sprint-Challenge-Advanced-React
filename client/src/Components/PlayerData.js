import react from 'react';

import PlayerCard from './PlayerCard';

const PlayerData = props => {
    return (
        <section className='player-data'>
            {props.data.map(info => {
                return <PlayerCard data={info} key={data.id} />
            })}
        </section>
    );
};

export default PlayerData;