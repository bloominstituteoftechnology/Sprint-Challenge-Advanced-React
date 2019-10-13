import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
//running simple query testing with jest react test in wrapper

afterEach(rtl.cleanup)

it('renders without crashing', () => {
	const wrapper = rtl.render( <App />
		)
});

it('loads text', () => {
  const wrapper = rtl.render(<App />);
  const item = wrapper.queryByText(/Soccer/i);
  expect(item).toBeInTheDocument();
  });
