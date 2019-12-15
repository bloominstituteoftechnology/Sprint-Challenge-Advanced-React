import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  rtl.render(<App/>)
});

test('it renders', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/soccer/i)
  expect(element).toBeInTheDocument()
 })