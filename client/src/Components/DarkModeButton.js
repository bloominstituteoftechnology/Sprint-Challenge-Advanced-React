import React from 'react';
import useDarkMode from './Hooks/useDarkMode';

const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <>
            <button onClick={toggleMode}>Dark Mode</button>
        </>
    );
}

export default DarkModeButton;