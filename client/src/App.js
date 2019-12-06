import React from 'react'
import { Player } from './Components/Players'
import Navbar from './Components/NavBar'
import "./styles/styles.scss"


function App () {
  return (
    <div>
      <Navbar/>
      <h2 data-testid="title">The Champions</h2>
      <Player data-testid='player'/>
    </div>
  )
}

export default App
