import React from 'react';
import * as rtl from '@testing-library/react';

import Nav from './Components/Nav';
import Player from './Components/Player';

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Nav />
  );
  console.log(wrapper.debug())
});

it('Player is rendering', () => {
  const playerWrapper = rtl.render(
    <Player />
  );
  console.log(playerWrapper.debug())
});