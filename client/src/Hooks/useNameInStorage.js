import React from 'react';

import { useLocalStorage } from './useLocalStorage';

const UseNameInStorage = () => {
  const [userName, setUserName] = useLocalStorage('userName', '');

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter name here!'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
    </div>
  )

  return [userName, setUserName];
}

export default UseNameInStorage;