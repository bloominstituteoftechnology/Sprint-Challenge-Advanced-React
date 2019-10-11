import React from 'react';

import {render} from '@testing-library/react';

import App from './App';

it('App renders without crashing', () => {
 
  render(<App />)
});


// test(' Darkmode?', () => {
//   const { getByTextId } = render(<App />);
//   getByTextId(/darkmode/i);
// });

test(' App header contains text', () => {
  const navbar = render(<App />)
  // const { getByText } = render(<App />);
  navbar.getByText(/World Cup/i);
});