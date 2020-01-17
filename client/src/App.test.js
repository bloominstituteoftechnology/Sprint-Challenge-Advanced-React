import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { findAllByText } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('is it rendering', () => {
  render(<App/>)
})

test('render player name', () => {
  findByText(/Christen Press/i)
  
})

