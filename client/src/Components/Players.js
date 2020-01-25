import React from 'react';
import '../../src/App.css';

class Players extends React.Component { 
        state = {
            playerData: []       
        }
    
        componentDidMount() {
            fetch('http://localhost:5000/api/players')
            .then(resp => resp.json())
            .then(data => {
                console.log('fetch: data:, data');
                this.setState({...this.state, playerData: data})
            })
            .catch(err => console.log('error on fetch: ', err));
        }
        render() {
            return (
                <div className= 'Players'>
                    <div className= 'players-info'>
                      {this.state.playerData.map(info => {
                          return <div className= 'playercards'>
                            <h3>Country: {info.country}</h3>
                            <p>Name: {info.name}</p>
                            <p>ID: {info.id}</p>                            
                            <p>Searches: {info.searches}</p>
                          </div>
                      })}
                    </div>

                </div>
            )
        }
    
}

export default Players;