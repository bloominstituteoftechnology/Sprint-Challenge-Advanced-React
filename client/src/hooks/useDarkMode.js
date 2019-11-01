import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [inputValue, setInputValue] = useLocalStorage (initialValue);
    useEffect( ()=>{
        const body=document.body;
        return inputValue ? body.classList.add('dark') :
        body.classList.remove('dark')
    }, [inputValue]);
    return [inputValue, setInputValue];
}