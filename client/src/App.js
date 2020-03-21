import React from 'react';
import './App.css';
import useColors from './hooks/useColors';
// import axios from 'axios';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: [],
			searchInput: ''
		};
	}

	fetchPlayers = () => {
		fetch('http://localhost:5000/api/players')
			.then(res => res.json())
			.then(data => {
				this.setState({ players: data });
			})
			.catch(err => console.error(err));
	};

	componentDidMount() {
		this.fetchPlayers();
	}

	handleChange = e => {
		this.setState({ searchInput: e.target.value });
	};

	handleSearch = e => {
		e.preventDefault();
		let searchResult = this.state.players.filter(
			player => player['name'].indexOf(this.state.searchInput) >= 0
		);

		if (searchResult.length > 0) {
			this.setState({
				players: searchResult
			});
		}
	};

	render() {
		return (
			<div>
				<h1>List of players</h1>
				<form onSubmit={this.handleSearch}>
					<input type="text" onChange={this.handleChange} placeholder="Search..." />
					<button>Search</button>
					<input type="checkbox"></input>
				</form>
				<ul>
					{this.state.players.map(player => (
						<li key={player.id}>
							<p>
								<span>Name:</span> {player.name}
							</p>
							<p>
								<span>Country:</span> {player.country}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
