import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, waitForElement } from "@testing-library/react";

// App doesn't crash
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// Dark mode toggles properly
it("dark mode test", async () => {
	// Load App
	const { getByLabelText } = render(<App />);
	const darkModeClassName = "darkMode";
	const body = document.body;
	const darkModeCheckbox = getByLabelText(/dark mode/i);
	const initialMode = darkModeCheckbox.checked;

	// default class name
	if (initialMode) {
		expect(body.classList).toContain(darkModeClassName);
	} else {
		expect(body.classList).not.toContain(darkModeClassName);
	}

	// Activate dark mode
	fireEvent.click(darkModeCheckbox);

	// Check to see if darkMode class is applied
	if (darkModeCheckbox.checked) {
		expect(body.classList).toContain(darkModeClassName);
	} else {
		expect(body.classList).not.toContain(darkModeClassName);
	}
	
	//Will fail if checkbox doesn't change className
	expect(darkModeCheckbox.checked).not.toEqual(initialMode);
});
