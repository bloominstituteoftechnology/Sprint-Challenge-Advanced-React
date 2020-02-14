import { useState } from 'react';

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const customSetter = (newValue) => {
        console.log("New Value:", newValue)
        setValue(newValue)
    }

    return [value, customSetter]

}

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;

    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}