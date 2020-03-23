import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Player from './Player';

let tools;
let playerData = {
	id: 123,
	name: 'Constantinopolis',
	country: 'Spain',
	searched: 23
};

beforeEach(() => {
	rtl.cleanup();
});

describe('Player Component', () => {
	it('shows the correct id', () => {
		rtl.act(() => {
			tools = rtl.render(<Player player={playerData} />);
			expect(tools.queryByText(new RegExp(playerData.id, 'i')))
				.toBeInTheDocument();
		})
	});
	it('shows the correct name', () => {
		rtl.act(() => {
			tools = rtl.render(<Player player={playerData} />);
			expect(tools.queryByText(new RegExp(playerData.name, 'i')))
				.toBeInTheDocument();
		})
	});
	it('shows the correct country', () => {
		rtl.act(() => {
			tools = rtl.render(<Player player={playerData} />);
			expect(tools.queryByText(new RegExp(playerData.country, 'i')))
				.toBeInTheDocument();
		})
	});
	it('shows the correct searched number', () => {
		rtl.act(() => {
			tools = rtl.render(<Player player={playerData} />);
			expect(tools.queryByText(new RegExp(playerData.searched, 'i')))
				.toBeInTheDocument();
		})
	});
});