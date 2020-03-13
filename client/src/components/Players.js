import React from 'react';
import axios from 'axios';
import Player from './Player';

class Players extends React.Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({
                players: res.data
            });
        })
        .catch(err => console.log(err.message));
    }

    render() {
        return(
            <div>
                {this.state.players.map(p => 
                    <Player
                        key={p}
                        name={p.name}
                        country={p.country} />  
                )}
                
            </div>
        )
    }
}

export default Players;
