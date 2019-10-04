import React, { Component } from 'react';
import Card from './Card'

class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props.data)
        return (    
            this.props.data.map((player, index) => (
                <Card player={player} id={index}/>
             ))
        );
    }
}
 
export default Cards;