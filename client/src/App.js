import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tennisData: []
    }
  }

  componentDidMount() {
    // console.log('CJR, CDM working')
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          tennisData: res.data
        })
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="tennis-players">
        <Navbar />
        {this.state.tennisData.map(players => (
          <div className='cards' key={players.id}>
            <h1>{players.name}</h1>
            <h2>{players.country}</h2>
            <h2>{players.searches}</h2>

          </div>
        ))}

      </div>
    )
  }
}

export default App;
