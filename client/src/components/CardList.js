import React from 'react';
import PlayerCard from './PlayerCard.js';

import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { useDarkMode } from '../Hooks/useDarkMode.js';

const CardList = ({ data }) => {
	const [ darkMode, setDarkmode, toggleMode ] = useDarkMode(false);

	return (
		<div>
			<button onClick={toggleMode} className="dark-btn">
				Change Background
			</button>
			<Card.Group itemsPerRow={6}>
				{data.map((player) => {
					return (
						<PlayerCard
							name={player.name}
							country={player.country}
							searches={player.searches}
							key={player.id}
						/>
					);
				})}
			</Card.Group>
		</div>
	);
};

export default CardList;
