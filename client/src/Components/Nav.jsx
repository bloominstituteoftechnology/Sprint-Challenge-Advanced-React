import React from 'react';
import useDarkMode from '../Hook/useDarkMode';

const Nav = () =>{
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault ();
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Get Colored</button>
        </div>
    )

}

export default Nav;