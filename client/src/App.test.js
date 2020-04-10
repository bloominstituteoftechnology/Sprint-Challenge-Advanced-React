import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import'@testing-library/jest-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  test('App renders without crashing', () => {
    render(<App/>);
  });

  test('Header appears', () => {
    const {getByText} = render(<App/>);

    const header = getByText(/Player searches/);

    expect(header).toBeInTheDocument()
  })

