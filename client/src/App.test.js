import React from 'react';
import { render, getByTestId } from '@testing-library/react'
import Navbar from './components/Navbar';
import useDarkMode from './hooks/useDarkMode';
import App from './App';
import PlayerCard from './components/PlayerCard';



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

test('Tennis Player name is found is found', async () => {
    const { getByTestId } = await render(<PlayerCard />);

    getByTestId('name');
})

test('Tennis Player Country is found is found', async () => {
    const { getByTestId } = await render(<PlayerCard />);

    getByTestId('country');
})

test('Tennis Player searches is found is found', async () => {
    const { getByTestId } = await render(<PlayerCard />);

    getByTestId('searches');
})

test('useDarkMode renders without crashing', () => {
    render(<useDarkMode />)
})
