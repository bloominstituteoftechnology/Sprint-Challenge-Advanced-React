import React from 'react';
import axios from 'axios';

import PlayerData from './Components/PlayerData';
import PlayerCard from './Components/PlayerCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

    componentDidMount() {
      axios
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
        <section className='app'>
          <h1>Women's World Cup Players</h1>
          <PlayerCard players={this.state.data} />
        </section>
      );
    }
  }

  
export default App;
