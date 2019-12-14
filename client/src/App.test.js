import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';
import PlayerList, { players } from './components/playerList.js';


afterEach(rtl.cleanup);


test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);

});

describe('Do test to see if api calls were successful', () =>{
  it('test just random array parameter see if its null', () =>{
    const testNum = 4;


    expect(players[testNum]).toBe(!undefined); //as long as this isnt null it should be fine;
  });





});
