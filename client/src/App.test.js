import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Players from './components/Players/Players';

describe('App', () => {
  test('should render without crashing', () => {
    render(<App />);
  });
  test('Should render Players component with out crashing', () => {
    render(<Players />);
  });
});
