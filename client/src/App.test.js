import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

it("renders an h1 containing Womans World Cup", () => {
  const wrapper = rtl.render(
    <App />
  );
  const element = wrapper.queryByText(/world cup/i);
  expect(element).toBe('World Cup');
});

describe('App', () => {
  it('mounts to render in a sim DOM', () => {
    const simulatedDOM = rtl.render(<App />);
    console.log(simulatedDOM.debug());
  })
})