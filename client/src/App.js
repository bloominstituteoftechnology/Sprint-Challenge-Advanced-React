import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import PlayerCard from "./PlayerCard"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            players: [],
        }
    }
    componentDidMount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    players: res.data,
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <div className='App'>
                    <h1>All the Players</h1>
                </div>
                <div className='players'>
                    {players.map(player => {
                        return (
                            <PlayerCard
                                key={this.player.id}
                                name={this.player.name}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default App
