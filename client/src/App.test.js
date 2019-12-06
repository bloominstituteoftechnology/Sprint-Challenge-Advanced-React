import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Navbar from './components/nav';



test('renders without crashing', () => {
  render(<App />);
});

test('renders players text without crashing', () => {
  const Navtext=render(<Navbar />);

  Navtext.getByText('Players');
});

test('renders the placeholder txt country without crashing', () => {
  const country=render(<App />);

  country.findByPlaceholderText('country');
});

test('renders the placeholder txt country without crashing', () => {
  const speCountry=render(<App />);

  speCountry.queryByDisplayValue('United States');
});

test('renders the placeholder txt name without crashing', () => {
  const name=render(<App />);

  name.findByPlaceholderText('name');
});

test('renders the placeholder txt country without crashing', () => {
  const country=render(<App />);

  country.findByPlaceholderText('country');
});




