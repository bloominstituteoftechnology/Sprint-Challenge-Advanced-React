import React from 'react'
import styled from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode'


const Toggle = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
        <Button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
     
  );
};

export default Toggle;

const Button = styled.button`
    width: 100%;
    margin: 0 auto;
    background-color:red;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    padding: 5px;
    }
`