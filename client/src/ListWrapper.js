import React from 'react';
import './App.css';
import { List, ListItem, Hashtag } from './styles';

const ListWrapper = (props) => {
	let data = props.searchResult.length > 0 ? props.searchResult : props.players;
	return (
		<List data-testid="list-of-players">
			{data.map((player) => (
				<ListItem key={player.id}>
					<p>{player.name}</p>
					<Hashtag onClick={() => props.filterByCountry(player.country)}>
						#{player.country.toLowerCase()}
					</Hashtag>
				</ListItem>
			))}
		</List>
	);
};

export default ListWrapper;
