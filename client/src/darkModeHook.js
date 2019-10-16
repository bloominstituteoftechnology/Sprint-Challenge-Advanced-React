import { useEffect } from 'react';

export const DarkMode = (initalValue) => {
    const [value, setValue] = DarkMode('DarkMode', initalValue);
    useEffect(() => {
        value ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    }, [value])
    return [value,setValue]
}