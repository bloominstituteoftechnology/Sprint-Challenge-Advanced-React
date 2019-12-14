import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

// it('Renders the app', () => {
// 	const wrapper = rtl.render(<App />);
// 	const element = wrapper.getByText(/display/i);
// 	expect(element).toBeInTheDocument();
// });

it('renders without crashing', () => {
	const wrapper = rtl.render(<App />);
	wrapper.debug();
});

// it('Renders the div', ()=> {
//     const wrapper = rtl.render(<App />)
//     wrapper.debug(wrapper.queryByText('Display'))

//     const div = wrapper.queryByText(/display/i)
//     expect(div).toBeVisible()

// })

test('fake test', () => {
	expect(true).toBeTruthy();
});
