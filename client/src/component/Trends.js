import React from "react";
import axios from "axios";
import './trends.scss';

class Trends extends React.Component {

	state = {
		players: []
	};

	componentDidMount() {
		axios
		.get("http://localhost:5000/api/players")
		.then(res => {		
			this.setState({ 
				players: res.data 
			});
		})
		.catch(err => console.log("API error ~ ", err));
	}

	render() {
		return (
			<div className="playersContainer">
				<h3>Trends of players</h3>

				<div className="playerRow">
					{this.state.players.map(player => (
						<div key={player.id}>
							<h2>{player.searches}</h2>
							<p>{player.name}</p>
							<p>{player.country}</p>
						</div>
					))}
				</div>

			</div>
		);
	}
	
}

export default Trends;