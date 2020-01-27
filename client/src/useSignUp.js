import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useSignUp = (initialValues = {}, submitCb) => {
    const [values, setValues] = useLocalStorage(initialValues);

    const handleChanges = event => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        submitCb();
    };

    const clear = event => {
        event.preventDefault();
        setValues(initialValues);
    };

    return [values, handleChanges, handleSubmit, clear];
};