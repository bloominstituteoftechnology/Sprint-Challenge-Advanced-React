import { useEffect } from 'react';
import { useLocalStorage } from '../Hooks/LocalStorage';

//custom hook DarkMode
export const DarkMode = (storedKey, initialValue) => {
   //useLocalStorage utilizes a key : value pair where initialValue 
   //will be boolean in this case 
    const[darkValue, setDarkValue] = useLocalStorage(storedKey, initialValue);

    //querySelector for the body of the document 
    const body = document.querySelector('body');

    //useEffect applied for the ternary operator to determine 
    //to add or remove 'dark-mode' key from the body 
    useEffect(() => {
        darkValue ?
            body.classList.add("dark-mode") :
            body.classList.remove("dark-mode")
    }, [darkValue, body.classList])
    
    //returns an array 
    return [darkValue, setDarkValue]
}


