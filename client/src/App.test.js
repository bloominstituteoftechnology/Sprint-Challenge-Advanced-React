import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import App from './App';
import Nav from './components/Nav'

test('renders without crashing', () => {
  render(<App />);
});

test('dark mode renders', () => {
  const navContainer = render(<Nav/>);
  navContainer.getByText("DarkMode")
})

