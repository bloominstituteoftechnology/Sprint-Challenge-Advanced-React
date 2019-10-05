import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/cardList';
// import Card from './components/card';
// import useDarkMode from './hooks/useDarkMode';

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
      <div className="App">


        <div data-testid="tennis-players" className="tennis-players">
          <Navbar />
          <CardList tennisData={this.state.tennisData} />
        </div>

      </div>
    )
  }
}

export default App;

