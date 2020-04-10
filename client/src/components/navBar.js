import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const navBar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(darkMode !== 'dark' ? 'dark': 'standard');
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode_toggle">
        <div onClick={toggleMode}
        className={darkMode === 'dark' ? 'toggle toggled' : 'toggle'}/>
      </div>
    </nav>
  );
};

export default navBar;
