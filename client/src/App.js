import React from 'react'
import { Player } from './Components/Players'
import Navbar from './Components/NavBar'
import "./styles.scss";
import { useDarkMode } from './Components/useDarkMode'

function App () {
  return (
    <div>
      <Navbar/>
      <Player/>
    </div>
  )
}
export default App