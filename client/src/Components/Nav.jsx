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
             <div onClick={toggleMode} className={darkMode ? 'toogle toggled' : 'toggle'}/>
        </div>
    )

}

export default Nav;