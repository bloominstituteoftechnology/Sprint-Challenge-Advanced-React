import React, { useEffect } from 'react';
import {useLocalStorage}  from './useLocalStorage';

const useDarkMode = (key,initialValue) => {
    const [value,setValue] = useLocalStorage(key,initialValue)
    console.log(value)
    useEffect(() => {
        if(window.localStorage.getItem(key) === "true" ){
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    },[value])
    return [value,setValue];
}

export default useDarkMode;