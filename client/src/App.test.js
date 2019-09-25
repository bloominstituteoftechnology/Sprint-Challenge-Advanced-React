import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import PlayerCard from './Components/PlayerCard';
// import { ExpansionPanelActions } from '@material-ui/core';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('PlayerCard is rendering', () => {
  const playerCard = rtl.render(<PlayerCard />);
  expect(playerCard.getByText(/Google Searches/i));
});