import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (intialValue) => {
    const [darkMode, setDarMode] = useLocalStorage('dark mode', intialValue);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode])
    return [darkMode, setDarMode];
};

export default useDarkMode