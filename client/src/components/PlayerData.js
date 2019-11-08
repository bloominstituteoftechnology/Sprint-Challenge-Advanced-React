import React from 'react';
import axios from 'axios';

class PlayerData extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return <div>working</div>
  }

}

export default PlayerData;