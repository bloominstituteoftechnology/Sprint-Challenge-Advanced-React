import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useRainbowMode = (initialValue) => {
  const [value, setValue] = useLocalStorage('rainbowMode', initialValue);

  useEffect(() => {
    console.log(value);

    value === true ? document.body.classList.add('_rainbow-mode') : document.body.classList.remove('_rainbow-mode');
  }, [value]);

  return [value, setValue];
};

export default useRainbowMode;
