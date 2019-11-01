import React from 'react';
import { DarkMode } from './darkModeHook';

const Nav = () => {
    const [darkMode, setDarkMode] = DarkMode(false)
    const handleChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div>
          Dark Mode: <input label='Dark Mode' type='checkbox' role='nav' onChange={handleChange}/>
        </div>
    )
}

export default Nav;