import React from "react"

class Players extends React.Component {
constructor(){
    super();
    this.state= {
        Players: []
    }

addNewPlayer= (player, country) =>{
const newPlayer = {
    name: player,
    country: country,
    id: Date.now()
};
this.setState(
    Players: [newPlayer, ...this.state.Players]
)
}
componentDidMount(){
    const getPlayers = () =>{
        fetch('http://localhost:5000/api/players')
        .then (res => res.data.json())
        .then(console.log (res.data))
        .catch (err => console.log(err));
    }

}




render(){
    return(
        <div></div>
    )
}



}