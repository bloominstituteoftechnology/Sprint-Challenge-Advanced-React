import React from 'react';
import axios from 'axios';
import './App.css';
import EmailInput from './components/EmailInput';

class App extends React.Component {
  state = {
    me: null,
  };

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/googletrends/data/master/20190815_WomensWorldCup.csv`)
    .then(res => {
      console.log(res)
      this.setState({
        me : res.data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h3>Below is Data recieved from googletrends</h3>
        <EmailInput />
        {this.state.me ? <p>{this.state.me}</p> : <p>loading...</p>}
      </div>
    
    )}
}
export default App;
