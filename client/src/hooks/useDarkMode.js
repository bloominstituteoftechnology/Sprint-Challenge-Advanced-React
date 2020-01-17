import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

 export const useDarkMode = (key, initialValue) =>{

    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(()=>{
        console.log(value)
        let body = document.getElementsByTagName('body')[0];
        let navbar = document.getElementsByClassName('navbar')[0];
        if(value){
            body.classList.add('dark-mode')
            navbar.classList.add('nav-dark-mode')
        } else{
            body.classList.remove('dark-mode')
            navbar.classList.remove('nav-dark-mode')
        }
    },[value])

    return [value, setValue]
}

