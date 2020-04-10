import { useEffect } from 'react';
import  useLocalStorage  from './useLocalStorage';

const useDarkMode = () =>{
    const [mode, setMode] = useLocalStorage('string', 'initialValue');

        useEffect( () =>{
           mode === true ? 
           document.body.classList.add('dark-mode') : 
           document.body.classList.remove('dark-mode');
    }, [mode]);
        
    return[mode, setMode];
}   
export default useDarkMode;