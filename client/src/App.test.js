import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Players from './components/Players';

test('App renders without crashing', () => {
	render(<App />);
});

test('Renders Players', () => {
	render(<Players />);
});

test('Check to see if ', () => {
	const { getByText } = render(<Navbar />);

	getByText(/soccer players title/i);
	getByText(/toggle mode/i);
});