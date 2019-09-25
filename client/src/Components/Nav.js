import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className='nav'>
            <div className='dark-mode__toggle'>
                <button
                    onClick={toggleMode}    
                    className={darkMode ? "toggle toggled" : "toggle"}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    );
};

export default Nav;