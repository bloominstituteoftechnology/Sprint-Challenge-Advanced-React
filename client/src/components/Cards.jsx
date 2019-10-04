import React, { Component } from 'react';
import Card from './Card'

class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props.data)
        return (    
            this.props.data.map(player => (
                <Card player={player} />
             ))
        );
    }
}
 
export default Cards;