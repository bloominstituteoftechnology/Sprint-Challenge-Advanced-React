import { useState } from "react";

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const customSetter = newValue => {
        console.log("New value:", newValue);
        setValue(newValue);
    };

    return [value, customSetter];
}

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useInput(() => {
        return window.localStorage.getItem(key) || initialValue;
    });

    const customSetter = newValue => {
        setValue(newValue);
        window.localStorage.setItem(key, newValue);
    };

    return [value, customSetter];
}


