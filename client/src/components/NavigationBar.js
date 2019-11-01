import React from 'react';
import  { useDarkMode }  from '../hooks/useDarkMode';

export const NavigationBar = () => {
    const [darkMode, setDarkMode] = useDarkMode (false);
    
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
    <nav className="navbar">
    <h1>Women's World Cup Players </h1>
    <div className="dark-mode__toggle">
    <div
        onClick={toggleDark}
        className={darkMode ? 'toggle toggled' : 'toggle'}
        />
    
        </div>
    </nav>
    );
}