import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import toggleMode from './NavBar';
import { render,fireEvent } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders light mode', () => {
  const container = render(<App/>);
  const mode = container.getByText(/mode/i);
  const toggleButton = container.getByTestId('toggleButton');
  fireEvent.click(toggleButton)
  expect(mode.innerHTML).toBe('light mode');
})

it('renders dark mode', () => {
  const container = render(<App/>);
  const mode = container.getByText(/mode/i);
  const toggleButton = container.getByTestId('toggleButton');
  fireEvent.click(toggleButton)
  expect(mode.innerHTML).toBe('dark mode');
})