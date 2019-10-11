import React from 'react';
import App from './App.js';
import PlayerCard from './components/PlayerCard.js';

import { render } from '@testing-library/react';
import { Item } from 'semantic-ui-react';

test('App renders without crashing', () => {
	render(<App />);
});

test('PlayerCard should render without crashing', () => {
	const PlayerCardContainer = render(<PlayerCard />);
	expect(PlayerCardContainer.getByText(/searches/i));
});
