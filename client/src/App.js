import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.scss';

import PlayerList from './components/playerList.js';
import Titlebar from './components/titlebar.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players:[]

    };

  }

  componentDidMount(){
    // console.log("something")
    axios
    .get('http://localhost:5000/api/players')
      .then((res) => {

          console.log('response: ', res);
          this.setState({players:res.data})
          console.log(this.state.players[1])

      })
      .catch(err => console.log(err,': Error with players'));


  }


  render (){
    return(
      <div className="App">
        <Titlebar />
        <br />
        <br />
        <PlayerList
          players = {this.state.players}

        />
      </div>
    );
  };

}

export default App;
