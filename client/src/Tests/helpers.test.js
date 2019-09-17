import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';



describe('App', () => {
it('Renders when app doesnt crash', () => {
const wrapper = rtl.render(<App />);
const h1 = wrapper.getByText(/help/i);
expect(h1) .toBeInTheDocument();
});
});