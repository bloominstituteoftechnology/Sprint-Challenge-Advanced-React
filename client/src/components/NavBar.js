import React from 'react';
import useDarkMode from '../DarkModeToggle/useDarkModeToggle.js'

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Dark Mode Toggle</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>Toggle Here
        </button>
      </div>
    </nav>
  )
}

    export default NavBar;