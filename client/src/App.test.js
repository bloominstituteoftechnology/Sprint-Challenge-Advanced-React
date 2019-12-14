import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from './App.js';
import PlayerList, { players } from './components/playerList.js';

// configure({ adapter: new Adapter() });
afterEach(rtl.cleanup);


test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);

});

test('renders playerList to DOM', () => {
  const wrapper = rtl.render(<App />);

  const element = wrapper.queryByText(/list of players/i);

  expect(element).toBeInTheDocument;

})

test('renders titlebar to DOM', () => {
  const wrapper = rtl.render(<App />);

  const element = wrapper.queryByText(/sprint/i);

  expect(element).toBeInTheDocument;

})
// describe('Do test to see if api calls were successful', () =>{
//   it('test just random array parameter see if its null', () =>{
//     const wrapper = shallow(<App />);
//     const instance = wrapper.instance();
//     const testNum = 4;
//     // const componentInstance = wrapper.instance();
//
//     instance.componentDidMount();
//
//     // const players = wrapper.props.state.players[testNum];
//
//     expect(instance.state().players[testNum]).toEqual('Carli Lloyd'); //as long as this isnt null it should be fine;
//   });
//
// });
