import React from 'react';


class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    };
    render() {
        return (
            <div>
                <h1>{this.props.state.name}</h1>
                <h2> {this.props.state.country}</h2>
                <h3> {this.props.state.searches}</h3>
            </div>
        )
    }
}
export default Display;