import React from 'react';

class Display extends React.Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(response => this.setState({
            data: response
        }))
    }
    render () {
        return (
            <div>
                {this.state.data.map(item => 
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.country}</p>
                </div>
                )}
            </div>
        )
    }

}

export default Display;