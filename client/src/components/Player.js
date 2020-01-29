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
        axios.get("https://api.github.com/users/AesonJohnson/followers")
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
                // name={player.name}
                // country={player.country}
                // searches={player.searches}
                html_url={player.html_url}
                login={player.login}
              />
            )}
          </div>
        )
    }
}