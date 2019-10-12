import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class GetAPI extends React.Component{
    constructor(){
        super()
        this.state={
            players : [],
        }
      }

      componentDidMount(){
        axios.get(`http://localhost:5000/api/players`)
        .then(result => {
          console.log('result:', result.data);
          this.setState({ players: result.data});
        })
      }

      render(){
        return (
          <>
            <h2>Here is a list of female soccer players.</h2>
            <PlayerCard players={this.state.players}/>
          </>
        );
      }

}

export default GetAPI; 

