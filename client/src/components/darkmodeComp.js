import React from 'react';
import useDarkMode from "../hooks/useDarkMode"



const DarkModeTog = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
        <button
          className="dark-mode-button"
          onClick={toggleMode}
          data-testid="dark-mode-button"
        >DARK MODE THINGY!</button>
    )
  };

  export default DarkModeTog