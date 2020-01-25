import {useState} from "react"

export const UseInput = initialValue => {
const [value, setValue]=useState(initialValue);

const handleChanges = e =>{
    setValue(e.target.value)
};

const clearField = ()=>{
    setValue(initialValue);
}
return [value, handleChanges, clearField];

}