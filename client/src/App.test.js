import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './components/NavBar';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

test('renders', () => {
  const {container} = render(<NavBar />);
  const element = getByText(/World/i);
  expect(element).toBeVisible();
})