import React from 'react'
import axios from 'axios'

import NavBar from './components/Navbar'
import CardMaker from './components/CardMaker'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { soccerPlayers: [] }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then( (res) => {
        console.log(res)
        this.setState( {soccerPlayers: res.data})
        console.log(this.state)
      })
  }

  render() {
    return (
      <>
      <NavBar />
      {this.state.soccerPlayers.map( (player) => {
        return <CardMaker key={player.id} player={player} />
      })}
      </>
    )
  }
}