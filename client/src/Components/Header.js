import React from "react";

import { useDarkMode } from "../Hooks/darkMode";

const Header = () => {
  const [dark, setDark] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDark(!dark);
  };
  return (
    <nav className="navbar">
      <h1 data-testid="header">Women's World Cup Player List</h1>
      <div className="dark-mode__toggle">

      <button onClick={toggleMode}>Dark Mode</button>
      </div>
    </nav>
  );
};

export default Header;
