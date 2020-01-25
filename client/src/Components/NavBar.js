import React from 'react';
import useNameInStorage from '../Hooks/useNameInStorage';

const Navbar = () => {

  return (
    <div>
      <useNameInStorage />
    </div>
  )
}

export default Navbar;