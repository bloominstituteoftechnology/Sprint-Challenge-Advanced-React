import React from 'react';
import Header from "./components/Navbar";
import './App.css';
import PlayerList from "./components/playerList";

import Axios from "axios";
import Navbar from "./components/Navbar";

class App extends React.Component {
  
      state = {
      name:"",
      id:'',
      country:"",
      list:[]
    };
  

  componentDidMount() {
  
Axios
.get("https://localhost:5000/api/players")
    .then(response => {
      console.log(response);
    this.setState({
     list: response.data,
      name: response.data.name,
      id:response.data.id,
      country: response.data.country
     
    });
})

.catch(error => console.log("No players for you"));
}
handleChanges = e =>{
  this.setState({
    name: e.target.value
  });
};


render(){
  return(
    <div>
      <Navbar />

      <PlayerList
      data-testid="playerList"
      name={this.state.name}
      id={this.state.id}
      country={this.state.country}
      list={this.state.list}
      />
    </div>
  );
}
}
export default App; 