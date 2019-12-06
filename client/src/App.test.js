import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Navbar from './components/nav';

it('renders without crashing', () => {
  render(<App />);
});
