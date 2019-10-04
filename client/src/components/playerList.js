import React from "react"
import axios from "axios"
import PlayerCard from "./playerCard"

class PlayerList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            players:[]
        }
    }

    componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then (res => {
      console.log(res.data)
      var playersData = res.data
      this.setState({
        players:playersData
            })            
        })
    .catch(err => console.log('ERROR'));
    }

    

    render() {
        return (
                <div>
                   {this.state.players.map(player => (
                       <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches} />
                   ))} 
                </div>

        )

    }
        

};

export default PlayerList