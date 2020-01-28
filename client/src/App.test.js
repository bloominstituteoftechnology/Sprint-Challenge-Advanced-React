import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Players from './components/Players';
import Nav from './components/Nav';

it('renders without failure', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  test('renders without failure', () => { 
    render(<App />);
  });
  test('renders Players without failure', () => {
    render(<Players />);
  });
  test('renders Nav without failure', () => {
    render(<Nav />)
  });
 
});
