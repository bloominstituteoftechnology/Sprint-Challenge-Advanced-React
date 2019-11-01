import React, { useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage"

const useColor = (key, initialValues) => {
    const [color, setColor] = useLocalStorage(key, initialValues)

    useEffect(() => {

        const buttonToggle = (x) => {
           setColor(!color)
           if (color === true){
            document.querySelector("h1").classList.add('h1red'); document.querySelector("body").classList.remove('bodyRed') ;  
           } else if (color === false){
            document.querySelector("h1").classList.add('h1white');  document.querySelector("body").classList.add('bodyRed') ;  
           }
        }

        return buttonToggle

    }, [color])


    
    return[color, setColor]
}
export default useColor