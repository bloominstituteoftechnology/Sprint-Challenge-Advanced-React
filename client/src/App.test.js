import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


afterEach(rtl.cleanup);

test('Dark Mode Button exists', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug(wrapper.queryByText('Dark Mode'));
})


test('Dark Mode Button has onClick of "toggle" ', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText('Dark Mode');
  expect(element).toHaveAttribute('onClick', 'toggleMode');
})
