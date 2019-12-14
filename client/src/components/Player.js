import React, { Component } from 'react';

class Player extends Component {
    render(props) {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.country}</h3>
            </div>
        );
    }
}

export default Player;