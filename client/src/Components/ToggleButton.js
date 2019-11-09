import React from 'react';
import {DarkMode} from './DarkMode';

const ToggleButton = () => {
    const [dark, setDark] = DarkMode('key', false);
    const toggleMode = e => {
      e.preventDefault();
      setDark(!dark);
    };
    return (
      <nav className="navbar"> 
      <h1>Players</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={dark ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
  export default ToggleButton;