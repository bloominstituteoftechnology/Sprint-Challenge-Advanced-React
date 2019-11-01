import React from "react";
import "./App.css";
import axios from "axios";
import DisplayData from "./Components/DisplayData";
import NavBar from "./Components/NavBar";

// export const sum = (a, b) => a + b;

class App extends React.Component {
  state = {
    APICall: []
  };
  
  componentDidMount() {

    axios 
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        APICall: res.data
      });
      console.log("API data", this.state.APICall)
    })
    .catch(err => console.log(err));
  }
  
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Welcome to my Sprint Challenge App!</h1>
        <DisplayData data={this.state.APICall}/>
      </div>
    );
  }
}
export default App;
