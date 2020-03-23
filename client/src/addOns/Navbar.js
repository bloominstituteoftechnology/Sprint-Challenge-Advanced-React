import React from "react";
import useDarkMode from "./Darkmode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
    <h1>World Cup Players</h1>
    <div className="dark-mode__toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  </nav>
  );
};

export default Navbar;