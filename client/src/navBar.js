import React from 'react';
import useDarkMode from './useDarkMode';

const Nav = () => {
    const [dark, setDark] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDark(!dark);
    }
    return (
        <nav>
            <h1>Womens Soccer Team</h1>
            <button onClick={toggleMode}>Dark</button>
        </nav>
    )
}

export default Nav;