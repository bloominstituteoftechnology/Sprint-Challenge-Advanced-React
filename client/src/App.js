import React from 'react';
import Header from './components/Header';
import {Button, Divider, Input, Segment} from 'semantic-ui-react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;
