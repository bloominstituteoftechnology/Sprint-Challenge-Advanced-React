import {useState} from 'react';

export const useLStore = (key, intVal) => {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : intVal;
    });

    const setVal = val => {
        setValue(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    };
    return [value, setValue, setVal];
}; 