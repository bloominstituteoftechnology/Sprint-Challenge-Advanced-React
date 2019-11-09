import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
 import App from './App';
 import Player from './components/Player';

it('renders without crashing', () => {
  const title = rtl.render(
    <h1>Women's World Cup Soccer</h1>
  );
  console.log(title.debug())

  const element = title.queryByText(/women's world cup soccer/i);
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
  expect(element).toBeInTheDocument();
  rtl.cleanup;
 });

 it("contains player data", ()=> {
   const name = rtl.render(<h2>Player Data</h2>);
   console.log(name.debug())
  //  const playerInfo = wrapper.queryAllByText(/player info/i)
  //  expect(playerInfo).toBeInTheDocument();
  const element = name.queryByText(/player data/i);
  expect(element).toBeInTheDocument();
   rtl.cleanup;
 })

 it('contains dark mode button', ()=> {
   const wrapper = rtl.render(<App/>)
   console.log(wrapper.debug())
   const dark = wrapper.queryByText(/use dark mode/i);
   expect(dark).toBeInTheDocument();
   expect(dark).toBeVisible();
 })

 it('contains player name', ()=> {
   const wrapper = rtl.render(<App/>)
   const element = wrapper.queryByText(/player name:[*?]/i);
   expect(element).toBeInTheDocument();
 })
