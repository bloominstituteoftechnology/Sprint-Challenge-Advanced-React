import React from 'react';
import { useDarkMode } from './hooks/useDarkMode.js';
import styled from 'styled-components';

const DarkModeToggleButton = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return(
        <div className="button">

          <h1>Top Women's World Cup Players</h1>

          <div className="toggle-button">
            <button
                onClick={toggleMode}
                className={darkMode ? "toggle toggled" : "toggle"}
                >
                <h3>Dark/Light</h3>                
            </button>
            </div>
        </div>
    );
}

export default DarkModeToggleButton; 
