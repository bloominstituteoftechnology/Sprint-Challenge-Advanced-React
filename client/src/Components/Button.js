import React from 'react';
import useDarkMode from '../Hook/useDarkMode';

const Button = ({label}) => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
      };
    return (
     <div>
        <h3> {label} </h3>
         <button className= 'btn'

            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>
         </button>
     </div>
    )};

export default Button;