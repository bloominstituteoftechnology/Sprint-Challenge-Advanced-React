import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export function useDarkMode() {
    const [value, setValue] = useLocalStorage("key", false)

    useEffect(() => {
        const mode = document.querySelector('body')
        if (value) {

            mode.classList.add('dark-mode')
        } else {
            mode.classList.remove('dark-mode')
        }


    }, [value])

    return [value, setValue]
}