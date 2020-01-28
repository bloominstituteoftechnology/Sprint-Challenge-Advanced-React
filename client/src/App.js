import React from "react"
import Header from "./Components/Header";
import PlayerList from "./Components/PlayerList";
import SearchForm from "./Components/SearchForm";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      country: ""
    };
  }

  componentDidMount() {
    console.log("Component has Mounted.");

    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          data: response.data,
          name: response.data.name,
          country: response.data.country
        });
      })
      .catch(error => console.log("Missing the players", error));
  }
  render() {
    
    return (
      <div className="App">
        <Header />
        <SearchForm
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
          name={this.players}
          search={this.search}
        />
        <PlayerList
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
      </div>
    );
  }
}



export default App;
