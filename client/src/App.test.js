import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Players from './components/Players';

test('App renders without crashing', () => {
	render(<App />);
});

test('Renders Players Component', () => {
	render(<Players />);
});

test('Check to see if the words "soccer players title" and "toggle mode" renders', () => {
	const { getByText } = render(<Navbar />);

	getByText(/soccer players title/i);
	getByText(/toggle mode/i);
});