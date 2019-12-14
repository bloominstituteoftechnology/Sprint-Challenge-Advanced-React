import React from "react";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "lightMode" : "darkMode"}>
      <h1>Women's Soccer Google Searches</h1>
      <button onClick={toggleMode}>Dark Mode</button>
    </div>
  );
};

export default Nav;
