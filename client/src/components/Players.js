import React from 'react';
import axios from 'axios';
import PlayersData from './PlayersData';

class Players extends React.Component {
	constructor() {
		super();

		this.state = {
			players: []
		};
	}

	componentDidMount() {
		// console.log('CDM is running for players');
		
		// fetch("http://localhost:5000/api/players")
		// .then(response => response.json())
		// .then(response => console.log(response))

		axios
			.get('http://localhost:5000/api/players')
			.then((response) => {
				// console.log(response.data);
				this.setState({
					players: response.data
				});
			})
			.catch((error) => {
				console.log('Data was not return', error);
			});

			window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	  }

	render() {
		return (
			<div>
				<PlayersData players={this.state.players} />
			</div>
		);
	}
}

export default Players;
