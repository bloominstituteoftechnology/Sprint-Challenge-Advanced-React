import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false)


    useEffect(() => {
        const bodyClass = document.querySelector('body')

        if(darkMode === true) {
            bodyClass.classList.add('dark-mode')
        }else{
            bodyClass.classList.remove('dark-mode')
        }
    
    }, [darkMode, useLocalStorage])
        return [darkMode, setDarkMode]
}

export default useDarkMode
