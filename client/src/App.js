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

  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;
