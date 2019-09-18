import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe ('App', () => {

it('mounts to a kind of simulated DOM', () => {
  const simulatedDOM = rtl.render(<App />);
  console.log(simulatedDOM.debug());
});
});
