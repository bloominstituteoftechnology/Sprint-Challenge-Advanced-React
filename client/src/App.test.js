import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render} from '@testing-library/react'


test('renders without crashing', () => {
  const container = render(<App/>);
});

test('display the text Red or white', () => {
  const container = render(<App/>);
 container.getByText("Red or White??");
});
