import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerData from './playerData';

afterEach(rtl.cleanup);

it('renders "Alex Morgan" text', (() => { 
    const wrapper = rtl.render(<PlayerData />);
    const hasPlayerName = wrapper.queryByText(/Alex Morgan/i);
    
}));