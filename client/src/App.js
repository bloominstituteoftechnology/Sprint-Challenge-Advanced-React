import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    APICall: []
  };
  
  componentDidMount() {

    axios 
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        APICall: res
      });
      console.log("API data", this.state.APICall)
    })
    .catch(err => console.log(err));
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to my Sprint Challenge App!</h1>
      </div>
    );
  }
}
export default App;
