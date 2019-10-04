import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

const numberOfPlayers = 100;

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App/>);
});

it('Loads a navigation bar with header', () => {
/*   const firstPlayer = tools.queryByTestId('1')
  const lastPlayer = tools.queryByTestId(numberOfPlayers) */

  expect(tools.queryByText(/World/)).toBeInTheDocument();

})

describe('localhost:5000 api endpoint is functioning and returns list of players with status 200', () => {
  it('should load user data', async () => {
    const response = await fetch('http://localhost:5000/api/players');
    const desiredResponse = {
      "status" : 200,
    }
    expect(response).toMatchObject(desiredResponse);
  })
})

describe('dark mode toggle is functioning', () => {
  it('should be able to switch background colors on click', () => {
    
  })
})