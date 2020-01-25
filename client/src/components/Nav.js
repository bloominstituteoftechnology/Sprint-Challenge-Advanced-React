import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h3>Dark Mode:</h3>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
            </div>
        </nav>
    );
};

export default Nav;

