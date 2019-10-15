import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import 'ansi-regex';
import axios from 'axios'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains Alex', () => {
  const wrapper = rtl.render(<App />);
  const hasAlex = wrapper.queryAllByText('Alex')
})
