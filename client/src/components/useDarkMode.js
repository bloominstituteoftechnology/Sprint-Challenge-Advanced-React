import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode() {
  
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  
    
    const enabled =
      typeof enabledState !== 'undefined' ? enabledState : false
    
    useEffect(
      () => {
        const className = 'dark-mode';
        const element = window.document.body;
        if (enabled) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      },
      [enabled]
    );
  
    
    return [enabled, setEnabledState];
  }