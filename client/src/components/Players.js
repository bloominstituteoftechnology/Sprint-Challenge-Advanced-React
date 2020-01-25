import React, {Component} from 'react'; 
import axios from 'axios';

export default class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerInfo: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log('API Data: ', res.data)
                this.setState({
                    playerInfo: res.data
                })
            })
    }

    render() { 
        return (
        <div className="CardBox">
            <div className="PlayerCard">
            {this.state.playerInfo.map(player => (
                <div className="PlayerFill" key={player.id}>
                <h2>Name: {player.name}</h2>
                <h2>Country: {player.country}</h2>
                <h2>Searches: {player.searches}</h2>
                </div>))}            
        </div>
    </div>
        );
    }
}