import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    // define some state --> will receive an initial value to set up our localStorage property
    const item = JSON.parse(localStorage.getItem(key));
  
    const [storedValue, setStoredValue] = useState(item || initialValue); // or  uses THIS SIDE if true || only goes to THIS SIDE if first condition is false
  
    // define a setter function that set's a value to localStorage when called, also set our state property to the new value
    const setValue = value => {
        console.log('from setValue', value)
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    };

    return [storedValue, setValue];
  };

  export default useLocalStorage;