import React, { useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage"

const useColor = (key, initialValues) => {
    const [color, setColor] = useLocalStorage(key, initialValues)

    useEffect(() => {

        const buttonToggle = (x) => {
           
           if (color === true){
            document.querySelector("h2").classList.add('h1white');  
           } else if (color === false){
            document.querySelector("h2").classList.add('h1red');  
           }
        }

        return buttonToggle

    }, [])



    
    return[color, setColor]
}
export default useColor


