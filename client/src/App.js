import React, { useState, useEffect } from 'react';
import './App.css';
import useColors from './hooks/useColors';
import axios from 'axios';
import Header from './Header';
import ListWrapper from './ListWrapper';

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
	};

	const handleSearch = (e) => {
		e.preventDefault();
		e.stopPropagation();
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
		const searchResult = players.filter((player) =>
			player.country.includes(value)
		);
		setSearchResult(searchResult);
	}

	function clearFilterByCountry(e) {
		e.stopPropagation();
		setSearchResult([]);
	}

	return (
		<div>
			<Header
				handleSearch={handleSearch}
				handleChange={handleChange}
				searchTerm={searchTerm}
				clearFilterByCountry={clearFilterByCountry}
				toggleMode={toggleMode}
			/>
			<ListWrapper
				players={players}
				searchResult={searchResult}
				filterByCountry={filterByCountry}
			/>
		</div>
	);
};

export default App;
