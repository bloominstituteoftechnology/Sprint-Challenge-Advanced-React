import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Players names are rendered to the screen", () => {
  const { getByText } = render(<App />);

  getByText(/players/i);
});


