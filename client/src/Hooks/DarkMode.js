import { useEffect } from 'react';
import { useLocalStorage } from '../Hooks/LocalStorage';

export const DarkMode = (storedKey, initialValue) => {
    const[darkValue, setDarkValue] = useLocalStorage(storedKey, initialValue);

    const body = document.querySelector('body');

    useEffect(() => {
        darkValue?
            body.classList.add("dark-mode") :
            body.classList.remove("dark-mode")
    }, [darkValue, body.classList])
    
    return [darkValue, setDarkValue]
}


