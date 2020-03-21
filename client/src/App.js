import React, { useState, useEffect } from 'react';
import './App.css';
import useColors from './hooks/useColors';
import axios from 'axios';

const App = () => {
	const [players, setPlayers] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	const fetchPlayers = () => {
		axios
			.get('http://localhost:5000/api/players')
			.then(res => setPlayers(res.data))
			.catch(err => console.error(err));
	};

	useEffect(() => {
		fetchPlayers();
	}, []);

	const handleChange = e => {
		setSearchInput(e.target.value);
		console.log(searchInput);
	};

	const handleSearch = e => {
		e.preventDefault();
		let searchResult = players.filter(
			player => player['name'].indexOf(searchInput) >= 0
		);

		console.log(searchResult);

		if (searchResult.length > 0) {
			setPlayers({
				players: searchResult
			});
		}
	};

	const [color, setColor] = useColors(false);
	const toggleMode = e => {
		e.preventDefault();
		setColor(!color);
	};

	return (
		<div>
			<h1>List of players</h1>
			<form onSubmit={handleSearch} data-testid="form">
				<input
					type="text"
					onChange={handleChange}
					placeholder="Search..."
					// value={newTeamMember.name}
				/>
				<button>Search</button>
				<input type="checkbox" onClick={toggleMode} data-testid="toggle" />
			</form>
			<ul data-testid="list-of-players">
				{players.length > 0 ? (
					players.map(player => (
						<li key={player.id}>
							<p>
								<span>Name:</span> {player.name}
							</p>
							<p>
								<span>Country:</span> {player.country}
							</p>
						</li>
					))
				) : (
					<p>Loading data...</p>
				)}
			</ul>
		</div>
	);
};

export default App;
