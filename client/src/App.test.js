import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import App from './App';



test('Renders Header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/some data about soccer/i);
  // expect(header).toBeInTheDocument();
})