import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Players from './components/Players';


describe('App', () => {
  test('renders without failure', () => { 
    render(<App />);
  });
  test('renders Players without failure', () => {
    render(<Players />);
  });
  
});
