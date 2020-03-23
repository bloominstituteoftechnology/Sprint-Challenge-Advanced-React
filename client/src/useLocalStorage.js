import React, { useState } from 'react';


export const useLocalStorage = (key,initalValue) => {
    const [storedData,setStoredData] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initalValue;
    })

    const changeValue = updatedValue => {
        setStoredData(updatedValue)
        window.localStorage.setItem(key,JSON.stringify(updatedValue))



}
return [storedData,changeValue];


}