import React from 'react';
//import render for testing
//yarn test (will run tests)
import { render} from '@testing-library/react'
import App from '../App';
import PlayersCard from '../components/PlayersCard'
import { useDarkMode } from '../components/Navbar';


//to assert 
it('renders without crashing', () => {
  render(<App />);
});

//cheatsheet queries getByText https://testing-library.com/docs/dom-testing-library/cheatsheet
test(`Player is found`, ()=>{
  const {getByText} = render(<PlayersCard />);

  //assert that 'Player' is on DOM
  getByText(/player/i)
})


// unit testing isolated JavaScript functions
test('dark mode to be pink', () => {
  expect(useDarkMode(1)).toBe(2);
 
  expect(strikeClick(1)).not.toBe(0);
});