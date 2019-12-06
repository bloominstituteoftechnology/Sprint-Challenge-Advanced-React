import React from 'react';
import PlayersCard from './PlayersCard';

class PlayersData extends React.Component {
	render(props) {
		return (
			<div>
				{this.props.players.map((player) => (
                    <div key={player.id}>
						<PlayersCard player={player} />
					</div>
				))}
			</div>
		);
	}
}

export default PlayersData;
