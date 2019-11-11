import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  // ready to test!
  rtl.render(<App />)
});

it('Page contains this text', () => {
  const header = rtl.render(<App />);
  expect(header.getByText(/Players/i));
});