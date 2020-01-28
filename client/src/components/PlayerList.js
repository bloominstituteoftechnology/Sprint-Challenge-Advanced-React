import React from 'react';

class PlayerList extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(result => { console.log(result); this.setState({ players: result }) })
            .catch(err => console.log('Error fetching players.', err));
    }

    render() {
        return (
            <div className="playerList">
                    <h2>Players:</h2>
                    <hr></hr>
                    {this.state.players.map((item) => <p>{item.name}</p>)}
            </div>
        );
    }
}

export default PlayerList;