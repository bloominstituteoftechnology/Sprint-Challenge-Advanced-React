import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";

class App extends React.Component{
  constructor() {
    super()
      this.state = {
        data: []
      }
    
  }


  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  render() {
    return (
      <div>
        <PlayerCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
