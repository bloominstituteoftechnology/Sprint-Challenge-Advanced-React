import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };
    return (
        <nav className="navbar">
        <h1>WWC</h1>
        <div>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >DarkMode</div>

        </div>
        </nav>
    )
}
export default Nav