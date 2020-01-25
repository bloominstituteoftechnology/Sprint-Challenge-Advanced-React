import {useEffect} from 'react';
import {useLStore} from './useLStore';

const useDarkMode = (key, intVal) => {
    const [dValue, setDValue] = useLStore(key, intVal);
    useEffect(() => {
        if (dValue === true) {
            (document.querySelector('body')
            .classList.add('dark-mode'))
        } else {
            (document.querySelector('body')
            .classList.remove('dark-mode'))
        }
    }, [setDValue, dValue])
    return [dValue, setDValue];
}; 

export default useDarkMode;