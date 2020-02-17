import React, { useState, useEffect } from "react";

const Navbar = props => {
  // useEffect(() => {

  //   if (props.darkMode == true) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }

  // }, []);

  return (
    <nav className='navbar'>
      <h1>World Women</h1>
      <div>hello</div>
      <div className='dark-mode__toggle'>
        <div
          onClick={props.toggleMode}
          className={props.darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
