import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, {res} from './App';
import Display from './components/Display';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />)
});

it('renders players', () => {
  const wrapper = rtl.render(<Display />)
})
