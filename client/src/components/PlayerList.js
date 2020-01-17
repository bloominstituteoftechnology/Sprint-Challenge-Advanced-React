import React from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'

class PlayerList extends React.Component {
state = {
    players:[],
}

componentDidMount(){
        axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
            this.setState({
                players: response.data
            })
            console.log('this is players',this.state.players)
        })
        .catch(error=> {
            console.log('Error', error)})
        };

render(){
    return (
        <section className="Player-List">
            {this.state.players.map(player =>(
                // console.log('this is player',player)
                <PlayerCard 
                key={player.id}
                name={player.name}
                country={player.country}
                />
            ))}
        </section>
    )
 }
}

export default PlayerList