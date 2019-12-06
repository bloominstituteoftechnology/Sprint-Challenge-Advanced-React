import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DataDisplayer from './DateDisplayer';
import localStorage from './localStorage';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log('res.data', res.data);
        this.setState({ playerData: res.data });
      })

  }



  render() {
    console.log('this.state.playerData', this.state.playerData);
    console.log('Object.keys(this.state.playerData).length', Object.keys(this.state.playerData).length);
    if (Object.keys(this.state.playerData).length !== 0) {
      return <DataDisplayer playerData={this.state.playerData} />;
    } else {
      return <div>loading...</div>
    }
  }
}
export default App;
