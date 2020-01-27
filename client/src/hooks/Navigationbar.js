import React from 'react';
import useDarkMode from "../hooks/useDarkMode"

const Navigationbar=()=>{
 const [darkMode,setDarkMode] =useDarkMode(false);
 const toggleMode=event=>{
     event.preventDefault();
     setDarkMode( !darkMode)
 }
 return (
   <nav className="navbar">
    <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >
        Switch to DARK</button>
      </div>
      </nav>
 )

}

export default Navigationbar;