import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { render} from '@testing-library/react'
import {voteClickUSA} from '../components/Navbar'
import PlayersCard from '../components/PlayersCard';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//to assert 
it('renders without crashing', () => {
  render(<App />);
});

test(`Increase vote by 1`, () => {
  expect(voteClickUSA(0)).toBe(1);
})

//cheatsheet queries getByText https://testing-library.com/docs/dom-testing-library/cheatsheet
test(`Player on PlayersCard is found`, () => {
  const {getByText} = render(<PlayersCard />);
  //assert that 'Player' is on DOM
  getByText(/player/i)
})
