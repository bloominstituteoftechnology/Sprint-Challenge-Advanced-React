import React from 'react';
import useDarkMode from "../hooks/darkmode"

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar" data-testid="navigation"> 
         <h1>Most Searched Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;