import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        player: "",
        country: "",
        searches: ""
      };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      this.setState({player: response.data})
    })
  }

render() {
  console.log('render is working')
  return (
    <div className="App">
      <h1>Women's World Cup Trends</h1>
      <div className="name">
        {this.state.player.name}
      </div>
    </div>
  );
}

}

export default App;
