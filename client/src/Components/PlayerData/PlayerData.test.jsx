import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerData from './PlayerData';

afterEach(rtl.cleanup);

test("Render the name of the players", () => {
    const wrapper = rtl.render(<PlayerData />);
    const element = wrapper.getByText(/item.name/i);
    expect(element).toHaveValue(item.name)
})