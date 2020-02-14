import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';






test('renders header', () => {

    const { getByText } =render(<PlayerCard />);
  
    const header = getByText(/athlete/i);
  
    expect(header).toBeTruthy();
    
  });
  
