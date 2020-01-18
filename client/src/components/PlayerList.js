import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
    state = {
        players: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log('API results', response.data);
                this.setState({players:response.data})
            })
            .catch(error => {
                console.log('Error', error);
            });
    };
    render() {
        return (
            this.state.players.map(each => (
                <PlayerCard 
                    name={each.name}
                    country={each.country}
                    searches={each.searches}
                />
            ))
            
        )
    }
};

export default PlayerList;