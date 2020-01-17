import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './components/Player'
import playerList from './components/playerList'


describe('App renders withought crashing', () => {
  test("Does App Render?", () => {
    rtl.render(<App />)
  })
})

test("Header is displayed", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});
describe("does player name render", () => {
  test('renders player first and last name', () => {
    const wrapper = rtl.render(<Player />)
    const elem = wrapper.queryAllByText(/alex morgan/i)
  })
})

