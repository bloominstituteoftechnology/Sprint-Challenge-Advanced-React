//import {useState} from 'react'
import { useLocalStorage } from './useLocalStorage';

//used for Brazil and Germany
// parameters key, initialValue
export const useRank = (key, initialValue) =>{
    const[value, setValue] = useLocalStorage(key, initialValue)
    //setValue based upon input
    const handleChanges = value => {
        return value + 1
    }
    return [value, setValue, handleChanges,];
 }