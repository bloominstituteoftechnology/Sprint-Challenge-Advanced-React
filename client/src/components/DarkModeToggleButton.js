import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const DarkModeToggleButton = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    
    return(
        <div className="darkmode_btn">
            <button
                onClick={toggleMode}
                className={darkMode ? "toggle toggled" : "toggle"}
            >
                Dark Mode On/Off
            </button>
        </div>
    );
}

export default DarkModeToggleButton;