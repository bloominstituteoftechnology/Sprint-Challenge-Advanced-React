import React, {useState, useEffect} from 'react';
import useDarkMode from '../hooks/useDarkMode'
import Player from './Player';



const Display = (props)=> {

    const [darkMode, setDarkMode] = useDarkMode(false);

   

    const toggleMode= e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

   return (

    <div className = 'display'>
     <h2>Player Data</h2>
     
         <button
         onClick ={toggleMode}
         className={darkMode? 'toggle-on': 'toggle'}

         > Use Dark Mode</button>


       {props.players.map (p => {
          return (
              <Player player = {p}/>
          )
      })}


    </div>
   )



}

export default Display