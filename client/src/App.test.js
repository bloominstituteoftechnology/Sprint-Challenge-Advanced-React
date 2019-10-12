import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

test('Render the App', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})