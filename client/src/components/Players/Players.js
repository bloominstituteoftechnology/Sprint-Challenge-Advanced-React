import React from 'react';
import Axios from 'axios';

export default class Players extends React.Component {
  // create state to hold playerData
  state = {
    playerData: []
  };
  // get player data from server
  componentDidMount() {
    Axios.get('http://localhost:5000/api/players')
      .then(res => {
        // set player data to state
        this.setState({ playerData: res.data });
        console.log(`playerData, ${this.state.playerData}`);
      })
      .catch(err => console.log(`${err}`));
  }

  //pass down player data to Player component and Render Player component
  render() {
    return <div></div>;
  }
}
