import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {increaseStat} from './DisplayPlayers';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


 fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(players => this.setState({players: players}))
            .catch(err => console.log('noooo'));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it("increments stats by 1", () => {
    expect(increaseStat(0)).toBe(1);
    expect(increaseStat(1)).toBe(2);
});

