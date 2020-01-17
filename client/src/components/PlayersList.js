import React from 'react';
import '../App.css';
import { useDarkMode } from './../hooks/useDarkMode'
import Player from './Player';

const PlayersList = (props) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
            <h1>Players Info:</h1>
            {props.players.map(player => (
                <Player name={player.name} country={player.country}/>
            ))}
            
        </div>
    )
};

export default PlayersList