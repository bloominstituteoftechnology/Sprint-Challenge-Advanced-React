import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './components/Players';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('Renders Playerheading without crashing', () => {
	const { getByText } = render(<App />);
	const playerheading = getByText('Players');
});

test('Renders Womens Soccer heading without crashing', () => {
	const { getByText } = render(<App />);
	const womenssoccer = getByText('Womens Soccer');
});

