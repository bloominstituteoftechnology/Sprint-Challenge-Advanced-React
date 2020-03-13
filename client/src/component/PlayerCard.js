import React from 'react';
import PlayerDisplay from './PlayerDisplay';

function PlayerCard(data) {
	console.log("Players ~ ", data);
	
	return (

		<div className="playerCard">
			{data.data.players.map((player, i) => (
				<PlayerDisplay data={player} key={i} />
			))}
		</div>

	);

}

export default PlayerCard
