import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

test('contains H1 titil', ()=> {
  const { getByText } = render(<Navbar/>);
  getByText(/women's world cup players searches/i);
  getByText(/june ~ july 2019/i);
})

test('contains a test-id as dark-mode', ()=>{
  const { getByTestId } = render(<Navbar/>);
  const darkMode = getByTestId('dark-mode');
})