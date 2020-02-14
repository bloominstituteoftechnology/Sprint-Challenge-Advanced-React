import React from 'react';

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            team: []
        };
    }

    render() {
        return (
            <div>
                {console.log('test', this.state)}
                <h2>{this.props.playersData.name}</h2>
            </div>
        )
    }
}

export default Players;