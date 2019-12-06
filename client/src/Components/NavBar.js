import React from 'react'
import { DarkMode } from '../Hooks/DarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = DarkMode("dark-mode", false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Woman's World Cup Players</h1>
            <div onClick ={toggleMode} className ="dark-mode__toggle">
                <div 
                    className={darkMode ? "toggle toggled" : "toggle"}
                    />
            </div>
        </nav>
    )
}

export default NavBar;



