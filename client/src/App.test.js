import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Player from './components/Player'
import PlayerList from './components/PlayerList'
import Navbar from './components/Navbar'
afterEach(rtl.cleanup);





describe('App renders withought crashing', () => {
  test("Does App Render?", () => {
    rtl.render(<App />)
  })
})


describe("does player name render", () => {
  test('renders player name', () => {
    const wrapper = rtl.render(<Player />)
    const elem = wrapper.queryAllByText(/alex morgan/i)
  })
})

describe("does player name render", () => {
  test('renders player name', () => {
    const wrapper = rtl.render(<Player />)
    const elem = wrapper.queryAllByText(/megan rapinoe/i)
  })
})

it('renders PlayerCard', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player />, div);
  ReactDOM.unmountComponentAtNode(div);
});