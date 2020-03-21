import React from 'react';
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="Navbar">
      <h1>Women's World Cup Players</h1>
      <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >Darkmode</button>
    </div>
  );
};

export default Navbar;
