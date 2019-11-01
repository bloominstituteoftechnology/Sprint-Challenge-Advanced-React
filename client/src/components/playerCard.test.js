import React from 'react';
import { render } from '@testing-library/react';

import PlayerCard from './playerCard';

test('contains searches', ()=> {
  const { getByText } = render(<PlayerCard/>);
  getByText(/searches/i);
})
