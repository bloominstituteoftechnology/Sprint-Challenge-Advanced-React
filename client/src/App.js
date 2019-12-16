import React from 'react'
import { Player } from './components/Players'
import Navbar from './components/NavBar'

function App () {
  return (
    <div>
      <Navbar/>
      <h2 data-testid="title">The Champions</h2>
      <Player data-testid='player'/>
    </div>
  )
}

export default App;