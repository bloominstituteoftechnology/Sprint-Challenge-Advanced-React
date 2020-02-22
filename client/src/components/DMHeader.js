import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode"


const Nav = () => {
    const [Dark, setDark] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDark(!Dark);
    };
    return (
        <nav>
            <h1>Women's World Cup Player List</h1>
            <div data-testid="toggle"
            onClick={toggleMode}
            className={Dark ? "toggle toggled" : "toggle"}
            />
        </nav>
    )
}
export default Nav