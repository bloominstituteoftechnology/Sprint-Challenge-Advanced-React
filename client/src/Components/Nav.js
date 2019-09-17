import React from 'react';
import useDarkMode from '../Hook/useDarkMode';



const Nav = () => {
 const [darkMode, setDarkMode] = useDarkMode(false);
 const toggleMode = e => {
   e.preventDefault();
   setDarkMode(!darkMode);
 };
 return (
   <>
   <nav className='navbar'>
     <div className='dark-mode__toggle'>
         <h1>Women's World Cup!</h1>
<h3> Dark Mode: </h3>
       <button className= 'btn'>
       <div
         onClick={toggleMode}
         className={darkMode ? 'toggle toggled' : 'toggle'}
       />
       </button>
     </div>
   </nav>
   </>
 );
};
export default Nav;