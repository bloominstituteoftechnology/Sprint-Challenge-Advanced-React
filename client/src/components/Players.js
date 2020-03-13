import React from 'react';
import axios from 'axios';
import Player from './Player';

class Players extends React.Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios
        .get('https://googletrends.github.io/data/')
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
                hello
                <Player></Player>
            </div>
        )
    }
}

export default Players;
