import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = initialValue =>{

    const [darkMode, setDarkMode] = useLocalStorage( 'dark-mode', initialValue);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.remove('dark-mode');
    }, [darkMode])

    return [darkMode, setDarkMode]



}

export default useDarkMode;