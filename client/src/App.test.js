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
