import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

// const useDarkModeToggle = (key, initialValue) => {
//   const [value, setValue] = useLocalStorage(key, initialValue);
//   const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   }

//   return [value, setValue, handelChanges]
// };

const useDarkMode = initialValue => {
  const [displayMode, setDisplayMode] = useLocalStorage('Dark Mode', initialValue)

  useEffect(() => {
      displayMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')        
  }, [displayMode])

  return [displayMode, setDisplayMode]
}


  // return(
  //   <div>
  //     <h3>Toggle to Dark Mode</h3>
  //     <button 
  //       onClick = {toggleMode}
  //       className = {darkMode ? 'toggle toggled' : 'toggle'}
  //     >Toggle Here!
  //     </button>
  //   </div>
  // )


export default useDarkMode;