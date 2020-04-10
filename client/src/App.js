import React from 'react'
import { Player } from './components/Players'
import Navbar from './components/NavBar'
import "./styles.scss";

function App () {
  return (
    <div>
      <Navbar/>
      <Player/>
    </div>
  )
}
export default App