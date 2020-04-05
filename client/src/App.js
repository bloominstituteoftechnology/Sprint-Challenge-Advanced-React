import React, { useState, useEffect } from 'react';
import './App.css';
import useColors from './hooks/useColors';
import axios from 'axios';

const App = () => {
	const [players, setPlayers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/api/players');
			setPlayers(result.data);
		};
		fetchData();
	}, []);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		console.log(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		const playerCopy = [...players];

		const searchResult = playerCopy.filter((player) =>
			player.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setSearchResult(searchResult);

		setSearchTerm('');
	};

	const [color, setColor] = useColors(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setColor(!color);
	};

	function filterByCountry(value) {
		let country = value;
		const searchResult = players.filter((player) =>
			player.country.includes(country)
		);
		setSearchResult(searchResult);
	}

	function clearFilterByCountry() {
		setSearchResult([]);
	}

	return (
		<div>
			<h1>List of players</h1>
			<form onSubmit={handleSearch} data-testid="form">
				<input
					type="text"
					onChange={handleChange}
					placeholder="Type name..."
					value={searchTerm}
				/>
				<button>Search</button>
				<button onClick={clearFilterByCountry}>Clear</button>
				<label>
					Toggle color
					<input type="checkbox" onClick={toggleMode} data-testid="toggle" />
				</label>
			</form>
			<p></p>
			<ul data-testid="list-of-players">
				{searchResult.length > 0
					? searchResult.map((player) => (
							<li key={player.id}>
								<p>{player.name}</p>
								<button
									className="hashtag"
									onClick={() => filterByCountry(player.country)}
								>
									#{player.country.toLowerCase()}
								</button>
							</li>
					  ))
					: players.map((player) => (
							<li key={player.id}>
								<p>{player.name}</p>
								<button
									className="hashtag"
									onClick={() => filterByCountry(player.country)}
								>
									#{player.country.toLowerCase()}
								</button>
							</li>
					  ))}
			</ul>
		</div>
	);
};

export default App;
