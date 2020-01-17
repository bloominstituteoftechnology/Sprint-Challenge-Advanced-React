import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const DarkMode = (something) => {
    const [DarkMode, setDarkMode] = useLocalStorage('dark-mode', something);
    useEffect(() => {
        if(DarkMode) {
            document.querySelector('body').classList.add('dark-mode')  
        }else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [DarkMode])
    return [DarkMode, setDarkMode];
}
export default DarkMode;