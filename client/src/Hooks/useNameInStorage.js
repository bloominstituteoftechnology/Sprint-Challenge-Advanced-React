import React from 'react';

import useLocalStorage from './Hooks/useLocalStorage';

const useNameInStorage = () => {
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
}

export default useNameInStorage;