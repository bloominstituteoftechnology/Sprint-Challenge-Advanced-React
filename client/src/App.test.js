import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import App from './App';

test('renders wuthout crashing', () => {
  render(<App />);
})

test('toggle loads dark mode', () => {
  const {getByTestId} = render(<App />);
  getByTestId("toggle-element");
})
