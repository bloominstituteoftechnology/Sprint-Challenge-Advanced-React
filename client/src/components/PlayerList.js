import React, { Component } from 'react';
import Player from './Player';

class PlayerList extends Component {
    render(props) {
        return (
            <div>
                {this.props.data.map(player => {
                    return (
                        <Player 
                        key={player.name}
                        name={player.name}
                        country={player.country}
                        />
                    );
                })}
            </div>
        );
    }
}

export default PlayerList;