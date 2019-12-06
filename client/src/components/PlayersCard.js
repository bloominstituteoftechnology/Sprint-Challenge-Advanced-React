import React from 'react';

function PlayersCard(props) {
	return (
		<div style={userStyle}>
			<h2>Name: {props.player.name}</h2>
			<p>Country: {props.player.country}</p>
			<p>searches: {props.player.searches}</p>
		</div>
	);
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
    borderBottom: '1px solid'
};

export default PlayersCard;
