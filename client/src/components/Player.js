import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
export default class Player extends React.Component{
    constructor() {
        super();
        this.state = {
          players: []
        }
      }
    
    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(response => {
          this.setState({
            players: response.data
          })
        })
        .catch(error => {
          console.log(error);
        })
    }

    render() {
        return (
          <div>
            {this.state.players.map(player => 
              <PlayerCard
                name={player.name}
                country={player.country}
                searches={player.searches}
              />
            )}
          </div>
        )
    }
}