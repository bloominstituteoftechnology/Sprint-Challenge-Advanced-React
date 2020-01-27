import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    const [darkMode, setDarkMode] = useDarkMode(toggleMode);

    return (
        <div className="navbar">
            <button className='theme-button' onClick={toggleMode}>Toggle Theme</button>
        </div>
    );
}

export default Header;