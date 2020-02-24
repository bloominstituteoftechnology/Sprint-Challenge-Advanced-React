<<<<<<< HEAD
import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState (() =>{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue;
    })
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
=======
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
>>>>>>> 0c5cbbd7c134c64ba074c7ca833b658cf31b2cc6
    };
    return [storedValue, setValue];
}

<<<<<<< HEAD
export default useLocalStorage
=======
export default useLocalStorage;
>>>>>>> 0c5cbbd7c134c64ba074c7ca833b658cf31b2cc6
