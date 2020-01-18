import React from 'react';
import * as rtl from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('Checks to see if required fields are present', () => {
    const { getByText } = rtl.render(<PlayerCard />);

    getByText(/information/i);
    getByText(/name/i);
    getByText(/country/i);
    getByText(/search/i);
});