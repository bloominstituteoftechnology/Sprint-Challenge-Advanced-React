// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as rtl from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from './App.js';

// afterEach(rtl.cleanup);

// it('renders without crashing', () => {
//   const div = docment.createElement('div');
//   rtl.render(<App />, div);
//   rtl.unmountComponentAtNode(div);
// });

// it('loads dark mode button', () => {
//   const app = rtl.render(<App />);
//   const element = app.getByTitle('dark-mode-btn');
//   expect(element).toBeVisible();
// });

import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(rtl.cleanup)

test(`Renders without crashing, has class name of 'App'`, () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByTestId("app-test-id")
  expect(element).toHaveClass('App')
});