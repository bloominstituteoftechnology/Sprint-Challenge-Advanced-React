import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage.js';
//setting custom dark mode hook

export const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage(true);

    useEffect(() => {
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode])

    return [ darkMode, setDarkMode];
}

