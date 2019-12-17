import React from 'react';
import Axios from 'axios';

import PlayerList from './Components/PlayerList';
import Nav from './Components/Nav';

import './App.css';

class App extends React.Component {
  state= {
    data: []
  };

  componentDidMount() {
    Axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({ data: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log('Uhoh! There was an error while mounting.', error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>2019 Women's World Cup Players</h1>
          <h4>*Based on total Google searches</h4>
          <Nav />
        </header>

        <div className='players'>
          <PlayerList players={this.state.data} />
        </div>
      </div>
    );
    }
  }
  
export default App;
