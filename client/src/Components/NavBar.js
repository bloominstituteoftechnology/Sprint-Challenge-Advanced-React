import React from 'react';
import useNameInStorage from '../Hooks/useNameInStorage';

const Navbar = () => {

  return (
    <nav>
      <h2>Hook is here!</h2>

      <useNameInStorage />
    </nav>
  );
};

export default Navbar;