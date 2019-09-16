import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {increaseStat} from './DisplayPlayers';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

/*it("displays all players", () => {
    const wrapper = rtl.render(<App/>)

    expect(wrapper.getByText(/Strikes/i));
    expect(wrapper.getByText(/Balls/i));
    expect(wrapper.getByText(/Hits/i));
    expect(wrapper.getByText(/Fouls/i));
});*/

it("increments stats by 1", () => {
    expect(increaseStat(0)).toBe(1);
    expect(increaseStat(1)).toBe(2);
});

