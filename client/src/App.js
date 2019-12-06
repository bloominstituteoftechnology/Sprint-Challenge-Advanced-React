import React from "react";
import PlayerList from "./components/PlayerList";
import Header from "./components/Header";

import "./App.css";

class App extends React.Component {
  state = {
    myData: []
  };

  componentDidMount() {
    if (!localStorage.getItem("players")) {
      fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(data => {
          this.setState({ myData: data });
        });
    }
  }

  putLocalStorageInState = playerData => {
    this.setState({ myData: playerData });
  };

  render() {
    return (
      <>
        <Header />
        <PlayerList
          players={this.state.myData}
          putLocalStorageInState={this.putLocalStorageInState}
        />
      </>
    );
  }
}

export default App;
