import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);
        // [variable, callBack()]
    useEffect( () => {
        if (darkMode === true){
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        };

    }, [darkMode]); //dependency array, this is the trigger

    return [darkMode, setDarkMode]
}
 
export default useDarkMode;