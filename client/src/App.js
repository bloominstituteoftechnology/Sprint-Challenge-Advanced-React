import React from "react";
import Header from "./components/Header";
import PlayerList from "./components/playerList";
import SearchForm from "./components/SearchForm";
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
    console.log("Component did mount!");

    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          name: response.data.name,
          country: response.data.country
        });
      })
      .catch(error => console.log("No soccer players for you"));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
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