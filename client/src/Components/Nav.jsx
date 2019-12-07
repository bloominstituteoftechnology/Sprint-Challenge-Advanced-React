import React from 'react';
import useDarkMode from '../Hook/useDarkMode';
import styled from 'styled-components';

const Button = styled.button`
    background-color: hotpink;
    font-size: 2rem;
    border-radius: 12px;

`;

const Nav = () =>{
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault ();
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <Button onClick={toggleMode} 
            className={darkMode ? 'toggle toggled' : 'toggle'}>Get Colored</Button>
        </div>
    )

}

export default Nav;