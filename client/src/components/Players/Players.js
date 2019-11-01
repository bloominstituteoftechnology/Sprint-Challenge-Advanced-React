import React from 'react';
import Axios from 'axios';
import PlayerChart from './PlayerChart';

export default class Players extends React.Component {
  // create state to hold playerData
  state = {
    playerData: []
  };
  // get player data from server
  componentDidMount() {
    Axios.get('http://localhost:5000/api/players').then(res => {
      // set player data to state
      this.setState({ playerData: res.data });
    });
  }

  //pass down player data to Player component and Render Player component
  render() {
    return (
      <div>
        <div data-testid='players-chart'>
          <PlayerChart playerData={this.state.playerData} />
        </div>
      </div>
    );
  }
}
