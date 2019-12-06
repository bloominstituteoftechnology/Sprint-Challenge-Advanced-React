import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar.js';
import PlayerCard from './Components/PlayerCard'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('renders NavBar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('renders PlayerCard', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});



