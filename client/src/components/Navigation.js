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
            <div className="dark-mode__toggle" data-testid="toggle-element">
                <div onClick={toggleDark} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
}

export default Navigation