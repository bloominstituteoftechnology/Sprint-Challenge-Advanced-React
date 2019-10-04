import {useState} from 'react'

// parameters key, initialValue
export const useRank = () =>{
    const[value, setValue] = useState(0)
    //setValue based upon input
    const handleChanges = value => {
        return value + 1
    }
    return [value, setValue, handleChanges,];
 }