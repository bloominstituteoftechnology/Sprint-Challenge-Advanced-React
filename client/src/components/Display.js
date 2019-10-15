import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import '../App.css';
import User from './User';

function Display(props) {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <span title='dark-mode-btn'>
                <button onClick={toggleDarkMode}>Dark Mode</button>
            </span>

            {props.userData.map((player) => {
                return <User 
                key={player.id} 
                name={player.name} 
                country={player.country}
                />
            })}
        </div>
    )
}

export default Display;