import React from 'react';
import { render, getByText } from '@testing-library/react';

import axiosMock from 'axios';



import CardList from './CardList';

test('Players Appear', async () => {
    const { findByText, findAllByText } = render(<CardList />);
    await findByText(/Alex Morgan/i);
    await findAllByText(/United States/i);
    await findAllByText(/100 Searches/i);
});