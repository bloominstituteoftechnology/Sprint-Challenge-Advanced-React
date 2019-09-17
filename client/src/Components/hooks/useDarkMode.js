import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue, callback) => {
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode')

    useEffect(() => {
        if (darkMode === true) {
            return document.body.classList.add('dark-mode');
        }
            return document.body.classList.remove('dark-mode');
    },[darkMode]);

    return [darkMode, setDarkMode];
}