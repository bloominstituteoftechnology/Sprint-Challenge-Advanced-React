import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import Navbar from './components/Navbar';
import App from './App';
import useDarkMode from './hooks/useDarkMode';
// import PlayerCard from './components/PlayerCard';



it('renders without crashing', () => {
    render(<App />);
});

test('Tennis Player is found is found', () => {
    const { getByTestId } = render(<App />);

    getByTestId('tennis-players');
})

test('Navbar renders with out crashing', () => {
    render(<Navbar />)
})

test('DarkMode renders without crashing', () => {
    render(<useDarkMode />)
})

