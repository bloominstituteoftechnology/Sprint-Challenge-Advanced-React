import React, { Component } from 'react';
import Display from './components/Display';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then((res) => {
        this.setState({
          users: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    return (
      <Display userData={this.state.users}/>
    )
  }
}

export default App;