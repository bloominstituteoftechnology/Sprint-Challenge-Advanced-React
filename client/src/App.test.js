import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Players from './components/Players'
import PlayerCard from './components/Player.card'
import { getByLabelText, queryAllByTestId } from "@testing-library/react";

describe('App test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
