import React from 'react';
import DisplayPlayers from './DisplayPlayers';

class GetPlayers extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(players => this.setState({players: players}))
            .catch(err => console.log('noooo'));

    }

    render() {
        return (
            <DisplayPlayers players={this.state.players}/>
        )
    }
};

export default GetPlayers;


