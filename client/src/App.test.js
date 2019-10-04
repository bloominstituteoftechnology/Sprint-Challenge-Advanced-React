import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import Navbar from './components/Navbar';


// it('renders without crashing', () => {
//   render(<App />);
// });

// test('Player name is found', () => {
//   const { getByTestId } = render(<App />);

//   getByTestId('tennis-players')
// })

test('Navbar renders with out crashing', () => {
  render(<Navbar />)
})

