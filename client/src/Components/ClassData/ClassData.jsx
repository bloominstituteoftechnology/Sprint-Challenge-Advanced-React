import React, { Component } from 'react';
import PlayerData from '../PlayerData/PlayerData';
import axios from 'axios';

class ClassData extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          player: res.data
        })
      })
      .catch(err => {
        alert('An error with API has occurred: ', err)
      })
  }
  render() {
    return (
      <div>
        {this.state.player.map((item, index) => (
          <PlayerData item={item} key={index} />
      ))}
      </div>
    )
  }

}

export default ClassData;