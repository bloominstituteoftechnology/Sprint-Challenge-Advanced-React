import React from 'react';
import Axios from 'axios';

import PlayerData from './Components/PlayerData';
import Nav from './Components/Nav';

import '../src/App.css';

class App extends React.Component {
  state = {
    data: [],
    images: []
  };

    componentDidMount() {
      Axios
        .get('http://localhost:5000/api/players')
        .then(response => {
          this.setState({ data: response.data });
          console.log(response);
        })
        .catch(error => {
          console.log('Uhoh! There was an error.', error);
        })
    }

    render() {
      return (
        <section className='player-app'>
          <h1>Women's World Cup Players</h1>
          <Nav />
          <PlayerData players={this.state.data} images={this.state.images} />
        </section>
      );
    }
  }

  
export default App;
