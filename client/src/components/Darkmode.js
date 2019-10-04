// will bring over [storedValue, setValue]
import {useLocalStorage} from './useLocalStorage'
//use effect hook to manipulate the DOM to DarkMode
import React, {useEffect} from 'react'

//parameters defining f() key = 'darkMode', and initialvalue = false
export const useDarkMode = (key, initalValue) => {
    const [someMode, setSomeMode]= useLocalStorage(key, initalValue)

    useEffect(() => {
        //check value of useLocalState t or f
        //if t add dark mode, f remove
        //was verified in console log document.body.classList.add("dark-mode")
        if (someMode === true){
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        
    })

    return(
        //array is passed to Navbar
        [someMode, setSomeMode]
    )

}
