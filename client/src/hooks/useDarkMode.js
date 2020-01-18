import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('checkDark');

    useEffect(() => {
        if (darkMode === true) {
            //add dark-mode class to the body element
            document.body.classList.add('dark-mode');
        } else {
            //remove class from body element
            document.body.classList.remove('dark-mode');
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
};