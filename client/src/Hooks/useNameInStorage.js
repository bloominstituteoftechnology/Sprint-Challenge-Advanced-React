import React from 'react';

import useLocalStorage from './Hooks/useLocalStorage';
import e from 'express';

const useNameInStorage = () => {
  const [userName, setUserName] = useLocalStorage('userName', '');

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter name here!'
        value='name'
        onChange={e => setUserName(e.target.value)}
      />
    </div>
  )
}

export default useNameInStorage;