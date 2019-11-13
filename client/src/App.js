import React from 'react';
import PlayerCard from './components/PlayerCard.js';
import NavBar from './components/NavBar'

import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <PlayerCard />
    </div>
  )
}

// const App = () => {
//   const [darkMode, setDarkMode] = useDarkMode(false);
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };

//   return (
//     <nav className="navbar">
//       <h1>Dark Mode Toggle</h1>
//       <div className="dark-mode__toggle">
//         <button
//           onClick={toggleMode}
//           className={darkMode ? 'toggle toggled' : 'toggle'}>Toggle Here
//         </button>
//       </div>
//     </nav>

//     <section>
//       <div className="PlayerCard">
//         <PlayerData />
//       </div>
//     </section>


//   )
// };

export default App;
