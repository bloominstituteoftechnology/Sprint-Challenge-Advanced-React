import { useState } from 'react';

//custom hook useLocalStorage 
export const useLocalStorage = (key, initialValue) => {
   //recall that storedValue in this case is darkMode 
   //and setStoredValue will be the boolean of true or false 
    const [storedValue, setStoredValue] = useState (() => {
        
      //retrieves the key (dark-mode')
        const item = window.localStorage.getItem(key);
        //returns the item if dark-mode is in the key
        return item ? JSON.parse(item) : initialValue;
    });

    //changes the value of the custom hook 
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    //passes the changed value after setValue changes initialValue 
    return [storedValue, setValue];
}