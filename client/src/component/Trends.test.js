import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import Trends from './Trends';

afterEach(cleanup);

// Make sure API is returning data
it("gets data from api", async () => {
	const validatePlayer = [{name: "Alex Morgan",country: "United States",searches: 100}];

	// Load component
	const { getByText } = render(<Trends />);

	// Check each player, test will pass if API call returned the validatePlayer
	for (let player of validatePlayer) {
		const playerElement = await waitForElement(() => getByText(new RegExp(player.name)));
		expect(playerElement.textContent).toMatch(new RegExp(player.name));
	}

});