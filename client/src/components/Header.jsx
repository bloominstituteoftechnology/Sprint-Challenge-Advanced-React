import React, { useState } from 'react';
import  useDarkMode  from '../hooks/useDarkMode.jsx';
import { PlayersCount } from './PlayersCount';


const Header = (props) =>{
    const [darkMode, setDarkMode] = useDarkMode(false);
    const[buttonText, setButtonText] = useState('Fetch Players');
    
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
     
    };

    const toggleFetchButton = e => {
      e.preventDefault();
      props.fetchPlayers();
      setButtonText('Done!')
    }
    return (
        <div className="header">
            <button onClick={toggleFetchButton}
              className={darkMode? 'dark-mode': ''}
              >{buttonText}</button>
          <h1 className='h1'>Players List</h1>
          {/* <PlayersCount playersData={props.playersData}/> */}
          <div onClick={toggleMode}
               className={darkMode ? 'button-dark':'button-light' }>
            <i className="fas fa-moon"></i>
          </div>
        </div>
      );
    };


export default Header;


