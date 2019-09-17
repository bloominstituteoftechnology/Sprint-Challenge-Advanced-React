import React from 'react';
import '../App.css';


class Player extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(player => this.setState({ players: player }))
            .catch(err => console.log("Error:", err));
    }
    render() {
        return (
            <div>
                {this.state.players.map(player => (
                    <div className="card">
                    <h1 data-testid="player-name">{player.name}</h1>
                    <h2>{player.country}</h2>
                    <h2>{player.searches}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default Player;