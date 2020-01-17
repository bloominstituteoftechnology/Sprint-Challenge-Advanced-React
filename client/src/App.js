import React from "react";
import axios from "axios";
import "./App.css";
import Playercard from "./components/playerCard";
import DarkModeTog from "./components/darkmodeComp";

class App extends React.Component {
  state = {
    playerData: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ playerData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.playerData);
    return ( 
      <div className="App">
        <div>
         <DarkModeTog />
        </div>
        {this.state.playerData.map(item => (
          <div>
            <Playercard name={item.name} country={item.country} id={item.id} />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
