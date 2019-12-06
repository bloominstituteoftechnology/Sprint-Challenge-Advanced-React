import React from 'react';
import { render, within, getByText } from '@testing-library/react';

import PlayersCard from './PlayersCard.js';
import PlayersList from './PlayersList.js';

test('should have text [player name]',  async ()=>{
    const {findByText} = await render(<PlayersCard />)
    findByText(/alex morgan/i);
})a