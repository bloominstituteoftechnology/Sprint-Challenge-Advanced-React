import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

describe ('App', () => {

it('mounts to a kind of simulated DOM', () => {
  const simulatedDOM = rtl.render(<App />);
  console.log(simulatedDOM.debug());
  });
});
