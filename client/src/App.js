import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Players from './components/Players';

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;