import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <>
      <h1 data-testid="header">Women's World Cup Info</h1>
      <div className="dark-mode__toggle" data-testid="toggle-theme-btn">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          Toggle me
        </button>
      </div>
    </>
  );
};

export default Header;
