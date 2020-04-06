import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

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
	expect(loading).toHaveTextContent('Loading data...');
});

test('test of list elements render', async () => {
	const component = render(<App />);
	const resolvedSpan = await waitForElement(() =>
		component.getByTestId('list-of-players')
	);
	expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test('checks the checkbox', () => {
	const component = render(<App />);
	const checkbox = component.getByTestId('toggle');
	fireEvent.change(checkbox, { target: { value: true } });
	expect(checkbox.value).toBe('true');
});
