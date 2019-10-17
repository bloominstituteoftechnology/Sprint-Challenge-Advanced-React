import { useState, useEffect } from 'react';

export const DarkMode = () => {
    const [value, setValue] = useState(false);
    useEffect(() => {
        value ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    }, [value])
    return [value,setValue]
}