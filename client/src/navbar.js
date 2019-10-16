import React from 'react';
import { DarkMode } from './darkModeHook';

const Nav = () => {
    const [darkMode, setDarkMode] = DarkMode(false)

    const handleChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div role="nav">
          <input type='checkbox'
            checked={darkMode} onChange={handleChange} aria-label="DarkMode Switch"/>}
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
          />
      </div>
    )
}

export default Nav;