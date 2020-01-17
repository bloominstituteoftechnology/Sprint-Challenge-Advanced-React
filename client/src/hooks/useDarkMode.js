import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
    const [value, setValue ] = useLocalStorage('key')
     useEffect(()=>{
        const body = document.getElementsByTagName("BODY")[0]; 
         if (value === true) {
            body.classList.add("dark-mode");
         } else {
            body.classList.remove("dark-mode");
         }
     }) 
     return [value, setValue];
}