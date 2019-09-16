/* Build a function called `useLocalStorage`. Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add `key` and `initialValue` as parameters to the hook.
*
*
- We're going to set up some state here. Set up a state property called storedValue.
  - This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.
  - In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
  - Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript*/

import React, {useState} from 'react';


export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setStoredValue];
}


