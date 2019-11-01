import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { exportAllDeclaration } from '@babel/types';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
});

it('renders the first name in the array', async () => {
  const { getByText } = rtl.render(<App/>)
  const element = await rtl.waitForElement(() => getByText("Alex Morgan"));
  expect(element).toBeInTheDocument();
})

it('renders the final name in the array', async () => {
  const { getByText } = rtl.render(<App/>)
  const element = await rtl.waitForElement(() => getByText("Tierna Davidson"));
  expect(element).toBeInTheDocument();
})
