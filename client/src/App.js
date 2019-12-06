import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DataDisplayer from './DateDisplayer';
import localStorage from './localStorage';
import Navbar from './Navbar';
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

    if (Object.keys(this.state.playerData).length !== 0) {

      return (
        <div className='App'>
          <Navbar />
          <DataDisplayer playerData={this.state.playerData} />;
        </div>
      )
    } else {
      return <div className='App'>
        <Navbar />

      </div>
    }
  }
}
export default App;
