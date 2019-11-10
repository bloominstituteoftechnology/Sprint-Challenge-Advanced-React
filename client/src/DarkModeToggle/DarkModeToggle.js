import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  
  return (
    <div>
      <h3>Toggle to Dark Mode</h3>
      <button 
        onClick = {toggleMode}
        className = {darkMode ? 'toggle toggled' : 'toggle'}
      >Toggle Here!
      </button>
    </div>
    // <nav className="navbar">
    //   <h1>Toggle to Dark Mode</h1>
    //   <div className="dark-mode__toggle">
    //     <div
    //       onClick={toggleMode}
    //       className={darkMode ? 'toggle toggled' : 'toggle'}
    //     />
    //   </div>
    // </nav>
  );
};

export default DarkModeToggle;