import React, { useState } from 'react';
import { useSignUp } from './useSignUp';

export default function Form() {
    const submitCb = () => {

    }
    const [values, handleChanges, handleSubmit, clear] = useSignUp(
        {
            username: '',
            password: ''
        },
        submitCb
    );

    return (
        <div className='form'>
            <form data-testid='form' onSubmit={handleSubmit}>
                <input type='text' label='Username' value={values.username} onChange={handleChanges} name='username'/>
                <input type='text' label='Password' value={values.password} onChange={handleChanges} name='password'/>
                <button type='submit'>Form</button>
                <button onClick={clear}>Clear</button>
            </form>
        </div>
    );
}