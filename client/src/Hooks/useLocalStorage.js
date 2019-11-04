import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue;
    })

    const setNewValue = (newValue) => {

        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
        console.log(key, newValue)
    };

    return [value, setNewValue];
}