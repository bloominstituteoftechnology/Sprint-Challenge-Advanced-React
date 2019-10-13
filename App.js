import React from 'react';
import Navigation from './Navigation.js';
import PlayerList from './PlayerList.js';
import './App.css';
import uuid from 'react-uuid';
import FixedMenuLayout from './FixedMenuLayout.js';
import Block from './Block.js';
import BarChart from './BarChart.js';
//added uuid id generator, semantic-ui, react jest testing, and react-vis chart dependencies

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
    data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(result => result.json())
    .then(players => this.setState({ data: players}))
    .catch(Error => console.log(Error))
  }

  render() {
    return (
      <div className="App">
        <FixedMenuLayout />

        <Navigation />
        <BarChart />

        <div className="players">
        {this.state.data.map(players => <PlayerList key={uuid()} players={players}/>)}
        </div>
        <Block />
      </div>
      
    )
  }
}




export default App;
