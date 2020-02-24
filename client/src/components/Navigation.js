import React from 'react'
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
        <nav className="nav">
            <h1>Women's World Cup Players</h1>
            <div className="dark-mode__toggle">
                <div onClick={toggleDark} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
}

export default Navigation