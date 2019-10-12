import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

test('Render the app', () => {
  const wrapper = rtl.render(<App />)

  const element = wrapper.getByText(/women's world cup/i)
  expect(element).toBeVisible()
})

test('Render count imput', () => {
  const wrapper =  rtl.render(<App />)
  const element = wrapper.getByPlaceHolderText(/count)
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
