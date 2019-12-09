import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import ClassData from './Components/ClassData/ClassData';

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/US Fan Base/i);
  expect(element).toBeInTheDocument();
});

