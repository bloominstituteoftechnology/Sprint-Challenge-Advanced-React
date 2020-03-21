import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
	const component = render(<App />);
});

test('render form', () => {
	const component = render(<App />);
	const formElement = component.getByTestId('form');
});

test('test of loading element', () => {
	const component = render(<App />);
	const loading = component.getByText('Loading data...');
});

// test('test of list elements render', () => {
// 	const component = render(<App />);
// 	const list = component.getByText('Name');
// });

test('checks the checkbox', () => {
	const component = render(<App />);
	const checkbox = component.getByTestId('toggle');
	console.log(checkbox);
});
