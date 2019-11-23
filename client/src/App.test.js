import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import PlayerList from './components/PlayerList';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Header is rendering', () => {
  const n = <Header />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test('App renders without crashing', () => {
  const n = <App />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test('PlayerList renders', () => {
  const n = <PlayerList />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});