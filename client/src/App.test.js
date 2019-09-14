import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import Navbar from './components/Navbar';

// Testing that App component renders to the UI
test('App renders without crashing', async () => {
	await render(<App />);
});

// Testing that Navbar component renders to the UI
test('Navbar renders without crashing', async () => {
	await render(<Navbar />);
});