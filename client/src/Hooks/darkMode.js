import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode=(initialValues)=>{
    const [darkMode,setDarkMode]=useLocalStorage("darkmode", initialValues);

    const toggleDarkMode =e=>{
        e.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }
    useEffect(()=>{
        if(darkMode){
        document.body.classList.add('dark-mode')
        } else{
            document.body.classList.remove("dark-mode")
        }
    },[darkMode]);

    return[darkMode,setDarkMode, toggleDarkMode]
}
