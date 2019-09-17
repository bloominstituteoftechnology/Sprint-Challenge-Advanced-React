import react from 'react';

const PlayerCard = props => {
    return (
        <div className='player-card'>
            <h2>{props.data.name}</h2>
            <h2>{props.data.country}</h2>
            <h3>Amount of Google Searches: {props.data.searches}</h3>

        </div>
    );
};

export default PlayerCard;