import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('should have text [player name]',  async ()=>{
  const {findByText} = await render(<App />)
  findByText(/[player name]/i)
})