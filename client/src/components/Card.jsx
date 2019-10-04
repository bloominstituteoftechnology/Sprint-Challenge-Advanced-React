import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div data-testid={this.props.index} >
            <h3>{this.props.player.name}</h3>
            <h3>{this.props.player.searches}</h3>
          </div>
        );
    }
}
 
export default Card;