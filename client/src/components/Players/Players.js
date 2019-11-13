import React from 'react';
import useCustomState from '../useCustomState/useCustomState';

const Players = props => {
    const [playersData, setPlayersData, updatePlayers] = useCustomState([], 'http://localhost:5000/api/players');

    return(
        <div>hi</div>
    );

}

export default Players;