import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import PlayerList from './components/PlayerList';

test('renders app without crashing', () => {
  rtl.render(<App />);
});

test('Renders main PlayerList component without crashing', () => {
  rtl.render(<PlayerList />);
})
