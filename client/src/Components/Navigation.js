import React, { useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import ToggleSwitch from "./Toggle";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <p>Dark Mode </p>
      
      <button onClick={toggle}>Dark Mode {darkMode ? "dark" : "light"}</button>
    </div>
  );
};


export default Navigation;