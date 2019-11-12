import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders without crashing', () => {
  render(<App />);
});

test('should be true', () => {
  expect(true).toBe(true);
});

test('contains header and button', () => {
  const { getByText } = render(<App />);
  getByText(/Google Trends: Women's World Cup Players/i);
  getByText(/Dark Mode: /i);
});

it('renders player card information', async () => {
  const { findByText } = await render(<App />);
  findByText(/Google Searches: /i);
});

test('renders player data', async () => {
  const { findByText } = await render(<App />);
  findByText(/Alex Morgan/i);
});