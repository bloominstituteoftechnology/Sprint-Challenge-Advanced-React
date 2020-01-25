import React from "react"
import PlayersForm from "./PlayersForm";
import Players1 from "./Players1"
class FetchData extends React.Component {
    constructor(){
    super();
    this.state= {
        data: []
    }
};

    addNewPlayer= (player, country) =>{
    const newPlayer = {
    name: player,
    country: country,
    id: Date.now()
    };
    this.setState(
    {data: [newPlayer, ...this.state.data]}
    );
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/players')
        .then (res => res.json())
        .then(player => {this.setState({ data: player})}
        )
        .catch (err => console.log(err));
    }

    render()
    {
    return(
        <div className = "player-card">
            <PlayersForm addNewPlayer={this.addNewPlayer}/>
            {this.state.data.map(player =>
               { return <Players1 key = {player.id} country = {player.country}/>}
            )}
        </div>
    )
    }



}
export default FetchData