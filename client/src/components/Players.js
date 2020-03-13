import React from 'react';
import axios from 'axios';

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
            </div>
        )
    }
}

export default Players;
