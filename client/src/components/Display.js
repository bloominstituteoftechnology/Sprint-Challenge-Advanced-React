import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
    };

    render () {
        console.log(this.state)
        return (
            <div className='players'>
                {this.props.res.map(item => 
                <div key={item.id}>
                    <h2>Player: {item.name}</h2>
                    <p>From: {item.country}</p>
                </div>
                )}
            </div>
        )
    }

}

export default Display;