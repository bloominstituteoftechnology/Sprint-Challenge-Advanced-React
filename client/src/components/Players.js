import React from 'react';
import axios from 'axios';

class Players extends React.Component {
	constructor() {
		super();

		this.state = {
			players: []
		};
	}

	componentDidMount() {
		console.log('CDM is running for players');
		// fetch("http://localhost:5000/api/players")
		// .then(response => response.json())
		// .then(response => console.log(response))

		axios
			.get('http://localhost:5000/api/players')
			.then((response) => {
				console.log(response.data);
				this.setState({
					players: response.data
				});
			})
			.catch((error) => {
				console.log('Data was not return', error);
			});
	}

	render() {
		return (
			<div>
				<h1>Players.js</h1>
				{this.state.players.map((player) => (
					<div key={player.id}>
						<h2>Name: {player.name}</h2>
						<p>Country: {player.country}</p>
						<p>Searches: {player.searches}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Players;
