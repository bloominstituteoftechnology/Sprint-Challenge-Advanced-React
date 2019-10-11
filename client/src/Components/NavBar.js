import React from "react";
import { DarkMode } from "../Hooks/DarkMode";

const NavBar = () => {
    const [darkMode, setDarkMode] = DarkMode("darkvalue", false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Womens World Cup Players </h1>
            <div className="dark-mode_toggle">
                <div onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default NavBar; 